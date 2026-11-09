"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./hero-film.module.css";

interface HeroFilmProps {
  src: string;
  poster: string;
  title: string;
  className?: string;
}

export function HeroFilm({ src, poster, title, className }: HeroFilmProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.play().catch(() => {});
    }
  }, []);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const handleToggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <>
      <video
        ref={videoRef}
        className={className}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        aria-label={`${title} product film`}
      />
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.control}
          onClick={handleTogglePlay}
        >
          {isPlaying ? "PAUSE" : "PLAY"}
        </button>
        <button
          type="button"
          className={styles.control}
          onClick={handleToggleMute}
        >
          {isMuted ? "UNMUTE" : "MUTE"}
        </button>
      </div>
    </>
  );
}
