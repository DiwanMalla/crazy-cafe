"use client";

import { useState } from "react";
import { services, site } from "@/content/site";
import { X, Calendar, Clock, CheckCircle2, Phone, AlertCircle, Sparkles, User, Mail, ShieldAlert } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedDuration?: number;
}

export function BookingModal({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedDuration,
}: BookingModalProps) {
  const defaultService = services.find((s) => s.id === preselectedServiceId) || services[0];
  const [selectedServiceId, setSelectedServiceId] = useState(defaultService.id);
  
  const currentService = services.find((s) => s.id === selectedServiceId) || services[0];
  
  const [duration, setDuration] = useState<number>(
    preselectedDuration || currentService.durations[0].minutes
  );

  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });

  const [timeSlot, setTimeSlot] = useState("14:00");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [genderPref, setGenderPref] = useState("No Preference");
  const [healthNotes, setHealthNotes] = useState("");
  const [hasMedicalCondition, setHasMedicalCondition] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [bookingRef, setBookingRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentPrice =
    currentService.durations.find((d) => d.minutes === duration)?.price ||
    currentService.durations[0].price;

  const handleServiceChange = (id: string) => {
    setSelectedServiceId(id);
    const newService = services.find((s) => s.id === id);
    if (newService) {
      setDuration(newService.durations[0].minutes);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = "JSPA-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setStep(3);
  };

  const resetAndClose = () => {
    setStep(1);
    setBookingRef(null);
    onClose();
  };

  const timeOptions = [
    "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={resetAndClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl rounded-2xl border border-amber-500/30 bg-[#12141c] p-6 sm:p-8 shadow-2xl shadow-amber-500/10 text-stone-100 z-10 my-8">
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 rounded-full p-2 text-stone-400 hover:bg-white/10 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {step === 1 && (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-serif font-bold text-sm border border-amber-500/40">
                1
              </span>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-amber-200">
                  Select Massage & Time
                </h3>
                <p className="text-xs text-stone-400">
                  Choose your treatment duration and preferred appointment time.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {/* Treatment Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300/80 mb-2">
                  Massage Treatment
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => handleServiceChange(s.id)}
                      className={`text-left p-3.5 rounded-xl border text-sm transition-all ${
                        selectedServiceId === s.id
                          ? "border-amber-400 bg-amber-500/15 text-white shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                          : "border-stone-800 bg-white/5 text-stone-300 hover:border-stone-700 hover:bg-white/10"
                      }`}
                    >
                      <div className="font-medium text-amber-100">{s.name}</div>
                      <div className="text-xs text-stone-400 mt-1 line-clamp-1">
                        {s.category}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Options */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300/80 mb-2">
                  Duration & Price
                </label>
                <div className="flex flex-wrap gap-3">
                  {currentService.durations.map((d) => (
                    <button
                      key={d.minutes}
                      type="button"
                      onClick={() => setDuration(d.minutes)}
                      className={`flex-1 min-w-[100px] py-3 px-4 rounded-xl border text-center transition-all ${
                        duration === d.minutes
                          ? "border-amber-400 bg-amber-400 text-stone-950 font-bold shadow-md"
                          : "border-stone-800 bg-white/5 text-stone-200 hover:border-amber-400/50"
                      }`}
                    >
                      <div className="text-base font-semibold">{d.minutes} Mins</div>
                      <div className={`text-sm ${duration === d.minutes ? "text-stone-900 font-black" : "text-amber-400"}`}>
                        ${d.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300/80 mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-xl border border-stone-800 bg-white/5 px-4 py-3 text-sm text-stone-100 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300/80 mb-2">
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full rounded-xl border border-stone-800 bg-[#1a1d28] px-4 py-3 text-sm text-stone-100 focus:border-amber-400 focus:outline-none"
                  >
                    {timeOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-8 py-3.5 text-sm font-semibold text-stone-950 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all"
                >
                  Continue to Contact Details &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleBookingSubmit}>
            <div className="flex items-center gap-3 mb-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-serif font-bold text-sm border border-amber-500/40">
                2
              </span>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-amber-200">
                  Guest Information & Health
                </h3>
                <p className="text-xs text-stone-400">
                  Please provide your details so we can hold your reservation.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
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
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full rounded-xl border border-stone-800 bg-white/5 pl-10 pr-4 py-3 text-sm text-stone-100 placeholder-stone-600 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Phone Number *
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

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-stone-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@example.com"
                      className="w-full rounded-xl border border-stone-800 bg-white/5 pl-10 pr-4 py-3 text-sm text-stone-100 placeholder-stone-600 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Health Notice Toggle */}
              <div className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 text-xs text-amber-200/90 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-amber-300">
                  <ShieldAlert className="h-4 w-4 text-amber-400" />
                  Massage Etiquette & Medical Consultation
                </div>
                <p>
                  Please inform therapist if you are unwell, pregnant, have high blood pressure, or allergies before treatment begins.
                </p>
                <label className="flex items-center gap-2 pt-1 cursor-pointer text-stone-300">
                  <input
                    type="checkbox"
                    checked={hasMedicalCondition}
                    onChange={(e) => setHasMedicalCondition(e.target.checked)}
                    className="rounded border-stone-700 text-amber-500 focus:ring-amber-400"
                  />
                  I have a medical condition/request to note below
                </label>
              </div>

              {hasMedicalCondition && (
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Medical condition or pressure preference notes
                  </label>
                  <textarea
                    rows={2}
                    value={healthNotes}
                    onChange={(e) => setHealthNotes(e.target.value)}
                    placeholder="e.g. Lower back pain, neck sensitivity, light pressure preferred..."
                    className="w-full rounded-xl border border-stone-800 bg-white/5 p-3 text-sm text-stone-100 placeholder-stone-600 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              )}

              {/* Payment Info */}
              <p className="text-[11px] text-stone-400 italic">
                * No pre-payment required online. Pay in-person at spa reception via Cash or Card (card surcharge applies).
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="rounded-xl border border-stone-800 bg-white/5 px-5 py-3 text-sm font-medium text-stone-300 hover:bg-white/10"
                >
                  &larr; Back
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-8 py-3 text-sm font-semibold text-stone-950 hover:brightness-110 shadow-lg shadow-amber-500/20"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Confirm Appointment Booking
                </button>
              </div>
            </div>
          </form>
        )}

        {step === 3 && bookingRef && (
          <div className="text-center py-4 space-y-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-[0_0_30px_rgba(245,158,11,0.25)] mx-auto animate-bounce">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <div>
              <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/30 mb-2">
                Booking Confirmed
              </span>
              <h3 className="font-serif text-3xl font-bold text-amber-100">
                Reservation Held!
              </h3>
              <p className="text-sm text-stone-300 mt-1">
                We look forward to welcoming you to J SPA Massage.
              </p>
            </div>

            {/* Receipt Box */}
            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-5 text-left space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center border-b border-stone-800 pb-3">
                <span className="text-stone-400">Booking Reference</span>
                <span className="font-mono text-base font-bold text-amber-400 tracking-wider">
                  {bookingRef}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400">Treatment</span>
                <span className="font-medium text-stone-200">{currentService.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400">Duration & Price</span>
                <span className="font-semibold text-amber-300">{duration} Mins (${currentPrice})</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400">Date & Time</span>
                <span className="font-medium text-stone-200">{date} at {timeSlot}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400">Guest Name</span>
                <span className="font-medium text-stone-200">{name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400">Location</span>
                <span className="font-medium text-stone-200">{site.address}</span>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/10 border border-amber-500/30 p-3 text-xs text-amber-200 flex items-center justify-between">
              <span>Need to change or cancel? Call us directly:</span>
              <a
                href={`tel:${site.phoneRaw}`}
                className="font-bold text-amber-400 hover:underline flex items-center gap-1"
              >
                <Phone className="h-3.5 w-3.5" />
                {site.phone}
              </a>
            </div>

            <button
              onClick={resetAndClose}
              className="w-full rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-100 py-3 font-semibold text-sm transition-colors"
            >
              Done & Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
