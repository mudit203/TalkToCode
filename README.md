# TalkToCode: Vision-Code-Editor

A Web-based application showcasing Gemini AI capabilities with writing Code using voice, vision, share screen.
Effortlessly edit code using your voice with advanced audio commands. No need to type—just open a file and start speaking your instructions. Code faster, smarter, and hands-free with voice-powered development.

## Features

- Voice and Vision Integration
- File management API
- Real Time Collaboration
- Integrated real time error detection

## Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn package manager

## Setup

1. Clone the repository:
```sh
git clone <repository-url>
cd vision-code-editor
```

2. Install dependencies:
```sh
npm install --force (or update next.js or add react-router-dom)
```

3. Create a `.env` file in the root directory and add your Gemini API key:
```
REACT_APP_GEMINI_API_KEY=your_api_key_here
```

## Running the Application

1. Start the backend server:
```sh
node server/dist/server.js
```
The server will run on port 3001.

2. In a new terminal, start the React frontend:
```sh
npm start
```
The application will open in your browser at http://localhost:3000

## Project Structure
```
Directory structure:
└── mudit203-talktocode/
    ├── app.yaml
    ├── CONTRIBUTING.md
    ├── LICENSE
    ├── package.json
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── .gcloudignore
    ├── public/
    │   ├── index.html
    │   └── robots.txt
    ├── server/
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── server.ts
    │   ├── tsconfig.json
    │   ├── dist/
    │         └── server.js
    └── src/
        ├── App.scss
        ├── App.test.tsx
        ├── App.tsx
        ├── index.css
        ├── index.tsx
        ├── multimodal-live-types.ts
        ├── react-app-env.d.ts
        ├── reportWebVitals.ts
        ├── setupTests.ts
        ├── components/
        │   ├── altair/
        │   │   └── Altair.tsx
        │   ├── audio-pulse/
        │   │   ├── audio-pulse.scss
        │   │   └── AudioPulse.tsx
        │   ├── control-tray/
        │   │   ├── control-tray.scss
        │   │   └── ControlTray.tsx
        │   ├── homepage/
        │   │   └── Homepage.tsx
        │   ├── logger/
        │   │   ├── logger.scss
        │   │   ├── Logger.tsx
        │   │   └── mock-logs.ts
        │   └── side-panel/
        │       ├── side-panel.scss
        │       └── SidePanel.tsx
        ├── contexts/
        │   └── LiveAPIContext.tsx
        ├── hooks/
        │   ├── use-live-api.ts
        │   ├── use-media-stream-mux.ts
        │   ├── use-screen-capture.ts
        │   └── use-webcam.ts
        └── lib/
            ├── audio-recorder.ts
            ├── audio-streamer.ts
            ├── audioworklet-registry.ts
            ├── multimodal-live-client.ts
            ├── store-logger.ts
            ├── utils.ts
            └── worklets/
                ├── audio-processing.ts
                └── vol-meter.ts

```

## API Endpoints

- `GET /api/file` - Read file contents
- `POST /api/file` - Modify file contents
