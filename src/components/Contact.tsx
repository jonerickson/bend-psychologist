"use client";

import { FormEvent, useState } from "react";

const reasons = [
  "Counseling",
  "Evaluation",
  "Consultation",
  "Speaking",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-sage">
          Contact
        </p>

        <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
          Get In Touch
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="rounded-xl bg-sage/10 p-8 text-center">
                <p className="font-serif text-2xl text-charcoal">Thank you!</p>
                <p className="mt-2 text-darktext/70">
                  Your message has been received. We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-charcoal"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-warmgray bg-white px-4 py-3 text-darktext transition-colors focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-charcoal"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-warmgray bg-white px-4 py-3 text-darktext transition-colors focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-charcoal"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-lg border border-warmgray bg-white px-4 py-3 text-darktext transition-colors focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="reason"
                    className="mb-1.5 block text-sm font-medium text-charcoal"
                  >
                    Reason for Contact *
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    required
                    className="w-full rounded-lg border border-warmgray bg-white px-4 py-3 text-darktext transition-colors focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage"
                  >
                    <option value="">Select a reason...</option>
                    {reasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-charcoal"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none rounded-lg border border-warmgray bg-white px-4 py-3 text-darktext transition-colors focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-sage px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:scale-105 hover:bg-sage-dark"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Location info */}
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl text-charcoal">
                  RiverFlow Psychology Services
                </h3>
                <p className="mt-1 text-darktext/70">
                  Dr. R. Andrew Barram, Psy.D.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-sage">
                  Address
                </p>
                <p className="mt-1 text-darktext/70">
                  25 NW Park Place
                  <br />
                  Bend, OR 97701
                </p>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-sage">
                  Contact
                </p>
                <p className="mt-1 text-darktext/70">
                  Phone: (541) 000-0000
                  <br />
                  Email: info@bendpsychologist.com
                </p>
                <p className="mt-1 text-xs italic text-darktext/40">
                  * Phone and email are placeholders
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 flex aspect-[4/3] items-center justify-center rounded-xl bg-warmgray">
              <div className="text-center">
                <svg
                  className="mx-auto h-10 w-10 text-darktext/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p className="mt-2 text-sm text-darktext/40">Map placeholder</p>
                <p className="text-xs text-darktext/30">
                  25 NW Park Place, Bend, OR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
