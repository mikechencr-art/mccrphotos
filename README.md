# Mike Chen Photography

Editorial photography portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

```text
app/
  (site)/
    mike/
    grad/
    studio/
    other/
    explorations/
    contact/
components/
lib/
public/
  brand/logo.png
  grad/
  studio/
  other/
  explorations/
```

## Image Locations

- `public/grad` for graduation photos (`grad-01.jpg`, `grad-02.jpg`, ...)
- `public/mike` for Mike page photos (`mike-01.jpg`, `mike-02.jpg`, ...)
- `public/studio` for studio work (`studio-01.jpg`, ...)
- `public/other` for other work (`other-01.jpg`, ...)
- `public/explorations/<slug>` for artistic projects
  - Required: `cover.jpg`
  - Sequence: `01.jpg`, `02.jpg`, `03.jpg`, ...
- `public/brand/logo.png` for site icon/favicon source

## Add Photos Later

1. Add images to the correct folder in `public/`.
2. Use image extensions like `.jpg`, `.jpeg`, `.png`, `.webp`, or `.avif` (case-insensitive).
3. Galleries now auto-discover files from these folders at runtime:
   - `public/grad`
   - `public/studio`
   - `public/other`
   - `public/mike`
   - `public/explorations/<project-folder>`
4. For explorations, each project folder should include a `cover.*` image if you want a specific cover; otherwise the first image is used.
5. Optional: tune exploration sublines/intros in `lib/gallery-data.ts` via `explorationMetaBySlug`.
6. Run:

```bash
npm run dev
npm run build
```

## Deploy (Vercel)

1. Push this project to GitHub.
2. Import the repo in Vercel.
3. Framework preset: Next.js.
4. Deploy. No extra env vars required.
