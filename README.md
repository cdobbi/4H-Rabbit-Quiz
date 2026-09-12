# Rabbit Savvy
Rabbit Savvy is a comprehensive, independently authored rabbit-study companion for 4-H exhibitors, breeders, and serious rabbit people. The browser app works offline and offers a 50-question free sample, with a one-time unlock for the full question bank.

Rabbit Savvy is independent practice material, not an official licensing product. Verify current show standards and registration material against official resources.

## Development

- `questions.js` contains the browser question data.
- `app.js` contains quiz behavior, access rules, validation, and UI logic.
- `build-web.js` creates the offline browser bundle in `www/`.

Run these checks after changing questions or app behavior:

```powershell
npm run questions:validate
npm test -- --runInBand
npm run web:build
```

`questions:validate` checks for malformed or duplicate prompts, sequential question markers, valid topic/track metadata, and exactly 10 free questions in each topic.

## Android and Google Play

Rabbit Savvy is packaged as an offline Android app through Capacitor. Use the public build for the purchase-gated release:

```powershell
npm run android:sync
.\android\gradlew.bat -p android bundleRelease
```

Use the beta build only for closed testing with all questions available:

```powershell
npm run android:sync:beta
```

Before Play submission:

- Host [privacy-policy.html](privacy-policy.html) at a permanent public HTTPS URL.
- Create the one-time `full_question_bank` managed product at $14.99 in Play Console.
- Test purchase and Restore Purchase on a physical Android device using an internal testing track.
- Configure a signing key outside this repository and produce a signed `.aab`.
- Complete the artwork in [store-listing/assets/README.md](store-listing/assets/README.md).

The Play listing copy and setup checklist are in [store-listing/GOOGLE-PLAY.md](store-listing/GOOGLE-PLAY.md). Do not commit signing keys or passwords.
