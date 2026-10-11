import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WishesCarousel({ wishes = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartRef = useRef(null);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const messageWrapperRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      })
        .from(".eng007-wishes-border-left, .eng007-wishes-border-right", { scaleY: 0.8, opacity: 0, duration: 1.8, ease: "power2.inOut" })
        .from(".eng007-wishes-border-top, .eng007-wishes-border-bottom", { scaleX: 0.8, opacity: 0, duration: 1.8, ease: "power2.inOut" }, "-=1.4")
        .from(containerRef.current, { y: 40, opacity: 0, duration: 1.5, ease: "power3.out" }, "-=1")
        .from(".eng007-wishes-header > *", { y: 15, opacity: 0, stagger: 0.2, duration: 1, ease: "power2.out" }, "-=0.8")
        .from(".eng007-wishes-flower", { rotation: -10, opacity: 0, scale: 0.9, duration: 1.5, ease: "power2.out" }, "-=1");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (messageWrapperRef.current) {
      gsap.fromTo(messageWrapperRef.current, { opacity: 0, y: 5 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.inOut" });
    }
  }, [currentIndex]);

  if (!wishes || wishes.length === 0) return null;

  const totalCount = wishes.length;
  const currentWish = wishes[currentIndex] || wishes[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCount);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCount) % totalCount);
  };

  const onTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartRef.current === null) return;
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrevious();
    }
    touchStartRef.current = null;
  };

  return (
    <section id="eng007-wishes-section" ref={sectionRef} aria-label="Guest Wishes Carousel">
      {/* Surrounding ornamental borders */}
      <img src="/assets/wishesleft.svg" alt="" className="eng007-wishes-border-left" aria-hidden="true" />
      <img src="/assets/wishesright.svg" alt="" className="eng007-wishes-border-right" aria-hidden="true" />
      <img src="/assets/wishestop.svg" alt="" className="eng007-wishes-border-top" aria-hidden="true" />
      <img src="/assets/wishesbottom.svg" alt="" className="eng007-wishes-border-bottom" aria-hidden="true" />

      <div className="nimbus-container">
        <div className="eng007-wishes-container" ref={containerRef}>
          {/* Header */}
          <div className="eng007-wishes-header">
            <img src="/assets/quotes.svg" alt="" className="eng007-wishes-quotation" aria-hidden="true" />
            <h2 className="eng007-wishes-title">Wishes For The Couple</h2>
          </div>

          {/* Active Wish Message */}
          <div className="eng007-wishes-shared-wrapper">
            <div
              className="eng007-wishes-container-message-wrapper"
              ref={messageWrapperRef}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <blockquote className="eng007-wishes-message">
                "{currentWish?.message}"
              </blockquote>
              <p className="eng007-wishes-author">
                — {currentWish?.authorName}
              </p>
            </div>

            {/* Pagination Controls */}
            <div className="eng007-wishes-dots">
              <button
                type="button"
                className="eng007-change-btn"
                onClick={handlePrevious}
                aria-label="Previous wish"
                title="Previous wish"
              >
                <ChevronLeft size={22} />
              </button>
              <span>
                {currentIndex + 1}/{totalCount}
              </span>
              <button
                type="button"
                className="eng007-change-btn"
                onClick={handleNext}
                aria-label="Next wish"
                title="Next wish"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* Bottom decorative flower */}
          <div className="eng007-wishes-flower-wrapper" aria-hidden="true">
            <img src="/assets/wishesflower.svg" alt="" className="eng007-wishes-flower" />
          </div>
        </div>
      </div>
    </section>
  );
}
