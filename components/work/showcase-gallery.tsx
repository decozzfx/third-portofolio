"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import styles from "@/app/(main)/works/[slug]/work-detail.module.css";
import lightbox from "./showcase-gallery.module.css";

type ShowcaseGalleryProps = {
  images: string[];
  title: string;
};

const SWIPE_THRESHOLD = 50;

export function ShowcaseGallery({ images, title }: ShowcaseGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? i : (i - 1 + images.length) % images.length,
    );
  }, [images.length]);
  const showNext = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, showPrev, showNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (delta > SWIPE_THRESHOLD) showPrev();
    else if (delta < -SWIPE_THRESHOLD) showNext();
  };

  return (
    <>
      <div className={styles.grid}>
        {images.map((image, i) => (
          <figure
            key={image}
            className={`${styles.shot} ${lightbox.clickable}`}
            data-reveal
            role="button"
            tabIndex={0}
            onClick={() => setOpenIndex(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpenIndex(i);
              }
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={`${title} screenshot ${i + 2}`} />
          </figure>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className={lightbox.overlay}
          onClick={close}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshots`}
        >
          <button
            type="button"
            className={lightbox.close}
            onClick={close}
            aria-label="Close"
          >
            ×
          </button>

          {images.length > 1 && (
            <button
              type="button"
              className={`${lightbox.nav} ${lightbox.prev}`}
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
            >
              ←
            </button>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={openIndex}
            src={images[openIndex]}
            alt={`${title} screenshot ${openIndex + 2}`}
            className={lightbox.image}
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <button
              type="button"
              className={`${lightbox.nav} ${lightbox.next}`}
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
            >
              →
            </button>
          )}
        </div>
      )}
    </>
  );
}
