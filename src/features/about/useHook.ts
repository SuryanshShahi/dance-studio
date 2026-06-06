import { IMAGES } from "@/utils/constants";

export type PhilosophyItem = {
  id: string;
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
};

export type Instructor = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export function useAbout() {
  const philosophy: PhilosophyItem[] = [
    {
      id: "intent",
      icon: "bolt",
      title: "High-Octane Intent",
      description:
        "Every motion is a decision. We focus on explosive power and precision, ensuring that every performance leaves a lasting impact on both the dancer and the audience.",
    },
    {
      id: "fluid",
      icon: "waves",
      title: "Fluid Dynamics",
      description:
        "Motion should never truly stop. We teach the art of transition—finding the effortless flow between high-intensity sequences and moments of stillness.",
      featured: true,
    },
    {
      id: "sonic",
      icon: "graphic_eq",
      title: "Sonic Connection",
      description:
        "The beat is the blueprint. Our instructors emphasize deep musicality, training students to hear the micro-rhythms that transform dance into visual sound.",
    },
  ];

  const instructors: Instructor[] = [
    {
      id: "maya",
      name: "Maya Chen",
      role: "Contemporary Lead",
      image: IMAGES.instructorMaya,
    },
    {
      id: "marcus",
      name: "Marcus Thorne",
      role: "Hip-Hop / Urban",
      image: IMAGES.instructorMarcus,
    },
    {
      id: "elena",
      name: "Elena Rossi",
      role: "Classical Tech",
      image: IMAGES.instructorElena,
    },
    {
      id: "david",
      name: "David Kim",
      role: "Experimental Fusion",
      image: IMAGES.instructorDavid,
    },
  ];

  return {
    heroImage: IMAGES.aboutHero,
    storyImage: IMAGES.aboutStory,
    philosophy,
    instructors,
  };
}
