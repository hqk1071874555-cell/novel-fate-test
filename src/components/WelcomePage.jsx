import React from 'react';

export default function WelcomePage({ onStart }) {
  return (
    <div className="page">
      <div className="page-inner" style={{ textAlign: 'center' }}>
        <div style={{ animation: 'slideUp 0.6s ease' }}>
          <h1 style={{
            fontSize: 38,
            fontWeight: 300,
            marginBottom: 16,
            letterSpacing: 4,
            color: 'var(--text-primary)',
            lineHeight: 1.4
          }}>
            你会选择
            <br />
            怎样的人生
          </h1>
          <p style={{
            fontSize: 15,
            color: 'var(--text-secondary)',
            marginBottom: 48,
            lineHeight: 1.6
          }}>
            每个选择，都在书写你的命运
          </p>
        </div>

        <div style={{ animation: 'slideUp 0.6s ease 0.2s both' }}>
          <button
            className="btn-primary"
            onClick={onStart}
            style={{ fontSize: 17 }}
          >
            开始测试
          </button>
        </div>

        <div style={{ animation: 'slideUp 0.6s ease 0.4s both' }}>
          <p style={{
            marginTop: 48,
            fontSize: 12,
            color: 'var(--text-muted)',
            letterSpacing: 1
          }}>
            纯属娱乐，仅供消遣
          </p>
        </div>
      </div>
    </div>
  );
}
