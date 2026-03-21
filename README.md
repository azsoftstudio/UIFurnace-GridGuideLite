<div align="center">
  
# 💠 UI Furnace – Grid Guide Tool

[![Unity Asset Store](https://img.shields.io/badge/Published_On-Unity_Asset_Store-000000?style=for-the-badge&logo=unity&logoColor=white)](https://u3d.as/3Cdk/)
[![Made with Vanilla HTML/CSS/JS](https://img.shields.io/badge/Documentation-Vanilla_Web-0ea5e9?style=for-the-badge)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)](#)

*A premium, grid-based layout assistant for UI design in Unity.*

</div>

<br/>

> **✨ Check Out the Interactive Docs Website:** simply open `index.html` in your favorite web browser to view the interactive, premium dark-themed documentation containing live animated backgrounds, glassmorphic layouts, and scroll-tracking highlights!

---

## 📖 What is the Grid Guide Tool?

The **UI Furnace – Grid Guide Tool** is a grid-based layout assistant for UI design in Unity. It provides visual grid overlays, bi-directional magnetic snapping functionality, and flexible grid modes to help align and organize UI elements with absolute precision—directly over your Canvas without cluttering your hierarchy.

### ⚡ Quick Start & Workflow
> `Enable` ➔ `Select` ➔ `Customize` ➔ `Snap` ➔ `Refine`

1. **Set-Up the Grid Guide**: Go to `Tools → UI Furnace → Grid Manager`. Enable **Show Grid**.
2. **Configure the Grid**: Select your Grid Mode (Symmetry or Dynamic).
3. **Enable Snapping**: In the Universal Snapping section, enable snapping and set snap distance.
4. **Customize Appearance**: Adjust axis color, grid line color, line thickness, and opacity.

---

## 🎯 Dual Grid Modes

### 1. 📏 Symmetry Mode (Mathematical Generation)
- **What it does:** Instantly generates a perfectly even, infinite grid across your canvas.
- **How to use it:** Choose **Fixed Spacing** for absolute pixel distances (e.g. 50px bounds), or choose **Stretch** to divide your canvas into flexible rows/columns that auto-scale continuously.

### 2. 🎛️ Dynamic Mode (Custom Wireframing)
- **What it does:** Unlocks your grid so you can manually place, drag, and design custom guide lines precisely where you need them.
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

## 🚧 FAQ & Limitations

- **Cannot Resize Using Grid**: Snapping only triggers across translation (moving) limits. Altering `sizeDelta` physically via Rect handles avoids snapping to protect complex UI hierarchies.
- **Screen Space Render Modes Only**: Deliberately disabled on World Space Canvases to maintain pristine GUI performance matrix calculations.
- **Screen Jittering**: If elements jump wildly on snap, your Universal Snap Distance in settings is too high. Reset it to `1`.

---

<div align="center">
  
**❤️ Developed by AZSoftStudio**  
For support, updates, and more amazing tools, visit:  
[www.azsoftstudio.workers.dev](https://www.azsoftstudio.workers.dev/)

</div>
