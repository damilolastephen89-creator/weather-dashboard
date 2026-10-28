🌦️ Weather Dashboard

A modern, responsive weather dashboard that provides real-time weather conditions, multi-day forecasts, analytics, AI-powered forecasting insights, and customizable user preferences.

✨ Features

🌍 Weather Data

Current weather conditions
5-day forecast
Temperature, humidity, wind speed
Dynamic weather icons
City search functionality

🤖 AI Forecast Insights

Weather trend analysis
Average temperature predictions
Forecast confidence scoring
Smart weather recommendations
📊 Analytics & Visualization
Temperature trend charts
Rainfall analytics
Humidity tracking
Interactive weather visuals
Forecast comparison metrics
🎨 User Experience
Light mode / Dark mode
Responsive design
Smooth animations
Forecast cards
Weather details modal
🔐 Authentication
Microsoft Entra ID Login
Google Sign-In
User preference persistence
🌐 Deployment
Vercel deployment support
OpenWeather API integration
Serverless API routes
Tech Stack
Frontend
HTML5
CSS3
JavaScript (ES Modules)
APIs
OpenWeather API
Charts
Chart.js
Authentication
Microsoft Entra ID (MSAL)
Google OAuth
Deployment
Vercel
Project Structure
weather-dashboard/
│
├── index.html
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── weather.js
│   ├── forecast.js
│   ├── charts.js
│   ├── ai.js
│   ├── auth.js
│   ├── theme.js
│   ├── modal.js
│   └── notifications.js
│
├── api/
│   └── weather.js
│
├── assets/
│   ├── images/
│   └── sounds/
│
└── .env
Installation
Clone the repository:

git clone https://github.com/yourusername/weather-dashboard.git
Move into the project folder:

cd weather-dashboard
Install dependencies:

npm install
Run locally:

npm run dev
Environment Variables
Create a .env file:

VITE_OPENWEATHER_KEY=YOUR_OPENWEATHER_API_KEY
Build
npm run build
Deployment
Deploy directly to:

Vercel
Azure Static Web Apps
Netlify
Future Enhancements
Severe weather alerts
Air quality monitoring
Geolocation support
Weather maps
Machine learning forecasting
PWA support
Push notifications
Contributing
Pull requests are welcome.

For major changes, please open an issue first to discuss proposed improvements.

License
MIT License
