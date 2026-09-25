# SEHAT Design System — UI Design Guide

## 1. Brand

**Product:** SEHAT — Smart Edge Healthcare Access & Telemedicine Device

SEHAT uses a warm, trustworthy healthcare visual language inspired by the supplied logo:
- Deep maroon for identity, primary actions, and healthcare authority
- Saffron/terracotta for warmth and emphasis
- Olive green for health, recovery, and community
- Warm cream for the application background
- Off-white for cards and work surfaces
- Dark navy for highly readable text

The interface should feel:
**Trustworthy · Calm · Accessible · Human · Government-healthcare focused · Modern**

---

# 2. Core Color Palette

| Token | Hex | Usage |
|---|---|---|
| `sehat-maroon-700` | `#7B1E1E` | Primary brand, primary buttons, active navigation |
| `sehat-maroon-800` | `#5F1717` | Hover/pressed primary states |
| `sehat-maroon-600` | `#8F2A24` | Secondary maroon emphasis |
| `sehat-maroon-100` | `#F4DDDA` | Soft maroon backgrounds |
| `sehat-saffron-600` | `#C97A32` | Accent, highlights, warm indicators |
| `sehat-saffron-100` | `#FBE8D4` | Soft accent backgrounds |
| `sehat-olive-700` | `#556B2F` | Community/health accent |
| `sehat-olive-600` | `#667F38` | Secondary green |
| `sehat-olive-100` | `#E7EEDC` | Soft green backgrounds |
| `sehat-success-700` | `#3F7D20` | Success, completed, active |
| `sehat-success-100` | `#DDEDDC` | Success badge background |
| `sehat-emergency-700` | `#B91C1C` | Emergency/high-risk states |
| `sehat-emergency-100` | `#FDE2E2` | Emergency background |
| `sehat-navy-900` | `#172A46` | Primary text/headings |
| `sehat-navy-700` | `#40516A` | Secondary text |
| `sehat-cream-100` | `#F8F1E7` | Main application background |
| `sehat-card` | `#FFFDF9` | Cards, panels, forms |
| `sehat-white` | `#FFFFFF` | Inputs and clean surfaces |
| `sehat-border` | `#E5D8C8` | Borders/dividers |
| `sehat-muted` | `#F2ECE3` | Disabled/neutral surfaces |

---

# 3. Recommended Color Hierarchy

### Primary
Use `#7B1E1E`.

Use for:
- Main CTA buttons
- Active sidebar item
- Important navigation
- Primary tabs
- Selected states
- Key healthcare branding

### Secondary
Use `#C97A32`.

Use for:
- Accent icons
- Warm highlights
- Waiting/attention states
- Decorative details

### Health / Success
Use `#556B2F` and `#3F7D20`.

Use for:
- Recovery
- Completed
- Available
- Active
- Positive status
- Community illustrations

### Emergency
Use `#B91C1C`.

Use sparingly for:
- Emergency cases
- Critical warnings
- Urgent escalation

Never use emergency red as a normal primary button color.

---

# 4. Background System

Application background:

`#F8F1E7`

Cards:

`#FFFDF9`

Input background:

`#FFFFFF`

Secondary panel:

`#F2ECE3`

Soft green panel:

`#E7EEDC`

Soft maroon panel:

`#F4DDDA`

Soft saffron panel:

`#FBE8D4`

The interface should have a warm cream environment with clean off-white working surfaces.

---

# 5. Typography

## Primary Font

Use:

**Inter**

Fallback:

`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

Inter should be used for:
- Navigation
- Forms
- Tables
- Buttons
- Labels
- Body copy
- Clinical information
- Dashboard data

## Brand / Editorial Font

Use a warm serif such as:

**Playfair Display**

or

**DM Serif Display**

Use only for:
- SEHAT brand statements
- Selected hero headings
- Community-focused quotes
- Small decorative taglines

Do NOT use serif fonts for dense clinical information.

---

# 6. Font Scale

| Element | Size | Weight | Line Height |
|---|---:|---:|---:|
| Display heading | 36px | 700 | 44px |
| Page heading | 32px | 700 | 40px |
| Section heading | 24px | 700 | 32px |
| Card heading | 20px | 650 | 28px |
| Large metric | 28px | 700 | 34px |
| Body large | 16px | 400 | 24px |
| Body | 14px | 400 | 21px |
| Body medium | 14px | 500 | 21px |
| Label | 13px | 600 | 18px |
| Small metadata | 12px | 400 | 18px |
| Caption | 11px | 500 | 16px |

---

# 7. Font Weight

Use a limited weight system:

- 400 — Regular
- 500 — Medium
- 600 — Semibold
- 700 — Bold

Recommended usage:

**400**
Normal information and descriptions.

**500**
Navigation, table values and supporting information.

**600**
Labels, card headings, buttons and important metadata.

**700**
Page headings, major metrics and primary titles.

Avoid using 800/900 weights.

---

# 8. Spacing System

Use a 4px base spacing system.

| Token | Value |
|---|---:|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |

Recommended:
- Icon → text: 8–12px
- Form label → input: 8px
- Input → next field: 16–20px
- Card internal padding: 20–24px
- Section gap: 24–32px
- Page section gap: 32px
- Sidebar item vertical padding: 12px
- Main page horizontal padding: 24–32px

---

# 9. Layout

Desktop-first.

Recommended sidebar:

**280px**

Top header:

**70px**

Main content:

`calc(100vw - 280px)`

Recommended page padding:

- Horizontal: 24–32px
- Vertical: 24–32px

Maximum content width:

Approximately 1600px.

For 1440px screens:
- Sidebar: 280px
- Main content: approximately 1160px
- Page padding: 24px

---

# 10. Border Radius

Use soft but professional corners.

| Component | Radius |
|---|---:|
| Small badge | 6px |
| Input | 8px |
| Button | 8px |
| Table container | 12px |
| Card | 12–16px |
| Large panel | 16px |
| Modal | 16px |
| Avatar | 50% |

Avoid excessive pill-shaped components.

Use pill shapes mainly for:
- Status badges
- Filters
- Small tags

---

# 11. Shadows

Use subtle shadows only.

Default:

`0 2px 8px rgba(79, 52, 34, 0.06)`

Elevated:

`0 6px 20px rgba(79, 52, 34, 0.08)`

Modal:

`0 12px 32px rgba(79, 52, 34, 0.12)`

Do not use strong dark shadows.

---

# 12. Buttons

## Primary Button

Background:
`#7B1E1E`

Text:
`#FFFFFF`

Hover:
`#5F1717`

Height:
44px

Border radius:
8px

Font:
14px / 600

Example:
**Save Consultation**

## Secondary Button

Background:
`#FFFDF9`

Border:
`#7B1E1E`

Text:
`#7B1E1E`

## Success Button

Background:
`#3F7D20`

Text:
`#FFFFFF`

## Emergency Button

Background:
`#B91C1C`

Use only when the action is genuinely emergency-related.

---

# 13. Inputs

Height:
44–48px

Background:
`#FFFFFF`

Border:
`#E5D8C8`

Border radius:
8px

Text:
`#172A46`

Placeholder:
`#7A8491`

Focus:
- Border: `#7B1E1E`
- Subtle maroon focus ring

Example:

`Search patient by ABHA / Name / Mobile number...`

---

# 14. Cards

Default:

Background:
`#FFFDF9`

Border:
`1px solid #E5D8C8`

Radius:
12–16px

Padding:
20–24px

Shadow:
Very subtle.

Cards should provide clear grouping without making every small element a separate card.

---

# 15. Navigation

Sidebar background:

`#FFFDF9`

Active navigation:
- Background: `#FBE8D4`
- Text: `#7B1E1E`
- Icon: `#7B1E1E`
- Left border: `#7B1E1E`

Inactive:
- Text: `#40516A`
- Icon: `#40516A`

Hover:
`#F8F1E7`

---

# 16. Status System

### Active
Background: `#DDEDDC`
Text: `#3F7D20`

### Completed
Background: `#DDEDDC`
Text: `#3F7D20`

### Waiting
Background: `#FBE8D4`
Text: `#9A5A16`

### Pending
Background: `#FBE8D4`
Text: `#9A5A16`

### In Consultation
Background: `#E4EDF8`
Text: `#315C8A`

### Emergency
Background: `#FDE2E2`
Text: `#B91C1C`

### Neutral
Background: `#F2ECE3`
Text: `#40516A`

Status badges:
- 12px text
- 500/600 weight
- 6px radius
- 6px × 10px padding

---

# 17. Tables

Header:
- Background: `#FAF4EB`
- Text: `#172A46`
- Weight: 600

Rows:
- Background: `#FFFDF9`
- Border-bottom: `#EEE5DA`

Row height:
48–56px

Hover:
`#FCF7F0`

Keep tables spacious and easy to scan.

Avoid excessive borders between every cell.

---

# 18. Icons

Preferred icon library:

**Lucide Icons**

Icon size:
- Navigation: 20px
- Buttons: 18px
- Table actions: 16px
- Large feature icons: 24–28px

Icon color should normally inherit the component color.

Avoid mixing multiple icon styles.

---

# 19. Illustrations

Use minimal line/flat illustrations inspired by:
- Indian rural communities
- Healthcare
- Leaves
- Trees
- Village homes
- Hills
- Connected care

Use illustrations mainly:
- Sidebar footer
- Empty states
- Login page
- Dashboard decorative areas
- Success states

Never allow illustrations to reduce clinical readability.

---

# 20. Charts

Charts should use the SEHAT palette.

Primary chart:
`#7B1E1E`

Secondary:
`#C97A32`

Positive:
`#3F7D20`

Supporting:
`#556B2F`

Background:
`#F8F1E7`

Grid:
`#E5D8C8`

Avoid highly saturated rainbow charts.

---

# 21. Accessibility

Maintain strong contrast between:
- Text and background
- Buttons and labels
- Status text and status backgrounds

Never communicate critical information using color alone.

Example:
Emergency status should include:
- Red color
- Emergency icon
- Text label

Minimum interactive target:
44px height where possible.

---

# 22. Healthcare UX Principles

SEHAT should feel:

**Simple**
Frontline staff should understand the screen immediately.

**Calm**
Avoid visual overload.

**Fast**
Important actions should be reachable quickly.

**Safe**
Emergency and clinical states must be visually obvious.

**Consistent**
The same action must look the same across screens.

**Human**
Use warm colors and subtle community imagery without sacrificing professionalism.

---

# 23. Core Screen Visual Priority

Dashboard:
Today's Queue → Appointments → Follow-ups → Recent Activity

Patient Search:
Search → Results → Patient Profile

Patient Record:
Current Clinical Summary → Actions → Timeline

Consultation:
Clinical Information → Assessment → Action → Outcome

Referral:
Recommended Destination → Priority → Destination → Referral

Diagnostics:
Upload Report → Previous Reports

Appointments:
Today's Schedule → Upcoming

Follow-ups:
Pending Tasks → Due Dates → Patient

Medicine:
Search → Facility Availability

Teleconsultation:
Video/Audio → Patient Record → Notes → Outcome

Reports:
Operational Metrics → Trends → Reports

---

# 24. Brand Voice

Use concise, human language.

Preferred:
- “Start Consultation”
- “View Patient”
- “Create Referral”
- “Upload Report”
- “Schedule Follow-up”
- “Treatment Completed”
- “Recovery Verified”

Avoid overly technical UI language.

Brand messaging:

“People First.
Connected Care.
Stronger Communities.
Healthier Tomorrows.”

Optional supporting phrase:

“Better care, closer to people.”

---

# 25. CSS/Tailwind Tokens

Recommended Tailwind mapping:

primary:
`#7B1E1E`

primary-dark:
`#5F1717`

accent:
`#C97A32`

olive:
`#556B2F`

success:
`#3F7D20`

emergency:
`#B91C1C`

background:
`#F8F1E7`

surface:
`#FFFDF9`

text:
`#172A46`

muted-text:
`#40516A`

border:
`#E5D8C8`

---

# 26. Final Rule

The SEHAT interface must always prioritize:

**Healthcare clarity over decoration.  
Human readability over density.  
Consistency over novelty.  
Trust over visual complexity.**

The logo and supplied SEHAT color identity should remain the source of truth for the visual language.
