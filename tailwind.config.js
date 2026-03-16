/** @type {import('tailwindcss').Config} */

// ─── What is this file? ────────────────────────────────────────────────────
// Tailwind needs to know WHERE your HTML files are so it can scan them,
// find every class you used (e.g. "flex", "text-sm", "p-4"), and include
// ONLY those classes in the final output.css.
//
// Without this, Tailwind would have to include every possible class
// (thousands of them) making the CSS file enormous. With it, the output
// only contains what you actually use — sometimes just a few kilobytes.
// ──────────────────────────────────────────────────────────────────────────

module.exports = {
  // "content" tells Tailwind which files to scan for class names
  content: [
    "./*.html",       // all HTML files in the root folder
    "./js/**/*.js",   // any class names referenced in JS files too
  ],

  theme: {
    extend: {
      // Extend Tailwind's default theme with our custom fonts
      // After this, you can use "font-sans" and "font-serif" as Tailwind classes
      fontFamily: {
        sans:  ["DM Sans",          "sans-serif"],
        serif: ["DM Serif Display", "serif"],
      },
    },
  },

  plugins: [],
};
