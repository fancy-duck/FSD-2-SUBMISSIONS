import React, { useState } from 'react'; 
import './App.css';

const PLATFORM_LIMITS = {
  twitter: 280,
  linkedin: 1300,
  instagram: 2200 
};


export default function SocialMediaValidation() {
  const [platform, setPlatform] = useState('twitter');
  const [content, setContent] = useState('');

  const currentLimit = PLATFORM_LIMITS[platform];
  const currentLength = content.length; 
  const isOverLimit = currentLength > currentLimit;

  const handlePlatformChange = (e) => setPlatform(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  return (
    <div className="composer-wrapper">
      <div className="composer-card">
        <h2 className="composer-title">Compose Post</h2>

        <div className="input-group">
          <label htmlFor="platform-select">Platform</label>
          <select
            id="platform-select"
            value={platform}
            onChange={handlePlatformChange}
            className="form-control"
          >
            <option value="twitter">Twitter</option>
            <option value="linkedin">LinkedIn</option>
            <option value="instagram">Instagram</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="post-content">Message</label>
          <textarea
            id="post-content"
            value={content}
            onChange={handleContentChange}
            placeholder="Write here"
            rows={10}
            className={`form-control ${isOverLimit ? 'over-limit' : ''}`}
          />
        </div>

        <div className="feedback-section">
          <span className={`char-counter ${isOverLimit ? 'text-error' : 'text-muted'}`}>
            {currentLength} / {currentLimit}
          </span>

          
          {isOverLimit && (
            <span className="error-message">You have exceeded the character limit for {platform}.</span>
          )}
        </div>

        <button 
          className="submit-btn"
          disabled={isOverLimit || currentLength === 0}
        >
          Save Draft
        </button>
      </div>
    </div>
  );
}