# TripShield 

**TripShield** is a web platform designed to enhance tourist safety in remote and high-risk regions such as India’s Northeast. The app provides real-time location monitoring, digital tourist IDs, emergency alerts, and an authority dashboard for fast incident response—all while prioritizing privacy and convenience.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Screenshots](#screenshots)  
- [Future Enhancements](#future-enhancements)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- **Digital Tourist ID**
  - Issued at airports, hotels, or check-posts
  - Includes KYC, itinerary, and emergency contacts
  - Valid only for the duration of the visit

- **Tourist Dashboard**
  - Safety score based on travel behavior
  - Panic button with live location sharing
  - Optional real-time tracking
  - Geo-fencing alerts for high-risk areas

- **Authority Dashboard**
  - Real-time heatmaps and tourist movement visualization
  - Automated e-FIR generation
  - Alerts for missing tourists or distress situations

- **AI-based Anomaly Detection**
  - Detects inactivity, sudden signal loss, or route deviations
  - Flags distress behavior for early intervention

- **Additional Features**
  - Multilingual support (10+ Indian languages + English)
  - End-to-end encryption and data privacy compliance
  - Interactive Leaflet map for live GPS tracking

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Leaflet  
- **Backend:** Firebase
- **APIs:** Geolocation API, REST APIs for alerts and tracking  
- **Other Tools:** Charting libraries, Heatmaps, Map visualizations  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/tripshield.git
cd tripshield
npm install
npm run dev