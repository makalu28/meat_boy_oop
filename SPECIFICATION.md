# 🛠️ Technical Specification: Meat Boy - OOP JavaScript Simulation

This document defines the underlying technical architecture, core object states, and physics loop implementation details of the Meat Boy precision platformer simulation.

---

## 1. Object Hierarchies & Structural Design

The application's rendering and entity engine is engineered on top of clean Object-Oriented Programming (OOP) tree patterns, separating static environmental geometry from high-speed kinematic elements.

### 🔒 1.1 Encapsulation & Dynamic Boundary Setters
To guarantee accurate frame evaluation, kinematic attributes and lifecycles are tightly scoped within object layouts:
- **Private State Management:** Character lives (`#zivoti`) inside `Boy` and `Protivnik` classes use strict boundary constraints. The setter logic ensures health properties automatically clamp to `0` if invalid negative values are reached.
- **Automated Projectile Teardown:** The `#put` property inside the `Projektil` class acts as an automated lifetime tracker. Its custom setter monitors distance increments; as soon as the vector value reaches a max threshold of `200` pixels, it instantly forces a lifecycle shutdown (`this.stop()`).
- **Platform Collision Hook:** The `collidedPlatform` property triggers an instant structural termination. When a traveling projectile detects interaction with a map layout obstacle (`v != ""`), it automatically invokes internal cleanup arrays.

### 🌿 1.2 Polymorphic Updates & Overloading Simulation
The game loop cycles through dynamic collections, executing polymorphic behaviors on each iteration:
- **Method Overloading Simulation (Preopterećenje):** Inside `Boy.jump()`, signature overloading is simulated by auditing the `arguments` metadata array at runtime. This dynamically alters vertical velocity constants ($h$) based on the object parameter type:
  - `jump(number)`: Directly scales vertical kinematics based on passed numeric arguments.
  - `jump(string)`: If passed the `"trampolin"` string context, it overrides standard parameters to execute an advanced high-velocity bounce (`super.jump(120)`).
- **Runtime Type Identification:** The `Collectable` class overrides baseline entity tags via the `getType()` method. By calling `this.constructor.name`, it dynamically outputs string identifiers matching the exact running instance subclass (e.g., returning `"Kljuc"`).

---

## 2. Platformer Physics & Proximity AI Logic

### 📐 2.1 Velocity Vector Calculations & Entity Interactions
Character movement and environment interactions utilize precise bounding box evaluations during the calculation loop:
- **Collectible Hooks (`pokupiKljuc`):** Bounding boxes compute intersection triggers continuously. Colliding with a `Kljuc` entity sets its rendering state to `false`, safely removing it from the operational display hierarchy.

### 🤖 2.2 Proximity AI Algorithms
Non-playable hostile entities (`Protivnik`, `Neprijatelj`) manage automated tracking behaviors using absolute vector deltas:
- **Proximity Detection (`blizina`):** Computes precise absolute distances using delta coordinate formulas: $\Delta x = |x_{enemy} - x_{player}|$.
- **Aggro Mechanics (`napadni`):** When player vectors fall beneath specific bounds ($dx < 180, dy < 60$), the AI intercepts its passive structural pathing to inject tracking velocities targeting the player object location.

---

## 👩‍💻 Author
- **Katarina Pilić** - *univ. bacc. inf. et techn. Katarina Pilić*
