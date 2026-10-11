import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection({ data }) {
  const sectionRef = useRef(null);
  const brideName = data?.bride_details?.bride_name || "Ananya Sharma";
  const groomName = data?.groom_details?.groom_name || "Aarav Verma";
  const dateText = data?.hero?.display_date_text || "Saturday | 31st Oct | 2026";
  const venueName = data?.venue?.venue_name || "Hall Complex";
  const mapLink = data?.venue?.venue_location_link || "https://maps.google.com";

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1.8, ease: "power2.out" } });
      tl.from(".eng007-hero-bottomright img", { scale: 0, opacity: 0, transformOrigin: "right bottom" }, 0)
        .from(".eng007-hero-topleft img", { scale: 0, opacity: 0, transformOrigin: "left top" }, 0)
        .from(".eng007-hero-topright img", { scale: 0, opacity: 0, transformOrigin: "right top" }, 0)
        .from(".eng007-hero-bottomleft img", { scale: 0, opacity: 0, transformOrigin: "left bottom" }, 0)
        .from(".eng007-hero-left > div", { scale: 0, opacity: 0, stagger: 0.1 }, 0)
        .from(".eng007-hero-right img", { y: 400, scale: 0.9, opacity: 0 }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleOpenMaps = () => {
    window.open(mapLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="eng007-hero-section" ref={sectionRef}>
      <div className="eng007-hero-border-tilt" aria-hidden="true" />
      
      {/* Decorative corner florals */}
      <div className="eng007-hero-topleft" aria-hidden="true">
        <img src="/assets/topleft.svg" alt="" />
      </div>
      <div className="eng007-hero-topright" aria-hidden="true">
        <img src="/assets/topright.svg" alt="" />
      </div>
      <div className="eng007-hero-bottomleft" aria-hidden="true">
        <img src="/assets/bottomleft.svg" alt="" />
      </div>
      <div className="eng007-hero-bottomright" aria-hidden="true">
        <img src="/assets/bottomright.svg" alt="" />
      </div>

      <div className="nimbus-container">
        <div className="eng007-hero-container">
          {/* Left Text Block */}
          <div className="eng007-hero-left">
            <div className="eng007-hero-save-block">
              <p className="eng007-text-accent">Save the date</p>
              <h1 className="eng007-names">
                <span>{brideName}</span>
                <span>&amp;</span>
                <span>{groomName}</span>
              </h1>
            </div>

            <div className="eng007-hero-engaged-block">
              <p className="eng007-text-accent">are getting engaged on</p>
              <p className="eng007-date">{dateText}</p>
            </div>

            <div className="eng007-hero-venue-block">
              <p className="eng007-venue-name">{venueName}</p>
              <button
                type="button"
                className="eng007-maps-btn"
                onClick={handleOpenMaps}
              >
                Open in Maps
              </button>
            </div>
          </div>

          {/* Right Illustrated Couple */}
          <div className="eng007-hero-right">
            <img
              src="/assets/herocouple.webp"
              alt="Ananya Sharma and Aarav Verma illustration"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
