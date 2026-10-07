// Every factual claim on the site is sourced from the WLNS article below.
// The jokes are ours; the quotes are theirs.

export const PAID_FOR_BY = "trev (trev.zip)";

export const ARTICLE = {
  url: "https://www.wlns.com/your-local-election-hq/dedrick-michigan-congressional-race-controversy/",
  outlet: "WLNS 6 News",
  author: "Brad LaPlante",
  date: "Aug. 18, 2026",
  lede: "A man no one in the Green Party appears to have met is on the November ballot in one of the country’s most competitive congressional districts. He was nominated in about half an hour, on a Zoom call, with his camera off — and party officials say they have not been able to reach him in the four months since.",
};

export const SOURCES = [
  { label: "WLNS 6 News, Aug. 18, 2026", url: ARTICLE.url },
  {
    label: "FEC individual contribution records",
    url: "https://www.fec.gov/data/receipts/individual-contributions/?contributor_name=shane+dedrick",
  },
  {
    label: "Green Party of Michigan nominating convention (YouTube)",
    url: "https://www.youtube.com/watch?v=V6MEM0sz0zY",
  },
];

export const STATS = [
  { value: "$6", label: "Given to Perry Johnson for President via WinRed (2023)" },
  { value: "0", label: "Green Party members who had met him before he was nominated" },
  { value: "~30", label: "Minutes from “hello” to Green Party nominee" },
  { value: "OFF", label: "Camera status for the entire nomination" },
];

export const ISSUES = [
  {
    title: "Workers’ Rights",
    quote: "At the very top of my list is definitely workers’ rights.",
    body: "Shane is a mover at a locally-owned family moving company. Also a personal trainer. Also the owner of Sigma Supplements LLC. Also a cryptocurrency “masterclass grad.” That is a lot of workers, and he has a lot of rights.",
  },
  {
    title: "Climate",
    quote: "Tornadoes and some of the worst winters.",
    body: "That’s the whole climate plan, delivered with the camera off. Lean, efficient, no wasteful government spending on details.",
  },
  {
    title: "Green New Deal & Medicare for All",
    quote: "Those are probably the most important.",
    body: "Probably. Policy positions sourced exclusively from a single Zoom call that Shane found while “just surfing around online.”",
  },
  {
    title: "Beating Tom Barrett",
    quote: "I just know Tom Barrett right now, he’s obviously super radical.",
    body: "Shane is running hard against the Republican incumbent in one of the most competitive districts in America — by carefully peeling votes off of everyone except the Republican incumbent.",
  },
];

export const CLAIMS = [
  {
    claim: "He was nominated “in about half an hour, on a Zoom call, with his camera off.”",
    rebuttal: "That’s called EFFICIENCY. Sad that the media can’t appreciate it!",
  },
  {
    claim:
      "FEC records list contributions from Shane Dedrick of Brighton to Perry Johnson’s Republican presidential campaign, routed through WinRed.",
    rebuttal: "A grand total of SIX DOLLARS. Barely a Republican. Practically a rounding error.",
  },
  {
    claim:
      "Green Party spokesperson Doug Marsh: “It is equally likely that Dedrick was planted by Republicans, or that he just changed his beliefs.”",
    rebuttal: "50/50. TOTALLY EXONERATED.",
  },
  {
    claim:
      "Asked about Will Lawrence, the Democrat running in the same race, Shane said: “I’m sorry, I don’t know about Lawrence.”",
    rebuttal: "Laser-focused on the issues. No time for opposition research!",
  },
  {
    claim:
      "A delegate worried about candidates who “turn out to be MAGA and trash our party.” Shane replied: “It’s a completely reasonable question.”",
    rebuttal: "VERY reasonable. Next question!",
  },
  {
    claim: "Marsh: “To my knowledge, no one has heard from him since April 25.”",
    rebuttal: "Shane is very busy. Moving things. Training people. Supplementing.",
  },
];

export const ENDORSEMENTS = [
  {
    who: "His Mailbox",
    why: "Where he left his affidavit of identity for a Green Party member to come pick up.",
  },
  {
    who: "One Delegate",
    why: "“I’m glad to have anyone under 30.”",
  },
  {
    who: "A Black Zoom Tile",
    why: "Present for the entire nomination. Never once turned on.",
  },
];

export const ZOOM_REPLIES = [
  "Shane Dedrick’s camera is off.",
  "Shane Dedrick is having connection issues.",
  "Shane Dedrick says: “It’s a completely reasonable question.”",
  "Shane Dedrick has been nominated. Camera is still off.",
  "Shane Dedrick has left the meeting. No one has heard from him since April 25.",
];
