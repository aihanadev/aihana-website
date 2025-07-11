# Aihana Website

  Official landing page for Aihana - A Dealer Who Remembers™

  ## Description
  Marketing website for the Aihana platform featuring:
  - Main landing page with video demo and dual CTAs
  - Create-a-game page with Reddit community integration
  - Bidirectional navigation between pages
  - Privacy and Terms pages for compliance
  - Responsive dark theme design
  - Mobile-first responsive layout

  ## Features
  - **Landing Page** (`index.html`) - Main marketing page with video showcase
  - **Create-a-Game Page** (`create-a-game.html`) - Community submission portal
  - **Reddit Integration** - Embedded r/aihana community
  - **Responsive Design** - Works on all device sizes
  - **Professional Navigation** - Clean header with active states

  ## Navigation Flow
  - Landing Page → Create-a-Game Page (via nav menu and CTA button)
  - Create-a-Game Page → Landing Page (via nav menu and logo)

  ## File Structure
  ```
  /
  ├── index.html              # Main landing page
  ├── create-a-game.html      # Game creation/community page
  ├── privacy.html            # Privacy policy
  ├── terms.html              # Terms of service
  ├── styles.css              # Main stylesheet
  ├── assets/                 # Media files
  │   └── aihanna_demo.mp4    # Product demo video
  └── README.md               # This file
  ```

  ## Deployment
  Static website deployed on Netlify with automatic builds from the main branch.

  ## Local Development
  Simply open `index.html` in a web browser or use a local server:
  ```bash
  # Using Python
  python -m http.server 8000

  # Using Node.js
  npx serve .
  ```

  ## Brand Colors
  - Primary: #6B57FF (Purple)
  - Background: #2A1D4C (Dark Purple)
  - Text: #EFEAFF (Light Purple)
  - Accent: #4B3F72 (Medium Purple)

  ## Contact
  Questions? Contact us at [team@aihana.io](mailto:team@aihana.io)

  ---
  © 2025 Aihana, LLC. All rights reserved.
  
