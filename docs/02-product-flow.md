# Krew & Kreator: end-to-end product flow

This flow includes the WhatsApp change. Where it differs from the PRD, the PRD's MVP scope wins: the MVP sends no WhatsApp messages, and client reminders go by email only.

**Format of each step:** screen or trigger → what the user sees or does → what the system does · spec IDs · release.

**WhatsApp updates (marked 🟢):** P1, the same on both plans. The app drafts the message and the creator sends it with one tap.

---

## Stage 1 · Set up

1. **Sign-up.** The creator picks a skill (video, design or photo), a city, and "Just me" or "I have a team". "Team" turns on team invites, which are Krew only. F01 · P0
2. **Connect Instagram.** Professional accounts only. A personal account gets the message "Switch to Professional in Instagram settings" (EC-33). The app checks that "Allow access to messages" is on. PF-04, UX-03 · P0
3. **Connect WhatsApp Business.** Uses coexistence. The creator reads chats in Krew and replies in the WhatsApp Business app. Personal WhatsApp numbers can't connect. Chat history is dropped. PF-06 · P0
4. **Connect Gmail.** A guided step creates a Gmail forwarding filter for incoming mail. Outgoing mail goes through `gmail.send` from the creator's own address. PF-05 · P1 in spec v3, but in the PRD's MVP
5. **Rates and portfolio.** These are the bot's only approved facts. PF-34 · P0
6. **Business and tax profile.** PF-35 · P0
   - Fields: PAN, GSTIN (optional; turns on GST mode), State, UPI ID, the Razorpay connection, SAC codes, and a turnover band.
   - Three number series per financial year (invoices, credit notes, receipts), resetting on 1 April.
7. **Disconnect alert.** A banner with a "Reconnect" button, plus push and email. A warning also goes out before WhatsApp drops after about 14 idle days. EC-04, RM-08 · P0

## Stage 2 · Handle the enquiry

1. A message arrives (DM, comment, story reply, WhatsApp or email). The **gate** checks it first, then it's matched to one person by phone, handle or email. PF-02, EC-01 · P0
2. An unknown chat shows "Client or personal?". Personal chats are never stored. EC-03, UX-10 · P0
3. On Instagram, the bot replies with rates, portfolio and availability. It only replies within 24 hours of the client's last message, and sends one private reply per comment keyword. It says it is automated. Messages it sends are labelled, with a "Take over" button. PF-14, UX-09 · P0
4. The bot asks for budget, date, type of work and location. PF-15 · P0
5. If the client asks for a discount or a custom quote, the bot hands over to the creator. It never negotiates. EC-05 · P0
6. The creator gets the chat with a summary. The bot pauses as soon as the creator replies. EC-07 · P0
7. **WhatsApp and email enquiries** get no bot reply. Outside WhatsApp's 24-hour reply window, the reply box is disabled and "Reply in WhatsApp Business" opens the app instead.
8. If the creator hasn't replied, they're reminded at 15 minutes and again at 2 hours. RM-01 · P0
9. **Later, Krew only:** the enquiry becomes a lead in the sales pipeline. PF-11 · P1

## Stage 3 · Win the job

1. The creator sends the brief link. PF-08 · P0
2. The client fills the brief on their phone with no login, one question per screen, uploading references. The form asks for WhatsApp consent. UX-17 · P0
3. 🟢 "Brief received" update · P1
4. The system generates scope, deliverables, dates and revision rounds. The creator edits and confirms. P0
5. The quote builder fills in prices from the rate card and sets the advance. The calendar clash warning is P1 (PF-19). PF-09 · P0
6. 🟢 "Quote sent" update · P1
7. On the quote page, the client accepts by typing their name and ticking a box. An **acceptance log that can't be changed** records the version hash, name, contact, time, IP address and device. The advance is paid through the creator's Razorpay Payment Link, or by UPI link or QR. PF-09 · P0
8. A **receipt voucher** is issued on the advance for GST-registered creators (Rule 50). P0 (PRD)
9. The job record is created. PF-01 · P0
10. 🟢 "Advance due" or "Advance received" update · P1
11. Reminders: RM-12 (brief), RM-13 (quote), RM-15 (advance) to the client by email, and RM-02 to the creator.

**Edge cases**
- The client never fills the brief: two reminders, then the creator can mark it lost.
- The client hasn't agreed to WhatsApp: updates go by email only.
- Paid outside the link: the creator marks it paid by hand (EC-26, EC-29).

## Stage 4 · Do the work

1. Tasks are created from a template, with dates set back from the delivery date. PF-17 · P0
2. Tasks are assigned: to the team on Krew, to self on Kreator. PF-18, PF-03 · P0
3. Team members see only their own tasks. UX-16
4. The Today view shows tasks, shoots and payments due. UX-14 · P0
5. Reminders: RM-03 (task due) and RM-04 (shoot tomorrow), by push and email.
6. If the advance isn't paid 2 days before the shoot, the job is marked "At risk", with buttons for "Remind client", "Mark as paid", "Go ahead anyway" and "Move date". EC-24, RM-05 · P0
7. Overdue tasks are escalated to the owner. EC-17

## Stage 5 · Approve and get paid

1. The creator uploads a draft. The upload resumes after a dropped connection: videos go to Stream by tus (up to 30 GB), images to R2. EC-20 · P0
2. The review link is sent by email. 🟢 "Draft ready for review" update · P1
3. On the review page, the client opens the link (no login). The video plays privately through signed links. The client comments on a timestamp or an image area, and the approve button is always visible. UX-18, PF-21 · P0
4. Comments are shown by reviewer and turn into tasks.
5. The revision round count is P1. If the client goes silent, RM-14 reminds them on day 2 and day 4.
6. When the client approves, that version is locked with name, date and time. EC-19 · P0. 🟢 "Version approved" update · P1
7. The invoice is built, as GST (Rule 46) or non-GST, with the advance deducted and a payment link. PF-24 · P0. If the creator hasn't invoiced, RM-06 reminds them.
8. The invoice is sent by email. 🟢 "Invoice sent" update · P1. RM-16 reminds the client 3 days before the due date, on the due date, and then 3, 7 and 15 days overdue.
9. **Payment:**
   - Through the link, status updates automatically.
   - Paid in cash or by bank transfer, the creator marks it paid by hand.
   - If the client deducted TDS, the deducted amount is recorded and the invoice settles. EC-25, EC-26
10. A receipt is sent (RM-17). 🟢 "Payment received" update · P1
11. Ledger and exports. PF-26 · P0
    - Paid invoices are locked; corrections go through a credit note (EC-27).
    - Exports cover Tally XML, Zoho CSV, and CSV with PDF.
    - Drafts are deleted 90 days after the job closes; financial records are kept for 72 months (PF-36).

## Stage 6 · Reminders underneath

**Creator reminders:** push and email, P0 (PF-29, PF-37). RM-01 to RM-08.

**Client reminders:** email, P0 (PF-30). RM-12 to RM-17. WhatsApp drafts come at P1.

**Send rules,** checked when a message is drafted and again at the moment of sending:

| Rule | What it means |
|---|---|
| Consent | Only send on a channel the client has agreed to |
| Status re-check | If the client has already acted, the reminder is cancelled (EC-30) |
| Stop on action | Reminders stop as soon as the client acts |
| Quiet hours | 20:00–10:00, no Sundays or national holidays |
| No money promises | No new prices or money commitments; amounts come only from a sent quote or invoice |
| Mute or slow | The creator can mute or slow reminders per client (EC-31) |

## Feature by plan

| Feature | Krew | Kreator | Release |
|---|---|---|---|
| Inbox, Instagram and WhatsApp inbox, bot, brief, quote, job, tasks, review, invoice, ledger, reminders | Yes | Yes | P0 |
| Team members (PF-03) | Yes | No | P0 |
| Gmail (PF-05) | Yes | Yes | MVP (PRD) |
| **WhatsApp one-tap updates (PF-28)** | **Yes** | **Yes** | **P1** |
| CRM pipeline (PF-11), content to lead (PF-12) | Yes | No | P1 |
| Meta ads (PF-13) | Yes | No | P2 |

## Open questions

1. Is there a monthly cap on WhatsApp updates for Kreator?
2. Who pays WhatsApp charges if sending ever becomes fully automatic?
3. How is consent recorded, and how does a client opt out?
4. Can the creator edit WhatsApp drafts? If so, amounts should be locked.
5. Should an unpaid advance block the shoot, or only warn?
6. If the brief allows auto-approval, does it need a reminder first?
