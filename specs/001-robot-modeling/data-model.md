# Data Model: Robot Description and Modeling Content Structure

## Overview
This document describes the conceptual data model for the educational content of "Part 3: Robot Description and Modeling" within the Docusaurus framework. The primary goal is to ensure consistency, navigability, and pedagogical effectiveness of the content.

## Entities

### 1. Chapter
-   **Description**: A major organizational unit representing a distinct section of the textbook (e.g., Chapter 8: Unified Robot Description Format).
-   **Format**: Represented by a markdown file directly within `docs/part3-robot-modeling/`.
-   **Attributes**:
    -   `Title`: Human-readable title of the chapter.
    -   `Slug`: URL-friendly identifier.
    -   `SidebarLabel`: Text for navigation in Docusaurus sidebar.
    -   `FilePath`: Path to the primary markdown/MDX file (e.g., `chapter8-urdf.md`).
-   **Relationships**:
    -   Contains multiple `Section`s.
    -   Belongs to a `Part` (e.g., Part 3).

### 2. Section
-   **Description**: A sub-unit within a `Chapter`, covering a specific topic.
-   **Format**: Represented by an H2 (`##`) or H3 (`###`) heading within a markdown/MDX file.
-   **Attributes**:
    -   `Title`: Human-readable title of the section.
    -   `Anchor`: Auto-generated HTML anchor for direct linking.
-   **Relationships**:
    -   Belongs to a `Chapter`.
    -   Can contain `Subsection`s, `Code Block`s, `Mathematical Formula`s, `Diagram`s, `Example`s, `Key Term`s.

### 3. Code Block
-   **Description**: Snippets of code/XML used to illustrate concepts or provide examples (e.g., URDF XML, Python/C++ snippets for kinematics).
-   **Format**: Markdown fenced code blocks with language specifiers (e.g., ````xml`, ````python`, ````cpp`).
-   **Attributes**:
    -   `Language`: Programming/markup language (e.g., `xml`, `python`, `cpp`, `bash`).
    -   `Content`: The actual code/XML.
    -   `HighlightLines` (Optional): Specific lines to highlight for emphasis.
-   **Relationships**:
    -   Embedded within a `Section` or `Subsection`.

### 4. Mathematical Formula
-   **Description**: Equations or formulas used to explain kinematic and dynamic concepts.
-   **Format**: LaTeX-style notation, rendered by Docusaurus's MathJax/KaTeX integration.
-   **Attributes**:
    -   `Inline`: `$...$` for inline math.
    -   `Block`: `$$...$$` for display math.
    -   `Content`: The LaTeX expression.
-   **Relationships**:
    -   Embedded within a `Section` or `Subsection` text.

### 5. Diagram
-   **Description**: Visual representations used to explain robot structure, coordinate frames, kinematic chains, and dynamic concepts.
-   **Format**: Image files (e.g., `.svg`, `.png`).
-   **Attributes**:
    -   `FilePath`: Relative path to the image file (e.g., `img/chapter8/urdf_example.svg`).
    -   `AltText`: Descriptive text for accessibility and SEO.
    -   `Caption` (Optional): Short description displayed below the diagram.
-   **Relationships**:
    -   Referenced within a `Section` or `Subsection`.
    -   Stored in `docs/part3-robot-modeling/img/chapterX/` directories.

### 6. Example
-   **Description**: Practical demonstrations or longer code/XML listings, often accompanied by explanations.
-   **Format**: Can be inline `Code Block`s, or references to external files.
-   **Attributes**:
    -   `Title`: Short title for the example.
    -   `Description`: Explanation of the example's purpose.
    -   `Source`: Reference to code/XML location.
-   **Relationships**:
    -   Associated with a `Section` or `Subsection`.

### 7. Key Term
-   **Description**: Important vocabulary introduced and defined within the content.
-   **Format**: Emphasized text (bold/italic) on first mention. Potentially linked to a glossary.
-   **Attributes**:
    -   `Term`: The word or phrase.
    -   `Definition`: Concise explanation.
-   **Relationships**:
    -   Appears within `Section` or `Subsection` text.

### 8. Sidebar Entry
-   **Description**: Configuration for Docusaurus navigation sidebar.
-   **Format**: Defined in `sidebars.ts`.
-   **Attributes**:
    -   `Label`: Display name in the sidebar.
    -   `Link` (Optional): Custom link.
    -   `Position` (Optional): Order in sidebar.
-   **Relationships**:
    -   References `Chapter`s.

## Relationships and Structure
```
docs/
└── part3-robot-modeling/
    ├── _category_.json (for Part 3 label)
    ├── quickstart.md (optional, if needed for Part 3 specific setup)
    ├── chapter8-urdf.md (main content for Chapter 8)
    ├── chapter9-sdf-usd.md (main content for Chapter 9)
    ├── chapter10-kinematics-dynamics.md (main content for Chapter 10)
    └── img/
        ├── chapter8/ (chapter-specific images)
        ├── chapter9/
        └── chapter10/
```
```
