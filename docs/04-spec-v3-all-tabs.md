# Krew & Kreator Developer Spec v3 (9 Oct 2026): all tabs

Converted from `Krew_Kreator_Developer_Spec_v3.xlsx`. Note: the MVP PRD (19 Oct 2026) and the WhatsApp change in `02-product-flow.md` override parts of this.


## Overview

- Krew and Kreator - Developer Specification
- Version 3 - 9 October 2026 - Working draft for the development team
- How to read this workbook
- Tab — What it contains
- 1 Products & Features — What each module does, and whether it is in Krew, Kreator or both.
- 2 Edge Cases — Situations that break the normal flow, the risk, and the behaviour the system must show.
- 3 Flows — Step-by-step flows, one band per flow.
- 4 Integrations — What the creator connects and what Krew connects to, with pre-requisites and constraints. Order of integration to be decided later.
- 5 UI & UX — Screen-level requirements.
- 6 Analytics — What the creator can track.
- 7 Reminders — Reminders for the creator and for the client, with default timings and channels.
- 8 Profile Evaluation — How a connected creator's or crew's profile is evaluated.
- Product definitions
- Krew — A separate product from Trakker. Workflow suite for videography, design and photography professionals and crews: brief, CRM, DM automation, review, invoicing, ledger, note taker, WhatsApp automation, plus task management, Meta ads automation, reminders and profile evaluation.
- Kreator — Krew without CRM (including content-to-lead and ads) and without WhatsApp automation. Same codebase, gated by plan. Kreator users can still connect WhatsApp for the inbox only.
- Column keys
- Priority — P0 = needed for first release. P1 = soon after first release. P2 = later.
- Origin — Confirmed = requirement stated by the founders. Proposed = suggested during scoping, needs founder sign-off.
- Status (Integrations tab) — Verify = must be confirmed against the vendor's current documentation or terms before the team commits to it.
- Applies to — Krew, Kreator, or both.
- Decided
- Separate product — Krew is a different product from Trakker.
- CRM — Krew uses the same CRM as Trakker, integrated, to generate leads from the creator's content.
- Channels — Creators connect Instagram, Gmail and WhatsApp (WhatsApp Business preferred).
- Kreator and WhatsApp — Kreator users can connect WhatsApp for the inbox only: read and reply by hand, no automatic messages.
- Profile evaluation — Every creator or crew that connects Instagram gets their own profile evaluated.
- Integration sequence — To be decided later.
- Open decisions (need founder input)
- D1 — Review in first release: upload-and-link only, or editing tool plugins from the start.
- D2 — Invoice payments: money goes direct to the creator, or through Orry.
- D3 — Meta ads: always on the creator's own ad account, or can Orry run them on its account.
- D4 — Profile evaluation: private to the creator, or can a score be shown to clients.
- D5 — Reminder timings: confirm the defaults in tab 7.
- D6 — On Kreator, should client reminders for WhatsApp appear as drafted messages the creator sends by hand (proposed), or email only.

## 1 Products & Features

| ID | Feature | What it does | Krew | Kreator | Priority | Origin |
|---|---|---|---|---|---|---|
| **Core   (3)** | | | | | | |
| PF-01 | Job record | One project record tying brief, tasks, review rounds, invoice and ledger entries together for a client. | Yes | Yes | P0 | Proposed |
| PF-02 | Unified inbox | Every client conversation from Instagram, WhatsApp and Gmail in one list, shown by person and linked to their lead, job and invoice. | Yes | Yes, without pipeline or scoring | P0 | Confirmed |
| PF-03 | Team and roles | Owner adds team members (shooter, editor, designer) with access to assigned jobs and tasks. | Yes | No, single user | P1 | Proposed |
| **Channel connections   (3)** | | | | | | |
| PF-04 | Connect Instagram | Brings DMs, comments and post insights into Krew. Needed for auto DMs, content-to-lead tracking and profile evaluation. | Yes | Yes | P0 | Confirmed |
| PF-05 | Connect Gmail | Client emails appear in the inbox and attach to the right lead or job. Quotes, review links and invoices go out from the creator's own address. | Yes | Yes | P1 | Confirmed |
| PF-06 | Connect WhatsApp Business | Client chats appear in the inbox. WhatsApp Business is the preferred account type. | Yes, with automation | Yes, inbox only: read and reply by hand, no automatic messages | P0 | Confirmed |
| **Profile evaluation   (1)** | | | | | | |
| PF-07 | Profile evaluation | When Instagram is connected, and monthly after, scores the creator's or crew's profile across readiness, niche, consistency, content, engagement, audience, growth and enquiries, and gives specific fixes. Detail in tab 8. | Yes | Yes | P1 | Confirmed |
| **1 Brief   (3)** | | | | | | |
| PF-08 | Brief capture | Client fills a structured brief by form or chat. Output is scope, deliverables, dates and revision rounds, attached to the job. | Yes | Yes | P0 | Confirmed |
| PF-09 | Quote and acceptance | Quote generated from the brief; client accepts online; advance requested. | Yes | Yes | P0 | Proposed |
| PF-10 | Change request | Scope change after acceptance is recorded as a dated change the client accepts, linked to the invoice. | Yes | Yes | P1 | Proposed |
| **2 CRM (Trakker CRM)   (3)** | | | | | | |
| PF-11 | Lead pipeline | The same CRM as Trakker, integrated into Krew: leads with source, stages, automatic qualification and follow-ups. | Yes | No (upgrade) | P1 | Confirmed |
| PF-12 | Content to lead | Each post carries a tracked link or comment keyword, so enquiries are tagged to the post that produced them. | Yes | No (upgrade) | P1 | Confirmed |
| PF-13 | Meta ads automation | Creator picks a post, budget and city. Krew builds a click-to-DM or lead-form campaign, the creator approves, leads land in the CRM, and Krew pauses or shifts budget by cost per lead. | Yes | No (upgrade) | P2 | Confirmed |
| **3 DM automation   (3)** | | | | | | |
| PF-14 | Auto DMs | Replies automatically to DMs, story replies and comment keywords with rates, portfolio or availability as set by the creator. | Yes | Yes | P0 | Confirmed |
| PF-15 | Enquiry questions | Bot asks budget, date and type of work, then hands the chat to the creator. | Yes | Yes | P0 | Confirmed |
| PF-16 | Intent filter | Separates client enquiries from spam, students and job-seekers. | Yes | Yes | P1 | Proposed |
| **Task management   (4)** | | | | | | |
| PF-17 | Tasks from templates | A job splits into tasks from a template for its type (shoot, edit, design), with due dates set back from the delivery date. | Yes | Yes | P0 | Confirmed |
| PF-18 | Assignment and status | Tasks assigned to team members with status updates. | Yes | Self only | P0 | Confirmed |
| PF-19 | Calendar and clash warning | Shoot dates and deadlines on a calendar; warns before a quote is sent for a date already booked. | Yes | Yes | P1 | Proposed |
| PF-20 | Client progress view | Client sees the stage of their job by link. | Yes | Yes | P2 | Proposed |
| **4 Review   (3)** | | | | | | |
| PF-21 | Review and approval | Draft shared by link. Client comments on a video timestamp or image area, with versions and final approval. No client login. | Yes | Yes | P0 | Confirmed |
| PF-22 | Revision round count | Rounds counted against the brief; extra rounds flagged and can be billed. | Yes | Yes | P1 | Proposed |
| PF-23 | Editing tool connections | Review comments reachable from Premiere Pro, Photoshop, Illustrator and Canva through MCP. VN and Instagram Edits by upload only. | Yes | Yes | P2 | Confirmed |
| **5 Invoicing   (2)** | | | | | | |
| PF-24 | Invoice generation | GST or non-GST invoice from the approved job, with a payment link (UPI and cards) and payment status. | Yes | Yes | P0 | Confirmed |
| PF-25 | Advance and balance | Advance invoice at booking, balance invoice at approval. | Yes | Yes | P1 | Proposed |
| **6 Ledger   (1)** | | | | | | |
| PF-26 | Receivables ledger | Invoiced, received, tax deducted by the client, and pending, per client. Export for the accountant. | Yes | Yes | P0 | Confirmed |
| **7 Note taker   (1)** | | | | | | |
| PF-27 | Call notes | Records or accepts a recording of a client call; produces a summary and action points, which become tasks on the job. | Yes | Yes | P2 | Confirmed |
| **8 WhatsApp automation   (1)** | | | | | | |
| PF-28 | Automatic client updates | Brief received, draft ready, invoice sent, payment due and received, sent automatically on WhatsApp. | Yes | No. Updates go by email, or as a drafted WhatsApp message the creator sends by hand | P1 | Confirmed |
| **Reminders   (2)** | | | | | | |
| PF-29 | Reminders for the creator | Prompts on unanswered leads, due tasks, shoots, missing advances and uninvoiced jobs. Detail in tab 7. | Yes | Yes | P0 | Confirmed |
| PF-30 | Reminders for the client | Prompts on pending brief, pending feedback and due payments, stopping as soon as the action is done. | Automatic on WhatsApp and email | Automatic on email only | P0 | Confirmed |
| **Analytics   (1)** | | | | | | |
| PF-31 | Analytics | Leads, content, ads, jobs, tasks, review, money, clients and earnings. Detail in tab 6. | Yes | Yes, except lead pipeline and ads | P1 | Confirmed |
| **Plan   (2)** | | | | | | |
| PF-32 | Kreator plan gating | Kreator is Krew without CRM and WhatsApp automation, on the same codebase. Locked modules are shown with an upgrade option. | - | Yes | P1 | Confirmed |
| PF-33 | Upgrade keeps data | Moving from Kreator to Krew keeps everything; inbox contacts become CRM leads. | - | Yes | P1 | Proposed |

## 2 Edge Cases

| ID | Edge case | Risk if unhandled | Required system behaviour | Applies to | Priority |
|---|---|---|---|---|---|
| **Touchpoints and inbox   (4)** | | | | | |
| EC-01 | Same client enquires on Instagram, WhatsApp and email | Three separate leads for one client. | Match on phone, handle or email; one person, one lead. | Krew and Kreator | P0 |
| EC-02 | Spam, students or job-seekers in DMs | Inbox and lead counts polluted. | Intent filter; not counted as leads; creator can reclassify. | Krew and Kreator | P1 |
| EC-03 | Personal and client chats on the same WhatsApp or Gmail | Private conversations pulled into Krew. | Only conversations the creator marks as client, or that match a lead or job, are shown. Others are not stored. | Krew and Kreator | P0 |
| EC-04 | A connected account disconnects | Messages silently stop arriving. | Alert the creator immediately with a reconnect button. | Krew and Kreator | P0 |
| **Auto DMs   (4)** | | | | | |
| EC-05 | Client asks for a discount or custom quote | Bot commits to a price. | Bot hands to the creator; never negotiates. | Krew and Kreator | P0 |
| EC-06 | Instagram reply window has closed | Message fails or breaks platform rules. | No DM. Follow up on WhatsApp or email if available. | Krew and Kreator | P0 |
| EC-07 | Creator replies by hand while the bot is active | Two voices in one chat. | Bot pauses on that chat. | Krew and Kreator | P0 |
| EC-08 | Post goes viral with hundreds of comments | Auto DMs exceed Instagram's limits; account flagged. | Rate-limit within Instagram's limits; queue the rest; tell the creator. | Krew and Kreator | P1 |
| **CRM and ads   (5)** | | | | | |
| EC-09 | Ad rejected by Meta | Campaign does not run; creator does not know why. | Show the reason in plain words; suggest another post. | Krew | P1 |
| EC-10 | Music in the reel is not licensed for ads | Ad rejected or muted. | Warn before the campaign is built; suggest a post with original audio. | Krew | P2 |
| EC-11 | Budget spent with no leads | Money wasted. | Auto-pause at a set spend with zero leads; alert the creator. | Krew | P1 |
| EC-12 | Ad account payment fails | Ads stop silently. | Pause and notify. | Krew | P1 |
| EC-13 | Lead from an ad is outside the creator's city or budget | Time spent on unfit leads. | Qualification questions screen it; ad targeting adjusted. | Krew | P2 |
| **Brief and tasks   (5)** | | | | | |
| EC-14 | Client changes scope after accepting | Unpaid extra work. | Dated change request the client accepts, linked to the invoice. | Krew and Kreator | P1 |
| EC-15 | Shoot date moves | Task dates become wrong. | Dependent task dates shift; client informed. | Krew and Kreator | P1 |
| EC-16 | Two jobs clash on the same date | Double booking. | Warn before the quote is sent. | Krew and Kreator | P1 |
| EC-17 | Team member does not update a task | Owner has a false picture. | Reminder, then escalate to the owner. | Krew | P1 |
| EC-18 | Job cancelled after the advance | Dispute over refund. | Cancellation terms captured in the brief and shown on cancellation. | Krew and Kreator | P2 |
| **Review   (5)** | | | | | |
| EC-19 | Client disputes what was approved | Payment dispute. | Approval locked to a version with date, time and approver name. | Krew and Kreator | P0 |
| EC-20 | Large file upload fails midway | Lost time. | Resumable uploads with progress shown. | Krew and Kreator | P0 |
| EC-21 | Conflicting comments from two reviewers | Endless rounds. | Comments shown by reviewer; client names one final approver. | Krew and Kreator | P1 |
| EC-22 | Rounds exceed the brief | Unpaid extra work. | Flag and offer a paid extra round. | Krew and Kreator | P1 |
| EC-23 | Client goes silent on a draft | Job stalls, payment delayed. | Reminders; auto-approve after a set period only if the brief said so. | Krew and Kreator | P1 |
| **Payments and ledger   (6)** | | | | | |
| EC-24 | Advance not paid before the shoot | Creator works without commitment. | Warn the creator; job marked at risk. | Krew and Kreator | P0 |
| EC-25 | Client pays less after deducting tax at source | Invoice shows part-unpaid forever. | Record the deducted amount; mark settled. | Krew and Kreator | P0 |
| EC-26 | Client pays outside the link (cash, bank transfer) | Reminders continue after payment. | Creator marks paid by hand with a note; reminders stop. | Krew and Kreator | P0 |
| EC-27 | Paid invoice needs changing | Records no longer match payments. | Paid invoices locked; change through a credit note. | Krew and Kreator | P0 |
| EC-28 | Creator not registered for GST | Invalid tax invoice. | Non-GST invoice format when no GST number is set. | Krew and Kreator | P0 |
| EC-29 | Advance received before any invoice | Payment with nothing to match. | Recorded as an advance on the job; adjusted in the final invoice. | Krew and Kreator | P1 |
| **Reminders   (3)** | | | | | |
| EC-30 | Client already acted through another channel | Reminder sent after payment or feedback. | Check status at the moment of sending. | Krew and Kreator | P0 |
| EC-31 | Client finds reminders too frequent | Relationship damaged. | Creator can mute or slow reminders per client. | Krew and Kreator | P1 |
| EC-32 | Reminder due at night or on a holiday | Poor impression. | Quiet hours applied to client reminders. | Krew and Kreator | P1 |
| **Profile evaluation   (4)** | | | | | |
| EC-33 | Instagram account is personal, not professional | No data can be read. | Explain why and guide the switch to a professional account. | Krew and Kreator | P0 |
| EC-34 | Very small account | Audience data unavailable; scores unreliable. | Shorter evaluation; areas without data marked 'not enough data'. | Krew and Kreator | P1 |
| EC-35 | Crew with several members' accounts | One score does not fit. | Evaluate the crew's main account; members can connect their own separately. | Krew | P2 |
| EC-36 | Creator posts personal content too | Niche score unfairly low. | Creator can exclude posts from evaluation. | Krew and Kreator | P2 |
| **Plan   (2)** | | | | | |
| EC-37 | Kreator user upgrades to Krew | Lost conversations and contacts. | All data kept; inbox contacts become CRM leads; WhatsApp automation switches on after template approval. | Kreator | P1 |
| EC-38 | Kreator user expects automatic WhatsApp messages | Confusion over what was sent. | Screens state that WhatsApp is inbox only; drafted messages need a tap to send. | Kreator | P1 |

## 3 Flows

| Step | Trigger or actor | System action | Rule or limit |
|---|---|---|---|
| **F01   Connect channels and first evaluation   [Krew and Kreator]   (4)** | | | |
| 1.0 | Creator signs up. | Ask for skill (video, design, photo), city, solo or crew. | Same for both plans. |
| 2.0 | Creator connects Instagram. | Check it is a professional account; pull profile, posts and insights. | Personal accounts cannot be read. |
| 3.0 | Creator connects WhatsApp Business and Gmail. | Bring client conversations into the inbox. | Kreator: WhatsApp inbox only. |
| 4.0 | System | Run the profile evaluation and show score and action items. | See tab 8. |
| **F02   Touchpoint to handling   [Krew and Kreator]   (4)** | | | |
| 1.0 | Enquiry arrives by Instagram DM, comment, WhatsApp, email, form or referral link. | Place in the unified inbox; match to an existing person or create one; record the source. | - |
| 2.0 | System | Auto-reply where allowed (F03). | Kreator: no automatic WhatsApp reply. |
| 3.0 | System | Krew: create a lead in the pipeline and qualify. Kreator: mark as enquiry in the inbox. | - |
| 4.0 | Enquiry is ready. | Send the brief (F06) and notify the creator. | Reminder if the creator does not respond. |
| **F03   Auto DMs   [Krew and Kreator]   (4)** | | | |
| 1.0 | DM, story reply or comment keyword. | Identify intent: client enquiry, collaboration, other. | Non-client messages not counted as leads. |
| 2.0 | System | Reply with rates, portfolio or availability as the creator has set. | Inside Instagram's reply window only. |
| 3.0 | System | Ask budget, date and type of work. | Never negotiates price. |
| 4.0 | Answers received, or client asks for a custom quote. | Hand the chat to the creator with a summary. | Bot pauses when the creator replies. |
| **F04   Content to lead through the CRM   [Krew]   (4)** | | | |
| 1.0 | Creator publishes a post. | Attach a tracked link or comment keyword to the post. | - |
| 2.0 | Viewer comments the keyword, DMs or opens the link. | Create a lead tagged to that post. | Viewers who do not act stay anonymous. |
| 3.0 | System | Qualify and move through the pipeline; run follow-ups. | Same CRM as Trakker. |
| 4.0 | Job booked. | Credit the booking to the post. | Feeds content analytics. |
| **F05   Meta ads automation   [Krew]   (6)** | | | |
| 1.0 | Creator picks a post, budget, city and duration. | Check the post is eligible for ads. | Licensed music may block it. |
| 2.0 | System | Build a click-to-DM or lead-form campaign and show a preview with total cost. | Runs on the creator's own ad account. |
| 3.0 | Creator approves. | Launch the campaign. | Nothing is spent without approval. |
| 4.0 | Leads arrive. | Add to the CRM with the campaign as source. | - |
| 5.0 | Daily. | Compare cost per lead with target; pause or shift budget; stop at zero leads after a set spend. | Within the approved budget only. |
| 6.0 | Campaign ends. | Report spend, leads, booked jobs and revenue. | - |
| **F06   Brief to job   [Krew and Kreator]   (4)** | | | |
| 1.0 | Enquiry is ready. | Send the brief form or start a brief chat. | Client needs no login. |
| 2.0 | Client completes the brief. | Generate scope, deliverables, dates and revision rounds; creator edits and confirms. | - |
| 3.0 | Creator sends the quote. | Check the calendar for clashes; send for acceptance. | Warn on clash. |
| 4.0 | Client accepts. | Create the job; raise the advance invoice. | - |
| **F07   Task management   [Krew and Kreator]   (4)** | | | |
| 1.0 | Job created. | Create tasks from the template for the job type; set due dates back from delivery. | Templates editable. |
| 2.0 | Owner | Assign tasks to team members. | Kreator: self only. |
| 3.0 | Task due. | Remind the assignee; escalate overdue tasks to the owner. | See tab 7. |
| 4.0 | Date changes. | Shift dependent tasks and inform the client. | - |
| **F08   Review   [Krew and Kreator]   (4)** | | | |
| 1.0 | Creator uploads a draft. | Create a review link and notify the client. | Resumable upload. |
| 2.0 | Client comments. | Store comments against timestamp or image area; create tasks for changes. | - |
| 3.0 | Creator uploads the next version. | Count the round against the brief. | Flag when the limit is crossed. |
| 4.0 | Client approves. | Lock the approved version. | - |
| **F09   Invoice to payment   [Krew and Kreator]   (3)** | | | |
| 1.0 | Job approved. | Generate the balance invoice with a payment link. | GST or non-GST format. |
| 2.0 | System | Send to the client and start payment reminders. | Krew: WhatsApp and email. Kreator: email. |
| 3.0 | Payment received by link, or marked by hand. | Update invoice and ledger; record any tax deducted; stop reminders; send receipt. | Paid invoices locked. |
| **F10   Call notes   [Krew and Kreator]   (2)** | | | |
| 1.0 | Call recorded or recording uploaded. | Transcribe and summarise. | Client's consent to record. |
| 2.0 | System | List action points; creator confirms which become tasks. | - |
| **F11   Monthly profile evaluation   [Krew and Kreator]   (3)** | | | |
| 1.0 | Monthly. | Pull the latest Instagram data and Krew enquiry data. | - |
| 2.0 | System | Recalculate scores and compare with last month. | - |
| 3.0 | System | Send the top action items to the creator. | Private to the creator. |

## 4 Integrations

| ID | System | What it gives the creator | Pre-requisites | Constraints | Applies to | Status |
|---|---|---|---|---|---|---|
| **Channels the creator connects   (3)** | | | | | | |
| IN-01 | Instagram | DMs and comments in the inbox, auto DMs, post insights, profile evaluation, content-to-lead tracking. | Instagram professional account linked to a Facebook Page; Meta app review for messaging and insights permissions. | Replies only within Instagram's reply window. Audience data is totals only. | Krew and Kreator | Standard |
| IN-02 | Gmail | Client emails in the inbox, attached to lead or job; quotes, review links and invoices sent from the creator's address. | Sign in with Google; Google's verification of the app, including a security review for inbox-reading access. | The security review takes time and has a cost; start early. Only client conversations are stored. | Krew and Kreator | Verify |
| IN-03 | WhatsApp Business | Client chats in the inbox. Krew: automatic updates and reminders. | A WhatsApp Business number. Krew automation needs the WhatsApp Business Platform with approved templates. | Whether the creator can keep using the WhatsApp Business app on the same number while connected must be confirmed with Meta. Personal WhatsApp cannot be connected. | Krew: full. Kreator: inbox only | Verify |
| **Leads and ads   (2)** | | | | | | |
| IN-04 | Trakker CRM | Pipeline, follow-ups and lead scoring. | Trakker core available. | Same engine as Trakker; Krew is a separate product on top. | Krew | Standard |
| IN-05 | Meta ads | Running and adjusting ads from inside Krew. | Creator's own ad account and payment method; ads permission approved in Meta app review. | Ads go through Meta's review; some posts are not eligible. | Krew | Standard |
| **Work and delivery   (8)** | | | | | | |
| IN-06 | Google Calendar | Shoot dates, deadlines and clash warnings. | Sign in with Google. | - | Krew and Kreator | Standard |
| IN-07 | File storage and video delivery | Review drafts and final files. | Cloud storage with resumable upload and video transcoding. | Storage and bandwidth are the main running cost; set limits per plan. | Krew and Kreator | Standard |
| IN-08 | Google Drive or Dropbox | Delivering final files without re-uploading. | Creator grants access. | - | Krew and Kreator | Standard |
| IN-09 | Call recording and transcription | Call notes. | Speech-to-text service. | Client's consent; accuracy on mixed Hindi-English speech to be tested. | Krew and Kreator | Verify |
| IN-10 | Premiere Pro, Photoshop, Illustrator | Review comments inside the editing tool. | Adobe developer account; one plugin per application. | Later stage. | Krew and Kreator | Verify |
| IN-11 | Canva | Review of Canva designs. | Canva developer account; app review. | Later stage. | Krew and Kreator | Verify |
| IN-12 | VN and Instagram Edits | Review of mobile-edited videos. | None. | Upload and link only; no known plugin route. | Krew and Kreator | Verify |
| IN-13 | MCP layer | Lets an AI assistant read and act on jobs, comments and invoices. | Stable internal API first. | Connects AI assistants to Krew; does not itself put a panel inside an editing tool. | Krew and Kreator | Standard |
| **Money   (3)** | | | | | | |
| IN-14 | Payment gateway with UPI | Payment links and automatic payment status. | Gateway account and KYC. | Decide whether money goes direct to the creator or through Orry. | Krew and Kreator | Verify |
| IN-15 | Tally or Zoho Books | Handing the ledger to the accountant. | None for export. | Excel export first; live sync later. | Krew and Kreator | Standard |
| IN-16 | E-signature | Signing the quote or contract. | Provider account. | Provider to be chosen. | Krew and Kreator | Verify |

## 5 UI & UX

| ID | User | Requirement | Detail and acceptance | Applies to | Priority |
|---|---|---|---|---|---|
| **Global   (2)** | | | | | |
| UX-01 | Creator | Mobile-first | Every screen works on a phone; creators work on the move. | Krew and Kreator | P0 |
| UX-02 | Creator | Plain language | No technical terms on screen. | Krew and Kreator | P0 |
| **Onboarding   (2)** | | | | | |
| UX-03 | Creator | Connect channels | Three cards: Instagram, WhatsApp Business, Gmail. Each shows what it unlocks and its status. | Krew and Kreator | P0 |
| UX-04 | Creator | Kreator WhatsApp label | States clearly that WhatsApp is inbox only on Kreator. | Kreator | P1 |
| **Profile evaluation   (3)** | | | | | |
| UX-05 | Creator | Score card | Overall score, score per area, change since last month. | Krew and Kreator | P1 |
| UX-06 | Creator | Action items | Three to five fixes, each with the number behind it and a done button. | Krew and Kreator | P1 |
| UX-07 | Creator | Best work | Top posts by enquiries, with a button to use in portfolio or ad. | Krew and Kreator | P2 |
| **Inbox   (3)** | | | | | |
| UX-08 | Creator | One inbox | All channels in one list by person, with channel shown and links to lead, job and invoice. | Krew and Kreator | P0 |
| UX-09 | Creator | Bot and human marked | Shows which messages the bot sent; one button to take over. | Krew and Kreator | P0 |
| UX-10 | Creator | Mark as client or personal | Creator controls which conversations Krew keeps. | Krew and Kreator | P0 |
| **Leads and ads   (2)** | | | | | |
| UX-11 | Creator | Pipeline board | Leads by stage with source and the post that brought them. | Krew | P1 |
| UX-12 | Creator | Boost a post | Pick post, budget, city; preview and total cost before approval. | Krew | P2 |
| **Jobs and tasks   (4)** | | | | | |
| UX-13 | Creator | Jobs list | All jobs with stage and amount pending at the top. | Krew and Kreator | P0 |
| UX-14 | Creator | Today view | Tasks due today, shoots, and reminders in one screen. | Krew and Kreator | P0 |
| UX-15 | Creator | Calendar | Shoots and deadlines, with clashes highlighted. | Krew and Kreator | P1 |
| UX-16 | Team member | My tasks | Only assigned tasks, with one-tap status update. | Krew | P1 |
| **Client-facing   (3)** | | | | | |
| UX-17 | Client | Brief form | Mobile form or chat with short questions and reference upload. No login. | Krew and Kreator | P0 |
| UX-18 | Client | Review page | Opens from a link; tap on timeline or image to comment; approve button always visible. | Krew and Kreator | P0 |
| UX-19 | Client | Invoice and pay | Invoice opens from a link with a pay button and receipt. | Krew and Kreator | P0 |
| **Money   (2)** | | | | | |
| UX-20 | Creator | Invoice in a few taps | Prefilled from the job; share by WhatsApp or email. | Krew and Kreator | P0 |
| UX-21 | Creator | Receivables | Per client: invoiced, received, tax deducted, pending, days overdue. | Krew and Kreator | P0 |
| **Reminders   (2)** | | | | | |
| UX-22 | Creator | Reminder settings | Default timings shown; editable overall and per client; mute per client. | Krew and Kreator | P1 |
| UX-23 | Creator | Drafted WhatsApp messages | On Kreator, client reminders for WhatsApp appear as ready messages to send with one tap. | Kreator | P1 |
| **Plan   (1)** | | | | | |
| UX-24 | Creator | Locked modules | CRM, ads and WhatsApp automation shown as locked with a short description and upgrade button. | Kreator | P1 |

## 6 Analytics

| ID | Metric | How it is calculated | Data source | Applies to | Priority |
|---|---|---|---|---|---|
| **Leads   (3)** | | | | | |
| AN-01 | Enquiries by source and by post | Count of enquiries per channel and per post. | Inbox, post tracking | Krew; Kreator counts only | P1 |
| AN-02 | Response time | Median time from enquiry to the creator's first reply. | Inbox | Krew and Kreator | P1 |
| AN-03 | Enquiry to booked conversion | Enquiries reaching brief / enquiries; booked / briefs. | Pipeline, jobs | Krew | P1 |
| **Content   (2)** | | | | | |
| AN-04 | Posts that bring enquiries | Enquiries and booked jobs per post and per format. | Post tracking, Instagram insights | Krew and Kreator | P1 |
| AN-05 | Profile evaluation score | Overall and per-area score over time. | Profile evaluation | Krew and Kreator | P1 |
| **Ads   (1)** | | | | | |
| AN-06 | Ad performance | Spend, leads, cost per lead, cost per booked job, revenue from ad leads. | Meta ads, pipeline, jobs | Krew | P2 |
| **Jobs and tasks   (3)** | | | | | |
| AN-07 | On-time delivery rate | Jobs delivered by the agreed date / jobs delivered. | Jobs | Krew and Kreator | P1 |
| AN-08 | Turnaround by job type | Median days from booking to approval. | Jobs | Krew and Kreator | P1 |
| AN-09 | Overdue tasks and workload | Overdue tasks; open tasks per team member. | Tasks | Both; team view in Krew | P1 |
| **Review   (2)** | | | | | |
| AN-10 | Rounds per job | Average revision rounds; jobs over the agreed rounds. | Review | Krew and Kreator | P1 |
| AN-11 | Client response time | Median days the client takes to give feedback. | Review | Krew and Kreator | P2 |
| **Money   (3)** | | | | | |
| AN-12 | Invoiced, received, pending | Totals for the period. | Ledger | Krew and Kreator | P0 |
| AN-13 | Days to get paid | Median days from invoice to payment; overdue amount by client. | Ledger | Krew and Kreator | P0 |
| AN-14 | Advance collected share | Jobs with advance received before work began / jobs. | Ledger, jobs | Krew and Kreator | P1 |
| **Clients and earnings   (3)** | | | | | |
| AN-15 | Repeat clients and revenue per client | Clients with 2 or more jobs; revenue per client; slow payers. | Jobs, ledger | Krew and Kreator | P1 |
| AN-16 | Revenue by month and type of work | Revenue split by month and job type. | Ledger | Krew and Kreator | P1 |
| AN-17 | Earning per job day | Revenue / days worked on jobs. | Jobs, tasks | Krew and Kreator | P2 |
| **Chatbot and reminders   (2)** | | | | | |
| AN-18 | Chatbot handling | Chats handled by the bot / all chats; chats handed over. | Inbox | Krew and Kreator | P2 |
| AN-19 | Reminder effect | Payments and feedback received within a set time of a reminder. | Reminders, ledger, review | Krew and Kreator | P2 |

## 7 Reminders

| ID | Reminder | When (default, editable) | Stops when | Channel on Krew | Channel on Kreator |
|---|---|---|---|---|---|
| **For the creator or crew   (11)** | | | | | |
| RM-01 | New lead not answered | After 15 minutes, then 2 hours | Creator replies | App, WhatsApp | App, email |
| RM-02 | Quote sent, no reply | Day 2 and day 5 | Client accepts or declines | App, WhatsApp | App, email |
| RM-03 | Task due or overdue | Day before, on the day, each day overdue | Task marked done | App, WhatsApp | App, email |
| RM-04 | Shoot tomorrow, with brief and checklist | Evening before | - | App, WhatsApp | App, email |
| RM-05 | Advance not received before the shoot | 2 days before | Advance recorded | App, WhatsApp | App, email |
| RM-06 | Job approved but not invoiced | Same day, then next day | Invoice sent | App, WhatsApp | App, email |
| RM-07 | Revision round limit reached | When it happens | - | App, WhatsApp | App, email |
| RM-08 | Connected account disconnected | Immediately | Reconnected | App, WhatsApp | App, email |
| RM-09 | Weekly summary: pending payments, overdue tasks, open leads | Monday morning | - | WhatsApp or email | Email |
| RM-10 | Monthly export for the accountant | Month end | - | App, email | App, email |
| RM-11 | Monthly profile evaluation ready | Monthly | - | App, WhatsApp | App, email |
| **For the client   (6)** | | | | | |
| RM-12 | Brief not completed | Day 1 and day 3 | Brief submitted | WhatsApp, email (automatic) | Email (automatic); WhatsApp as a drafted message |
| RM-13 | Quote awaiting acceptance | Day 2 and day 5 | Accepted or declined | WhatsApp, email (automatic) | Email (automatic); WhatsApp as a drafted message |
| RM-14 | Draft waiting for feedback | Day 2 and day 4 | Comment or approval | WhatsApp, email (automatic) | Email (automatic); WhatsApp as a drafted message |
| RM-15 | Advance due | On the quote's due date | Advance paid | WhatsApp, email (automatic) | Email (automatic); WhatsApp as a drafted message |
| RM-16 | Invoice due | 3 days before, on the due date, then days 3, 7 and 15 overdue | Paid or marked paid | WhatsApp, email (automatic) | Email (automatic); WhatsApp as a drafted message |
| RM-17 | Payment received, with thanks and receipt | Immediately | - | WhatsApp, email (automatic) | Email (automatic); WhatsApp as a drafted message |

## 8 Profile Evaluation

| ID | Item | How it works | Data used |
|---|---|---|---|
| **What is evaluated   (10)** | | | |
| PE-01 | Profile readiness | Bio states the service and city; contact button, link and highlights in place; category set. | Profile fields |
| PE-02 | Niche clarity | Share of recent posts that show the work the creator sells. | Recent posts and captions |
| PE-03 | Consistency | Posts per week and gaps between posts. | Post dates |
| PE-04 | Content mix | Split across reels, carousels, photos and stories, and which format performs best for this creator. | Post types and insights |
| PE-05 | Engagement quality | Saves, shares and comments against reach, not only likes. | Post insights |
| PE-06 | Reach beyond followers | Share of views coming from non-followers. | Post insights |
| PE-07 | Audience fit | Whether the audience's cities and age groups match the clients the creator wants. | Audience insights |
| PE-08 | Growth | Follower and reach change over 30 and 90 days. | Account insights |
| PE-09 | Enquiry readiness | Enquiries per post, response time, share answered. | Krew inbox |
| PE-10 | Conversion | Enquiry to booked job, once jobs run through Krew. | Krew jobs |
| **What the creator sees   (4)** | | | |
| PE-11 | Score | Overall score with a score per area, and the change since last month. | All areas |
| PE-12 | Comparison | Against own history first; against similar creators on Krew (same skill, city tier) once enough have joined, anonymised. | Own history; Krew creators |
| PE-13 | Action items | Three to five specific fixes, each with the number behind it. | Largest gaps |
| PE-14 | Best work | Top posts by enquiries, for the portfolio and for ads. | Post tracking |
| **Limits   (5)** | | | |
| PE-15 | Professional account required | Personal Instagram accounts cannot be read; the creator is guided to switch. | - |
| PE-16 | Audience data is totals | Needs a minimum follower count; small accounts get a shorter evaluation. | - |
| PE-17 | No access to other creators' private data | Comparison only with creators on Krew, anonymised and above a minimum group size. | - |
| PE-18 | Advice, not a public rating | Private to the creator unless decided otherwise (open decision). | - |
| PE-19 | Scoring weights | How much each area counts toward the overall score is to be set and tested. | - |
