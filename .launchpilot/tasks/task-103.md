# LaunchPilot Task #103

Repo: jodyswartz/routine-number-one
Base branch: main
Branch: launchpilot/task-103-1781385891859

## Idea

Build a minimalist web app called “Routine No. 1”.

Concept:
A beautifully minimal push-up set counter inspired by vintage flip clocks and Wes Anderson aesthetics. The experience should feel calm, tactile, symmetrical, and intentionally simple.

Goal:
A single-screen micro app for counting push-up sets.

Tech requirements:
- React + Vite
- Deployable to GitHub Pages
- No backend
- No database
- Local-only state using localStorage
- Mobile-first responsive design
- Clean component structure
- Production-ready code

Core functionality:
- Large centered counter in flip-clock style
- Plus (+) button increments by 1
- Minus (–) button decrements by 1
- Counter can never go below zero
- Reset button resets counter to zero
- Persist count in localStorage so refresh keeps value
- Smooth flip animation when incrementing/decrementing
- Touch-friendly controls for mobile

Design requirements:
- Wes Anderson-inspired color palette
- Symmetrical layout
- Minimalist design
- Vintage mechanical flip clock feel
- Soft shadows and subtle depth
- Calm, premium feeling
- Avoid aggressive fitness aesthetics
- Large typography for counter
- Elegant serif headings with clean sans-serif UI text
- Generous spacing
- Rounded buttons

Branding:
App name: “Routine No. 1”

Header:
ROUTINE
No. 1

Optional subtitle:
“A counter for daily repetitions.”

Color direction:
Warm cream background
Muted dusty pink
Mustard accent
Deep burgundy details
Soft shadows

UX details:
- Smooth 200–300ms flip transition
- Subtle button press feedback
- Haptic-friendly interactions (if mobile/PWA later)
- Reset should feel intentional and not destructive

Project structure:
- Clean reusable components
- Separate FlipCounter component
- Reusable Button component
- CSS modules or clean styling architecture
- Simple and maintainable

Deployment:
Include GitHub Pages deployment setup:
- Correct Vite base config
- gh-pages package
- package.json deploy scripts

Deliverables:
1. Complete project structure
2. Production-ready code
3. README.md
4. GitHub Pages deployment instructions
5. Beautiful polished UI, not generic AI styling