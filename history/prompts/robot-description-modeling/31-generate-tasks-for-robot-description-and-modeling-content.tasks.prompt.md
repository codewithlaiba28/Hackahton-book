--- 
id: 31
title: Generate tasks for Robot Description and Modeling content
stage: tasks
date_iso: 2025-11-29
surface: agent
model: claude-3-opus-20240229
feature: robot-modeling
branch: 001-robot-modeling
user: Laiba
command: /sp.tasks Context for task generation: This section provides comprehensive introductions to URDF, SDF, and USD, explaining their purposes, structures, and use cases in modern robotics and simulation pipelines. It includes XML code examples demonstrating how to define robot links, joints, collision elements, inertial parameters, and visual properties to create accurate and efficient robot models. The chapter also demonstrates how to convert models between URDF, SDF, and USD formats to ensure seamless interoperability across tools like ROS, Gazebo, and simulation engines. Humanoid modeling considerations are covered in detail, including CAD import workflows, mesh optimization, and maintaining realistic proportions and kinematic chains. Forward and inverse kinematics, along with fundamental dynamics equations, are derived and implemented to support robot motion, control, and simulation accuracy. The plan further explores modeling techniques for bipedal walking, balance stabilization, and joint or collision constraints required for humanoid robots. Finally, a set of best practices is provided for creating, organizing, and validating robot description files to maintain performance, consistency, and compatibility across robotics frameworks
labels: ["tasks", "robot-modeling"]
links:
  spec: specs/001-robot-modeling/spec.md
  plan: specs/001-robot-modeling/plan.md
  ticket: null
  adr: null
  pr: null
files_yaml:
  - specs/001-robot-modeling/tasks.md
tests_yaml: []
prompt_text: |
  ---
  description: Generate an actionable, dependency-ordered tasks.md for the feature based on available design artifacts.
  ---

  ## User Input

  ```text
  $ARGUMENTS
  ```

  You **MUST** consider the user input before proceeding (if not empty).

  ## Outline

  1. **Setup**: Run `.specify/scripts/powershell/check-prerequisites.ps1 -Json` from repo root and parse FEATURE_DIR and AVAILABLE_DOCS list. All paths must be absolute. For single quotes in args like "I'm Groot", use escape syntax: e.g 'I'\''m Groot' (or double-quote if possible: "I'm Groot").

  2. **Load design documents**: Read from FEATURE_DIR:
     - **Required**: plan.md (tech stack, libraries, structure), spec.md (user stories with priorities)
     - **Optional**: data-model.md (entities), contracts/ (API endpoints), research.md (decisions), quickstart.md (test scenarios)
     - Note: Not all projects have all documents. Generate tasks based on what's available.

  3. **Execute task generation workflow**:
     - Load plan.md and extract tech stack, libraries, project structure
     - Load spec.md and extract user stories with their priorities (P1, P2, P3, etc.)
     - If data-model.md exists: Extract entities and map to user stories
     - If contracts/ exists: Map endpoints to user stories
     - If research.md exists: Extract decisions for setup tasks
     - Generate tasks organized by user story (see Task Generation Rules below)
     - Generate dependency graph showing user story completion order
     - Create parallel execution examples per user story
     - Validate task completeness (each user story has all needed tasks, independently testable)

  4. **Generate tasks.md**: Use `.specify.specify/templates/tasks-template.md` as structure, fill with:
     - Correct feature name from plan.md
     - Phase 1: Setup tasks (project initialization)
     - Phase 2: Foundational tasks (blocking prerequisites for all user stories)
     - Phase 3+: One phase per user story (in priority order from spec.md)
     - Each phase includes: story goal, independent test criteria, tests (if requested), implementation tasks
     - Final Phase: Polish & cross-cutting concerns
     - All tasks must follow the strict checklist format (see Task Generation Rules below)
     - Clear file paths for each task
     - Dependencies section showing story completion order
     - Parallel execution examples per story
     - Implementation strategy section (MVP first, incremental delivery)

  5. **Report**: Output path to generated tasks.md and summary:
     - Total task count
     - Task count per user story
     - Parallel opportunities identified
     - Independent test criteria for each story
     - Suggested MVP scope (typically just User Story 1)
     - Format validation: Confirm ALL tasks follow the checklist format (checkbox, ID, labels, file paths)

  Context for task generation: This section provides comprehensive introductions to URDF, SDF, and USD, explaining their purposes, structures, and use cases in modern robotics and simulation pipelines. It includes XML code examples demonstrating how to define robot links, joints, collision elements, inertial parameters, and visual properties to create accurate and efficient robot models. The chapter also demonstrates how to convert models between URDF, SDF, and USD formats to ensure seamless interoperability across tools like ROS, Gazebo, and simulation engines. Humanoid modeling considerations are covered in detail, including CAD import workflows, mesh optimization, and maintaining realistic proportions and kinematic chains. Forward and inverse kinematics, along with fundamental dynamics equations, are derived and implemented to support robot motion, control, and simulation accuracy. The plan further explores modeling techniques for bipedal walking, balance stabilization, and joint or collision constraints required for humanoid robots. Finally, a set of best practices is provided for creating, organizing, and validating robot description files to maintain performance, consistency, and compatibility across robotics frameworks
response_text: |
  I have generated the detailed task list for "Robot Description and Modeling".

  **Path to tasks.md:** `specs/001-robot-modeling/tasks.md`

  **Summary:**
  *   **Total Task Count:** 32 tasks
  *   **Task Count per User Story:**
      *   US1 (Chapter 8): 7 tasks
      *   US3 (Chapter 10): 8 tasks
      *   US2 (Chapter 9): 8 tasks
      *   Setup & Foundational: 4 tasks
      *   Polish & Cross-Cutting: 5 tasks
  *   **Parallel Opportunities Identified:** Content creation for each user story (chapter) can proceed in parallel after foundational setup. Specific tasks marked with `[P]` are also suitable for parallel execution.
  *   **Independent Test Criteria for Each Story:** Detailed in `specs/001-robot-modeling/spec.md`.
  *   **Suggested MVP Scope:** Completion of Phase 3 (US1 - Chapter 8: Understanding URDF for Robot Structure) and Phase 4 (US3 - Chapter 10: Humanoid Kinematics and Dynamics).
