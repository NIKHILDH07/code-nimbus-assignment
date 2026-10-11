import React from 'react';
import { AlertCircle, Mail, Shield } from 'lucide-react';

export default function Footer({ onOpenReportModal, onOpenPrivacyPolicy }) {
  return (
    <footer className="shared-footer-main" aria-label="Page Footer">
      <div className="shared-footer-top-section">
        <div className="shared-footer-branding-container">
          <p className="shared-footer-branding-text">
            <span>Engagement Invitation website by</span>
            <strong className="shared-footer-brand-name">INVITATIONNATION</strong>
          </p>

          <div
            className="shared-footer-avatar"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Back to Top"
            aria-label="Back to top"
          >
            <img src="/assets/avatar.png" alt="Invitation Nation" className="shared-footer-avatar-img" />
          </div>
        </div>
      </div>

      <div className="shared-footer-bottom-wrapper">
        <div className="shared-footer-container">
          <div className="shared-footer-links-row">
            <button
              type="button"
              className="shared-footer-link"
              onClick={onOpenReportModal}
            >
              <AlertCircle size={16} color="#0088FF" />
              <span>Report a Problem</span>
            </button>

            <a
              href="mailto:support@invitationnation.in"
              className="shared-footer-link"
            >
              <Mail size={16} color="#64748B" />
              <span>Contact Support</span>
            </a>

            <button
              type="button"
              className="shared-footer-link"
              onClick={onOpenPrivacyPolicy}
            >
              <Shield size={16} color="#64748B" />
              <span>Privacy Policy</span>
            </button>
          </div>

          <p className="shared-footer-attribution">
            POWERED BY{' '}
            <span onClick={() => window.open('https://invitationnation.in', '_blank')}>
              INVITATION NATION
            </span>
          </p>

          <div className="shared-footer-legal-bar">
            <p className="shared-footer-legal-text">
              © 2026 Invitation Nation. All rights reserved. Crafted with care for your forever.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
