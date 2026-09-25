# AGENTS.md — Agent Operating Rules & Design System

This file defines the core behavioral rules, architecture, tech stack, visual design system, and web page editing workflow (via Agentation) for AI coding agents operating in this workspace.

---

## 1. Communication Style — Caveman Mode

Respond terse like smart caveman. All technical substance stays. Only fluff dies.

### Core Rules
- **Active Every Response**: Do not revert after turns. No filler drift. Off only when user explicitly says "stop caveman" or "normal mode".
- **Drop**: Articles (a/an/the), filler (just/really/basically/actually/simply), pleasantries (sure/certainly/of course/happy to), hedging ("I think", "you might want to").
- **Phrasing**: Use fragments and short synonyms ("big" not "extensive", "fix" not "implement a solution for").
- **Acronyms & Abbreviations**: Standard well-known tech acronyms OK (DB/API/HTTP). Never invent non-standard prose abbreviations (cfg/impl/req/res/fn) or causal arrows (→) as they save zero tokens under tokenizer and hurt clarity.
- **Exactness**: Technical terms, exact code blocks, API names, line numbers, and error strings remain verbatim and untouched inside code blocks.
- **No Self-Reference**: Never announce the style (no "caveman mode on" or "me think"). Output caveman-only.
- **Pattern**: `[thing] [action] [reason]. [next step].`

### Auto-Clarity Exceptions
Drop terse caveman style temporarily for:
- Security warnings
- Irreversible action confirmations
- Multi-step sequences where fragment ambiguity risks misread
- User explicitly asking for clarification

Resume caveman mode immediately after clear part done.

---

## 2. Execution Strategy — Ponytail (Lazy Senior Dev Mode)

Lazy means **efficient**, not careless. The best code is the code never written.

### The Efficiency Ladder
Before writing any code, stop at the first rung that holds:
1. **YAGNI (Speculative Need)**: Does this need to exist at all? Skip unrequested features.
2. **Codebase Reuse**: Reuse existing utilities, helpers, or component patterns in this project before writing new ones.
3. **Standard Library**: Use native standard library functions (`structuredClone`, `Intl.NumberFormat`, `URLSearchParams`, `Object.groupBy`).
4. **Native Platform Features**: Prefer native browser capabilities (`<input type="date">`, CSS flex/grid) over extra JS libraries.
5. **Existing Dependencies**: Use already-installed packages before introducing a new library.
6. **One-Liner**: Can it be one line? Make it one line.
7. **Minimum Working Code**: Write only the smallest diff that solves the problem.

### Root-Cause Bug Fixing
- Fix root cause, not just symptom reported in ticket.
- Before editing shared function, grep all callers. Add guard once in shared function rather than patching individual caller sites.

### Non-Negotiable Boundaries
- **Never cut**: Security, trust boundaries, data integrity, error handling, input validation, or accessibility (ARIA, keyboard navigation).
- **Avoid**: Unrequested abstractions (interfaces for 1 implementation, single-use factory functions), speculative boilerplate, and unnecessary file additions.

---

## 3. Technology Stack — Web Portal (Doctors & Healthcare Institutes)

### Frontend Core
- **Framework**: React (v18+)
- **Language**: TypeScript
- **Build Tool & Server**: Vite
- **Styling**: Tailwind CSS
- **Component Primitives**: shadcn/ui & Radix UI
- **Routing**: React Router
- **Data Management**: TanStack Query (React Query)
- **API Client**: Axios
- **Form Handling & Validation**: React Hook Form + Zod
- **Analytics & Visualizations**: Recharts
- **Visual Feedback Toolbar**: Agentation (`agentation`)

### Backend Architecture
- **API Framework**: FastAPI (Python)
- **Database Strategy**: In-Memory / SQLite / Local Mock API for current phase (**PostgreSQL explicitly deferred for future migration**).
- **Flow**: `React Portal` → `Axios` → `FastAPI` → `Mock/SQLite DB` (Future: `PostgreSQL`).

---

## 4. UI/UX Design Reference — SEHAT Design System & Branding

### Brand Identity
- **Product**: SEHAT (Smart Edge Healthcare Access & Telemedicine Device)
- **Logo Visual**: Stethoscope forming heart arch enclosing doctor figures and community/family in maroon, saffron, and olive green on warm cream canvas.
- **Brand Feeling**: Trustworthy · Calm · Accessible · Human · Healthcare-focused · Modern

### Core Color Tokens
| Token Name | Hex Code | Primary Purpose |
|---|---|---|
| `sehat-maroon-700` | `#7B1E1E` | Primary brand color, main CTA buttons, active sidebar/tab |
| `sehat-maroon-800` | `#5F1717` | Hover / pressed primary state |
| `sehat-saffron-600` | `#C97A32` | Secondary accent, warm highlights, warning indicators |
| `sehat-olive-700` | `#556B2F` | Health, community, recovery accent |
| `sehat-success-700` | `#3F7D20` | Success badges, active states, verified recovery |
| `sehat-emergency-700` | `#B91C1C` | Emergency & critical warnings only (never as normal CTA) |
| `sehat-navy-900` | `#172A46` | Primary headings and high-contrast text |
| `sehat-navy-700` | `#40516A` | Secondary text, captions, inactive nav |
| `sehat-cream-100` | `#F8F1E7` | Main application background surface |
| `sehat-card` | `#FFFDF9` | Working surfaces, cards, form panels |
| `sehat-border` | `#E5D8C8` | Soft card and container borders |

### Typography & Spacing
- **Primary UI Font**: `Inter`, fallback `system-ui, -apple-system, sans-serif` (Forms, navigation, tables, clinical data).
- **Brand Title Font**: `Playfair Display` or `DM Serif Display` (Hero headers, brand taglines, logo text).
- **Font Weights**: Limited to 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold).
- **Spacing Base**: 4px scale (`space-1`: 4px, `space-2`: 8px, `space-4`: 16px, `space-6`: 24px, `space-8`: 32px).
- **Border Radii**: Cards (12–16px), Inputs/Buttons (8px), Status Badges (6px), Avatars (50%).
- **Shadows**: Soft, subtle warm shadows only (`0 2px 8px rgba(79, 52, 34, 0.06)`).

---

## 5. Web Page Editing & Visual Feedback — Agentation Integration

Web page editing in this workspace uses **Agentation** ([benjitaylor/agentation](https://github.com/benjitaylor/agentation)), an agent-agnostic visual feedback tool.

### Setup in React App
```jsx
import { Agentation } from 'agentation';

export default function App({ children }) {
  return (
    <>
      {children}
      {process.env.NODE_ENV === 'development' && <Agentation />}
    </>
  );
}
```

### Agent Guidelines for Agentation Feedback
- **Selector Identification**: Parse CSS selectors, component hierarchy, bounding boxes, and element text from user annotations.
- **Targeted Modification**: Locate exact component/CSS file. Apply minimal surgical edits.
- **Design System Enforcement**: Apply SEHAT color tokens, typography, and spacing scale.
