# Rankhu Mining & Construction Website

Static, production-quality, responsive website built from precision UI designs for Rankhu Mining & Construction.

## Verified Client Information
* **Company Name:** Rankhu Mining & Construction
* **Director:** Makgati Rangoato
* **Phone:** +27 73 442 2652
* **Email:** RankhuMining@outlook.com
* **Location:** Melkbos Place, Bloubosrand
* **Brand Color:** Orange (`#E1660E`), Dark Charcoal (`#292B2A`), Off-White (`#F6F5F1`)

## Required Image Files Inventory (`images/`)
Ensure the following images are placed inside the `images/` directory:
1. `Logo.png` — Official Rankhu Brand Logo
2. `hero.jpg` — Home Page Hero background (Heavy machinery/open-pit mining)
3. `about-1.jpg` — About Page (Mining excavation photo)
4. `about-2.jpg` — About Page (Construction worker quality inspection photo)
5. `story-hero.jpg` — Our Story Hero background
6. `story-beginning.jpg` — Blueprint / Early planning visual
7. `story-future.jpg` — Structural steel framework
8. `chrome.jpg` — Chrome mining operations photo
9. `gold.jpg` — Gold recovery/processing facility photo
10. `construction.jpg` — Civil construction earthworks photo
11. `contact-hero.jpg` — Contact Page hero background
12. `map-location.png` — Location / Map graphic visual

## Form Endpoint Setup
To hook up the contact form to a live email service or backend API:
1. Open `js/script.js`.
2. Locate line 48: `const FORM_ENDPOINT = "";`
3. Insert your endpoint URL (e.g., Formspree, Web3Forms, or custom server endpoint):
   ```javascript
   const FORM_ENDPOINT = "[https://formspree.io/f/your_form_id](https://formspree.io/f/your_form_id)";