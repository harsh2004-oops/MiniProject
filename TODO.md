# TODO: Remove Tailwind CSS and Add Separate CSS Files for Pages

## Steps to Complete:

1. **Remove Tailwind CSS configuration and files:**
   - [x] Delete `frontEnd/tailwind.config.js`
   - [x] Delete `frontEnd/postcss.config.cjs`
   - [x] Delete `frontEnd/src/tailwind.css`

2. **Update package.json:**
   - [x] Remove Tailwind CSS dependencies from `frontEnd/package.json`

3. **Update index.css:**
   - [x] Remove Tailwind CSS imports (`@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`)

4. **Create separate CSS files for pages:**
   - [x] Create `frontEnd/src/LandingPage.css`
   - [x] Create `frontEnd/src/LoginPage.css`

5. **Update JSX files:**
   - [x] Update `frontEnd/src/LandingPage.jsx`: Import `LandingPage.css`, remove Tailwind classes, add custom styles
   - [x] Update `frontEnd/src/LoginPage.jsx`: Import `LoginPage.css`, remove Tailwind classes, add custom styles

6. **Install dependencies:**
   - [x] Run `npm install` in `frontEnd` directory to update dependencies

7. **Test the application:**
   - [x] Run the app and verify styles are applied correctly without Tailwind
