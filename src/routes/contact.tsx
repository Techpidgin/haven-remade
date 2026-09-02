import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Blueprint Haven Architects" },
      {
        name: "description",
        content:
          "Talk to Blueprint Haven Architects in Rochester, NY about your site, brief or feasibility study.",
      },
      { property: "og:title", content: "Contact Blueprint Haven Architects" },
      {
        property: "og:description",
        content: "Rochester, NY studio — tell us about your site and brief.",
      },
    ],
  }),
  component: Contact,
});

const DETAILS = [
  { label: "Website", value: "www.blueprinthaven.com" },
  { label: "Email Address", value: "info@blueprinthaven.com" },
  { label: "Phone No", value: "+1-929-647-6610" },
  { label: "Office Address", value: "54-A Sager Dr, Rochester, NY 14607, United States" },
  { label: "Studio Hours", value: "Monday – Friday, 09:00 – 18:00 EST" },
];

const FIELDS = [
  { name: "name", label: "Your name", type: "text" },
  { name: "email", label: "Email address", type: "email" },
  { name: "location", label: "Project location", type: "text" },
] as const;

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero eyebrow="Get in touch" title="Tell us about the site" crumb="Contact" />

      <section className="relative bg-background py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 plan-grid opacity-60" />
        <div className="relative mx-auto grid max-w-[92rem] gap-16 px-5 md:px-10 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <p className="eyebrow text-accent">Studio details</p>
            <dl className="mt-10 space-y-9">
              {DETAILS.map((d) => (
                <div key={d.label} className="border-b border-border pb-6">
                  <dt className="eyebrow text-muted-foreground">{d.label}</dt>
                  <dd className="mt-3 text-lg">{d.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow text-accent">Project enquiry</p>
            <form
              className="mt-10 space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {FIELDS.map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="eyebrow text-muted-foreground">
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required
                    className="mt-3 w-full border-b border-border bg-transparent pb-3 text-lg outline-none transition-colors focus:border-accent"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="brief" className="eyebrow text-muted-foreground">
                  Brief
                </label>
                <textarea
                  id="brief"
                  name="brief"
                  rows={4}
                  required
                  className="mt-3 w-full resize-none border-b border-border bg-transparent pb-3 text-lg outline-none transition-colors focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-4 bg-primary px-9 py-4 eyebrow text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {sent ? "Thank you — we'll reply shortly" : "Send enquiry"}
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
