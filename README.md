# Text Utils Server

A simple Node.js and Express API for text splitting, validation, UID formatting, name formatting, and integer formatting.

## Install Dependencies
```
npm install
```

## Run the Server
```
npm run start
```

## Deploy on Render
Deploy this folder as a **Web Service**.

**Start Command:**
```
npm run start
```

**Make sure your `server.js` uses:**
```
const PORT = process.env.PORT || 3000;
```

## Endpoints

### POST /splitText
**Body:**
```json
{ "text": "Hello World", "delimiter": " " }
```

### POST /validateText
**Body:**
```json
{ "text": "Hello", "check": "Hello" }
```

...and so on.
