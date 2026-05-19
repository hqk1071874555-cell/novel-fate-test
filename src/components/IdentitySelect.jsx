import React, { useState } from 'react';
import { identities } from '../data/identities.js';

export default function IdentitySelect({ onSelect }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleConfirm = () => {
    if (selectedId) {
      onSelect(selectedId);
    }
  };

  return (
    <div className="page page--top">
      <div className="page-inner">
        <div style={{ textAlign: 'center', marginBottom: 28, animation: 'slideUpShort 0.4s ease' }}>
          <h2 style={{
            fontSize: 22,
            fontWeight: 500,
            marginBottom: 8,
            color: 'var(--text-primary)'
          }}>
            选择你的身份
          </h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            在故事里，你扮演怎样的角色？
          </p>
        </div>

        <div className="grid-2" style={{ animation: 'slideUpShort 0.4s ease 0.1s both' }}>
          {identities.map((item) => (
            <button
              key={item.id}
              className={`identity-card ${selectedId === item.id ? 'identity-card--selected' : ''}`}
              onClick={() => setSelectedId(item.id)}
              style={{
                '--card-color': item.color,
                borderColor: selectedId === item.id ? item.color : 'transparent',
                background: selectedId === item.id ? item.bgColor : undefined
              }}
            >
              {selectedId === item.id && (
                <div className="identity-card__check">✓</div>
              )}
              <div className="identity-card__icon">{item.icon}</div>
              <div className="identity-card__name">{item.name}</div>
              <div className="identity-card__desc">{item.description}</div>
            </button>
          ))}
        </div>

        <div style={{
          marginTop: 28,
          animation: 'slideUpShort 0.4s ease 0.2s both'
        }}>
          <button
            className="btn-primary"
            disabled={!selectedId}
            onClick={handleConfirm}
          >
            确认选择
          </button>
        </div>
      </div>
    </div>
  );
}
