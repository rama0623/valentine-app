# Valentine's Day Website 💕

A beautiful, interactive React website to ask someone to be your Valentine!

## Features

✨ Romantic design with soft pink gradients and floating hearts
❤️ Animated heartbeat effect
🎉 Confetti celebration when they say yes
🎮 Interactive "No" button that playfully dodges the cursor
📱 Fully responsive for mobile and desktop

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd valentine-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Project Structure

```
valentine-app/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── Valentine.js    # Main Valentine component
│   │   └── Valentine.css   # Component styles
│   ├── App.js              # Root component
│   ├── App.css             # Global app styles
│   ├── index.js            # Entry point
│   └── index.css           # Base styles
├── package.json            # Dependencies and scripts
├── .gitignore             # Git ignore file
└── README.md              # This file
```

## Customization

You can customize the message by editing the text in `src/components/Valentine.js`:

```javascript
<p className="message">
  Your custom message here...
</p>
```

## Build for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build/` folder ready for deployment.

## Deployment

You can deploy this app to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Technologies Used

- React 18
- CSS3 with animations
- Google Fonts (Playfair Display & Quicksand)

## License

Free to use for personal purposes. Made with ❤️

---

Good luck with your Valentine's proposal! 🌹
