# Mathematical Notation Guide: Robot Description and Modeling

## Overview
This guide specifies the conventions for writing mathematical notation within "Part 3: Robot Description and Modeling" content. Consistent notation is crucial for clarity and ease of understanding complex kinematic and dynamic concepts.

## Tooling
-   **Renderer**: Docusaurus is configured to use MathJax or KaTeX for rendering LaTeX-style mathematical expressions.

## General Principles
-   **Consistency**: Use the same symbol for the same quantity throughout the text and equations.
-   **Clarity**: Equations should be easy to read and unambiguous.
-   **Standard Conventions**: Follow widely accepted conventions in robotics and mathematics for symbols (e.g., $\mathbf{T}$ for transformation matrix, $\theta$ for joint angles).

## Inline vs. Display Equations
-   **Inline Equations**: Use `$` for mathematical expressions embedded within a paragraph.
    -   Example: "The transformation matrix is given by $\mathbf{T}$."
-   **Display Equations**: Use `$$` for equations presented on their own line.
    -   Example:
        ```
        $$
        \mathbf{T}_{ij} = \begin{bmatrix}
        \cos\theta_i & - \sin\theta_i\cos\alpha_i & \sin\theta_i\sin\alpha_i & a_i\cos\theta_i \\
        \sin\theta_i & \cos\theta_i\cos\alpha_i & -\cos\theta_i\sin\alpha_i & a_i\sin\theta_i \\
        0 & \sin\alpha_i & \cos\alpha_i & d_i \\
        0 & 0 & 0 & 1
        \end{bmatrix}
        $$
        ```

## Common Symbols and Notation
-   **Vectors**: Bold lowercase letters (e.g., $\mathbf{v}$, $\mathbf{p}$).
-   **Matrices**: Bold uppercase letters (e.g., $\mathbf{R}$, $\mathbf{T}$).
-   **Scalars**: Italic lowercase letters (e.g., $m$ for mass, $t$ for time).
-   **Angles**: Greek letters (e.g., $\theta$, $\alpha$, $\beta$).
-   **Coordinate Frames**: Superscripts or subscripts to denote the frame of reference (e.g., $\mathbf{p}^A$ for point p in frame A).

## Examples of Notation
-   **Transformation Matrix**: $\mathbf{T} \in \mathbb{R}^{4 \times 4}$
-   **Rotation Matrix**: $\mathbf{R} \in SO(3)$
-   **Joint Angle**: $\theta_i$
-   **Angular Velocity**: $\boldsymbol{\omega}$
-   **Linear Velocity**: $\mathbf{v}$
-   **Inertia Tensor**: $\mathbf{I}$
-   **Mass**: $m$

## Review Process
-   All mathematical notation MUST be reviewed for accuracy and adherence to this guide.
-   Ensure equations render correctly in Docusaurus.
