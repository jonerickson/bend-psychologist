const services = [
  {
    icon: (
      <svg
        className="h-8 w-8 text-sage"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
    title: "Counseling",
    description:
      "Counseling for adolescent and adult clients navigating life's most complex challenges. Through a collaborative, evidence-based approach, we work together to find clarity, build resilience, and discover a meaningful path forward.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8 text-sage"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
        />
      </svg>
    ),
    title: "Evaluations",
    description:
      "Comprehensive psychological evaluations providing diagnostic clarity, targeted treatment recommendations, and forensic assessments. Thorough, professional evaluations that guide informed decisions about care and next steps.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8 text-sage"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
    title: "Consultation",
    description:
      "Expert consultation and testimony for situations requiring specialized psychological insight. Whether guiding critical organizational decisions or providing courtroom expertise, Dr. Barram brings authority and clarity.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8 text-sage"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
        />
      </svg>
    ),
    title: "Public Speaking",
    description:
      "Engaging presentations and lectures that bring psychological insight to diverse audiences. From First Responder wellness to organizational resilience, Dr. Barram delivers impactful talks tailored to your group's needs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-sage">
          Services
        </p>

        <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
          How I Can Help
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-darktext/70">
          A comprehensive range of psychological services designed to support
          individuals, organizations, and communities through every stage of
          their journey.
        </p>

        {/* Card grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-warmgray bg-warmgray p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-serif text-2xl text-charcoal">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-darktext/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
