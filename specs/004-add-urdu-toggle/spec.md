# Feature Specification: Add Urdu Language Toggle

**Feature Branch**: `004-add-urdu-toggle`  
**Created**: 2025-12-01
**Status**: Draft  
**Input**: User description: "You are an AI assistant working inside a Docusaurus + Gemini CLI + Spec-Kit documentation project. The project includes English chapters, and the user has also created an urdu/ folder where every chapter’s Urdu version is manually written. Your task is to implement a system that adds a Urdu toggle button at the top of each chapter. When the user clicks this button, they should be redirected to the corresponding Urdu version stored in the urdu/ folder, which follows the same structure as the English docs. Logged-in users should be able to switch languages anytime. The system must use only the files from the provided urdu/ folder, with no auto-translation. Always load the Urdu content directly from the manually created /urdu/ folder, which exists outside the /docs/ directory."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Language Toggle (Priority: P1)

As a user, I want to see a language toggle button on each documentation chapter page so that I can switch to the Urdu version of the chapter.

**Why this priority**: This is the core functionality of the feature, enabling language switching.

**Independent Test**: This can be tested by navigating to any chapter with a known Urdu equivalent and verifying the toggle button's presence.

**Acceptance Scenarios**:

1. **Given** a user is on a chapter page that has an Urdu version, **When** the page loads, **Then** a "Urdu" toggle button is visible.
2. **Given** a chapter does not have an Urdu version, **When** the page loads, **Then** the "Urdu" toggle button is not visible.

---

### User Story 2 - Switch to Urdu (Priority: P1)

As a user, when I click the "Urdu" toggle button, I want to be redirected to the corresponding Urdu version of the chapter.

**Why this priority**: This is the primary action and outcome of the feature.

**Independent Test**: This can be tested by clicking the toggle on a chapter page and verifying the redirection to the correct Urdu URL.

**Acceptance Scenarios**:

1. **Given** a user is on the English chapter page `/docs/part1-foundations/chapter1-physical-ai-foundations`, **When** the user clicks the "Urdu" toggle, **Then** they are redirected to `/urdu/part1-foundations/chapter1-physical-ai-foundations`.

---

### Edge Cases

- What happens when a user is on a page that is not a chapter (e.g., the main index page)?
- What happens if the corresponding Urdu file is missing or the link is broken?
- What happens when a user is on an Urdu page? Does the toggle switch back to English?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST display a language toggle button on each chapter page that has a corresponding Urdu version.
- **FR-002**: The toggle button SHOULD be labeled "Urdu" or have an appropriate icon.
- **FR-003**: Clicking the toggle button MUST redirect the user to the URL of the Urdu version of the current chapter.
- **FR-004**: The URL mapping MUST follow the existing directory structure (e.g., `docs/part/chapter` maps to `urdu/part/chapter`).
- **FR-005**: The system MUST NOT show the toggle button if a corresponding Urdu version for a chapter does not exist.
- **FR-006**: The system MUST NOT use any auto-translation services.
- **FR-007**: The system MUST provide a toggle on the Urdu page to switch back to the English version.
- **FR-008**: Clicking the toggle button on an Urdu page MUST redirect the user to the URL of the English version of the current chapter.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of chapter pages with a corresponding Urdu version display the language toggle.
- **SC-002**: Clicking the toggle has a 100% success rate of redirecting to the correct Urdu page, assuming the file exists.
- **SC-003**: Page load performance is not degraded by more than 10% after the introduction of the toggle.
- **SC-004**: The feature works for all users, regardless of login status.

