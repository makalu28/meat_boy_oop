# 🎮 Meat Boy - OOP JavaScript Simulation

A high-precision 2D precision-platformer simulation based on the classic Super Meat Boy, developed as a core academic project for the **Object-Oriented Programming (OOP)** course. 

The primary objective of this project was to implement a browser-based application enforcing robust software design principles to handle rapid frame-rates, pixel-perfect collision boundaries, and highly responsive character mechanics within a **JavaScript (ES6+)** environment, utilizing the university-provided `Otter` framework template.

---

## 🧠 OOP Architecture & Core Pillars

The application leverages structural object-oriented mechanics to safely isolate and manage high-speed physics iterations:

1. **Encapsulation (Enkapsulacija):** Player and enemy states (e.g., instantaneous velocities, acceleration tables, and health counts) are strictly encapsulated within class structures. Private fields (such as `#zivoti` and `#put`) are managed safely using robust custom getter and setter logic.
2. **Inheritance (Nasljeđivanje):** Built a scalable hierarchy where dynamic entities extend from core layers. A multi-tier inheritance pattern is implemented for collectible objects: `Kljuc` extends `Collectable`, which further branches from the baseline `Item` framework layer.
3. **Polymorphism (Polimorfizam):** Utilized method overriding for physics calculations and movement loops. Entities automatically execute unique boundary validations and custom `updatePosition()` routines depending on their specific subclass types.
4. **Abstraction (Abstrakcija):** Abstracted complex systems—including projectile runtime tracking, trampoline bounce constants, and real-time absolute distance evaluations—behind streamlined class mechanics to keep the execution loop clean and maintainable.

---

## 🛠️ Tech Stack & Structure
- **Language:** JavaScript (ES6+)
- **Frontend Layer:** HTML5 Canvas API, CSS3 Project Styling
- **Architecture:** Multi-Tier Object-Oriented Component Hierarchy
- **Project Assets Included:** Physics calculation sheets (`script.js`), dynamic projectile structures (`Projektil`), and interactive level layouts.

---

## 👩‍💻 Author
- **Katarina Pilić** - *B.Sc. in Computer Science and Technology*
