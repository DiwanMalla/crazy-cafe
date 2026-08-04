export function assertAdminPassword(password: string): void {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    throw new Error(
      "Admin password is not configured. Set ADMIN_PASSWORD in the Convex dashboard (or via `npx convex env set ADMIN_PASSWORD`).",
    );
  }
  if (password !== expected) {
    throw new Error("Invalid admin password");
  }
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}
