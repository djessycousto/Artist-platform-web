const user = [
  {
    title: "Echoes of Form",
    artist: "ELENA_USER_ID",
    year: 2025,
    medium: "Bronze and stone",
    dimensions: "120 × 60 × 45 cm",
    description:
      "A sculptural study exploring the relationship between physical form, memory and architectural space.",
    image: "/images/artwork/echoes-of-form.jpg",
    category: "Sculpture",
    tags: ["identity", "memory", "form"],
    isFeatured: true,
  },
  {
    title: "The Weight of Silence",
    artist: "ELENA_USER_ID",
    year: 2024,
    medium: "Patinated bronze",
    dimensions: "95 × 40 × 35 cm",
    description: "A study of silence expressed through an abstract human form.",
    image: "/images/artwork/the-weight-of-silence.jpg",
    category: "Sculpture",
    tags: ["silence", "body", "identity"],
    isFeatured: false,
  },
  {
    title: "After the Rain",
    artist: "JULIAN_USER_ID",
    year: 2026,
    medium: "Oil on canvas",
    dimensions: "140 × 100 cm",
    description:
      "An atmospheric painting examining memory through fragmented urban landscapes.",
    image: "/images/artwork/after-the-rain.jpg",
    category: "Painting",
    tags: ["memory", "urban", "landscape"],
    isFeatured: true,
  },
  {
    title: "Fragments",
    artist: "JULIAN_USER_ID",
    year: 2025,
    medium: "Oil and mixed media",
    dimensions: "110 × 80 cm",
    description:
      "A layered composition exploring fragmentation and personal history.",
    image: "/images/artwork/fragments.jpg",
    category: "Mixed Media",
    tags: ["history", "fragmentation", "memory"],
    isFeatured: false,
  },
  {
    title: "Between Rooms",
    artist: "SIENNA_USER_ID",
    year: 2026,
    medium: "Photography and installation",
    dimensions: "Variable",
    description:
      "A photographic installation exploring isolation and the spaces between public and private life.",
    image: "/images/artwork/between-rooms.jpg",
    category: "Photography",
    tags: ["space", "isolation", "identity"],
    isFeatured: true,
  },
];

const artwork = [
  {
    title: "Echoes of Form",
    artist: "ELENA_USER_ID",
    year: 2025,
    medium: "Bronze and stone",
    dimensions: "120 × 60 × 45 cm",
    description:
      "A sculptural study exploring the relationship between physical form, memory and architectural space.",
    image: "/images/artwork/echoes-of-form.jpg",
    category: "Sculpture",
    tags: ["identity", "memory", "form"],
    isFeatured: true,
  },
  {
    title: "The Weight of Silence",
    artist: "ELENA_USER_ID",
    year: 2024,
    medium: "Patinated bronze",
    dimensions: "95 × 40 × 35 cm",
    description: "A study of silence expressed through an abstract human form.",
    image: "/images/artwork/the-weight-of-silence.jpg",
    category: "Sculpture",
    tags: ["silence", "body", "identity"],
    isFeatured: false,
  },
  {
    title: "After the Rain",
    artist: "JULIAN_USER_ID",
    year: 2026,
    medium: "Oil on canvas",
    dimensions: "140 × 100 cm",
    description:
      "An atmospheric painting examining memory through fragmented urban landscapes.",
    image: "/images/artwork/after-the-rain.jpg",
    category: "Painting",
    tags: ["memory", "urban", "landscape"],
    isFeatured: true,
  },
  {
    title: "Fragments",
    artist: "JULIAN_USER_ID",
    year: 2025,
    medium: "Oil and mixed media",
    dimensions: "110 × 80 cm",
    description:
      "A layered composition exploring fragmentation and personal history.",
    image: "/images/artwork/fragments.jpg",
    category: "Mixed Media",
    tags: ["history", "fragmentation", "memory"],
    isFeatured: false,
  },
  {
    title: "Between Rooms",
    artist: "SIENNA_USER_ID",
    year: 2026,
    medium: "Photography and installation",
    dimensions: "Variable",
    description:
      "A photographic installation exploring isolation and the spaces between public and private life.",
    image: "/images/artwork/between-rooms.jpg",
    category: "Photography",
    tags: ["space", "isolation", "identity"],
    isFeatured: true,
  },
];

const exhibition = [
  {
    title: "Structure & Decay",
    slug: "structure-and-decay",
    description:
      "An exploration of transformation, architecture and the passage of time through sculpture, painting and installation.",
    bannerImage: "/images/exhibitions/structure-and-decay.jpg",
    startDate: "2026-09-12",
    endDate: "2026-10-20",
    location: "Chromatic Studio, London",
    artists: ["ELENA_USER_ID", "JULIAN_USER_ID"],
    isFeatured: true,
  },
  {
    title: "Humanity Refracted",
    slug: "humanity-refracted",
    description:
      "A group exhibition examining contemporary identity through portraiture, photography and mixed media.",
    bannerImage: "/images/exhibitions/humanity-refracted.jpg",
    startDate: "2026-10-02",
    endDate: "2026-11-15",
    location: "The Modern Gallery, Berlin",
    artists: ["SIENNA_USER_ID", "JULIAN_USER_ID"],
    isFeatured: false,
  },
  {
    title: "Digital Horizons",
    slug: "digital-horizons",
    description:
      "A contemporary exhibition exploring the relationship between technology, identity and the physical world.",
    bannerImage: "/images/exhibitions/digital-horizons.jpg",
    startDate: "2026-11-20",
    endDate: "2027-01-10",
    location: "North Gallery, London",
    artists: ["SIENNA_USER_ID"],
    isFeatured: false,
  },
];

module.exports = { user, artwork, exhibition };
