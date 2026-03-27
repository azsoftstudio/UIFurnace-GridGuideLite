<div align="center">
  
# 💠 UI Furnace – Grid Guide Tool v1.0

[![Unity Asset Store](https://img.shields.io/badge/Published_On-Unity_Asset_Store-000000?style=for-the-badge&logo=unity&logoColor=white)](https://assetstore.unity.com/)
[![Made with Vanilla HTML/CSS/JS](https://img.shields.io/badge/Documentation-Vanilla_Web-0ea5e9?style=for-the-badge)](https://azsoftstudio.github.io/UIFurnace-GridGuideLite/)
[![License: MIT](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)](#)

*A premium, grid-based layout assistant for UI design in Unity.*

</div>

<br/>

> **✨ Check Out the Interactive Docs Website:** simply open `index.html` in your favorite web browser to view the interactive, premium dark-themed documentation containing live animated backgrounds, glassmorphic layouts, and scroll-tracking highlights!

---

## 📖 What is the Grid Guide Tool?

The **UI Furnace – Grid Guide Tool** is a grid-based layout assistant for UI design in Unity. It provides visual grid overlays, bi-directional magnetic snapping functionality, and flexible grid modes to help align and organize UI elements with absolute precision—directly over your Canvas without cluttering your hierarchy.

**💡 Note:** This is a lightweight, Editor-only tool and will *not* affect your game's runtime performance!

### ⚡ Main Features

| 🧲 Snap to Grid | 📏 Symmetry Generation | 🎛️ Dynamic Editing | 👁️ Visual Feedback |
| :--- | :--- | :--- | :--- |
| Snap elements into perfect alignment instantly. | Create evenly spaced layouts in seconds. | Add, move, or remove lines anytime for full control. | See exactly how everything aligns with highlight lines. |

> *🚀 **Updates Incoming:** We are continuously improving the UI Furnace framework! Exciting updates, advanced workflows, and deeply expanded layout capabilities are actively planned for future releases.*

### ⚡ Quick Start & Workflow
> `Enable` ➔ `Select` ➔ `Customize` ➔ `Snap` ➔ `Refine`

1. **Set-Up the Grid Guide**: Go to `Tools → UI Furnace → Grid Manager`. Enable **Show Grid**.
2. **Configure the Grid**: Select your Grid Mode (Symmetry or Dynamic).
3. **Enable Snapping**: In the Universal Snapping section, enable snapping and set snap distance.
4. **Customize Appearance**: Adjust axis color, grid line color, line thickness, and opacity.

---

## 🎯 Dual Grid Modes

### 1. 📏 Symmetry Mode (Mathematical Generation)
- **What it does:** Instantly generates a perfectly even grid across your canvas.
- **How to use it:** Choose **Fixed Spacing** for absolute pixel distances (e.g. 50px bounds), or choose **Stretch** to divide your canvas into flexible rows/columns that auto-scale continuously.

### 2. 🎛️ Dynamic Mode (Custom Wireframing)
- **What it does:** Dynamic Grid lets you place and move grid lines freely. Determine whether custom lines are pinned precisely at exact pixels or if they act as responsive percentages.
- **How to Add & Edit:** Enable **Edit Mode** (`Alt`+`E`), right-click the Scene View, or toggle Axis Dragging to pull lines natively out of the axis center.

---

## 🛠 Core Features Highlight

| Feature | Description |
| :--- | :--- |
| 🧲 **Bi-Directional Snapping** | Guide lines dynamically snap against your UI (`Alt`+`S`), and UI elements aggressively magnetize directly to your custom grid (`Alt`+`Shift`+`S`). |
| 👁️ **Visual Feedback** | Generates satisfying visual cues (neon L-brackets and crosshairs) seamlessly over the Canvas to verify your snaps. |
| 🌊 **Fluid Conversion Engine** | Automatically recalculates exact Fixed pixel limits into fluid Stretch relative percentages—making a static UI responsive with a single click. |

---

## ⌨️ Developer Shortcuts Reference

| Action | Windows / Linux | macOS |
| :--- | :--- | :--- |
| **Toggle Grid Visibility** | `Alt` + `G` | `Option` + `G` |
| **Toggle Edit Mode** | `Alt` + `E` | `Option` + `E` |
| **Snap Guidelines to UI** | `Alt` + `S` | `Option` + `S` |
| **Snap UI to Grid (Rect)** | `Alt` + `Shift` + `S` | `Option` + `Shift` + `S` |
| **Add Horizontal Line** | `Alt` + `H` | `Option` + `H` |
| **Add Vertical Line** | `Alt` + `V` | `Option` + `V` |
| **Delete Selected Line(s)** | `Alt` + `Backspace` | `Option` + `Delete` |

> 💡 *All UI Furnace shortcuts are securely integrated into Unity's Shortcut Manager. You can easily rebind them under `Edit > Shortcuts...` -> Search "UI Furnace".*

---

## 🚧 Current Limitations & Known Behaviors

- **Resizing vs. Moving Elements**: Snap to Grid currently supports precise positioning. Advanced resizing workflows may be expanded in future updates. 
- **Screen Space Canvases**: Grid Guide currently supports Screen Space - Overlay and Screen Space - Camera canvases. This ensures the tool remains incredibly lightweight and mathematically perfect for actively building UI. Support for local 3D World Space may be added in the future.
- **High Grid Densities**: Keep your grid spacing above `10` whenever possible. Grid Guide uses high-fidelity, anti-aliased lines for a premium visual experience. Generating thousands of microscopic lines simultaneously may slow down Editor rendering.
- **Single Canvas Data**: The Lite version saves grid data for the currently active Canvas. Advanced multi-canvas saving and state management is planned for the upcoming Pro version.

---

<div align="center">
  
**❤️ Developed by AZSoftStudio**  
For support, updates, and more amazing tools, visit:  
[www.azsoftstudio.workers.dev](https://www.azsoftstudio.workers.dev/)

</div>
