const STORAGE_KEY = "crazy-cafe-admin-password";

const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) {
    listener();
  }
}

export function getAdminPassword(): string | null {
  if (typeof window === "undefined") {
    return null;
  }
  return sessionStorage.getItem(STORAGE_KEY);
}

/** Always null on the server / first hydrated paint — avoids SSR mismatch. */
export function getServerAdminPassword(): string | null {
  return null;
}

export function subscribeAdminPassword(onStoreChange: () => void): () => void {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

export function setAdminPassword(password: string): void {
  sessionStorage.setItem(STORAGE_KEY, password);
  emit();
}

export function clearAdminPassword(): void {
  sessionStorage.removeItem(STORAGE_KEY);
  emit();
}
