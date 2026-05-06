# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal study repository following the EDteam "[Basic Web Development](https://app.ed.team/programacion/web)" learning path. It covers HTML, CSS, and JavaScript through structured modules, each with self-contained example files. There is no build system, bundler, or test suite. The code is opened directly in a web browser.

## Viewing examples

Open any `index.html` file directly in a browser (no server required for most examples). The HTML project under `html/project/` loads Tailwind CSS from a CDN, so it needs an internet connection.

VS Code with the **Live Server** extension is the expected dev environment (inferred from `.vscode/settings.json` and the course tooling).

## Repository structure (file system architecture)

Each technology has its own top-level directory, subdivided by module number:

```
basic_web_development_EDteam
├── astro/         – (empty, reserved for Astro framework content)
├── code_examples/ – scratch files, excluded from git via .gitignore
├── css/           – Module 1: syntax, variables; Module 2: selectors (simple, compound, attribute, combinators)
├── html/          – Modules 1–7: syntax, DOM, text tags, links/lists, media, tables, forms
│   ├── ...
│   └── project/   – multi-page capstone site (Manatees Swimming Academy)
├── javascript/    – Modules 1–6: syntax, operators, conditionals/loops, functions, data collections
├── project/       – (empty, reserved for a future capstone)
└── prompts/
```

Each module topic gets its own subdirectory with exactly two files: `index.html` + `styles.css` (or a `.js` file for JavaScript modules).

## Conventions

- **HTML boilerplate**: `<!DOCTYPE html>`, `lang="en"`, UTF-8 charset, viewport meta — used consistently across all examples.
- **CSS**: plain CSS files linked via `<link>`. CSS custom properties (variables) are used from Module 1 onward.
- **Line length**: soft limit of 100 characters (set in `.vscode/settings.json`).
- **No framework or tooling**: no npm, no bundler, no linter configured. `node_modules/`, `dist/`, `.astro/` are gitignored for future Astro work.
- **`code_examples/`** is gitignored (`/code_examples/*`) — use it freely for throwaway experiments.

## Module README files

Every module directory contains a `README.md` listing the lesson topics covered. Items marked `📑` or `⭐` are flagged as important in the course. These READMEs are the source of truth for what each module covers.

## The HTML capstone project (`html/project/`)

A four-page static web site ("Manatees Swimming Academy") that uses **Tailwind CSS via CDN** alongside a local `style.css`. Pages: `index.html`, `services.html`, `clients.html`, `contact.html`. Layout uses Tailwind grid utilities with a 10-column header and 4-column main/aside split.