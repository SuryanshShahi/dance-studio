import { useState, type FormEvent } from "react";
import { IMAGES } from "@/utils/constants";

export type StudentSpecial = {
  id: string;
  number: string;
  numberColor: "tertiary" | "primary" | "secondary";
  title: string;
  description: string;
  price: number;
  cta: string;
  featured?: boolean;
  ctaVariant: "card-outline" | "card-primary";
};

export type DanceStyle = {
  id: string;
  title: string;
  chip: string;
  chipVariant: "primary" | "secondary" | "tertiary";
  image: string;
};

export function useHome() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const studentSpecials: StudentSpecial[] = [
    {
      id: "trial-week",
      number: "01",
      numberColor: "tertiary",
      title: "Trial Week",
      description: "Unlimited access to all open level classes for seven days.",
      price: 29,
      cta: "Grab the Deal",
      ctaVariant: "card-outline",
    },
    {
      id: "intro-pack",
      number: "02",
      numberColor: "primary",
      title: "Intro Pack",
      description: "3 classes of your choice. Perfect for finding your preferred style.",
      price: 45,
      cta: "Buy Package",
      featured: true,
      ctaVariant: "card-primary",
    },
    {
      id: "private-session",
      number: "03",
      numberColor: "secondary",
      title: "Private Session",
      description: "One-on-one 60 minute coaching with a master instructor.",
      price: 80,
      cta: "Book Private",
      ctaVariant: "card-outline",
    },
  ];

  const danceStyles: DanceStyle[] = [
    {
      id: "hip-hop",
      title: "Hip Hop",
      chip: "High Intensity",
      chipVariant: "primary",
      image: IMAGES.hipHop,
    },
    {
      id: "contemporary",
      title: "Contemporary",
      chip: "Fluid Motion",
      chipVariant: "secondary",
      image: IMAGES.contemporary,
    },
    {
      id: "ballet",
      title: "Modern Ballet",
      chip: "Precision",
      chipVariant: "tertiary",
      image: IMAGES.ballet,
    },
    {
      id: "jazz-funk",
      title: "Jazz Funk",
      chip: "Energy",
      chipVariant: "primary",
      image: IMAGES.jazzFunk,
    },
  ];

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return {
    heroImage: IMAGES.hero,
    studentSpecials,
    danceStyles,
    email,
    setEmail,
    subscribed,
    handleSubscribe,
  };
}
