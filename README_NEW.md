# JSPCoders Conference Website

This is the official website for the International Conference on Translating Across Genres, powered by JSPCoders.

## Features
- Modern, responsive design
- Conference information and schedule
- Call for Papers download
- Registration and updates subscription
- Admin dashboard

## Getting Started
1. Clone the repository:
   ```sh
   git clone https://github.com/Rexjain270804/tagpc-translatelife.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser at `http://localhost:5173`

## Project Structure
- `src/` — Main source code (components, pages, hooks, assets)
- `public/` — Static assets (favicon, robots.txt, conference PDF)
- `supabase/` — Supabase config and migrations

## Customization
- Update conference details in `src/pages/Index.tsx` and related components.
- Replace logo in `public/` and `src/assets/` as needed.
- Edit color theme in `src/index.css` and `tailwind.config.ts`.

## Functional Changes & Improvements

The following functional updates and improvements have been made to the website:

- Updated the color theme and layout to match the conference logo and branding.
- Improved the hero section: enhanced logo visibility, button contrast, alignment, and added an email subscription form with validation.
- Refined the "Call for Papers" section: removed unnecessary containers, centered the download button, and ensured the download works from the public folder.
- Ensured all download buttons for the CFP PDF work as intended and reverted extra buttons for clarity.
- Improved accessibility and responsiveness across main sections.
- Updated project branding from "Lovable" to "JSPCoders" where relevant.
- Created a new, clear README for project onboarding and documentation.

## License
This project is maintained by JSPCoders. For inquiries, contact the conference organizers.
