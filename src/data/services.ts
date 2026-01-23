export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "xbody",
    title: "XBODY EMS",
    description:
      "Revolutionary Electro Muscle Stimulation technology delivers a full-body workout in just 20 minutes. Efficient, effective, and transformative.",

    image:
      "https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFTVMlMjB0cmFpbmluZyUyMGZpdG5lc3N8ZW58MXx8fHwxNzY5MDE4MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["20-minute sessions", "Muscle activation", "Visible results"],
  },

  {
    id: "pilates",
    title: "Pilates Reformer",
    description:
      "Experience low-impact, high-intensity workouts that strengthen your core, improve flexibility, and enhance posture. Perfect for all fitness levels.",
    image:
      "https://images.unsplash.com/photo-1754257319787-4c19f30f2a16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwcmVmb3JtZXIlMjBzdHVkaW98ZW58MXx8fHwxNzY4OTkyOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Personalized sessions",
      "Expert guidance",
      "Small group classes",
    ],
  },
];
