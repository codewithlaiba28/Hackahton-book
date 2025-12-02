# Tasks: Add Urdu Language Toggle

**Input**: Design documents from `specs/004-add-urdu-toggle/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup

**Purpose**: Ensure necessary directories exist.

- [x] T001 Create the `src/components` directory if it does not exist.
- [x] T002 Create the `src/theme` directory if it does not exist.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Prepare the Docusaurus theme for customization.

- [x] T003 Swizzle the `DocItem/Layout` component to create `src/theme/DocItem/Layout/index.js`. Use the command `npm run swizzle @docusaurus/theme-classic DocItem/Layout -- --danger`.

---

## Phase 3: User Story 1 - View and Switch Language (Priority: P1) 🎯 MVP

**Goal**: Implement the language toggle component and integrate it into the documentation pages.

**Independent Test**: Navigate to a chapter page with a corresponding Urdu version and verify the toggle button appears and functions correctly.

### Implementation for User Story 1

- [x] T004 [US1] Create the `UrduToggle.js` file in `src/components/`.
- [x] T005 [US1] In `src/components/UrduToggle.js`, implement the React component with basic structure. Import React, `useLocation` from `@docusaurus/router`, and `useDocusaurusContext`.
- [x] T006 [US1] In `src/components/UrduToggle.js`, implement the logic to determine the current language (English or Urdu) based on the URL path.
- [x] T007 [US1] In `src/components/UrduToggle.js`, implement the logic to construct the target URL for the other language.
- [x] T008 [US1] In `src/components/UrduToggle.js`, render a button that links to the target URL. The button text should be "View Urdu Version" on English pages and "View English Version" on Urdu pages.
- [x] T009 [US1] In `src/components/UrduToggle.js`, add logic to only render the button on doc and urdu pages.
- [x] T010 [US1] In `src/theme/DocItem/Layout/index.js`, import the `UrduToggle` component from `src/components/UrduToggle.js`.
- [x] T011 [US1] In `src/theme/DocItem/Layout/index.js`, render the `UrduToggle` component at a suitable location at the top of the page.

---

## Dependencies & Execution Order

- **Phase 1** (Setup) must be completed before Phase 2.
- **Phase 2** (Foundational) must be completed before Phase 3.
- All tasks in **Phase 3** (User Story 1) depend on the completion of Phase 2. Within Phase 3, T010 and T011 depend on the completion of T004-T009.

## Implementation Strategy

1.  Complete Phase 1 and 2 to prepare the project structure.
2.  Implement the `UrduToggle.js` component (T004-T009).
3.  Integrate the component into the theme (T010-T011).
4.  Manually test the feature by navigating to chapter pages.
