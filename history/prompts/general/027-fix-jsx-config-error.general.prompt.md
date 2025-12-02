---
id: "027"
title: "Fix JSX Config Error"
stage: "misc"
date: "2025-11-29"
surface: "agent"
model: "gemini-2.0-pro-exp"
feature: "none"
branch: "main"
user: "user"
command: "none"
labels:
  - "typescript"
  - "jsx"
  - "config"
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml: |
  - e:\laiba-project\HackHackathon-I-Textbook-for-Teaching-Physical-AI-Humanoid-Robotics-Course\tsconfig.json
tests_yaml: |
  - none
prompt_text: |
  Explain what this problem is and help me fix it: Cannot use JSX unless the '--jsx' flag is provided. @[e:\laiba-project\HackHackathon-I-Textbook-for-Teaching-Physical-AI-Humanoid-Robotics-Course\src\theme\Root.tsx:L9]
response_text: |
  Fixed the error by adding `"jsx": "react-jsx"` to the `compilerOptions` in `tsconfig.json`. This tells TypeScript how to compile JSX syntax, which was missing from the configuration.
outcome: "success"
evaluation: "fixed"
---

# Fix JSX Config Error

## Prompt

Explain what this problem is and help me fix it: Cannot use JSX unless the '--jsx' flag is provided. @[e:\laiba-project\HackHackathon-I-Textbook-for-Teaching-Physical-AI-Humanoid-Robotics-Course\src\theme\Root.tsx:L9]

## Response

Fixed the error by adding `"jsx": "react-jsx"` to the `compilerOptions` in `tsconfig.json`. This tells TypeScript how to compile JSX syntax, which was missing from the configuration.
