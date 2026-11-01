/**
 * The twelve capability items behind the "+" rows, grouped by stage. Text as published on the
 * reference page; swap it for Krew copy when rebranding.
 */
export type Capability = {
  number: string
  title: string
  summary: string
  detail: string
  delivers: string[]
  example: string
  resource?: { href: string; label: string }
}

export type Stage = {
  eyebrow: string
  title: string
  accent: string
  body: string
  capabilities: Capability[]
}

export const STAGES: Stage[] = [
  {
    eyebrow: "1.0 — Launch",
    title: "Cofounder launches a company",
    accent: "with you",
    body: "Give Cofounder the product you built. It turns that context into the positioning, brand, website, and launch materials you need to go to market. Everything Cofounder creates stays aligned to the same company story.",
    capabilities: [
      {
        number: "1.1",
        title: "Business positioning",
        summary:
          "Turn what your product does into a sharp story for the people most likely to buy it.",
        detail:
          "Cofounder studies your product, market, and early customer signals together. It turns that context into a clear point of view you can carry into your website, launch, sales conversations, and product decisions.",
        delivers: [
          "Positioning brief",
          "Ideal customer profile",
          "Competitive narrative",
        ],
        example:
          "“Help me position this for technical leaders at growing B2B companies.”",
      },
      {
        number: "1.2",
        title: "Brand identity",
        summary:
          "Create a brand that feels intentional before you have a full creative team.",
        detail:
          "Start with the company you are building and the people it needs to reach. Cofounder develops a coherent voice and visual direction, then keeps that system consistent as new company materials are created.",
        delivers: ["Brand voice", "Visual direction", "Reusable brand system"],
        example:
          "“Make the company feel trusted, technical, and unmistakably ours.”",
      },
      {
        number: "1.3",
        title: "Marketing website",
        summary:
          "Turn your positioning and brand into a polished site that is ready to convert.",
        detail:
          "Cofounder plans the story, writes the copy, and assembles the pages around the actions you want visitors to take. You review the direction and key decisions before the site goes live.",
        delivers: [
          "Conversion-focused copy",
          "Designed marketing pages",
          "Domain-ready launch",
        ],
        example:
          "“Build the site around our product demo and first customer use case.”",
      },
      {
        number: "1.4",
        title: "Launch content",
        summary:
          "Build a coordinated launch across the channels your first customers already use.",
        detail:
          "One launch brief becomes a coordinated set of channel-ready materials. Cofounder adapts the message for each audience, sequences the release, and keeps the campaign grounded in the same company context.",
        delivers: [
          "Launch announcement",
          "Social and email variants",
          "Distribution plan",
        ],
        example:
          "“Turn the launch into a week of useful content, not one announcement.”",
      },
    ],
  },
  {
    eyebrow: "2.0 — Grow",
    title: "Cofounder finds the right customers",
    accent: "and gives them a reason to care",
    body: "Cofounder researches the market, finds promising prospects, and runs coordinated growth work with your company context built in. Research, outreach, and marketing stay coordinated in Cofounder.",
    capabilities: [
      {
        number: "2.1",
        title: "Customer research",
        summary:
          "Learn how your market talks, what it buys, and where your strongest wedge is.",
        detail:
          "Cofounder turns scattered market evidence into a working view of your customer. It compares alternatives, identifies repeated pain, and brings the useful patterns back into the rest of the company.",
        delivers: [
          "Market map",
          "Customer pain analysis",
          "Competitor watchlist",
        ],
        example:
          "“Show me how our target customers solve this today and where they struggle.”",
      },
      {
        number: "2.2",
        title: "Prospect discovery",
        summary:
          "Build focused lists around real buying signals instead of broad databases.",
        detail:
          "Define the kind of company that benefits most, then let Cofounder research accounts and the people behind them. Every prospect includes the signal that made them relevant and the context needed for a thoughtful approach.",
        delivers: [
          "Qualified account list",
          "Contact research",
          "Buying-signal notes",
        ],
        example: "“Find 50 teams that recently hired for this problem.”",
      },
      {
        number: "2.3",
        title: "Email outreach",
        summary:
          "Create thoughtful outbound sequences and review every message before it sends.",
        detail:
          "Cofounder combines your positioning with account research to draft outreach that sounds considered, not automated. Messages, follow-ups, and send decisions stay visible so you remain in control of the campaign.",
        delivers: [
          "Personalized emails",
          "Follow-up sequence",
          "Campaign reporting",
        ],
        example:
          "“Draft a short founder-led sequence for these accounts and bring it to me for approval.”",
      },
      {
        number: "2.4",
        title: "Marketing and Newsletters",
        summary:
          "Turn company knowledge into focused marketing campaigns and newsletters people want to read.",
        detail:
          "Cofounder finds the ideas worth returning to, develops them into an editorial rhythm, and adapts each campaign across email and distribution channels. Performance informs what the company says next.",
        delivers: [
          "Campaign strategy",
          "Newsletter drafts",
          "Performance analysis",
        ],
        example:
          "“Build a monthly newsletter around the questions prospects keep asking us.”",
      },
    ],
  },
  {
    eyebrow: "3.0 — Operate",
    title: "Cofounder keeps the business moving",
    accent: "after launch",
    body: "Bring formation, analytics, support, and recurring company work into Cofounder without giving up control. The same Cofounder context keeps every part of the business moving together.",
    capabilities: [
      {
        number: "3.1",
        title: "LLC incorporation",
        summary: "Incorporate your LLC without leaving Cofounder.",
        detail:
          "Cofounder brings incorporation into your company workspace and handles the setup work for the filing—from state selection to registered agent and member information. You step in for legal attestations and final review, then approve the submission.",
        delivers: [
          "Incorporation filing",
          "Formation details",
          "Approval checkpoints",
        ],
        example: "“Incorporate my company”",
        resource: {
          href: "/resources/cofounder-partners-with-ramp-to-offer-incorporation",
          label: "Read the Cofounder + Ramp announcement",
        },
      },
      {
        number: "3.2",
        title: "Product analytics",
        summary:
          "See how people use the product and what deserves your attention next.",
        detail:
          "Cofounder defines the events that matter, brings the signals into one operating view, and explains changes in plain language. The result is a useful weekly picture, not another dashboard to monitor.",
        delivers: ["Event plan", "Core dashboard", "Weekly insight summary"],
        example: "“Tell me where trial users get stuck before activation.”",
      },
      {
        number: "3.3",
        title: "Customer support",
        summary:
          "Turn support conversations into faster answers and better product decisions.",
        detail:
          "Cofounder handles repeatable questions with the right company and product context, while routing sensitive or novel issues back to you. Themes from support become inputs for product, content, and operations.",
        delivers: [
          "Support workflow",
          "Response drafts",
          "Recurring issue report",
        ],
        example: "“Handle common questions and flag anything that needs me.”",
      },
      {
        number: "3.4",
        title: "Recurring workflows",
        summary:
          "Keep routine company work moving on a schedule, with approvals where they matter.",
        detail:
          "Give recurring work an owner, cadence, and review point. Cofounder runs the sequence, gathers what each step needs, and returns the finished work or a clear decision when your judgment is required.",
        delivers: [
          "Scheduled reports",
          "Follow-up reminders",
          "Approval checkpoints",
        ],
        example:
          "“Every Monday, summarize growth, customer feedback, and company issues.”",
      },
    ],
  },
]
