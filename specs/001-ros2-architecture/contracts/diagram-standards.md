# Diagram Standards: ROS 2 Architecture and Concepts

## Overview
This guide establishes standards for creating and incorporating diagrams and visual aids within "Part 2: The Robotic Nervous System – ROS 2" content. Consistent visual language enhances understanding and maintains professional presentation.

## General Principles
-   **Clarity**: Diagrams must be easy to understand at a glance, conveying a single, clear message.
-   **Accuracy**: Diagrams must accurately represent the concepts they illustrate.
-   **Consistency**: Maintain consistent visual style, color palettes, and iconography across all diagrams.
-   **Accessibility**: Provide descriptive `alt` text for all images.

## Tooling (Recommended)
-   **Vector Graphics**: Prefer tools that generate scalable vector graphics (SVG) for crispness at any resolution (e.g., draw.io, Mermaid.js for code-based diagrams, Inkscape, Adobe Illustrator).
-   **Diagram-as-Code**: Encourage tools like Mermaid.js for version-controlled, text-based diagrams where appropriate (e.g., flowcharts, sequence diagrams).

## File Formats
-   **Vector**: `.svg` is the preferred format for most diagrams due to scalability.
-   **Raster**: `.png` for screenshots or complex images where vector is not feasible. Ensure high resolution for `.png` files.
-   **Avoid**: `.jpeg` for diagrams (artifacts), `.gif` (limited color, no transparency).

## Visual Style
-   **Color Palette**: Use a limited, consistent color palette. Avoid overly bright or clashing colors.
-   **Icons**: Use a consistent set of icons for common elements (e.g., nodes, topics, services).
-   **Text**:
    -   Use clear, readable fonts.
    -   Ensure text is large enough to be legible without zooming.
    -   Labels should be concise and placed clearly.
-   **Layout**:
    -   Maintain clear spacing between elements.
    -   Use alignment and distribution tools for neatness.
    -   Flow direction (e.g., left-to-right, top-to-bottom) should be consistent for related diagrams.

## Labeling and Annotation
-   **Elements**: Clearly label all significant components within the diagram.
-   **Arrows**: Use arrows to indicate direction of flow or communication. Ensure arrowheads are consistent.
-   **Annotations**: Use callouts or text boxes to highlight specific areas or provide additional context where necessary.

## Embedding Diagrams in Markdown
-   **Image Tag**: Use standard Markdown image syntax: `![Alt Text](path/to/image.svg)`.
-   **Alt Text**: Provide concise but descriptive `alt` text for every diagram to aid accessibility and SEO (e.g., `![ROS 2 Computation Graph showing communication between two nodes]` not `![ros2_graph]`).
-   **Captions**: If a caption is required, place it immediately below the image using regular Markdown text, potentially italicized.

## Storage
-   **Chapter-Specific Images**: Store images directly within an `img/` subdirectory of the respective chapter (e.g., `docs/part2-ros2/chapter4-ros2-architecture/img/`).
-   **Global Images**: For widely used images (e.g., project logo), store in `static/img/`.

## Review Process
-   All diagrams MUST be reviewed for technical accuracy.
-   All diagrams MUST be reviewed for adherence to these visual standards.
