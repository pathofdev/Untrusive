# ⌛ Untrusive

> This project is built by [path_of_dev](https://pathof.dev)

Untrusive is a indeterminate loading bar for websites and web applications. It features:

- Zero-dependencies
- Lightweight, only 1.2kb gzipped
- Minimal API
- No CSS import required
- Safe to import server-side
- Includes TypeScript definitions

[View demo](https://untrusive.netlify.com)

## Installing

### Install via CDN

Add the following script tag to your HTML before using this library

```html
<script src="https://cdn.jsdelivr.net/npm/untrusive@1.0.0/dist/umd/untrusive.min.js"></script>
```

### Install via NPM

```
npm install --save untrusive
```

## Usage

Untrusive is a class which you can create multiple instances of.

```js
import Untrusive from "untrusive"; // only for NPM installation

const loader = new Untrusive({
  bgColor: "#333", // Background color
  barColor: "#222", // Animated stripe color
  height: 4, // Optional: Height of bar in pixels 
});

loader.start();

loader.stop();

loader.toggle();

// Re-initalize instance with new options
loader.init({
  bgColor: "#333",
  barColor: "#222",
});
```

### Untrusive Options

Takes an object with the following properties:

Property | Type | Description
--- | --- | ---
bgColor | string | Background color of the loading bar. Can be any valid CSS color
bgColor | string | Color of the animated stripe on the loading bar. Can be any valid CSS color
height | number | Height of the loading bar in pixels, defaults to 4

## Contributing

If you would like to contribute to this project, you need to:

1. Fork the GitHub repo
2. Make the required changes on your fork
3. Submit a pull request in this repo comparing your fork
