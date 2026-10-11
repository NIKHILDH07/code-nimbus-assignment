import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const headerElements = gsap.utils.toArray(".eng007-about-header > *");
      if (headerElements.length) {
        gsap.from(headerElements, {
          scrollTrigger: { trigger: ".eng007-about-header", start: "top 88%", once: true },
          y: 40,
          opacity: 0,
          duration: 1.4,
          stagger: 0.2,
          ease: "power3.out"
        });
      }

      gsap.utils.toArray(".eng007-story-row").forEach((row, index) => {
        const imgBox = row.querySelector(".eng007-story-image-box");
        const img = row.querySelector(".eng007-story-image-box img");
        const texts = row.querySelectorAll(".eng007-story-text > *");
        const isLeft = index % 2 === 0;

        const tl = gsap.timeline({
          scrollTrigger: { trigger: row, start: "top 82%", once: true }
        });
        if (imgBox) tl.from(imgBox, { x: isLeft ? -70 : 70, opacity: 0, duration: 1.3, ease: "power3.out" });
        if (img) tl.from(img, { scale: 1.15, duration: 1.8, ease: "power2.out" }, "-=1.2");
        if (texts.length) tl.from(texts, { y: 26, opacity: 0, duration: 1, stagger: 0.12, ease: "power2.out" }, "-=1.2");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="eng007-about-page-section" ref={sectionRef} aria-label="Our Love Story">
      {/* Decorative corners */}
      <div className="eng007-about-page-top-flower" aria-hidden="true">
        <img src="/assets/flowertop.svg" alt="" />
      </div>
      <div className="eng007-about-page-bottom-flower" aria-hidden="true">
        <img src="/assets/flowerbottom.svg" alt="" />
      </div>

      <div className="nimbus-container">
        <div className="eng007-about-page-container">
          <div className="eng007-about-header">
            <img
              src="/assets/lovestorycouple.webp"
              alt="Couple illustration"
              className="eng007-about-header-couple"
            />
            <h1 className="eng007-about-title">Our Story</h1>
            <img
              src="/assets/underline.svg"
              alt=""
              className="eng007-about-underline"
              aria-hidden="true"
            />
          </div>

          <div className="eng007-about-content">
            {/* Story item 1 */}
            <div className="eng007-story-row image-left">
              <div className="eng007-story-image-box">
                <img src="/assets/bride.png" alt="The Day We Met" loading="lazy" />
              </div>
              <div className="eng007-story-text">
                <p className="eng007-story-date">January 23, 2019</p>
                <h3 className="eng007-story-name">The Day We Met</h3>
                <p className="eng007-story-desc">
                  What began as a chance meeting at a quiet library terrace soon blossomed into countless shared conversations, mutual laughter, and a deep and beautiful connection.
                </p>
                <img src="/assets/brideleaf.svg" alt="" className="eng007-story-leaf" aria-hidden="true" />
              </div>
            </div>

            {/* Diagonal ornament */}
            <div className="eng007-diagonal-row ltr" aria-hidden="true">
              <img src="/assets/lefttoright.svg" alt="" className="eng007-story-diagonal" />
            </div>

            {/* Story item 2 */}
            <div className="eng007-story-row image-right">
              <div className="eng007-story-image-box">
                <img src="/assets/groom.png" alt="The Proposal" loading="lazy" />
              </div>
              <div className="eng007-story-text">
                <p className="eng007-story-date">February 14, 2024</p>
                <h3 className="eng007-story-name">The Proposal</h3>
                <p className="eng007-story-desc">
                  A tranquil evening surrounded by golden amber hues, where Aarav asked the question that made their lifelong journey official.
                </p>
                <img src="/assets/groomleaf.svg" alt="" className="eng007-story-leaf" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
