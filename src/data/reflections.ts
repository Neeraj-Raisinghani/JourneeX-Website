export interface FeaturedReflection {
  quote: string;
  tags: string[];
}

// A rotating pool of example AI reflections shown on the product page.
// One is picked deterministically based on the current UTC day, so it
// changes every 24 hours without needing a database.
export const reflections: FeaturedReflection[] = [
  {
    quote: "You mentioned feeling behind three times today. That's not a productivity problem - it sounds like the bar keeps moving. What would 'enough' actually look like?",
    tags: ["Clarity", "Self-awareness", "Reflection"],
  },
  {
    quote: "You spent most of this entry talking about everyone else's day. Where were you in it?",
    tags: ["Noticing", "Boundaries", "Reflection"],
  },
  {
    quote: "Three entries this week ended with 'I'll figure it out later.' Later keeps not coming. What's actually in the way?",
    tags: ["Patterns", "Honesty", "Follow-through"],
  },
  {
    quote: "You called it a small win, then spent four sentences explaining why it wasn't a big deal. It was a big deal.",
    tags: ["Self-worth", "Noticing", "Reflection"],
  },
  {
    quote: "This is the second entry this month about the same conversation you never had. What's one sentence you could say out loud?",
    tags: ["Avoidance", "Clarity", "Action"],
  },
  {
    quote: "You wrote 'fine' four times today. That word is doing a lot of work. What's underneath it?",
    tags: ["Honesty", "Noticing", "Reflection"],
  },
  {
    quote: "You've mentioned being tired in every entry this week, but never what's actually draining you. Want to name it?",
    tags: ["Patterns", "Energy", "Clarity"],
  },
  {
    quote: "You compared yourself to someone else twice in three sentences. What were you actually trying to say about yourself?",
    tags: ["Self-awareness", "Comparison", "Reflection"],
  },
  {
    quote: "You said 'no big deal' right after describing something that clearly was. Why do you keep shrinking it?",
    tags: ["Self-worth", "Noticing", "Honesty"],
  },
  {
    quote: "This week's entries all end before the hard part starts. What happens if you keep writing past 'anyway'?",
    tags: ["Avoidance", "Depth", "Reflection"],
  },
  {
    quote: "You've written about the same decision for five days without making it. What would actually change if you just picked one?",
    tags: ["Indecision", "Action", "Clarity"],
  },
  {
    quote: "You thanked three people in this entry and never once mentioned what you needed. That's worth noticing.",
    tags: ["Boundaries", "Self-awareness", "Noticing"],
  },
];

function dayIndexUTC(): number {
  const now = new Date();
  const start = Date.UTC(now.getUTCFullYear(), 0, 0);
  const diff = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) - start;
  return Math.floor(diff / 86400000);
}

export function getFeaturedReflection(): FeaturedReflection {
  const index = dayIndexUTC() % reflections.length;
  return reflections[index];
}
