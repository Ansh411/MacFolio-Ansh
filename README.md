
<h2 align="center">
    <b><i>'MacFolio'</i> — macOS-Inspired Interactive Portfolio</b>
</h2>

A **fully interactive macOS-style portfolio website** that replicates the **look, feel, and behavior of a real Mac desktop**.  
MacFolio is designed to showcase **advanced frontend engineering skills**, not just static UI.

> This portfolio simulates an operating system experience directly in the browser.



## 🔗 Live & Source

- **Live Demo:** https://macfolio-ansh.vercel.app/
- **GitHub:** https://github.com/Ansh411/MacFolio-Ansh

---

## 📸 Screenshots

<div align="center">
      <img src = "./MacFolio Previews/Home.png" width ="400" /> 
      <img src = "./MacFolio Previews/Finder.png" width ="400" /> 
      <br/>
      <img src = "./MacFolio Previews/Gallery.png" width ="400" /> 
      <img src = "./MacFolio Previews/Safari.png" width ="400" /> 
      <br/> 
      <img src = "./MacFolio Previews/Multiple Screens.png" width ="400" />
      <img src = "./MacFolio Previews/Terminal.png" width ="400" /> 
      <br/> 
      <img src = "./MacFolio Previews/Resume.png" width ="400" />
      <img src = "./MacFolio Previews/Contact.png" width ="400" /> 
      <br/>
</div>
<br/>

## ✨ Key Highlights

- macOS-inspired **desktop UI**
- Interactive **Dock with magnification animation**
- App-like windows with **open / close / focus behavior**
- Smooth, high-performance **GSAP animations**
- Centralized global state using **Zustand + Immer**
- Modular, scalable architecture

---

## 🖥️ Features

### 🧭 Desktop Simulation
- Desktop layout with icons and wallpaper
- Click interactions similar to macOS
- Layered UI using z-index & focus control

### 🚢 Dock
- macOS-style hover magnification
- Smooth scale interpolation
- Active app indicators
- App launch animations

### 🪟 Window Management
- Open / close applications dynamically
- Focused window handling
- Animated mount & unmount
- Centralized app lifecycle state

### 🎥 Animations
- GSAP-powered timelines
- Smooth transitions & easing
- GPU-friendly transforms
- Performance-optimized animations

---

## 🛠️ Tech Stack

### Frontend
- **React 19 (Vite)**
- **JavaScript (ES6+)**
- **Tailwind CSS with react-icons and react-tooltip**

### State Management
- **Zustand** — lightweight global state
- **Immer** — immutable state updates

### Animations
- **GSAP (GreenSock Animation Platform)**

### Tooling
- **Vite**
- **ESLint**

---

## 🧠 Architecture

```txt

src/
├── components/ # Dock, window UI, shared components
├── apps/ # Finder, Terminal, Gallery, Trash, etc.
├── store/ # Zustand + Immer global state
├── animations/ # GSAP animation logic
├── assets/ # Icons, wallpapers, images
├── App.jsx # App shell & layout
└── main.jsx # Entry point

```
## ⚙️ State Management Flow

- Global app state managed via **Zustand**
- Immutable updates handled by **Immer**
- Tracks:
  - Open applications
  - Active window
  - Dock interactions
  - UI visibility

---

## 🧩 Why This Stack?

| Technology | Purpose |
|----------|--------|
| React | Component-driven UI |
| Zustand | Minimal & scalable global state |
| Immer | Safe immutable updates |
| GSAP | Professional-grade animations |
| Vite | Fast development & builds |

---

## 🚀 Getting Started

```bash
git clone https://github.com/Ansh411/MacFolio-Ansh.git
cd MacFolio-Ansh
npm install
npm run dev
```

## 👨‍💻 Author

**Ansh Gupta** <br/>

<i>Aspiring Full-Stack & AI Engineer</i>

⭐ If you like this project ❤️

**Give it a ⭐ on GitHub — it helps a lot!**

---