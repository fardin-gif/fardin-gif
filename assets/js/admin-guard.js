// assets/js/admin-guard.js
//
// Import this at the top of every /admin/*.html page EXCEPT admin/login.html
// to enforce that only a signed-in admin can view or use the page.
//
// Usage (inside a <script type="module"> block on the admin page):
//
//   import { requireAdmin } from "./assets/js/admin-guard.js";
//   const user = await requireAdmin();
//   // Code below this line only runs for a signed-in admin.
//   // `user.email` / `user.uid` are available if you need them.
//
// Place this file at assets/js/admin-guard.js so it sits next to the
// existing assets/js/firebase-config.js it imports from.

import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/**
 * Resolves with the signed-in Firebase user, or redirects to the login
 * page and never resolves if nobody is signed in.
 *
 * @param {string} loginPath - where to send unauthenticated visitors.
 *   Adjust per page depth, e.g. "./login.html" from another /admin/ page,
 *   or "/admin/login.html" if you prefer an absolute path.
 */
export function requireAdmin(loginPath = "./login.html") {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        // Carry the page the admin was trying to reach as ?redirect=...
        // so login.html can send them straight back after signing in.
        const here = window.location.pathname + window.location.search;
        const target = new URL(loginPath, window.location.href);
        target.searchParams.set("redirect", here);
        window.location.replace(target.toString());
        // Deliberately never resolves — the redirect is already underway,
        // and we don't want the calling page's code to keep executing
        // against a null user in the moment before the browser navigates.
      }
    });
  });
}

/**
 * Optional convenience for a "Log out" button on any admin page.
 *
 *   import { adminSignOut } from "./assets/js/admin-guard.js";
 *   logoutBtn.addEventListener("click", () => adminSignOut());
 */
export async function adminSignOut(loginPath = "./login.html") {
  const { signOut } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js");
  await signOut(auth);
  window.location.replace(loginPath);
}
