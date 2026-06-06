import { useMemo, useState, type FormEvent } from "react";
import { IMAGES } from "@/utils/constants";

export type EventFilter = "all" | "workshops" | "showcases";

export type EventBadge = {
  label: string;
  variant: "secondary" | "primary-container" | "tertiary-container";
};

export type EventMeta = {
  icon: "calendar_today" | "schedule" | "location_on";
  text: string;
};

export type StudioEvent = {
  id: string;
  layout: "featured" | "card" | "list";
  category: EventFilter | "session" | "special";
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageOpacity?: string;
  badges: EventBadge[];
  meta: EventMeta[];
  price?: string;
  cta: string;
  ctaVariant: "register" | "event-outline" | "secure";
  featured?: boolean;
  listLabel?: string;
  listDetails?: { label: string; value: string }[];
};

export const EVENT_FILTERS: { id: EventFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "workshops", label: "Workshops" },
  { id: "showcases", label: "Showcases" },
];

const EVENTS: StudioEvent[] = [
  {
    id: "urban-flow",
    layout: "featured",
    category: "workshops",
    title: "Urban Flow Intensive",
    description:
      "Master the art of fluid transition and sharp precision in this 3-day deep dive into urban contemporary fusion with world-renowned instructors.",
    image: IMAGES.urbanFlow,
    imageAlt: "Dancer performing an intense urban contemporary move with neon pink highlights",
    imageOpacity: "opacity-40",
    badges: [
      { label: "Workshop", variant: "secondary" },
      { label: "Top Rated", variant: "primary-container" },
    ],
    meta: [
      { icon: "calendar_today", text: "Oct 15-17" },
      { icon: "schedule", text: "10:00 AM - 4:00 PM" },
    ],
    price: "$180.00",
    cta: "Register Now",
    ctaVariant: "register",
    featured: true,
  },
  {
    id: "midnight-rhythms",
    layout: "card",
    category: "session",
    title: "Midnight Rhythms",
    description:
      "Open freestyle session for advanced dancers. No choreography, just raw expression under the studio lights.",
    image: IMAGES.midnightRhythms,
    imageAlt: "Dancers practicing under blue and magenta ambient studio lighting",
    imageOpacity: "opacity-15",
    badges: [{ label: "Session", variant: "tertiary-container" }],
    meta: [
      { icon: "calendar_today", text: "Every Friday" },
      { icon: "schedule", text: "10:00 PM - 1:00 AM" },
    ],
    cta: "Join Session",
    ctaVariant: "event-outline",
  },
  {
    id: "global-grooves",
    layout: "card",
    category: "showcases",
    title: "Global Grooves",
    description:
      "A multi-genre showcase celebrating dance styles from across the globe. From Afro-beats to Flamenco fusion.",
    image: IMAGES.globalGrooves,
    imageAlt: "Dancers on a grand stage with cyan and electric blue lighting",
    imageOpacity: "opacity-15",
    badges: [{ label: "Showcase", variant: "secondary" }],
    meta: [
      { icon: "calendar_today", text: "Nov 12" },
      { icon: "location_on", text: "Main Stage" },
    ],
    cta: "Get Tickets",
    ctaVariant: "event-outline",
  },
  {
    id: "elite-masterclass",
    layout: "list",
    category: "special",
    title: "Elite Masterclass Series",
    description:
      "An exclusive opportunity to learn from industry legends. Limited capacity of 15 dancers for personalized feedback and critique.",
    image: IMAGES.eliteMasterclass,
    imageAlt: "Street dancer performing under a neon pink spotlight",
    imageOpacity: "opacity-70",
    badges: [],
    meta: [],
    listLabel: "Special Event",
    listDetails: [
      { label: "Date", value: "Dec 05" },
      { label: "Time", value: "2:00 PM" },
      { label: "Price", value: "$120.00" },
    ],
    cta: "Secure Spot",
    ctaVariant: "secure",
  },
];

export function useEvents() {
  const [activeFilter, setActiveFilter] = useState<EventFilter>("all");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredEvents = useMemo(() => {
    if (activeFilter === "all") return EVENTS;

    if (activeFilter === "workshops") {
      return EVENTS.filter(
        (event) => event.category === "workshops" || event.category === "session",
      );
    }

    return EVENTS.filter((event) => event.category === "showcases");
  }, [activeFilter]);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return {
    heroImage: IMAGES.eventsHero,
    activeFilter,
    setActiveFilter,
    filteredEvents,
    email,
    setEmail,
    subscribed,
    handleSubscribe,
  };
}
