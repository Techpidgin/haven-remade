import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Blueprint Haven Architects" },
      {
        name: "description",
        content:
          "Architectural design, interior architecture, masterplanning, sustainability consulting, visualisation and site supervision.",
      },
      { property: "og:title", content: "Services — Blueprint Haven Architects" },
      {
        property: "og:description",
        content: "Six disciplines, from first sketch to final site inspection.",
      },
    ],
  }),
  component: Services;
});

function Services() {
  return null;
}
