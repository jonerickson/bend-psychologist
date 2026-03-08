const specialties = [
  "First Responder mental health & wellness",
  "Adolescent and adult psychotherapy",
  "Forensic psychological evaluations",
  "Expert testimony and consultation",
  "Trauma and PTSD treatment",
  "Occupational stress and burnout recovery",
];

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "A confidential conversation to understand your needs, answer questions, and determine how we can best work together.",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "A thorough evaluation to build a complete picture of your strengths, challenges, and goals for treatment.",
  },
  {
    number: "03",
    title: "Personalized Treatment",
    description:
      "An evidence-based treatment plan tailored to your unique situation, delivered with warmth and collaboration.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Continued guidance and adjustment as you grow, building lasting resilience and sustainable well-being.",
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Specialties() {
  return (
    <section id="specialties" className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-sage">
          Specialties
        </p>

        <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
          Dedicated to Those Who
          <br />
          <span className="text-sage-light">Serve &amp; Protect</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          First Responders face extraordinary demands that most people never
          experience. Dr. Barram understands the unique pressures of the job
          &mdash; the critical incidents, the cumulative stress, and the
          barriers to seeking help. His practice provides a safe, confidential
          space built on trust and respect.
        </p>

        {/* Specialties list */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 max-w-2xl">
          {specialties.map((specialty) => (
            <div key={specialty} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-white/80">{specialty}</span>
            </div>
          ))}
        </div>

        {/* Process pathway */}
        <div className="mt-20">
          <h3 className="font-serif text-2xl text-white md:text-3xl">
            The Therapeutic Journey
          </h3>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-6 left-12 right-0 hidden h-px bg-sage/30 lg:block" />
                )}

                {/* Number circle */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-sage text-sm font-semibold text-sage">
                  {step.number}
                </div>

                <h4 className="font-serif text-lg text-white">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
