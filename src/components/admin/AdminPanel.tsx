"use client";

import { useMutation, useQuery } from "convex/react";
import Link from "next/link";
import { useState, useSyncExternalStore, type FormEvent } from "react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import {
  clearAdminPassword,
  getAdminPassword,
  getServerAdminPassword,
  setAdminPassword,
  subscribeAdminPassword,
} from "@/lib/adminSession";
import { site } from "@/content/site";

type ItemForm = {
  name: string;
  description: string;
  price: string;
  tags: string;
  popular: boolean;
};

const emptyItemForm: ItemForm = {
  name: "",
  description: "",
  price: "",
  tags: "",
  popular: false,
};

function parseTags(value: string): string[] {
  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function ItemFields({
  value,
  onChange,
}: {
  value: ItemForm;
  onChange: (value: ItemForm) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#6a7064]">
        Name
        <input
          required
          value={value.name}
          onChange={(event) => onChange({ ...value, name: event.target.value })}
          className="mt-2 w-full min-h-11 rounded-xl border border-[rgba(58,69,54,0.2)] bg-white/80 px-4 py-3 text-sm"
        />
      </label>
      <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#6a7064]">
        Price
        <input
          required
          value={value.price}
          onChange={(event) => onChange({ ...value, price: event.target.value })}
          className="mt-2 w-full min-h-11 rounded-xl border border-[rgba(58,69,54,0.2)] bg-white/80 px-4 py-3 text-sm"
          placeholder="$5.00"
        />
      </label>
      <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#6a7064] sm:col-span-2">
        Description
        <textarea
          required
          rows={2}
          value={value.description}
          onChange={(event) =>
            onChange({ ...value, description: event.target.value })
          }
          className="mt-2 w-full rounded-xl border border-[rgba(58,69,54,0.2)] bg-white/80 px-4 py-3 text-sm"
        />
      </label>
      <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#6a7064]">
        Tags (comma separated)
        <input
          value={value.tags}
          onChange={(event) => onChange({ ...value, tags: event.target.value })}
          className="mt-2 w-full min-h-11 rounded-xl border border-[rgba(58,69,54,0.2)] bg-white/80 px-4 py-3 text-sm"
          placeholder="Vegan, Gluten-Free"
        />
      </label>
      <label className="flex items-end gap-2 pb-3 text-sm text-[#5a5f54]">
        <input
          type="checkbox"
          checked={value.popular}
          onChange={(event) =>
            onChange({ ...value, popular: event.target.checked })
          }
          className="h-4 w-4"
        />
        Mark as popular
      </label>
    </div>
  );
}

function ConnectedAdminPanel() {
  const password = useSyncExternalStore(
    subscribeAdminPassword,
    getAdminPassword,
    getServerAdminPassword,
  );
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const [categoryName, setCategoryName] = useState("");
  const [categoryIntro, setCategoryIntro] = useState("");
  const [editingCategoryId, setEditingCategoryId] =
    useState<Id<"menuCategories"> | null>(null);

  const [itemForms, setItemForms] = useState<Record<string, ItemForm>>({});
  const [editingItemId, setEditingItemId] = useState<Id<"menuItems"> | null>(
    null,
  );
  const [editItemForm, setEditItemForm] = useState<ItemForm>(emptyItemForm);

  const menu = useQuery(api.menu.listMenu, password ? {} : "skip");
  const verifyPassword = useMutation(api.menu.verifyPassword);
  const seedMenu = useMutation(api.seed.seedMenu);
  const replaceMenuFromSeed = useMutation(api.seed.replaceMenuFromSeed);
  const createCategory = useMutation(api.menu.createCategory);
  const updateCategory = useMutation(api.menu.updateCategory);
  const deleteCategory = useMutation(api.menu.deleteCategory);
  const createItem = useMutation(api.menu.createItem);
  const updateItem = useMutation(api.menu.updateItem);
  const deleteItem = useMutation(api.menu.deleteItem);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    setLoginError(null);
    setBusy(true);
    try {
      await verifyPassword({ password: loginPassword });
      setAdminPassword(loginPassword);
      setLoginPassword("");
      const result = await seedMenu({ password: loginPassword });
      if (result.seeded) {
        setNotice(
          `Loaded starter menu (${result.categories} categories, ${result.items} items).`,
        );
      }
    } catch (error) {
      setLoginError(
        error instanceof Error ? error.message : "Could not sign in",
      );
    } finally {
      setBusy(false);
    }
  }

  function logout() {
    clearAdminPassword();
    setNotice(null);
  }

  async function runAdmin(action: () => Promise<void>, successMessage: string) {
    if (!password) return;
    setBusy(true);
    setNotice(null);
    try {
      await action();
      setNotice(successMessage);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  if (!password) {
    return (
      <div className="mx-auto flex min-h-full max-w-md flex-col justify-center px-4 py-16">
        <p className="section-label">Crazies Cafe</p>
        <h1 className="heading-display mt-3 text-4xl text-foreground">
          Menu Admin
        </h1>
        <p className="mt-3 text-sm text-[#5a5f54]">
          Enter the shared admin password to add or edit menu items.
        </p>
        <form
          onSubmit={handleLogin}
          className="card-light mt-8 space-y-4 rounded-2xl p-6"
        >
          <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#6a7064]">
            Password
            <input
              type="password"
              required
              value={loginPassword}
              onChange={(event) => setLoginPassword(event.target.value)}
              className="mt-2 w-full min-h-11 rounded-xl border border-[rgba(58,69,54,0.2)] bg-white/80 px-4 py-3 text-base"
              placeholder="Admin password"
              autoComplete="current-password"
            />
          </label>
          {loginError ? (
            <p className="text-sm text-red-700">{loginError}</p>
          ) : null}
          <button type="submit" className="btn-primary w-full" disabled={busy}>
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </form>
        <Link
          href="/"
          className="mt-6 text-center text-sm text-[#6a7064] hover:text-[#5a6e54]"
        >
          ← Back to {site.name}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-5 sm:py-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="section-label">Crazies Cafe</p>
          <h1 className="heading-display mt-2 text-4xl text-foreground">
            Menu Admin
          </h1>
          <p className="mt-2 text-sm text-[#5a5f54]">
            Changes appear on the public menu instantly.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/menu" className="btn-outline-dark">
            View public menu
          </Link>
          <button
            type="button"
            className="btn-outline-dark"
            disabled={busy}
            onClick={() => {
              if (
                !window.confirm(
                  "Replace the entire live menu with the printed Crazies Cafe menu? This cannot be undone.",
                )
              ) {
                return;
              }
              void runAdmin(async () => {
                if (!password) return;
                const result = await replaceMenuFromSeed({ password });
                setNotice(
                  `Menu replaced — ${result.categories} categories, ${result.items} items.`,
                );
              }, "Menu replaced from printed menu.");
            }}
          >
            Load printed menu
          </button>
          <button type="button" onClick={logout} className="btn-dark">
            Sign out
          </button>
        </div>
      </div>

      {notice ? (
        <p className="mt-6 rounded-xl border border-[rgba(138,155,126,0.35)] bg-[rgba(255,248,238,0.95)] px-4 py-3 text-sm text-[#5a5f54]">
          {notice}
        </p>
      ) : null}

      <section className="card-light mt-8 rounded-2xl p-5 sm:p-6">
        <h2 className="heading-display text-2xl text-foreground">
          {editingCategoryId ? "Edit category" : "Add category"}
        </h2>
        <form
          className="mt-4 grid gap-4 sm:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault();
            void runAdmin(async () => {
              if (editingCategoryId) {
                await updateCategory({
                  password,
                  categoryId: editingCategoryId,
                  name: categoryName,
                  intro: categoryIntro,
                });
                setEditingCategoryId(null);
              } else {
                await createCategory({
                  password,
                  name: categoryName,
                  intro: categoryIntro,
                });
              }
              setCategoryName("");
              setCategoryIntro("");
            }, editingCategoryId ? "Category updated." : "Category added.");
          }}
        >
          <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#6a7064]">
            Name
            <input
              required
              value={categoryName}
              onChange={(event) => setCategoryName(event.target.value)}
              className="mt-2 w-full min-h-11 rounded-xl border border-[rgba(58,69,54,0.2)] bg-white/80 px-4 py-3 text-sm"
              placeholder="Coffee & Drinks"
            />
          </label>
          <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#6a7064]">
            Intro
            <input
              required
              value={categoryIntro}
              onChange={(event) => setCategoryIntro(event.target.value)}
              className="mt-2 w-full min-h-11 rounded-xl border border-[rgba(58,69,54,0.2)] bg-white/80 px-4 py-3 text-sm"
              placeholder="Short description for this section"
            />
          </label>
          <div className="flex flex-wrap gap-2 sm:col-span-2">
            <button type="submit" className="btn-primary" disabled={busy}>
              {editingCategoryId ? "Save category" : "Add category"}
            </button>
            {editingCategoryId ? (
              <button
                type="button"
                className="btn-outline-dark"
                onClick={() => {
                  setEditingCategoryId(null);
                  setCategoryName("");
                  setCategoryIntro("");
                }}
              >
                Cancel
              </button>
            ) : null}
          </div>
        </form>
      </section>

      {menu === undefined ? (
        <p className="mt-10 text-sm text-[#5a5f54]">Loading menu…</p>
      ) : menu.length === 0 ? (
        <p className="mt-10 text-sm text-[#5a5f54]">
          No categories yet. Add one above, or sign out and back in to load the
          starter menu.
        </p>
      ) : (
        <div className="mt-10 space-y-8">
          {menu.map((category) => {
            const draft = itemForms[category._id] ?? emptyItemForm;
            return (
              <section
                key={category._id}
                className="card-light rounded-2xl p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="heading-display text-2xl text-foreground">
                      {category.name}
                    </h2>
                    <p className="mt-1 text-sm text-[#5a5f54]">
                      {category.intro}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="rounded-full border border-[rgba(58,69,54,0.25)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#5a5f54]"
                      onClick={() => {
                        setEditingCategoryId(category._id);
                        setCategoryName(category.name);
                        setCategoryIntro(category.intro);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-red-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-red-700"
                      disabled={busy}
                      onClick={() => {
                        if (
                          !window.confirm(
                            `Delete “${category.name}” and all its items?`,
                          )
                        ) {
                          return;
                        }
                        void runAdmin(async () => {
                          await deleteCategory({
                            password,
                            categoryId: category._id,
                          });
                        }, "Category deleted.");
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <ul className="mt-6 divide-y divide-[rgba(58,69,54,0.12)] border-y border-[rgba(58,69,54,0.12)]">
                  {category.items.map((item) => (
                    <li key={item._id} className="py-4">
                      {editingItemId === item._id ? (
                        <form
                          className="grid gap-3"
                          onSubmit={(event) => {
                            event.preventDefault();
                            void runAdmin(async () => {
                              await updateItem({
                                password,
                                itemId: item._id,
                                name: editItemForm.name,
                                description: editItemForm.description,
                                price: editItemForm.price,
                                tags: parseTags(editItemForm.tags),
                                popular: editItemForm.popular,
                              });
                              setEditingItemId(null);
                              setEditItemForm(emptyItemForm);
                            }, "Item updated.");
                          }}
                        >
                          <ItemFields
                            value={editItemForm}
                            onChange={setEditItemForm}
                          />
                          <div className="flex flex-wrap gap-2">
                            <button
                              type="submit"
                              className="btn-primary"
                              disabled={busy}
                            >
                              Save item
                            </button>
                            <button
                              type="button"
                              className="btn-outline-dark"
                              onClick={() => {
                                setEditingItemId(null);
                                setEditItemForm(emptyItemForm);
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      ) : (
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="font-semibold text-foreground">
                                {item.name}
                              </p>
                              {item.popular ? (
                                <span className="rounded-full bg-[rgba(138,155,126,0.14)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#5a6e54]">
                                  Popular
                                </span>
                              ) : null}
                            </div>
                            <p className="mt-1 text-sm text-[#5f4a39]">
                              {item.description}
                            </p>
                            {item.tags.length > 0 ? (
                              <p className="mt-1 text-xs text-[#6a7064]">
                                {item.tags.join(" · ")}
                              </p>
                            ) : null}
                          </div>
                          <div className="flex items-center gap-3">
                            <p className="font-display text-lg text-[#5a6e54]">
                              {item.price}
                            </p>
                            <button
                              type="button"
                              className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5a6e54]"
                              onClick={() => {
                                setEditingItemId(item._id);
                                setEditItemForm({
                                  name: item.name,
                                  description: item.description,
                                  price: item.price,
                                  tags: item.tags.join(", "),
                                  popular: item.popular,
                                });
                              }}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="text-xs font-semibold uppercase tracking-[0.12em] text-red-700"
                              disabled={busy}
                              onClick={() => {
                                if (!window.confirm(`Delete “${item.name}”?`)) {
                                  return;
                                }
                                void runAdmin(async () => {
                                  await deleteItem({
                                    password,
                                    itemId: item._id,
                                  });
                                }, "Item deleted.");
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                <form
                  className="mt-6 grid gap-3 border-t border-[rgba(58,69,54,0.12)] pt-6"
                  onSubmit={(event) => {
                    event.preventDefault();
                    void runAdmin(async () => {
                      await createItem({
                        password,
                        categoryId: category._id,
                        name: draft.name,
                        description: draft.description,
                        price: draft.price,
                        tags: parseTags(draft.tags),
                        popular: draft.popular,
                      });
                      setItemForms((prev) => ({
                        ...prev,
                        [category._id]: emptyItemForm,
                      }));
                    }, "Item added.");
                  }}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6a7064]">
                    Add item to {category.name}
                  </h3>
                  <ItemFields
                    value={draft}
                    onChange={(next) =>
                      setItemForms((prev) => ({
                        ...prev,
                        [category._id]: next,
                      }))
                    }
                  />
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto"
                    disabled={busy}
                  >
                    Add item
                  </button>
                </form>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function AdminPanel() {
  if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16">
        <h1 className="heading-display text-3xl text-foreground">
          Convex not connected
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[#5a5f54]">
          Run{" "}
          <code className="rounded bg-white/70 px-1.5 py-0.5">
            npx convex dev
          </code>{" "}
          and set{" "}
          <code className="rounded bg-white/70 px-1.5 py-0.5">
            ADMIN_PASSWORD
          </code>{" "}
          so the client can manage the menu.
        </p>
        <Link href="/" className="btn-dark mt-8 inline-flex">
          Back to site
        </Link>
      </div>
    );
  }

  return <ConnectedAdminPanel />;
}
