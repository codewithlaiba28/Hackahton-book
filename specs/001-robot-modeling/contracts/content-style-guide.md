# Content Style Guide: Robot Description and Modeling

## Overview
This guide defines the style and formatting conventions for all content related to "Part 3: Robot Description and Modeling" to ensure consistency, readability, and a high-quality educational experience.

## General Principles
-   **Clarity & Conciseness**: Write clearly and directly. Avoid jargon where simpler terms suffice, or explain jargon thoroughly.
-   **Accuracy**: All technical information must be factually correct and up-to-date with current robotics practices.
-   **Tone**: Educational, informative, and encouraging. Maintain a professional yet approachable tone.
-   **Audience**: Aimed at students with a basic understanding of programming (Python/C++), robotics concepts, and some linear algebra.

## Markdown Formatting
-   **Headings**:
    -   Use ATX headings (`#`, `##`, `###`, etc.).
    -   `#` for chapter titles (handled by Docusaurus `_category_.json` and `chapterX-name.md`).
    -   `##` for main sections within a chapter.
    -   `###` for sub-sections.
    -   `####` for sub-sub-sections (use sparingly).
    -   Ensure consistent heading hierarchy.
-   **Emphasis**:
    -   `*italics*` or `_italics_` for emphasis or technical terms on first mention.
    -   `**bold**` or `__bold__` for strong emphasis.
-   **Lists**:
    -   Use ordered lists (`1.`, `2.`) for sequential steps or ranked items.
    -   Use unordered lists (`-` or `*`) for general lists.
    -   Indent sub-lists with two spaces.
-   **Code Blocks**:
    -   Use fenced code blocks with language specifiers (e.g., ````xml`, ````python`, ````cpp`, ````bash`).
    -   Ensure code is properly indented and formatted.
    -   For inline code, use backticks (`` `inline code` ``).
-   **Links**:
    -   Use descriptive link text: `[Descriptive Text](URL)`. Avoid "click here".
    -   External links should ideally open in a new tab.
-   **Blockquotes**:
    -   Use `>` for quotations or important notes.

## Code/XML Examples
-   **Language**: Provide examples in XML (URDF/SDF), and Python/C++ for kinematics/dynamics where applicable. Bash examples for CLI commands.
-   **Style**:
    -   **XML**: Use consistent indentation (e.g., 2 or 4 spaces). Ensure well-formed XML.
    -   **Python**: Adhere to PEP 8. Use a linter (e.g., Black) for consistency.
    -   **C++**: Adhere to a recognized style guide (e.g., Google C++ Style Guide). Use `clang-format`.
-   **Comments**: Use comments sparingly within code/XML examples to explain complex logic, but prefer explanations in the surrounding text.
-   **Completeness**: Examples should be complete and executable/valid, or clearly indicate where snippets fit into a larger program.
-   **File Naming**: Consistent naming conventions for example files (e.g., `simple_robot.urdf`, `my_ik_solver.py`).

## Terminology
-   Use consistent terminology throughout.
-   Define new terms clearly on their first appearance.
-   Maintain a glossary if the number of terms warrants it.

## Review Process
-   All content MUST undergo technical review for accuracy.
-   All content MUST undergo editorial review for clarity, grammar, and adherence to this style guide.
