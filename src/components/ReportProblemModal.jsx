import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function ReportProblemModal({ isOpen, onClose }) {
  const [issueType, setIssueType] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!issueType || !description.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setIssueType('');
        setDescription('');
        onClose();
      }, 2500);
    }, 600);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="shared-modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="report-modal-title"
    >
      <div className="shared-modal-card">
        {/* Header */}
        <div className="shared-modal-header">
          <div className="shared-modal-header-container">
            <div className="shared-modal-icon-circle" aria-hidden="true">
              i
            </div>
            <div className="shared-modal-header-text">
              <h3 id="report-modal-title" className="shared-modal-heading">
                Report a Problem
              </h3>
              <p className="shared-modal-subtext">
                Let us know what's not working.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="shared-modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="shared-modal-content-area">
          {isSubmitted ? (
            <div className="shared-modal-success">
              <CheckCircle size={48} color="#22c55e" />
              <h3>Report Received</h3>
              <p>Thank you for letting us know. Our technical team is looking into it.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="shared-modal-form">
              <div className="shared-modal-field">
                <label className="shared-modal-label">
                  Issue Type <span>*</span>
                </label>
                <select
                  className="shared-modal-select"
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select an issue...
                  </option>
                  <option value="audio">Audio / Music Not Playing</option>
                  <option value="event">Incorrect Event or Venue Details</option>
                  <option value="map">Map or Location Not Loading</option>
                  <option value="wishes">Wish Submission Issue</option>
                  <option value="display">Visual Layout or Display Glitch</option>
                  <option value="other">Other Problem</option>
                </select>
              </div>

              <div className="shared-modal-field">
                <label className="shared-modal-label">
                  Describe the problem <span>*</span>
                </label>
                <textarea
                  className="shared-modal-textarea"
                  placeholder="Please explain the issue briefly so we can review it."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  maxLength={300}
                  required
                />
                <div className="shared-modal-form-info">
                  <span className="shared-modal-char-count">
                    {description.length}/300
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="shared-modal-submit-btn"
                disabled={isSubmitting || !issueType || !description.trim()}
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT REPORT'}
              </button>
            </form>
          )}
        </div>

        {/* Modal Footer */}
        <div className="shared-modal-footer">
          <p className="shared-modal-footer-text">
            CONFIDENTIAL SUBMISSION
          </p>
        </div>
      </div>
    </div>
  );
}
