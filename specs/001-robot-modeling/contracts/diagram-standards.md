# Diagram Standards: Robot Description and Modeling

## Overview
This guide establishes standards for creating and incorporating diagrams and visual aids within "Part 3: Robot Description and Modeling" content. Consistent visual language enhances understanding and maintains professional presentation.

## General Principles
-   **Clarity**: Diagrams must be easy to understand at a glance, conveying a single, clear message.
-   **Accuracy**: Diagrams must accurately represent the concepts they illustrate (e.g., coordinate frames, joint axes).
-   **Consistency**: Maintain consistent visual style, color palettes, and iconography across all diagrams.
-   **Accessibility**: Provide descriptive `alt` text for all images.

## Tooling (Recommended)
-   **Vector Graphics**: Prefer tools that generate scalable vector graphics (SVG) for crispness at any resolution (e.g., draw.io, Inkscape, Adobe Illustrator, or code-based tools for kinematic chains).
-   **Mathematical Plotting**: Tools like Matplotlib, gnuplot, or other data visualization libraries for plotting functions or data.

## File Formats
-   **Vector**: `.svg` is the preferred format for most diagrams due to scalability.
-   **Raster**: `.png` for screenshots or complex images where vector is not feasible. Ensure high resolution for `.png` files.
-   **Avoid**: `.jpeg` for diagrams (artifacts), `.gif` (limited color, no transparency).

## Visual Style
-   **Color Palette**: Use a limited, consistent color palette. Avoid overly bright or clashing colors.
-   **Coordinate Frames**: Use consistent visual conventions for XYZ axes (e.g., red=X, green=Y, blue=Z).
-   **Text**:
    -   Use clear, readable fonts.
    -   Ensure text is large enough to be legible without zooming.
    -   Labels should be concise and placed clearly.
-   **Layout**:
    -   Maintain clear spacing between elements.
    -   Use alignment and distribution tools for neatness.
    -   Flow direction (e.g., kinematic chain progression) should be consistent.

## Labeling and Annotation
-   **Elements**: Clearly label all significant components within the diagram (e.g., links, joints, end-effectors, center of mass).
-   **Arrows**: Use arrows to indicate direction of forces, velocities, or transformations. Ensure arrowheads are consistent.
-   **Annotations**: Use callouts or text boxes to highlight specific areas or provide additional context where necessary.

## Embedding Diagrams in Markdown
-   **Image Tag**: Use standard Markdown image syntax: `![Alt Text](path/to/image.svg)`.
-   **Alt Text**: Provide concise but descriptive `alt` text for every diagram to aid accessibility and SEO.
-   **Captions**: If a caption is required, place it immediately below the image using regular Markdown text, potentially italicized.

## Storage
-   **Chapter-Specific Images**: Store images within `docs/part3-robot-modeling/img/chapterX/` directories.
-   **Global Images**: For widely used images, store in `static/img/`.

## Review Process
-   All diagrams MUST be reviewed for technical accuracy.
-   All diagrams MUST be reviewed for adherence to these visual standards.
