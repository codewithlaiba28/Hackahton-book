# Research for Add Urdu Language Toggle

## 1. Testing Framework

**Task**: Determine the testing framework for the project.
**Findings**: The `package.json` does not specify a testing framework. The Docusaurus documentation recommends using Jest for testing.
**Decision**: Use Jest for testing the new component.

## 2. Docusaurus Theme Component for Chapter Pages

**Task**: Identify the correct Docusaurus theme component to swizzle to add the toggle button to chapter pages.
**Findings**: The Docusaurus documentation confirms that `DocItem/Layout` is the correct component to swizzle for customizing the layout of a documentation page.
**Decision**: Swizzle the `DocItem/Layout` component to add the `UrduToggle` component.
