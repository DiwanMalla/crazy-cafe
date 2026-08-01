"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

export function AudioRelaxationPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);

  const toggleAudio = () => {
    if (!isPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
        gainNodeRef.current = gainNode;

        const filterNode = ctx.createBiquadFilter();
        filterNode.type = "lowpass";
        filterNode.frequency.setValueAtTime(320, ctx.currentTime);

        const osc1 = ctx.createOscillator();
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(146.83, ctx.currentTime); // D3 chord sound

        const osc2 = ctx.createOscillator();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(220, ctx.currentTime); // A3 harmonic

        osc1.connect(filterNode);
        osc2.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc1.start();
        osc2.start();

        osc1Ref.current = osc1;
        osc2Ref.current = osc2;
        setIsPlaying(true);
      } catch (e) {
        console.error("Web Audio API error", e);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.2);
        setTimeout(() => {
          osc1Ref.current?.stop();
          osc2Ref.current?.stop();
          audioCtxRef.current?.close();
          setIsPlaying(false);
        }, 300);
      } else {
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
        isPlaying
          ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
          : "bg-white/5 text-stone-300 hover:bg-white/10 border border-white/10"
      }`}
      title="Toggle relaxing ambient spa audio"
    >
      {isPlaying ? (
        <>
          <Volume2 className="h-3.5 w-3.5 animate-pulse text-amber-400" />
          <span className="hidden sm:inline">Spa Soundscape</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
        </>
      ) : (
        <>
          <VolumeX className="h-3.5 w-3.5 text-stone-400" />
          <span className="hidden sm:inline">Relaxation Sound</span>
          <Sparkles className="h-3 w-3 text-amber-400/70" />
        </>
      )}
    </button>
  );
}
