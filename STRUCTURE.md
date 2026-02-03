# Valentine App - Folder Structure

```
valentine-app/
│
├── public/
│   └── index.html                 # Main HTML file
│
├── src/
│   ├── components/
│   │   ├── Valentine.js          # Main Valentine component
│   │   └── Valentine.css         # Component-specific styles
│   │
│   ├── assets/                    # For images/fonts (empty for now)
│   │
│   ├── App.js                     # Root component
│   ├── App.css                    # App-level styles
│   ├── index.js                   # Entry point
│   └── index.css                  # Global base styles
│
├── .gitignore                     # Git ignore rules
├── package.json                   # Project dependencies & scripts
└── README.md                      # Setup instructions

```

## File Descriptions

### Root Files
- **package.json**: Contains all npm dependencies and scripts
- **.gitignore**: Specifies which files Git should ignore
- **README.md**: Complete setup and usage instructions

### public/
- **index.html**: The single HTML file that serves as the app template

### src/
- **index.js**: Entry point that renders the React app
- **index.css**: Global CSS reset and base styles
- **App.js**: Root React component that wraps the Valentine component
- **App.css**: App-level styling

### src/components/
- **Valentine.js**: Main component with all the Valentine logic and UI
- **Valentine.css**: All the beautiful styling for the Valentine component

### src/assets/
- Empty folder ready for any images, fonts, or other assets you might add

## Quick Start

1. Navigate to the folder:
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

4. Open http://localhost:3000 in your browser

## Key Features in Code

### Valentine.js
- React hooks (useState) for managing state
- Button dodge logic with position tracking
- Confetti generation and cleanup
- Response handling for Yes/No clicks

### Valentine.css
- Custom CSS animations (heartbeat, float, slide-in)
- Responsive design with media queries
- Google Fonts integration
- Gradient backgrounds and effects

Enjoy! 💕
