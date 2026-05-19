import React, { useState, useEffect } from 'react';
import { identities } from '../data/identities.js';
import { narratives } from '../data/narratives.js';
import ShareCard from './ShareCard.jsx';

function RadarChart({ scores }) {
  const dimensions = [
    { key: 'sacrifice', label: '牺牲' },
    { key: 'action', label: '行动' },
    { key: 'principle', label: '原则' },
    { key: 'emotion', label: '情感' }
  ];

  const size = 180;
  const center = size / 2;
  const radius = 72;
  const levels = 4;

  const angleStep = (Math.PI * 2) / dimensions.length;
  const startAngle = -Math.PI / 2;

  const clampScore = (val) => Math.max(-3, Math.min(3, val));
  const normalize = (val) => (clampScore(val) + 3) / 6;

  const getPoint = (index, value) => {
    const angle = startAngle + angleStep * index;
    const r = value * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  };

  const gridPoints = [];
  for (let level = 1; level <= levels; level++) {
    const ratio = level / levels;
    gridPoints.push(
      dimensions.map((_, i) => getPoint(i, ratio))
    );
  }

  const dataPoints = dimensions.map((dim, i) =>
    getPoint(i, normalize(scores[dim.key]))
  );

  const dataPath = dataPoints.map((p, i) =>
    (i === 0 ? 'M' : 'L') + p.x + ',' + p.y
  ).join(' ') + 'Z';

  const labelPoints = dimensions.map((dim, i) => {
    const angle = startAngle + angleStep * i;
    const r = radius + 18;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
      label: dim.label,
      value: clampScore(scores[dim.key])
    };
  });

  const valueColor = (v) => {
    if (v >= 1) return '#6554C0';
    if (v <= -1) return '#EF4444';
    return '#9CA3AF';
  };

  return (
    <svg className="radar-chart" viewBox={`0 0 ${size} ${size}`}>
      {/* Grid */}
      {gridPoints.map((points, li) => (
        <polygon
          key={li}
          points={points.map(p => `${p.x},${p.y}`).join(' ')}
          fill="none"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1"
        />
      ))}

      {/* Axes */}
      {dimensions.map((_, i) => {
        const p = getPoint(i, 1);
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={p.x}
            y2={p.y}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        );
      })}

      {/* Data area */}
      <polygon
        points={dataPoints.map(p => `${p.x},${p.y}`).join(' ')}
        fill="rgba(0, 0, 0, 0.06)"
        stroke="var(--text-primary)"
        strokeWidth="2"
      />

      {/* Data points */}
      {dataPoints.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="3"
          fill="var(--text-primary)"
        />
      ))}

      {/* Labels */}
      {labelPoints.map((lp, i) => (
        <text
          key={i}
          x={lp.x}
          y={lp.y}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={valueColor(lp.value)}
          fontSize="11"
          fontWeight="500"
        >
          {lp.label} {lp.value > 0 ? `+${lp.value}` : lp.value}
        </text>
      ))}
    </svg>
  );
}

export default function ResultPage({ identityId, result, onRestart, onRetry }) {
  const [loading, setLoading] = useState(true);
  const [visibleParagraphs, setVisibleParagraphs] = useState([]);
  const [showShare, setShowShare] = useState(false);

  const identity = identities.find((i) => i.id === identityId);
  const death = result?.death;
  const scores = result?.scores || { sacrifice: 0, action: 0, principle: 0, emotion: 0 };

  const narrativeText = identityId && death?.id
    ? narratives[identityId]?.[death.id] || ''
    : '';

  const paragraphs = narrativeText ? narrativeText.split('\n').filter(Boolean) : [];

  useEffect(() => {
    setLoading(true);
    setVisibleParagraphs([]);

    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    if (loading) return;
    if (paragraphs.length === 0) return;

    const timers = [];
    paragraphs.forEach((_, idx) => {
      const timer = setTimeout(() => {
        setVisibleParagraphs((prev) => [...prev, idx]);
      }, idx * 400 + 200);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [loading, paragraphs.length]);

  const handleShare = () => {
    setShowShare(true);
  };

  if (loading) {
    return (
      <div className="page">
        <div className="loading-container">
          <div className="loading-spinner" />
          <div className="loading-text">命运之轮转动中...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page page--top" style={{ paddingBottom: 100 }}>
      <div className="page-inner">
        {/* Identity header */}
        <div style={{
          textAlign: 'center',
          marginBottom: 24,
          animation: 'slideUp 0.5s ease'
        }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{identity?.icon}</div>
          <h2 style={{
            fontSize: 20,
            fontWeight: 500,
            color: 'var(--text-primary)',
          }}>
            {identity?.name}
          </h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            {identity?.description}
          </p>
        </div>

        {/* Narrative */}
        {paragraphs.length > 0 && (
          <div style={{
            marginBottom: 28,
            padding: '20px',
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(0,0,0,0.04)'
          }}>
            <h3 style={{
              fontSize: 16,
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: 16,
              textAlign: 'center'
            }}>
              《{identity?.name}：{death?.name}》
            </h3>
            {paragraphs.map((para, idx) => (
              <p
                key={idx}
                className={`narrative-text ${idx === paragraphs.length - 1 ? 'narrative-text--last' : ''}`}
                style={{
                  opacity: visibleParagraphs.includes(idx) ? 1 : 0,
                  transform: visibleParagraphs.includes(idx) ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease'
                }}
              >
                {para}
              </p>
            ))}
          </div>
        )}

        {/* Death info */}
        <div style={{
          textAlign: 'center',
          marginBottom: 28,
          animation: 'slideUp 0.5s ease 0.3s both'
        }}>
          <div className="death-badge">
            <span className="death-badge__name">{death?.name}</span>
            <span className="death-badge__sub">{death?.subtitle}</span>
          </div>
          {death?.description && (
            <p style={{
              marginTop: 12,
              fontSize: 13,
              color: 'var(--text-muted)',
              lineHeight: 1.5
            }}>
              {death.description}
            </p>
          )}
        </div>

        {/* Radar chart */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 32,
          animation: 'scaleIn 0.5s ease 0.6s both'
        }}>
          <RadarChart scores={scores} />
        </div>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          animation: 'slideUp 0.5s ease 0.8s both'
        }}>
          <button className="btn-primary" onClick={onRetry}>
            用同一身份重新测试
          </button>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className="btn-secondary" onClick={onRestart} style={{ flex: 1 }}>
              🔄 重新选择身份
            </button>
            <button className="btn-secondary" onClick={handleShare} style={{ flex: 1 }}>
              📸 生成分享卡
            </button>
          </div>
        </div>
      </div>

      {showShare && (
        <ShareCard
          identity={identity}
          death={death}
          onClose={() => setShowShare(false)}
        />
      )}
    </div>
  );
}
