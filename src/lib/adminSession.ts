const STORAGE_KEY = "crazy-cafe-admin-password";

export function getAdminPassword(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(STORAGE_KEY);
}

export function setAdminPassword(password: string): void {
  sessionStorage.setItem(STORAGE_KEY, password);
}

export function clearAdminPassword(): void {
  sessionStorage.removeItem(STORAGE_KEY);
}
