import React, { useLayoutEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LocationSection({ venue, eventDate }) {
  const sectionRef = useRef(null);
  const dateStr = venue?.venue_display_date || "31ST OCTOBER, 2026";
  const venueName = venue?.venue_name || "Hall Complex";
  const venueAddress = venue?.venue_description || "Hall Complex, 1st B Cross Road, 7th Block, Koramangala, Bengaluru, Karnataka, India";
  const mapLink = venue?.venue_location_link || "https://maps.google.com/?q=Hall+Complex+Koramangala";
  const mapEmbed = venue?.map_embed_url || "https://www.google.com/maps?q=Hall+Complex+Koramangala+Bengaluru&output=embed";

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.from(".eng007-location-main-title", {
        opacity: 0,
        filter: "blur(15px)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: { trigger: ".eng007-location-main-title", start: "top 90%" }
      });

      gsap.timeline({ scrollTrigger: { trigger: ".eng007-location-container", start: "top 80%" } })
        .from(".eng007-location-map-wrapper", { opacity: 0, filter: "blur(10px)", scale: 0.98, duration: 1.4, ease: "power3.out" })
        .from(".eng007-location-card", { opacity: 0, filter: "blur(10px)", duration: 1.4, ease: "power3.out" }, "-=1");

      gsap.from(".eng007-location-decoration", {
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        ease: "sine.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleOpenMaps = () => {
    window.open(mapLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="eng007-location-section" ref={sectionRef} aria-label="Venue and Location">
      {/* 4 corner floral decorations */}
      <div className="eng007-location-decoration eng007-schedule-topleft-decoration" aria-hidden="true">
        <img src="/assets/topleft.svg" alt="" />
      </div>
      <div className="eng007-location-decoration eng007-schedule-topright-decoration" aria-hidden="true">
        <img src="/assets/topleft.svg" alt="" />
      </div>
      <div className="eng007-location-decoration eng007-schedule-bottomleft-decoration" aria-hidden="true">
        <img src="/assets/bottomright.svg" alt="" />
      </div>
      <div className="eng007-location-decoration eng007-schedule-bottomright-decoration" aria-hidden="true">
        <img src="/assets/bottomright.svg" alt="" />
      </div>

      <div className="nimbus-container">
        <h2 className="eng007-location-main-title">Location</h2>

        <div className="eng007-location-container">
          {/* Left: Interactive Google Map */}
          <div className="eng007-location-map-wrapper">
            <iframe
              title="Venue Location Map"
              src={mapEmbed}
              className="eng007-location-map"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right: Address Card */}
          <div className="eng007-location-card">
            <p className="eng007-location-date">{dateStr}</p>
            <h3 className="eng007-location-name">{venueName}</h3>
            <p className="eng007-location-description">{venueAddress}</p>

            <button
              type="button"
              className="eng007-location-maps"
              onClick={handleOpenMaps}
            >
              <span className="eng007-location-maps-icon">
                <MapPin size={22} />
              </span>
              <span className="eng007-location-maps-text">Open in Maps</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
