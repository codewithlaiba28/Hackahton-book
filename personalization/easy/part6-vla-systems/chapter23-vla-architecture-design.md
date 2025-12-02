# Chapter 23: VLA Architecture and Design

This chapter explains how VLA models are built. It covers multi-modal transformer architectures, visual encoders (like DINOv2, SigLIP, CLIP), language models used in robotics (such as LLaMA and Phi), action decoders, end-to-end learning systems, and the difference between single-model and dual-system designs.

## Multi-Modal Transformer Architectures

Most VLA systems use **multi-modal transformers**.
These models can take in **different types of information** — for example, images (vision) and text (language) — and combine them into one meaningful understanding.

Transformers were first made for language tasks, but they work well for robotics because of their **attention mechanism**.
Attention helps the model focus on the most important parts of what it sees and what it reads.

In VLAs, this means the model can look at the right visual details and understand the important words in a command at the same time.

## Key Components of VLA Architecture

### 1. Visual Encoders

Visual encoders process images or videos and turn them into useful visual features.

* **DINOv2**: A vision transformer trained without human labels. It learns strong visual features and works well for detailed prediction and general visual understanding.

* **SigLIP**: A model that aligns images and text. It is similar to CLIP but often performs better on tasks that need fine, detailed visual recognition.

* **CLIP (Contrastive Language-Image Pre-training)**: Trained on many image–text pairs. It learns a shared space where similar images and texts match. This helps the model understand images using text descriptions, even without new training (zero-shot learning).

### 2. Language Models for Robotics

These models read and understand natural language instructions. For robotics, they must also understand physical actions and real-world meanings.

* **LLaMA**: A strong, open large language model that can be fine-tuned for following instructions in robotics.

* **Phi**: A smaller language model from Microsoft. It is efficient and works well when computing power is limited, making it useful for robots with less hardware.

### 3. Action Decoders

Action decoders convert the combined vision-language understanding into robot actions.

These actions can be:

* **low-level** (motor control, joint movement)
* **high-level** (pick up object, move forward)

The design depends on the robot’s body structure and how detailed the actions need to be.

## End-to-End Learning Pipelines

In end-to-end systems, the whole process — from input image and language instruction to the final robot action — is trained together.

This helps the robot learn:

* better representations
* direct mapping from what it sees to what it does

End-to-end learning usually makes robots more flexible and better at handling new situations than hand-designed or modular systems.

## Design Choices: Single-Model vs. Dual-System Approaches

* **Single-Model Approach**:
  One big multi-modal transformer does everything — vision, language understanding, and action.
  It keeps everything connected and consistent but uses a lot of compute.

* **Dual-System Approach**:
  The system is divided into two parts, for example:

  * a module for vision + language
  * a module for action generation

  This gives more flexibility, allows each part to be trained separately, and makes debugging easier.
  But the modules must be carefully connected so they work smoothly together.

