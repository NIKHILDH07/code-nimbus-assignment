import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Countdown({ targetDate = "2026-10-31T11:00:00" }) {
  const sectionRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });
      tl.fromTo(sectionRef.current, { "--border-inset": "45%", opacity: 0 }, { "--border-inset": "25px", opacity: 1, duration: 2, ease: "expo.out" })
        .from(".eng007-countdown-topleft img", { scale: 0, rotation: -45, filter: "blur(10px)", opacity: 0, transformOrigin: "left top", duration: 2.5, ease: "power2.out" }, "-=1.5")
        .from(".eng007-countdown-bottomright img", { scale: 0, rotation: 45, filter: "blur(10px)", opacity: 0, transformOrigin: "right bottom", duration: 2.5, ease: "power2.out" }, "-=2.5")
        .from(".eng007-countdown-title", { filter: "blur(12px)", opacity: 0, y: 20, duration: 2, ease: "power3.out" }, "-=1.5")
        .from(".eng007-countdown", { opacity: 0, y: 40, duration: 2, ease: "power3.out" }, "-=1.2");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section id="eng007-countdown-section" ref={sectionRef} aria-label="Event Countdown">
      {/* Decorative corner flowers */}
      <div className="eng007-countdown-topleft" aria-hidden="true">
        <img src="/assets/countflowerleft.svg" alt="" />
      </div>
      <div className="eng007-countdown-bottomright" aria-hidden="true">
        <img src="/assets/countflowerright.svg" alt="" />
      </div>

      <div className="nimbus-container">
        <div className="eng007-countdown-container">
          <h2 className="eng007-countdown-title">Let the countdown begin</h2>

          <div className="shared-countdown eng007-countdown">
            <div className="time-box">
              <span className="num">{timeLeft.days}</span>
              <span className="label">DAYS</span>
            </div>
            <div className="time-box">
              <span className="num">{timeLeft.hours}</span>
              <span className="label">HRS</span>
            </div>
            <div className="time-box">
              <span className="num">{timeLeft.minutes}</span>
              <span className="label">MINS</span>
            </div>
            <div className="time-box">
              <span className="num">{timeLeft.seconds}</span>
              <span className="label">SECS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
