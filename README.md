# Habit Tracker v5 (offline PWA + cloud sync)

## Upload to GitHub (IMPORTANT: keep everything in the repo ROOT, no sub-folders)
index.html, manifest.json, sw.js, firebase-config.js, icon-192.png, icon-512.png, icon-maskable.png, README.md
Delete the old `icons/` folder if it exists. Pages: Settings > Pages > main / root.

## Make the icon refresh
1. Open the site, press Ctrl+Shift+R (hard refresh).
2. If you installed the app: uninstall it (Edge/Chrome: app menu > Uninstall), then install again.

## Cloud sync setup (Firebase, free tier) - skip if you reuse your Gate project
1. console.firebase.google.com > your project (reusing the Gate project is fine).
2. Build > Authentication > Sign-in method: enable **Email/Password** and **Google**.
   Authentication > Settings > Authorized domains: make sure **iamtangoa.github.io** is listed.
3. Project settings (gear) > Your apps > Web app (</>) > copy the config values into firebase-config.js.
4. Build > Firestore Database > Create (production mode) > Rules: ADD this block inside `match /databases/{database}/documents { ... }` and Publish:

       match /habitTracker/{uid} {
         allow read, write: if request.auth != null && request.auth.uid == uid;
       }

5. Re-upload firebase-config.js, then open the app > "☁ Sync" > sign in.

Data is stored on-device first (works fully offline) and syncs when online. If two devices change data while apart, they are merged.
When you change any file later, bump `V` in sw.js (e.g. habit-tracker-v6).
