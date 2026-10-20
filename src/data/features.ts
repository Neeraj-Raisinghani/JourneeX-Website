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
  stat: { value: string; label: string };
  quote: string;
};

export const features: Feature[] = [
  // Core Journal
  {
    slug: "daily-entries",
    icon: "J",
    name: "Daily Entries",
    tagline: "A blank page that wants to be filled.",
    description:
      "Write freely every day in a distraction-free editor. No formatting requirements, no word limits, no prompts. Just you and the page.",
    category: "Core Journal",
    accentColor: "#7c6aff",
    stat: {
      value: "15 min",
      label: "is all it takes. Studies show writing for 15 minutes a day measurably reduces stress and improves emotional clarity.",
    },
    quote:
      "The act of writing is the act of discovering what you believe.",
    details: [
      {
        heading: "Just start writing",
        body: "The editor opens clean. No prompts, no templates unless you want them. The goal is to lower the friction between thought and page.",
      },
      {
        heading: "Auto-saved instantly",
        body: "Every keystroke is saved. Close the tab, switch apps, lose signal. Your entry is there when you come back.",
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
      "When you finish writing, the AI reads your entry and responds. Not bullet points or therapy-speak. A warm, honest reflection under 250 words.",
    category: "Core Journal",
    accentColor: "#7c6aff",
    stat: {
      value: "250",
      label: "words or fewer. Every reflection is capped at 250 words. Short enough to read in under a minute. Long enough to feel real.",
    },
    quote:
      "It is not like talking to a chatbot. It is like someone actually read what I wrote.",
    details: [
      {
        heading: "Written for warmth",
        body: "The reflection was tuned over many iterations to write the way a thoughtful friend would speak. Second person, prose only, no headers, no generic affirmations.",
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

  // Tracking
  {
    slug: "habit-tracker",
    icon: "T",
    name: "Habit Tracker",
    tagline: "Small daily wins that add up over time.",
    description:
      "Log your daily habits inside your journal. Track exercise, reading, sleep, and more. Watch consistency build over time.",
    category: "Tracking",
    accentColor: "#22d3a5",
    stat: {
      value: "42%",
      label: "more likely to stick with a habit when you track it daily, according to behaviour research on habit formation.",
    },
    quote:
      "You do not rise to the level of your goals. You fall to the level of your systems.",
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
    name: "Mood & Day Tracker",
    tagline: "Rate your day. See what it adds up to.",
    description:
      "Rate your day and log your mood with each entry. Over time, patterns emerge between how you feel and how you write.",
    category: "Tracking",
    accentColor: "#22d3a5",
    stat: {
      value: "2 weeks",
      label: "is typically how long it takes before mood tracking starts revealing patterns that were completely invisible before.",
    },
    quote:
      "Most people have no idea how their environment shapes their mood. Tracking it is the first step to changing it.",
    details: [
      {
        heading: "Day rating",
        body: "A simple 1 to 5 scale at the top of each entry. Takes two seconds. Adds up to real insight over months.",
      },
      {
        heading: "Mood tags",
        body: "Pick from a set of mood labels like focused, anxious, grateful, tired, or excited. Create your own. Multiple tags per day.",
      },
      {
        heading: "Trends over time",
        body: "Your mood and day ratings are plotted over time so you can spot patterns. Good weeks, rough patches, seasonal shifts.",
      },
    ],
  },
  {
    slug: "streak-counter",
    icon: "C",
    name: "Streak Counter",
    tagline: "Show up every day. Watch it compound.",
    description:
      "Your writing streak is front and centre every time you open the app. Miss a day and it resets. Honest and surprisingly motivating.",
    category: "Tracking",
    accentColor: "#22d3a5",
    stat: {
      value: "21 days",
      label: "is the average streak at which JourneeX users say journaling stopped feeling like an obligation and started feeling natural.",
    },
    quote:
      "Every professional was once a beginner who simply refused to stop showing up.",
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
    tagline: "Seven days distilled into one reflection.",
    description:
      "Every Sunday, your week's entries are distilled into a single reflection. The shape of the week, not just a list of what you did.",
    category: "Tracking",
    accentColor: "#22d3a5",
    stat: {
      value: "7 days",
      label: "of entries, read and synthesised into a single reflection every Sunday evening. No action required from you.",
    },
    quote:
      "The weekly summary shows me things I wrote on Tuesday that I had completely forgotten by Friday.",
    details: [
      {
        heading: "Written, not generated",
        body: "The weekly summary uses the same philosophy as daily reflections. Warm prose, no bullet points, grounded in what you actually wrote.",
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

  {
    slug: "reminders",
    icon: "B",
    name: "Reminders",
    tagline: "A quiet nudge before the day gets away.",
    description:
      "Set a daily nudge to write at the time you choose. No nagging, no dark patterns. Just a quiet prompt before the day gets away.",
    category: "Tracking",
    accentColor: "#22d3a5",
    stat: {
      value: "4x",
      label: "more entries per month. Users who set a daily reminder write four times as consistently as those who rely on memory alone.",
    },
    quote:
      "The hardest part of writing in your journal is remembering to open it.",
    details: [
      {
        heading: "Write at your best time",
        body: "Pick the time that works for you. Morning pages, lunchtime check-in, or end-of-day wind-down. The reminder shows up when you want it.",
      },
      {
        heading: "One tap to open your entry",
        body: "The notification takes you straight to today's entry. No extra steps.",
      },
      {
        heading: "Easy to pause",
        body: "Toggle reminders off any time. No friction, no dark patterns.",
      },
    ],
  },
  {
    slug: "insights-dashboard",
    icon: "I",
    name: "Insights Dashboard",
    tagline: "Patterns you never noticed, now visible.",
    description:
      "A visual overview of your writing life. Mood trends, habit consistency, and writing frequency all pulled together in one place.",
    category: "Tracking",
    accentColor: "#22d3a5",
    stat: {
      value: "90 days",
      label: "is when most users say the Insights Dashboard starts revealing patterns they genuinely could not have spotted on their own.",
    },
    quote:
      "Data does not tell you what to do. It tells you what you have been doing. That alone changes things.",
    details: [
      {
        heading: "Mood over time",
        body: "See how your mood has shifted across weeks and months. Spot the patterns before they become obvious.",
      },
      {
        heading: "Writing consistency",
        body: "A calendar heatmap of every day you wrote. Long streaks, quiet patches, and everything in between.",
      },
      {
        heading: "All your numbers in one view",
        body: "Day ratings, habit completions, word counts. Pulled together so you do not have to go looking.",
      },
    ],
  },

  // Organization
  {
    slug: "tags-categories",
    icon: "G",
    name: "Tags & Categories",
    tagline: "Your entries, organised your way.",
    description:
      "Add tags to any entry to group related thoughts. Work, travel, family, ideas. Your taxonomy, completely your own rules.",
    category: "Organization",
    accentColor: "#ff6a9b",
    stat: {
      value: "60%",
      label: "better recall of past insights when entries are tagged. Structure does not constrain a journal. It makes it useful.",
    },
    quote:
      "A journal without structure is a diary. A journal with your own structure is a thinking tool.",
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
    tagline: "Every word you have written, counted.",
    description:
      "Word counts, entry frequency, average length. A quiet record of your writing life that builds up over time without any effort.",
    category: "Organization",
    accentColor: "#ff6a9b",
    stat: {
      value: "83,000",
      label: "words. That is the average a JourneeX user writes in their first year. The equivalent of a full novel, written in 15 minutes a day.",
    },
    quote:
      "Watching the word count grow is quietly one of the most motivating things in the app.",
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
];
