# Android / iOS wrapper

This project uses Capacitor so User PWA and Admin PWA remain the same web source.

From the repository root, install Node.js, then inside `mobile/` run:

```bash
npm install
npx cap add android
npx cap add ios
npx cap sync
```

Open Android:
`npx cap open android`

Open iOS (macOS/Xcode):
`npx cap open ios`

For Play Store/App Store release, configure signing, privacy policy, icons, splash screen and store metadata.
