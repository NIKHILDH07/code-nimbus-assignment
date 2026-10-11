import React, { useState, useLayoutEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GalleryPage() {
  const sectionRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })
        .from(".eng007-gallery-topleft img", { x: -60, y: -60, opacity: 0, duration: 1.8, ease: "power2.out" }, "-=1.4")
        .from(".eng007-gallery-bottomright img", { x: 60, y: 60, opacity: 0, duration: 1.8, ease: "power2.out" }, "-=1.4")
        .from(".eng007-gallery-title", { y: 30, opacity: 0, duration: 1.2, ease: "power3.out" }, "-=1")
        .from(".eng007-gallery-grid", { y: 40, opacity: 0, duration: 1.5, ease: "power2.out" }, "-=0.8");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const images = [
    { id: 1, src: '/assets/bride.png', title: 'Ananya' },
    { id: 2, src: '/assets/groom.png', title: 'Aarav' },
    { id: 3, src: '/assets/herocouple.webp', title: 'Together' },
    { id: 4, src: '/assets/lovestorycouple.webp', title: 'A Special Evening' }
  ];

  return (
    <section id="eng007-gallery-section" ref={sectionRef} aria-label="Photo Gallery">
      <div className="eng007-gallery-topleft" aria-hidden="true">
        <img src="/assets/topleft.svg" alt="" />
      </div>
      <div className="eng007-gallery-bottomright" aria-hidden="true">
        <img src="/assets/bottomright.svg" alt="" />
      </div>

      <div className="nimbus-container">
        <div className="eng007-gallery-container">
          <h1 className="eng007-gallery-title">Captured Moments</h1>

          <div className="eng007-gallery-grid">
            {images.map((item) => (
              <div key={item.id} className="eng007-gallery-card">
                <img src={item.src} alt={item.title} loading="lazy" />
              </div>
            ))}
          </div>

          <div className="eng007-gallery-pagination">
            <button
              type="button"
              className="eng007-gallery-pagination-btn"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Previous Page"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="eng007-gallery-pagination-text">
              Page {currentPage} of 1
            </span>
            <button
              type="button"
              className="eng007-gallery-pagination-btn"
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={true}
              aria-label="Next Page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
