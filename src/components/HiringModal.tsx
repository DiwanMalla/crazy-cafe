"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { X, CheckCircle2, Briefcase, Phone, Sparkles, User, Award } from "lucide-react";

interface HiringModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HiringModal({ isOpen, onClose }: HiringModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("Experienced Masseuse (1+ years)");
  const [availability, setAvailability] = useState("Full Time (Flexible)");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-lg rounded-2xl border border-amber-500/30 bg-[#12141c] p-6 sm:p-8 shadow-2xl shadow-amber-500/10 text-stone-100 z-10 my-8">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 rounded-full p-2 text-stone-400 hover:bg-white/10 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <span className="inline-block text-[11px] font-semibold tracking-wider text-amber-400 uppercase">
                  Careers at J SPA
                </span>
                <h3 className="font-serif text-2xl font-bold text-amber-100">
                  We Are Hiring Female Masseurs
                </h3>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl">
              Looking for female masseurs to join our friendly, high-earning team in Campsie. If you are hardworking and motivated, we welcome you! <br />
              <strong className="text-amber-300">* Experienced masseurs will be prioritized.</strong>
            </p>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 h-4 w-4 text-stone-500" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-stone-800 bg-white/5 pl-10 pr-4 py-3 text-sm text-stone-100 placeholder-stone-600 focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                Contact Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-stone-500" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0412 345 678"
                  className="w-full rounded-xl border border-stone-800 bg-white/5 pl-10 pr-4 py-3 text-sm text-stone-100 placeholder-stone-600 focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                  Experience Level
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full rounded-xl border border-stone-800 bg-[#1a1d28] px-3 py-3 text-xs text-stone-100 focus:border-amber-400 focus:outline-none"
                >
                  <option value="Experienced Masseuse (2+ yrs)">Experienced Masseuse (2+ yrs)</option>
                  <option value="Experienced Masseuse (1+ yr)">Experienced Masseuse (1+ yr)</option>
                  <option value="Trainee / Willing to Learn">Trainee / Willing to Learn</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                  Availability
                </label>
                <select
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="w-full rounded-xl border border-stone-800 bg-[#1a1d28] px-3 py-3 text-xs text-stone-100 focus:border-amber-400 focus:outline-none"
                >
                  <option value="Full Time (Flexible)">Full Time (Flexible)</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Weekends Only">Weekends Only</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                Brief Introduction / Notes
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tell us a little about your massage experience or languages spoken..."
                className="w-full rounded-xl border border-stone-800 bg-white/5 p-3 text-sm text-stone-100 placeholder-stone-600 focus:border-amber-400 focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 py-3.5 text-sm font-semibold text-stone-950 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all"
              >
                <Sparkles className="h-4 w-4" />
                Submit Job Application
              </button>
              <p className="text-center text-[11px] text-stone-400 mt-2">
                Or call us directly at{" "}
                <a href={`tel:${site.phoneRaw}`} className="text-amber-400 underline font-semibold">
                  {site.phone}
                </a>
              </p>
            </div>
          </form>
        ) : (
          <div className="text-center py-6 space-y-5">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-amber-100">
                Application Received!
              </h3>
              <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                Thank you <strong>{name}</strong>. Our management team will contact you at <strong>{phone}</strong> shortly to discuss joining J SPA.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="w-full rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-100 py-3 font-semibold text-sm"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
