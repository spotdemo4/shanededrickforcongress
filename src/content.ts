// Every factual claim on the site is sourced from the WLNS article below.
// The tone is deadpan: state the record plainly and let it speak for itself.

export const PAID_FOR_BY = "trev";

export const ELECTION_DAY = "November 3";

export const ARTICLE = {
  url: "https://www.wlns.com/your-local-election-hq/dedrick-michigan-congressional-race-controversy/",
  outlet: "WLNS 6 News",
  author: "Brad LaPlante",
  date: "Aug. 18, 2026",
  lede: "A man no one in the Green Party appears to have met is on the November ballot in one of the country’s most competitive congressional districts. He was nominated in about half an hour, on a Zoom call, with his camera off — and party officials say they have not been able to reach him in the four months since.",
};

export const PARADE_POST = {
  url: "https://x.com/PJQualityGuru/status/1676388235814084608",
  author: "Perry Johnson",
  handle: "@PJQualityGuru",
  date: "July 4, 2023",
  text: "Rain, shine or otherwise, I won’t stop until my Two-Cents Plan is a reality. I hope you enjoyed the Fourth of July as much as me and my team.",
};

export const EXPERIENCE = [
  {
    date: "March 7, 2023",
    entry:
      "Contributes $1 and $5 to Perry Johnson for President Inc., a Republican presidential campaign, via WinRed.",
  },
  {
    date: "July 3, 2023",
    entry:
      "Flies to the parade aboard N7DK, a Gulfstream jet registered to Pontiac Aviation LLC, which shares a Troy office suite with Perry Johnson, Inc. Perry Johnson’s Republican presidential campaign paid Pontiac Aviation $1.65 million for “airfare for campaign” in 2023.",
  },
  {
    date: "July 4, 2023",
    entry:
      "Marches with Perry Johnson’s Republican presidential campaign in a Fourth of July parade.",
  },
  {
    date: "April 25, 2026",
    entry: "Nominated by the Green Party of Michigan for Michigan’s 7th Congressional District.",
  },
  {
    date: "April 26, 2026 – present",
    entry: "Not heard from, according to Green Party officials.",
  },
];

export const CONVENTION_URL = "https://www.youtube.com/watch?v=V6MEM0sz0zY";

export const SOURCES = [
  { label: "WLNS 6 News, Aug. 18, 2026", url: ARTICLE.url },
  {
    label: "FEC individual contribution records",
    url: "https://www.fec.gov/data/receipts/individual-contributions/?contributor_name=shane+dedrick",
  },
  { label: "Green Party of Michigan nominating convention (YouTube)", url: CONVENTION_URL },
  { label: "Perry Johnson on X, July 4, 2023", url: PARADE_POST.url },
  {
    label: "FEC disbursements to Pontiac Aviation",
    url: "https://www.fec.gov/data/disbursements/?data_type=processed&recipient_name=Pontiac+Aviation",
  },
  {
    label: "FAA registry: N7DK",
    url: "https://registry.faa.gov/AircraftInquiry/Search/NNumberResult?nNumberTxt=N7DK",
  },
  { label: "Perry Johnson, Inc. headquarters", url: "https://www.pji.com/contact-pji/" },
];

export const FAST_FACTS = [
  { label: "Hometown", value: "Brighton–Lansing area" },
  { label: "Occupation", value: "Mover" },
  { label: "Ballot line", value: "Green Party" },
  {
    label: "2023 political giving",
    value: "$6 to Perry Johnson’s Republican presidential campaign",
  },
];

export const PLATFORM = [
  {
    topic: "Workers’ Rights",
    quote:
      "Right now, I’m just working for a locally-owned family moving company, and there are huge corporations pushing us out.",
  },
  {
    topic: "Climate",
    quote: "Tornadoes and some of the worst winters.",
  },
  {
    topic: "Policy Priorities",
    quote:
      "Between the Green New Deal and ‘Medicare for All,’ those are probably the most important. But at the very top of my list is definitely workers’ rights.",
  },
  {
    topic: "Tom Barrett",
    quote:
      "I just know Tom Barrett right now, he’s obviously super radical. Doesn’t believe in free healthcare or abortion.",
  },
  {
    topic: "Will Lawrence",
    quote: "I’m sorry, I don’t know about Lawrence.",
  },
  {
    topic: "The Green Party",
    quote:
      "I was just surfing around online, and honestly I didn’t know the right spot to go, and I came across a Zoom here.",
  },
];

export const RECORD = [
  {
    report: "He was nominated “in about half an hour, on a Zoom call, with his camera off.”",
    record: "The nomination took just over 30 minutes.",
  },
  {
    report:
      "FEC records list contributions from Shane Dedrick of Brighton to Perry Johnson’s Republican presidential campaign, routed through WinRed.",
    record: "The contributions were $1 and $5, for a total of $6.",
  },
  {
    report:
      "Green Party spokesperson Doug Marsh: “It is equally likely that Dedrick was planted by Republicans, or that he just changed his beliefs.”",
    record: "Both possibilities were described as equally likely.",
  },
  {
    report: "Asked about Will Lawrence, Shane said: “I’m sorry, I don’t know about Lawrence.”",
    record: "Will Lawrence won the Democratic nomination on Aug. 4 with 43% of the vote.",
  },
  {
    report: "Marsh: “To my knowledge, no one has heard from him since April 25.”",
    record: "There are no further updates at this time.",
  },
  {
    report:
      "6 News was unable to find a campaign website, fundraising efforts, or an FEC-registered campaign committee.",
    record: "This website is not affiliated with Shane Dedrick.",
  },
];

export const CONTACT = [
  { label: "Phone", value: "Not listed" },
  { label: "Email", value: "Not listed" },
  { label: "Campaign office", value: "Not listed" },
  { label: "Last heard from", value: "April 25, 2026, per Green Party officials" },
];
