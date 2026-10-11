import React, { useLayoutEffect, useRef } from 'react';
import { Cake, Utensils } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function RingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="14" r="7" />
      <path d="M12 7l2-3h-4l2 3z" />
      <circle cx="12" cy="4" r="1.5" fill="currentColor" />
    </svg>
  );
}

export default function ScheduleSection({ schedule = [] }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".eng007-schedule-header",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      })
        .from(".eng007-schedule-title", { opacity: 0, filter: "blur(15px)", scale: 0.98, duration: 1.5, ease: "power2.out" })
        .from(".eng007-left", { x: -20, opacity: 0, filter: "blur(10px)", duration: 1.2, ease: "power2.out" }, "-=1")
        .from(".eng007-right", { x: 20, opacity: 0, filter: "blur(10px)", duration: 1.2, ease: "power2.out" }, "-=1");

      gsap.from(".eng007-schedule-card", {
        scrollTrigger: { trigger: ".eng007-schedule-carousel-wrapper", start: "top 80%" },
        opacity: 0,
        filter: "blur(12px)",
        stagger: 0.15,
        duration: 1.4,
        ease: "power3.out"
      });

      gsap.from(".eng007-card-icon, .eng007-card-countdown-flower, .eng007-card-wishes-flower", {
        scrollTrigger: { trigger: ".eng007-schedule-carousel-wrapper", start: "top 80%" },
        scale: 0.8,
        opacity: 0,
        duration: 1.8,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getEventIcon = (type) => {
    switch (type) {
      case 'cake':
        return <Cake size={32} />;
      case 'lunch':
        return <Utensils size={32} />;
      case 'ring':
      default:
        return <RingIcon />;
    }
  };

  return (
    <section id="eng007-schedule-section" ref={sectionRef} aria-label="Engagement Itinerary">
      <div className="nimbus-container">
        <div className="eng007-schedule-container">
          {/* Header */}
          <header className="eng007-schedule-header">
            <img
              src="/assets/groomleaf.svg"
              alt=""
              className="eng007-schedule-leaf eng007-left"
              aria-hidden="true"
            />
            <h2 className="eng007-schedule-title">
              Engagement celebration begins
            </h2>
            <img
              src="/assets/brideleaf.svg"
              alt=""
              className="eng007-schedule-leaf eng007-right"
              aria-hidden="true"
            />
          </header>

          {/* Cards Grid / Carousel */}
          <div className="eng007-schedule-carousel-wrapper">
            {schedule.map((item) => (
              <div key={item.id} className="eng007-schedule-card">
                {/* Top left flower inside card */}
                <div className="eng007-card-countdown-flower" aria-hidden="true">
                  <img src="/assets/countflowerleft.svg" alt="" />
                </div>

                <div className="eng007-card-content-inner">
                  <div className="eng007-card-icon">
                    {getEventIcon(item.iconType)}
                  </div>

                  <div className="eng007-card-event-block">
                    <h3 className="eng007-card-event-name">{item.eventName}</h3>
                    <p className="eng007-card-event-time">{item.eventTime}</p>
                  </div>

                  <div className="eng007-card-wishes-flower" aria-hidden="true">
                    <img src="/assets/wishesflower.svg" alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
