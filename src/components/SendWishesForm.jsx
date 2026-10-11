import React, { useState, useLayoutEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SendWishesForm({ onAddWish, sampleAiWishes = [] }) {
  const sectionRef = useRef(null);
  const [authorName, setAuthorName] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiWishIndex, setAiWishIndex] = useState(0);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        },
        defaults: { duration: 2, ease: "power2.inOut" }
      });
      tl.from(".eng007-sendwishes-texture", { opacity: 0 }, 0)
        .from(".eng007-sendwishes-leftflower img", { x: -60, opacity: 0, rotation: -15, transformOrigin: "left top", duration: 2.5 }, 0.2)
        .from(".eng007-sendwishes-left > *", { y: 30, opacity: 0, stagger: 0.2, filter: "blur(10px)", duration: 1.8 }, 0.4)
        .from(".eng007-sendwishes-right", { scale: 0.85, opacity: 0, filter: "blur(5px)", duration: 2.2, ease: "power2.out" }, 0.3)
        .from(".eng007-sendwishes-wishesflower", { scale: 0, rotation: 30, opacity: 0, transformOrigin: "center center", duration: 1.5, delay: 0.5 }, "-=1");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleGenerateAiWish = () => {
    setIsGenerating(true);
    setTimeout(() => {
      if (sampleAiWishes.length > 0) {
        const nextWish = sampleAiWishes[aiWishIndex % sampleAiWishes.length];
        setMessage(nextWish);
        setAiWishIndex((prev) => prev + 1);
        setFeedback('✨ Generated with smart engagement wish suggestions');
      }
      setIsGenerating(false);
    }, 450);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!authorName.trim() || !message.trim()) {
      setFeedback('Please enter both your name and your wish.');
      return;
    }

    if (onAddWish) {
      onAddWish({
        id: Date.now(),
        authorName: authorName.trim(),
        message: message.trim()
      });
    }

    setAuthorName('');
    setMessage('');
    setFeedback('Thank you! Your heartfelt blessings have been sent.');
    setTimeout(() => setFeedback(''), 5000);
  };

  return (
    <section id="eng007-sendwishes-section" ref={sectionRef} aria-label="Send Your Wishes">
      {/* Background texture */}
      <img src="/assets/texture.svg" alt="" className="eng007-sendwishes-texture" aria-hidden="true" />

      {/* Left floral spray */}
      <div className="eng007-sendwishes-leftflower" aria-hidden="true">
        <img src="/assets/countflowerleft.svg" alt="" />
      </div>

      <div className="nimbus-container">
        <div className="eng007-sendwishes-container">
          {/* Left Text Block */}
          <div className="eng007-sendwishes-left">
            <img src="/assets/quotes.svg" alt="" className="eng007-sendwishes-quotation" aria-hidden="true" />
            <h2 className="eng007-sendwishes-title">Send your wishes</h2>
            <p className="eng007-sendwishes-subtitle">
              “Leave your blessings and spread a little more love”
            </p>
          </div>

          {/* Right Form with Floral Border Frame */}
          <div className="eng007-sendwishes-right">
            <div className="eng007-sendwishes-box">
              {/* Ornate borders */}
              <div className="eng007-sendwishes-border-top" aria-hidden="true">
                <img src="/assets/bordershort.svg" alt="" />
              </div>
              <div className="eng007-sendwishes-border-right" aria-hidden="true">
                <img src="/assets/borderlong.svg" alt="" />
              </div>
              <div className="eng007-sendwishes-border-bottom" aria-hidden="true">
                <img src="/assets/bordershort.svg" alt="" />
              </div>
              <div className="eng007-sendwishes-border-left" aria-hidden="true">
                <img src="/assets/borderlong.svg" alt="" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="wisher-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="wisher-input"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  maxLength={60}
                  required
                />

                <div className="wisher-textarea-wrapper">
                  <textarea
                    placeholder="Your Wishes"
                    className="wisher-textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={500}
                    required
                  />
                  <button
                    type="button"
                    className="wisher-ai-btn"
                    onClick={handleGenerateAiWish}
                    disabled={isGenerating}
                    title="Generate AI wishes using smart local suggestions"
                  >
                    <Sparkles size={16} />
                    <span>{isGenerating ? 'Generating...' : 'Generate AI wishes'}</span>
                  </button>
                </div>

                {feedback && (
                  <p className="wisher-feedback">{feedback}</p>
                )}

                <button type="submit" className="wisher-button">
                  Submit
                </button>
              </form>

              {/* Bottom Floral Accent */}
              <img
                src="/assets/wishesflower.svg"
                alt=""
                className="eng007-sendwishes-wishesflower"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
