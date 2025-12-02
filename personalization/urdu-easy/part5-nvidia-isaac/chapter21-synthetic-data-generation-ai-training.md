# Chapter 21: Synthetic Data Generation and AI Training

## Why Synthetic Data?

**Challenges with real data:**

* Expensive hardware required
* Time-consuming to collect
* Dangerous for the robot
* Limited diversity and rare events

**Advantages of synthetic data:**

* Free and safe
* Fast generation (millions of images per hour)
* Infinite diversity and rare events
* Perfect annotations for AI training

## Generating Synthetic Data in Isaac Sim

**Workflow:**

```
1. Scene generation (robots, objects, environments)
        ↓
2. Run simulation with variations
        ↓
3. Automatic annotation (ground truth)
        ↓
4. Save dataset (images, labels, metadata)
```

**Variations include:**

* Objects: size, shape, material, texture, color
* Environment: lighting, camera angles, backgrounds, clutter, weather
* Physics: friction, weight, elasticity, air resistance

**Automatic Annotations:**

| Type         | Provides                  |
| ------------ | ------------------------- |
| 2D boxes     | Bounding boxes            |
| 3D boxes     | 3D position & orientation |
| Segmentation | Pixel-level object masks  |
| Depth        | Distance per pixel        |
| Normals      | Surface orientation       |
| Optical flow | Pixel motion              |
| Instance IDs | Unique label per object   |

## Multi-Task Learning

* Train a single model for multiple related tasks
* Example: object detection + segmentation + depth estimation
* Advantages: shared features, better generalization, efficient, robust

**Training strategy:**

```
Batch of images:
- 40% detection
- 30% segmentation
- 30% depth
→ Model learns all tasks simultaneously
```

## Reducing Sim-to-Real Gap

**Challenges:** Perfect simulation is too clean → fails in real-world

**Solutions:**

1. **Domain Randomization**

   * Random textures, lighting, colors, camera positions, object sizes, clutter, physics
   * Model becomes robust to real-world variations

2. **Domain Adaptation**

   ```
   Train on synthetic data
       ↓
   Fine-tune on small real dataset
       ↓
   Deploy to real robot
   ```

3. **Noise Injection**

   * Add camera noise, motion blur, compression artifacts
   * Makes synthetic images more realistic

## Best Practices for Dataset Curation

1. **Diversity**: Include many objects, backgrounds, lighting, angles, scales, occlusions
2. **Realism**: Use realistic textures, physics, lighting, and shadows
3. **Annotation Accuracy**: Ensure correct labels, bounding boxes, and object coverage
4. **Scale**: Large datasets improve generalization
5. **Organization**: Structure datasets into `train/`, `val/`, `test/` folders with images and annotations

## Data Generation Workflow

**Phase 1: Planning**

* Define tasks, objects, variations, and parameters

**Phase 2: Generation**

* Configure Isaac Sim
* Batch and parallel generation
* Save images and labels

**Phase 3: Quality Check**

* Review samples, verify annotations, fix issues

**Phase 4: Training**

* Load dataset, train, validate, deploy

## Common Issues & Fixes

| Issue                     | Cause                  | Solution                            |
| ------------------------- | ---------------------- | ----------------------------------- |
| Model fails on real robot | Limited variation      | Increase domain randomization       |
| Slow training             | Very large dataset     | Downsample or batch efficiently     |
| Overfitting               | Limited diversity      | Add more variations                 |
| Incorrect annotations     | Automation errors      | Manual verification                 |
| Sim-to-real gap           | Unrealistic simulation | Improve textures, lighting, physics |

## Advantages Summary

* Cost-effective
* Scalable (millions of images)
* Safe
* Diverse and realistic
* Perfect annotations
* Fast and reproducible
* Supports edge cases

## Real vs Synthetic Data

| Aspect      | Real Data | Synthetic Data |
| ----------- | --------- | -------------- |
| Cost        | High      | Free           |
| Time        | Months    | Days           |
| Safety      | Risky     | Safe           |
| Diversity   | Limited   | Unlimited      |
| Annotations | Manual    | Automatic      |
| Rare events | Hard      | Easy           |
| Realism     | 100% real | Can randomize  |

## What You'll Learn

* Importance of synthetic data in robotics
* Dataset generation in Isaac Sim
* Automatic annotations
* Multi-task learning strategies
* Domain randomization & adaptation
* Noise injection techniques
* Dataset curation best practices
* Organizing large datasets
* Reducing sim-to-real gap
* Training robust AI models
* Deploying models on real robots
