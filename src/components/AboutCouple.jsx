import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutCouple({ bride, groom }) {
  const sectionRef = useRef(null);
  const brideName = bride?.bride_name || "Ananya Sharma";
  const brideParents = bride?.bride_parents || "D/o Mr. Rajesh & Mrs. Sunita Sharma";
  const brideDesc = bride?.bride_description || "A free spirit wrapped in grace, Ananya moves through life with quiet confidence, an infectious laugh, and a kindness that makes everyone around her feel at home.";
  const bridePhoto = bride?.bride_photo || "/assets/bride.png";

  const groomName = groom?.groom_name || "Aarav Verma";
  const groomParents = groom?.groom_parents || "S/o Mr. Anand & Mrs. Kavitha Verma";
  const groomDesc = groom?.groom_description || "A gentle soul with a poet's heart and an architect's mind, Aarav finds beauty in the details, whether in the curve of a building or the warmth of a quiet afternoon.";
  const groomPhoto = groom?.groom_photo || "/assets/groom.png";

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.from(".eng007-about-couple-texture", { opacity: 0, duration: 3, ease: "power1.inOut" });
      gsap.from(".eng007-about-couple-left", {
        xPercent: -50,
        opacity: 0,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      });
      gsap.from(".eng007-about-couple-right", {
        xPercent: 50,
        opacity: 0,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      });
      gsap.timeline({ scrollTrigger: { trigger: ".eng007-about-couple-bride", start: "top 70%" } })
        .from(".eng007-about-couple-bride-img", { x: -30, opacity: 0, duration: 1.8, ease: "power2.out" })
        .from(".eng007-about-couple-bride-info > *", { y: 20, opacity: 0, stagger: 0.2, duration: 1.5, ease: "power2.out" }, "-=1.2");
      gsap.timeline({ scrollTrigger: { trigger: ".eng007-about-couple-groom", start: "top 70%" } })
        .from(".eng007-about-couple-groom-img", { x: 30, opacity: 0, duration: 1.8, ease: "power2.out" })
        .from(".eng007-about-couple-groom-info > *", { y: 20, opacity: 0, stagger: 0.2, duration: 1.5, ease: "power2.out" }, "-=1.2");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="eng007-about-couple-section" ref={sectionRef} aria-label="About the Couple">
      {/* Texture background */}
      <img src="/assets/texture.svg" alt="" className="eng007-about-couple-texture" aria-hidden="true" />

      {/* Decorative corners */}
      <div className="eng007-about-couple-left" aria-hidden="true">
        <img src="/assets/aboutleft.svg" alt="" />
      </div>
      <div className="eng007-about-couple-right" aria-hidden="true">
        <img src="/assets/aboutright.svg" alt="" />
      </div>

      <div className="nimbus-container">
        <div className="eng007-about-couple-container">
          {/* Bride Block */}
          <div className="eng007-about-couple-bride">
            <div className="eng007-about-couple-bride-img">
              <img
                src={bridePhoto}
                alt={brideName}
                className="eng007-couple-photo"
                loading="lazy"
              />
              <img
                src="/assets/brideside.svg"
                alt=""
                className="eng007-bride-side"
                aria-hidden="true"
              />
            </div>

            <div className="eng007-about-couple-bride-info">
              <h2 className="eng007-couple-name">{brideName}</h2>
              <p className="eng007-couple-parents">{brideParents}</p>
              <p className="eng007-couple-desc">{brideDesc}</p>
              <img
                src="/assets/brideleaf.svg"
                alt=""
                className="eng007-bride-leaf"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Groom Block */}
          <div className="eng007-about-couple-groom">
            <div className="eng007-about-couple-groom-info">
              <h2 className="eng007-couple-name">{groomName}</h2>
              <p className="eng007-couple-parents">{groomParents}</p>
              <p className="eng007-couple-desc">{groomDesc}</p>
              <img
                src="/assets/groomleaf.svg"
                alt=""
                className="eng007-groom-leaf"
                aria-hidden="true"
              />
            </div>

            <div className="eng007-about-couple-groom-img">
              <img
                src={groomPhoto}
                alt={groomName}
                className="eng007-couple-photo"
                loading="lazy"
              />
              <img
                src="/assets/groomside.svg"
                alt=""
                className="eng007-groom-side"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
