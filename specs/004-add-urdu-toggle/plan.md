# Implementation Plan: Add Urdu Language Toggle

**Branch**: `004-add-urdu-toggle` | **Date**: 2025-12-01 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `D:\hackathon-book\Email-agent\specs\004-add-urdu-toggle\spec.md`

## Summary

Implement a language toggle component that allows users to switch between English and Urdu versions of documentation chapters. The component will be placed in the document item layout and will handle URL transformations based on the current language context.

## Technical Context

**Language/Version**: TypeScript (~5.6.2)
**Primary Dependencies**: React (^19.0.0), Docusaurus (3.9.2)
**Storage**: N/A
**Testing**: [NEEDS CLARIFICATION: Testing framework not specified in package.json]
**Target Platform**: Web
**Project Type**: Web application (Docusaurus)
**Performance Goals**: Minimal impact on page load time.
**Constraints**: Must not use auto-translation. Must use existing `urdu/` folder.
**Scale/Scope**: The toggle will appear on all chapter pages with an Urdu equivalent.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Principle 1: Content Accuracy and Clarity**: Pass
- **Principle 3: Accessibility and Usability**: Pass. The toggle improves usability by providing an easy way to switch languages.

All relevant principles are adhered to.

## Project Structure

### Documentation (this feature)

```text
specs/004-add-urdu-toggle/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)
```text
src/
├── components/
│   └── UrduToggle.js      # New component
└── theme/
    └── DocItem/
        └── Layout/
            └── index.js   # Modified component
```

**Structure Decision**: A new React component `UrduToggle.js` will be created in `src/components/`. The Docusaurus theme component `DocItem/Layout` will be "swizzled" to `src/theme/DocItem/Layout/index.js` and modified to include the `UrduToggle` component.

## Complexity Tracking

No violations to the constitution.
