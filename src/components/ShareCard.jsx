import React from 'react';

export default function ShareCard({ identity, death, onClose }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 360,
          background: 'linear-gradient(135deg, #f0f2f5 0%, #ffffff 50%, #f0f2f5 100%)',
          borderRadius: 20,
          padding: 32,
          border: '1px solid rgba(101, 84, 192, 0.15)',
          boxShadow: '0 8px 40px rgba(0, 0, 0, 0.1)',
          animation: 'scaleIn 0.3s ease'
        }}
      >
        {/* Close button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
          <button
            onClick={onClose}
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.04)',
              color: 'var(--text-muted)',
              fontSize: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ✕
          </button>
        </div>

        {/* Card content */}
        <div style={{ textAlign: 'center' }}>
          {/* Icon */}
          <div style={{ fontSize: 56, marginBottom: 12 }}>
            {identity?.icon}
          </div>

          {/* Identity name */}
          <h3 style={{
            fontSize: 22,
            fontWeight: 700,
            color: 'var(--accent-primary)',
          }}>
            {identity?.name}
          </h3>

          {/* Destiny */}
          <div style={{
            fontSize: 14,
            color: 'var(--text-muted)',
            marginBottom: 20,
            letterSpacing: 4
          }}>
            命 运 测 试
          </div>

          {/* Divider */}
          <div style={{
            width: 60,
            height: 2,
            background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
            margin: '0 auto 20px'
          }} />

          {/* Death summary */}
          <div style={{
            fontSize: 28,
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: 8
          }}>
            {death?.name}
          </div>
          <div style={{
            fontSize: 14,
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            marginBottom: 28
          }}>
            {death?.description}
          </div>

          {/* Footer */}
          <div style={{
            borderTop: '1px solid rgba(0,0,0,0.06)',
            paddingTop: 20,
            fontSize: 12,
            color: 'var(--text-muted)',
            letterSpacing: 1
          }}>
            [扫码测试]
          </div>
        </div>
      </div>

      {/* Hint */}
      <div style={{
        position: 'fixed',
        bottom: 40,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 13,
        color: 'var(--text-muted)',
        animation: 'pulse 2s ease infinite'
      }}>
        长按或截图保存分享
      </div>
    </div>
  );
}
