# Data Model: ROS 2 Architecture and Concepts Content Structure

## Overview
This document describes the conceptual data model for the educational content of "Part 2: The Robotic Nervous System – ROS 2" within the Docusaurus framework. The primary goal is to ensure consistency, navigability, and pedagogical effectiveness of the content.

## Entities

### 1. Chapter
-   **Description**: A major organizational unit representing a distinct section of the textbook (e.g., Chapter 4: ROS 2 Architecture and Core Concepts).
-   **Format**: Represented by a top-level directory within `docs/part2-ros2/`.
-   **Attributes**:
    -   `Title`: Human-readable title of the chapter.
    -   `Slug`: URL-friendly identifier.
    -   `SidebarLabel`: Text for navigation in Docusaurus sidebar.
    -   `FilePath`: Path to the primary markdown/MDX file (e.g., `index.md` or `chapterX-title.md`).
-   **Relationships**:
    -   Contains multiple `Section`s.
    -   Belongs to a `Part` (e.g., Part 2).

### 2. Section
-   **Description**: A sub-unit within a `Chapter`, covering a specific topic.
-   **Format**: Represented by an H2 (`##`) or H3 (`###`) heading within a markdown/MDX file.
-   **Attributes**:
    -   `Title`: Human-readable title of the section.
    -   `Anchor`: Auto-generated HTML anchor for direct linking.
-   **Relationships**:
    -   Belongs to a `Chapter`.
    -   Can contain `Subsection`s, `Code Block`s, `Diagram`s, `Example`s, `Key Term`s.

### 3. Code Block
-   **Description**: Snippets of code used to illustrate concepts or provide examples.
-   **Format**: Markdown fenced code blocks (````language`).
-   **Attributes**:
    -   `Language`: Programming language (e.g., `python`, `cpp`, `bash`).
    -   `Content`: The actual code.
    -   `HighlightLines` (Optional): Specific lines to highlight for emphasis.
-   **Relationships**:
    -   Embedded within a `Section` or `Subsection`.

### 4. Diagram
-   **Description**: Visual representations used to explain architectural concepts, data flows, or system structures.
-   **Format**: Image files (e.g., `.svg`, `.png`, `.jpeg`).
-   **Attributes**:
    -   `FilePath`: Relative path to the image file (e.g., `img/ros2_graph.svg`).
    -   `AltText`: Descriptive text for accessibility and SEO.
    -   `Caption` (Optional): Short description displayed below the diagram.
-   **Relationships**:
    -   Referenced within a `Section` or `Subsection`.
    -   Stored in `static/img` or chapter-specific `img/` directories.

### 5. Example
-   **Description**: Practical demonstrations or longer code listings, often accompanied by explanations.
-   **Format**: Can be inline `Code Block`s, or references to external files (e.g., GitHub Gists, local files).
-   **Attributes**:
    -   `Title`: Short title for the example.
    -   `Description`: Explanation of the example's purpose.
    -   `Source`: Reference to code location (e.g., inline, file path, URL).
-   **Relationships**:
    -   Associated with a `Section` or `Subsection`.

### 6. Key Term
-   **Description**: Important vocabulary introduced and defined within the content.
-   **Format**: Emphasized text (bold/italic) on first mention. Potentially linked to a glossary.
-   **Attributes**:
    -   `Term`: The word or phrase.
    -   `Definition`: Concise explanation.
-   **Relationships**:
    -   Appears within `Section` or `Subsection` text.

### 7. Sidebar Entry
-   **Description**: Configuration for Docusaurus navigation sidebar.
-   **Format**: JSON file (`_category_.json`) or `sidebars.ts`.
-   **Attributes**:
    -   `Label`: Display name in the sidebar.
    -   `Link` (Optional): Custom link if not a standard document.
    -   `Position` (Optional): Order in sidebar.
-   **Relationships**:
    -   References `Chapter`s and `Section`s.

## Relationships and Structure
```
docs/
└── part2-ros2/
    ├── _category_.json (for Part 2 label)
    ├── chapter4-ros2-architecture/
    │   ├── _category_.json (for Chapter 4 label)
    │   ├── index.md (main content for Chapter 4)
    │   └── img/ (chapter-specific images)
    ├── chapter5-packages/
    │   ├── _category_.json
    │   ├── index.md
    │   └── img/
    ├── chapter6-advanced-concepts/
    │   ├── _category_.json
    │   ├── index.md
    │   └── img/
    └── chapter7-python-agents/
        ├── _category_.json
        ├── index.md
        └── img/
```
