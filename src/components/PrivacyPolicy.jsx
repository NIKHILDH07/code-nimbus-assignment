import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function PrivacyPolicy({ onBack }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for invitations matching: "${searchQuery}"`);
    }
  };

  return (
    <div className="privacy-page-wrapper">
      <main className="privacy-page-content">
        <button type="button" className="privacy-back-btn" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>back</span>
        </button>

        <h1 className="privacy-title">PRIVACY POLICY: INVITATION NATION</h1>
        <p className="privacy-updated">Last Updated: April 6, 2026</p>

        <section className="privacy-section">
          <h2 className="privacy-section-heading">1. Introduction</h2>
          <p className="privacy-section-text">
            <strong>Code Nimbus Solutions Private Ltd.</strong> ("we," "us," or "our") operates <strong>Invitation Nation</strong>. We are committed to protecting your personal data and your privacy in accordance with the Digital Personal Data Protection (DPDP) Act, 2023 and the Information Technology Act, 2000.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-heading">2. Data We Collect</h2>
          <p className="privacy-section-text">
            We collect information that you voluntarily provide when creating a digital invitation or an account:
          </p>
          <ul className="privacy-section-list">
            <li><strong>Personal Identifiers:</strong> Name, email address, and phone number.</li>
            <li><strong>Event Information:</strong> Event titles, dates, locations (Google Maps links), and guest lists.</li>
            <li><strong>Multimedia Content:</strong> Images, MP3 audio, and videos uploaded to our servers.</li>
            <li><strong>Technical Data:</strong> IP addresses, browser type, and usage patterns (collected via AWS CloudWatch and Google Analytics).</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-heading">3. How We Use Your Data</h2>
          <p className="privacy-section-text">
            We use the collected data for the following purposes:
          </p>
          <ul className="privacy-section-list">
            <li><strong>Service Delivery:</strong> To host and display your digital invitations.</li>
            <li><strong>Communication:</strong> To send account updates, security alerts, and technical notices.</li>
            <li><strong>Optimization:</strong> To analyze platform usage and improve our UI/UX and backend performance.</li>
            <li><strong>Legal Compliance:</strong> To comply with statutory obligations and respond to legal requests.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-heading">4. Data Storage and Security</h2>
          <p className="privacy-section-text">
            <strong>Infrastructure:</strong> Your data is stored on secure AWS (Amazon Web Services) servers located in the Mumbai (ap-south-1) region to ensure low latency and data residency compliance.
          </p>
          <p className="privacy-section-text">
            <strong>Security Measures:</strong> We implement industry-standard encryption for data at rest (S3/MongoDB) and data in transit (SSL/TLS via AWS Certificate Manager).
          </p>
          <p className="privacy-section-text">
            <strong>Retention:</strong> We retain personal data only for as long as necessary to provide the services or as required by law. Users may request the deletion of their data at any time.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-heading">5. Sharing of Data</h2>
          <p className="privacy-section-text">
            We do not sell, rent, or trade your personal data to third parties. We may share data only with:
          </p>
          <ul className="privacy-section-list">
            <li><strong>Service Providers:</strong> Trusted third-party vendors (like AWS for hosting) who assist us in operating our platform.</li>
            <li><strong>Legal Requirements:</strong> If required by law, court order, or government authority.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-heading">6. User Rights (Under DPDP Act 2023)</h2>
          <p className="privacy-section-text">
            As a "Data Principal," you have the following rights:
          </p>
          <ul className="privacy-section-list">
            <li><strong>Right to Access:</strong> You can request a summary of the personal data we hold about you.</li>
            <li><strong>Right to Correction:</strong> You can update or correct any inaccurate data.</li>
            <li><strong>Right to Erasure:</strong> You can request the deletion of your personal data ("Right to be Forgotten").</li>
            <li><strong>Right to Withdraw Consent:</strong> You may withdraw your consent for data processing at any time.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-heading">7. Cookies</h2>
          <p className="privacy-section-text">
            We use cookies to maintain your session and remember your preferences. You can manage cookie settings through your browser, but disabling them may limit your ability to use certain features of the platform.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-section-heading">8. Data Protection Officer (DPO)</h2>
          <p className="privacy-section-text">
            For any questions regarding this Privacy Policy or to exercise your data rights, please contact our Data Protection Officer:
          </p>
          <div className="privacy-dpo-box">
            <p><strong>DPO:</strong> Pranav Vasu</p>
            <p><strong>Email:</strong> <a href="mailto:pranav@codenimbussolutions.com">pranav@codenimbussolutions.com</a></p>
            <p><strong>Address:</strong> #47, Ground Floor 3rd Cross, CHBS 3rd Layout, Vijayanagar 2nd Stage, Bangalore 560040</p>
          </div>
        </section>
      </main>

      {/* Deep Purple Brand Footer */}
      <footer className="privacy-footer" aria-label="Brand Directory Footer">
        <div className="privacy-footer-container">
          <div className="privacy-footer-col">
            <h4>Invitations</h4>
            <ul>
              <li>WEDDING</li>
              <li>ENGAGEMENT</li>
              <li>HOUSEWARMING</li>
              <li>BIRTHDAY</li>
              <li>COMMERCIAL</li>
              <li>NAMING_CEREMONY</li>
              <li>FESTIVITIES</li>
            </ul>
          </div>

          <div className="privacy-footer-col">
            <h4>Explore</h4>
            <ul>
              <li>Invitations</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className="privacy-footer-col">
            <h4>Contact us</h4>
            <div className="privacy-footer-contact-info">
              <p style={{ margin: '0 0 1rem', fontWeight: 600 }}>+91 6364469555</p>
              <p style={{ margin: 0 }}>
                #47, Ground Floor, 3rd Cross,<br />
                CHBS 3rd Layout, Vijayanagar 2nd Stage,<br />
                Bengaluru 560040
              </p>
            </div>
          </div>

          <div className="privacy-footer-col">
            <div className="privacy-footer-search-box">
              <h4>Explore Invitations</h4>
              <form onSubmit={handleSearch} className="privacy-footer-input-row">
                <input
                  type="text"
                  placeholder="Enter event name"
                  className="privacy-footer-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="privacy-footer-search-btn" aria-label="Search events">
                  <ArrowRight size={16} />
                </button>
              </form>
              <p className="privacy-footer-hint">
                Please enter the name of the event you are looking for. For example, "wedding", "birthday", "housewarming", etc.
              </p>
            </div>
          </div>
        </div>

        <div className="privacy-footer-bottom">
          <div className="privacy-footer-brand-wrap">
            <div className="shared-footer-avatar" onClick={onBack} title="Return to invitation">
              <img src="/assets/avatar.png" alt="Invitation Nation" className="shared-footer-avatar-img" />
            </div>
            <div className="privacy-footer-nav">
              <span>Terms</span>
              <span>Privacy</span>
            </div>
          </div>

          <div className="privacy-footer-socials">
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="privacy-social-icon" aria-label="WhatsApp">
              💬
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="privacy-social-icon" aria-label="LinkedIn">
              in
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="privacy-social-icon" aria-label="Instagram">
              📸
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="privacy-social-icon" aria-label="Facebook">
              f
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="privacy-social-icon" aria-label="Twitter">
              𝕏
            </a>
          </div>

          <p className="privacy-footer-copyright">
            © 2026 Code Nimbus Solutions. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
