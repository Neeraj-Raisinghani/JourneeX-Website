export type Feature = {
  slug: string;
  icon: string;
  name: string;
  tagline: string;
  description: string;
  category: "Core Journal" | "Tracking" | "Organization" | "Other";
  details: {
    heading: string;
    body: string;
  }[];
  accentColor: string;
};

export const features: Feature[] = [
  // Core Journal
  {
    slug: "daily-entries",
    icon: "J",
    name: "Daily Entries",
    tagline: "A blank page that wants to be filled.",
    description:
      "Write freely every day in a distraction-free editor. No formatting requirements, no word limits, just you and your thoughts.",
    category: "Core Journal",
    accentColor: "#7c6aff",
    details: [
      {
        heading: "Just start writing",
        body: "The editor opens clean. No prompts, no templates unless you want them. The goal is to lower the friction between thought and page.",
      },
      {
        heading: "Auto-saved instantly",
        body: "Every keystroke is saved. Close the tab, switch apps, lose signal | your entry is there when you come back.",
      },
      {
        heading: "One entry per day",
        body: "JourneeX encourages a single daily entry rather than fragmented notes. Come back to it throughout the day and keep adding.",
      },
    ],
  },
  {
    slug: "ai-reflections",
    icon: "R",
    name: "AI Reflections",
    tagline: "Your journal writes back.",
    description:
      "When you are done writing, Claude reads your entry and responds. Not with bullet points or therapy-speak, but with a warm, conversational reflection under 250 words.",
    category: "Core Journal",
    accentColor: "#7c6aff",
    details: [
      {
        heading: "Written for warmth",
        body: "The Claude integration was tuned over many iterations to write the way a thoughtful friend would speak | second person, prose only, no headers, no generic affirmations.",
      },
      {
        heading: "Grounded in what you wrote",
        body: "The reflection references what you actually said, not a generic wellness template. It feels personal because it is.",
      },
      {
        heading: "Capped at 250 words",
        body: "Short enough to read in under a minute. Long enough to feel real. Every word earns its place.",
      },
    ],
  },
  {
    slug: "entry-history",
    icon: "H",
    name: "Entry History",
    tagline: "Everything you have written, whenever you need it.",
    description:
      "Browse every past entry in a clean timeline. Tap any day to revisit what you wrote and the reflection that came back.",
    category: "Core Journal",
    accentColor: "#7c6aff",
    details: [
      {
        heading: "Timeline view",
        body: "Entries are organised chronologically so you can scroll back through your days the way you would flip through a physical journal.",
      },
      {
        heading: "Read your past reflections",
        body: "Every AI reflection is stored alongside its entry. You can re-read what came back weeks or months later.",
      },
      {
        heading: "Never lose a day",
        body: "Entries are stored securely in Supabase. They do not expire, they do not disappear.",
      },
    ],
  },
  {
    slug: "search",
    icon: "S",
    name: "Search",
    tagline: "Find anything you have ever written.",
    description:
      "Full-text search across every entry you have ever written. Find a feeling, a name, an idea, in seconds.",
    category: "Core Journal",
    accentColor: "#7c6aff",
    details: [
      {
        heading: "Instant full-text search",
        body: "Search runs across the full content of every entry, not just titles or tags. If you wrote it, you can find it.",
      },
      {
        heading: "Search your reflections too",
        body: "AI reflections are searchable as well. Find every entry where something specific came up.",
      },
      {
        heading: "No filters needed",
        body: "Just type. Results surface in real time as you write.",
      },
    ],
  },

  // Tracking
  {
    slug: "habit-tracker",
    icon: "T",
    name: "Habit Tracker",
    tagline: "Build the habits that actually stick.",
    description:
      "Log daily habits directly inside your journal. Track what you are working on | exercise, reading, hydration, sleep | and see consistency build over time.",
    category: "Tracking",
    accentColor: "#22d3a5",
    details: [
      {
        heading: "Log habits in one tap",
        body: "Each day shows your habit checklist at the top of the entry page. One tap to mark done, no separate app needed.",
      },
      {
        heading: "Custom habits",
        body: "Create your own habit list. Track what matters to you, not a preset list someone else decided was important.",
      },
      {
        heading: "Habit heatmap",
        body: "See a heatmap of any habit over the past 90 days. Patterns emerge faster than you would expect.",
      },
    ],
  },
  {
    slug: "mood-day-tracker",
    icon: "M",
    name: "Mood | Day Tracker",
    tagline: "How was today, really?",
    description:
      "Rate your day and log your mood with each entry. Over time, patterns emerge | what kinds of days correlate with what kinds of feelings.",
    category: "Tracking",
    accentColor: "#22d3a5",
    details: [
      {
        heading: "Day rating",
        body: "A simple 1 to 5 scale at the top of each entry. Takes two seconds. Adds up to real insight over months.",
      },
      {
        heading: "Mood tags",
        body: "Pick from a set of mood labels | focused, anxious, grateful, tired, excited | or create your own. Multiple tags per day.",
      },
      {
        heading: "Trends over time",
        body: "Your mood and day ratings are plotted over time so you can spot patterns | good weeks, rough patches, seasonal shifts.",
      },
    ],
  },
  {
    slug: "streak-counter",
    icon: "C",
    name: "Streak Counter",
    tagline: "Show up every day.",
    description:
      "Your current writing streak is front and centre. Miss a day and it resets. Simple, honest, and surprisingly motivating.",
    category: "Tracking",
    accentColor: "#22d3a5",
    details: [
      {
        heading: "Current streak always visible",
        body: "Your streak shows on the home screen every time you open JourneeX. No hiding it, no softening it.",
      },
      {
        heading: "Longest streak record",
        body: "Your all-time best is tracked separately so a missed day does not erase the memory of what you achieved.",
      },
      {
        heading: "No streak padding",
        body: "There is no freeze mechanic or grace period. A missed day is a missed day. The streak is real or it is not.",
      },
    ],
  },
  {
    slug: "weekly-summary",
    icon: "W",
    name: "Weekly Summary",
    tagline: "Seven days | one honest look back.",
    description:
      "Every Sunday, Claude reads your week's entries and writes a summary. Not a list of what you did, but a reflection on how the week felt.",
    category: "Tracking",
    accentColor: "#22d3a5",
    details: [
      {
        heading: "Written, not generated",
        body: "The weekly summary uses the same prompt philosophy as daily reflections | warm prose, no bullet points, grounded in what you actually wrote.",
      },
      {
        heading: "Delivered Sunday evening",
        body: "Shows up automatically at the end of your week. No action required.",
      },
      {
        heading: "Stored permanently",
        body: "Every weekly summary is saved so you can read back through them months later like chapters.",
      },
    ],
  },

  // Organization
  {
    slug: "tags-categories",
    icon: "G",
    name: "Tags | Categories",
    tagline: "Organise without overthinking.",
    description:
      "Add tags to any entry to group related thoughts. Work, travel, family, ideas | your taxonomy, your rules.",
    category: "Organization",
    accentColor: "#ff6a9b",
    details: [
      {
        heading: "Freeform tags",
        body: "Type any tag you want. No preset list. JourneeX remembers your tags and suggests them next time.",
      },
      {
        heading: "Filter by tag",
        body: "Tap any tag to see every entry that carries it, across all time.",
      },
      {
        heading: "Lightweight by design",
        body: "Tags are optional and frictionless. They are there when you want structure, invisible when you do not.",
      },
    ],
  },
  {
    slug: "writing-stats",
    icon: "N",
    name: "Writing Stats",
    tagline: "See how much you have said.",
    description:
      "Word counts, entries per month, average length | a quiet record of your writing life building up over time.",
    category: "Organization",
    accentColor: "#ff6a9b",
    details: [
      {
        heading: "Words written over time",
        body: "A running total of every word you have written in JourneeX. Watching it grow is its own kind of motivation.",
      },
      {
        heading: "Entry length trends",
        body: "See whether your entries are getting longer, shorter, or staying consistent. No judgment, just data.",
      },
      {
        heading: "Most active days and times",
        body: "Find out when you write best. Morning journaller or midnight thoughts? The data knows.",
      },
    ],
  },

  // Other
  {
    slug: "mobile-experience",
    icon: "P",
    name: "Mobile Experience",
    tagline: "Built for the phone in your pocket.",
    description:
      "JourneeX was designed mobile-first. A bottom tab navigation system built from scratch gives it a native app feel on every screen size.",
    category: "Other",
    accentColor: "#7c6aff",
    details: [
      {
        heading: "Bottom tab navigation",
        body: "Designed and implemented from scratch, no framework. Thumbs-friendly, fast, and native-feeling on both iOS and Android browsers.",
      },
      {
        heading: "Optimised for small screens",
        body: "Every element was tested at 375px wide. Nothing overflows, nothing breaks, nothing feels like a desktop site squeezed into a phone.",
      },
      {
        heading: "No app store required",
        body: "JourneeX runs in your browser. Add it to your home screen for a full app experience, no download, no update prompts.",
      },
    ],
  },
  {
    slug: "privacy-security",
    icon: "K",
    name: "Privacy | Security",
    tagline: "Your entries are yours. Full stop.",
    description:
      "Authentication via Supabase. API keys in environment variables, never exposed to the client. Your journal is private by default.",
    category: "Other",
    accentColor: "#ff6a9b",
    details: [
      {
        heading: "Supabase authentication",
        body: "Sign in securely. Your entries are tied to your account and inaccessible to anyone else.",
      },
      {
        heading: "Secrets managed properly",
        body: "API keys live in Cloudflare Workers environment variables, never in client-side code. Learned the hard way once | now baked into the architecture.",
      },
      {
        heading: "No tracking, no ads",
        body: "JourneeX does not sell data, does not run ads, and does not track behaviour beyond what is needed to make the app work.",
      },
    ],
  },
];

export const featuresByCategory = features.reduce(
  (acc, f) => {
    if (!acc[f.category]) acc[f.category] = [];
    acc[f.category].push(f);
    return acc;
  },
  {} as Record<string, Feature[]>
);

export const categoryOrder: Feature["category"][] = [
  "Core Journal",
  "Tracking",
  "Organization",
  "Other",
];
