# browserpath

The same of NodeJS path, maybe `resolve` function (win32 and posix) doesn't work as expect.
This functions require `process.cwd()` and browser doesn't have. To try to fix this:

```typescript
const app = navigator.appVersion;
const isWindows = app.indexOf("Win") != -1;
const isUnix = app.indexOf("X11") != -1 || app.indexOf("Linux") != -1 || app.indexOf("Mac") != -1;

// If is unix based, use the root path
// If windows, try to use the most common root path
const processCwdEmulate = isUnix ? "/" : isWindows ? "c:\\" : "";
```

## Install

Simple

```bash
npm i browserpath
yarn add browserpath
```

## How to use

As I said, the same [NodeJS API](https://nodejs.org/api/path.html)

