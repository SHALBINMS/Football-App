# FIFA World Cup 2026 Football Platform

A modern football platform built with React that simulates the FIFA World Cup experience through dynamic team pages, live match simulation, player statistics, standings, favorites, and search functionality.

## Features

### Teams Module

* Browse all participating teams
* Team Details page with dynamic routing
* Team statistics dashboard
* Coach, FIFA ranking, and group information
* Team squad display with player cards
* Team banners and logos

### Players Module

* 266+ player dataset
* Player cards with detailed information
* Dynamic rendering and filtering

### Match Center

* Live match listing
* Match Details page
* Match statistics dashboard
* Event timeline system
* Goals and card events
* Dynamic match status display

### Live Match Simulation

* Real-time minute updates
* Automatic match progression
* Full-time match completion logic
* Shared state architecture across pages

### Groups & Standings

* World Cup group tables
* Qualification highlighting
* Team navigation from standings
* Responsive standings layout

### Favorites System

* Add/remove favorite teams
* Persistent storage using localStorage
* Dedicated Favorites page
* Favorites survive page refresh

### Search Functionality

* Team search
* Real-time filtering
* Responsive search interface

## Technologies Used

* React
* React Router DOM
* Tailwind CSS
* JavaScript (ES6+)
* Vite
* Local Storage API

## React Concepts Demonstrated

### Routing

* Route
* Dynamic Routes
* Link
* useParams

### State Management

* useState
* State Updates
* Lifting State Up
* Shared State Architecture

### Side Effects

* useEffect
* setInterval
* Cleanup Functions

### Rendering Techniques

* map()
* filter()
* find()
* Conditional Rendering

### Data Persistence

* localStorage
* JSON.parse()
* JSON.stringify()

## Project Structure

```text
src
│
├── components
│   ├── Navbar
│   ├── TeamCard
│   ├── PlayerCard
│   ├── StatCard
│   └── MatchCard
│
├── pages
│   ├── Home
│   ├── Teams
│   ├── TeamDetails
│   ├── Players
│   ├── MatchCenter
│   ├── MatchDetails
│   ├── Favorites
│   └── Groups
│
├── data
│   ├── teams
│   ├── players
│   ├── matches
│   └── groups
│
└── App.jsx
```

## Key Learning Outcomes

Through this project I gained practical experience with:

* Component-based architecture
* React Router and dynamic navigation
* State management using React Hooks
* Real-time UI simulation
* Data modeling for sports applications
* Browser storage with localStorage
* Search and filtering systems
* Responsive UI development
* Reusable component design
* Debugging React applications

## Future Enhancements

* API Integration for real football data
* Tournament bracket visualization
* Player search and filtering
* Dark mode support
* Advanced match analytics
* Backend integration
* User authentication

## Installation

```bash
git clone <repository-url>

cd football-platform

npm install

npm run dev
```

## Screenshots

### Home Page

(Add Screenshot)

### Teams Page

(Add Screenshot)

### Team Details Page

(Add Screenshot)

### Match Center

(Add Screenshot)

### Match Details

(Add Screenshot)

### Groups & Standings

(Add Screenshot)

### Favorites Page

(Add Screenshot)

## Author

Shalbin MS

B.Tech Computer Science and Design

Federal Institute of Science and Technology (FISAT)
