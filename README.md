# 🔥 Habit Tracker — Complete Guide

An offline-first habit tracker (installable app) with an Iran/Jalali calendar by default,
self-rated **x/10** scores, sub-habits, notes for every day, objectives, and optional cloud sync.

> **Keep this file.** Several features are "hidden" (hold a box, type `*` `~` `-` in a list…). Section 6 is the cheat sheet.

---

## 0. Quick map

| I want to… | Do this |
|---|---|
| Tick a habit | **Tap** its box |
| Give it a score, a note, or mark it missed | **Hold** the box (or **right-click** on Windows) |
| Write about the whole day | Tap the **day number**, or the **Day journal** row |
| Edit / reorder / archive / delete a habit | Tap the **habit name** (reorder: **↕ Order**) |
| Add a weekly / monthly / yearly habit | **+ Habit** → choose **Section** |
| Switch Jalali ⇄ Gregorian | **📅** button |
| Back up or move my data | **⬇** download, **⬆** restore, or **☁ Sync** |

---

## 1. Install & update

**Upload to GitHub (important: everything in the repo ROOT, no sub-folders):**
`index.html`, `manifest.json`, `sw.js`, `firebase-config.js`, `icon-192.png`, `icon-512.png`, `icon-maskable.png`, `README.md`

1. GitHub → repo → *Add file → Upload files* → drag the **files** (not a folder) → Commit.
2. *Settings → Pages →* Deploy from branch → `main` / `(root)`.
3. Open `https://<your-name>.github.io/<repo>/`.

**Install on Windows:** Edge/Chrome → install icon in the address bar (or ⋯ → *Apps → Install*). It then opens like a normal app and works **offline**.
**Install on Android:** Chrome ⋯ → *Install app / Add to Home screen*.

**After uploading a new version:** open the site and press **Ctrl + Shift + R**. If an installed app still looks old, close it fully and reopen (the new version loads on the second open). Whenever you change any file, bump the number in `sw.js` (`const V="habit-tracker-v6"` → `v7`) so devices refresh.

**Icon not updating?** Uninstall the app and install it again (browsers cache the icon).

---

## 2. The screen, top to bottom

**Top bar**

| Button | Meaning |
|---|---|
| `‹  Mehr 1405  ›` | Previous / next month (in the current calendar) |
| `+ Habit` | Create a habit |
| `↕ Order` | Reorder mode: ▲ ▼ appear next to every habit. Tap **✓ Done** when finished |
| `📅 Jalali / Gregorian` | Switch calendar (your data never moves — see §10) |
| `☁ …` | Cloud sync status / sign-in (see §12) |
| `⬇` / `⬆` | Download a backup file / restore from one |

**Daily grid** (the main table)
- Columns are the days of the month, grouped in coloured **weeks** (days 1–7, 8–14, 15–21, 22–28, 29+).
- In Jalali mode weekday letters are Persian (ش ی د س چ پ ج) and **Fridays are red**.
- **Today** has an outline around its boxes and a bold day number.
- Right of the days: **Target** (tap it to edit), **Done** (score earned / goal), **Streak** (🔥 appears at 3 days, or 2 weeks).
- Bottom row **Day journal**: shows 📝 or your mood emoji for days you wrote about.

**Cards under the grid:** Weekly progress rings · Progress by habit · Overall · **Weekly / Monthly / Yearly panel** · Why log · Month notes · Archived habits (only appears when you have some).

---

## 3. Reading the boxes

| Looks like | Means |
|---|---|
| Empty outline | Nothing logged |
| Filled with ✓ | Done, full score (10/10) |
| Filled **partway from the bottom** (like a battery) | Done with a lower score — fill height = score. Hover for the exact number |
| Red **×** | Missed (you marked it, usually with a reason) |
| Faint red × | **Auto-missed**: habit has *Auto-× on past empty days* turned on |
| Small **dot** on the corner | There is a note / reason / harm entry inside |

---

## 4. Gestures cheat sheet

| Gesture | On a daily box | On a Weekly/Monthly/Yearly box |
|---|---|---|
| **Tap** | Habit **without** sub-habits: toggles ✓ (tap again to clear). Habit **with** sub-habits: opens the detail window | Same |
| **Hold ½ second** (phone) / **Right-click** (Windows) | Opens the detail window | Same |
| Tap **day number** or **Day journal** row | Opens the day journal (mood + note) | — |
| Tap **habit name** (or its Target chip) | Edit window | Same |

Tip: tap a ✓ you made by mistake and it clears itself (your note is kept).

---

## 5. The detail window (hold a box)

1. **Status:** `✓ Done` (only for habits with no sub-habits) · `× Missed` · `No status`.
2. **Sub-habits:** tap to toggle (see §6). Doses show a number field.
3. **Score slider 0–10** (steps of 0.1) appears when the day is ✓. Below it: **Final** score.
4. **Quick reasons:** chips such as *Felt great / Easy / Pushed through* for ✓, and *Tired / Busy / Sick / Forgot / Travel / Low motivation / Weather* for ×.
5. **Note:** why this score, why missed, what you learned. Notes feed the **Why log**.

Marking **× Missed** clears the counting sub-habits but **keeps your ~extras**, so you can log "no sea trip, but I repaired the net".

---

## 6. 🪄 Sub-habit commands (the hidden part)

In **Edit habit → Sub-habits**, write one per line. The first character (or a number) decides what it is:

| Write | Type | What it does |
|---|---|---|
| `Gym` | **Counts** | Doing **any one** gives the ✓. Doing more adds nothing (no over-training!). |
| `Vitamin D3: 4000 IU` | **Dose** | You type the amount taken. Credit = taken ÷ target (max 100%). Also gives the ✓ if > 0. |
| `*20+ miles from shore` | **Gate (required)** | If a habit has any `*` line, the ✓ happens **only** when a `*` item is checked. |
| `~Fixed a broken object` | **Extra** | Logged for your record, but **never** gives a ✓ and doesn't change the tick. |
| `-Junk / harmful intake` | **Harm** | Tap it → choose how many **points to subtract** (default 2) and write **why**. Reasons appear in the Why log. |

Examples from the starter habits:

```
Workout            Gym / Running / Swimming / HomeGym                      (any one = ✓)
Boat in the Sea    *20+ miles from shore / ~Fixed something / ~Bought tools
Nutrients          Vitamin D3: 4000 IU / Zinc / B1 / K2 / -Junk intake
Skincare           Brushed teeth / Face wash / Moisturizer / -Blemish appeared
```

Rules of thumb: a line with `name: number unit` becomes a dose; `Trade: learn` (no number) stays a normal item. Up to 30 lines per habit. Renaming a line later never changes old days (each day stores its own score).

---

## 7. How scoring works

Every ✓ has a score from **0 to 10**. You choose how it starts, per habit (*Edit habit → Score*):

- **I rate myself** — starts at 10, you move the slider by how well it went (focus, effort, quality…). Best for Workout, Mental Maintenance, Boat, Reading.
- **Start from sub-habits done** — starts at the average of your counting items (3 of 6 = 5.0; a dose of 2000/4000 counts as half). You can still override the slider. Best for Sleep Ritual, Nutrients, Skincare.

**Final score = slider − harm points** (never below 0). Example: 8 − 2 (junk intake) = **6/10**.

**Targets add up scores, not ticks.** A habit with a 5-days-per-week target where you do 3 perfect days and 2 days at 5/10 reaches 3 + 1 = 4 of 5 = 80%.

- **Done column:** points earned / goal for the month.
- **Progress by habit:** % of that goal.
- **Overall:** all daily habits together + **avg score** = how well you do on days you show up.
- **Weekly rings:** one per week block (weekly-target habits). A **Monthly** ring appears if you have habits with a per-month target.
- A short last week (days 29–30/31) gets a proportionally smaller target.

---

## 8. Habit frequency & sections

**Edit habit → Section**

| Section | Where it lives | Frequency |
|---|---|---|
| **Daily** | Main grid | *Every day*, *N days per week (1–7)*, or *N days per month (1–31)* |
| **Weekly** | Side panel tab | One tick per week: boxes **W1–W5** (same colours as the grid) |
| **Monthly** | Side panel tab | One tick per month: the 12 months of the viewed year |
| **Yearly** | Side panel tab | One tick per year: this year + 3 previous years |

Weekly / Monthly / Yearly boxes work exactly like daily ones: tap = ✓, hold/right-click = score, sub-habits, note. They are **not** counted in the Overall ring (that stays about your daily life). The counter next to the name (e.g. `3/5`) shows ticks in the visible period.

The side panel tabs are the **Weekly · Monthly · Yearly** buttons; the tab you pick stays selected while the app is open.

---

## 9. 🎯 Objective (why am I doing this?)

*Edit habit → 🎯 Objective* (opens by default once filled in):

1. **Why did I start?**
2. **What do I expect to get?**
3. **What am I actually getting?** — a dated **results log**. Add an observation whenever you notice something (✓ remove with ✕).

Habits with an objective show 🎯 before their name; hover the name to read the "why". Review the log every few weeks and compare it to your expectation — that is how you decide to keep, change or drop a habit.

---

## 10. Calendar (Jalali default)

- Opens in **Jalali** (Persian). Press 📅 for **Gregorian**. Month lengths follow the real Jalali calendar, including leap-year Esfand.
- Your data is stored by **real date**, so switching never loses or moves anything. A weekly tick made in Jalali still appears in the matching Gregorian week.
- "Week 1–5" are **blocks of the month** (days 1–7, 8–14, …), not Saturday-to-Friday weeks.
- Month notes belong to the calendar-month you wrote them in.

---

## 11. Notes & reflection tools

| Tool | Where | For |
|---|---|---|
| **Habit-day note** | Hold a box → note | Why this score / why missed / lesson learned |
| **Day journal** | Tap a day number | Mood (😞 😕 🙂 😄 🤩) + how the whole day went |
| **Why log** | Card under the grid | All notes & missed days of the month. Filters: **All / ✓ Done / × Missed**. Tap an entry to edit it. Shows **Top reasons for missing** (e.g. *Tired ×3 · Weather ×2*) |
| **Month notes** | Card under the grid | Free text for the whole month |

The Why log lists **daily** habits. Notes on weekly/monthly/yearly boxes are read by opening that box.
**Auto-×** (*Edit habit → Auto-mark past empty days as ×*): every past day with no ✓ shows a faint ×; hold it to add the reason. Made for habits like "Boat in the Sea" where a missed day should be *observed, not judged*.

---

## 12. Reorder · archive · delete · backup · sync

**Reorder:** `↕ Order` → ▲ ▼ beside habits (works inside each section: daily with daily, weekly with weekly…) → `✓ Done`.

**Archive vs Delete** (tap habit name):
- **Archive** hides it from *this month onward*; earlier months keep it. Find it later in the **Archived habits** card → **Restore** or **Delete**.
- **Delete** removes the habit and **all** its history forever (asks to confirm).

**Backup file:** `⬇` saves `habit-backup-YYYY-MM-DD.json`. `⬆` restores it (asks before replacing). Old backups from earlier versions still import.

**Cloud sync (email or Google), optional:**
1. console.firebase.google.com → your project (reusing the Gate project is fine).
2. *Authentication → Sign-in method*: enable **Email/Password** and **Google**. *Settings → Authorized domains*: make sure `<your-name>.github.io` is listed.
3. *Project settings → Your apps → Web app* → copy the config values into **`firebase-config.js`** and re-upload it.
4. *Firestore Database → Create*, then add this inside `match /databases/{database}/documents { … }` and **Publish**:
   ```
   match /habitTracker/{uid} {
     allow read, write: if request.auth != null && request.auth.uid == uid;
   }
   ```
5. In the app press **☁ Set up sync / Sync** → sign in (Create account the first time).

Status labels: **Sign in** · **Syncing…** · **Synced** · **Offline** (changes are safe on the device and upload when you're online).
Offline-first: the app always saves on the device first. If two devices were changed while apart, they are **merged** (day entries from both are kept; the same day edited on both → the device that syncs last wins).

---

## 13. ✨ Small tricks people forget

- Hold a **weekly/monthly/yearly** box to score it — a plain tap only ticks.
- A habit with sub-habits can't be ticked by one tap on purpose: tapping opens the list, so every ✓ carries a real score.
- Use `*` for "this is the only thing that counts" (e.g. a trip must be 20+ miles out) and `~` for chores you still want on record.
- Use `-` items for *anything that costs you points* (screens late, junk food, sunburn) — the reason you type is saved in the Why log.
- Doses can also be limits you don't want to exceed — set the target to the safe amount.
- Wrote an observation in 🎯 months ago? It's dated — reopen the habit to compare with today.
- The **Target chip** (e.g. `4×/wk ☰`) opens the editor; `☰` means the habit has sub-habits.
- Moods on the Day journal row give you a quick visual of good and bad stretches.
- Make **backups** before big edits; the file is plain JSON you can keep anywhere.

---

## 14. Troubleshooting

| Problem | Fix |
|---|---|
| Icon missing | Make sure all files are in the **repo root**, hard-refresh (Ctrl+Shift+R), uninstall + reinstall the app |
| New version not showing | Ctrl+Shift+R; bump `V` in `sw.js`; close and reopen the installed app twice |
| "Set up sync" never goes away | `firebase-config.js` still contains the `PASTE_…` placeholders |
| Google sign-in popup fails | Add your `github.io` domain under Firebase → Authentication → Authorized domains; allow popups |
| "Missing or insufficient permissions" | Add the Firestore rule from §12 and Publish |
| Data vanished | Browser data was cleared, or you opened another browser/profile. Restore a backup (`⬆`) or sign in to sync |
| A habit isn't visible | It's archived (see the Archived card) or was created in a later month; check the other months with ‹ › |

---

## 15. Files & privacy

| File | Job |
|---|---|
| `index.html` | The whole app |
| `sw.js` | Offline cache |
| `manifest.json` + 3 icons | Install info and app icon |
| `firebase-config.js` | Your sync settings (optional) |

Data lives in your browser's storage (key `habit-v3`) on this device; nothing is sent anywhere unless you sign in to sync, in which case one private document per account is stored in your own Firebase project.
