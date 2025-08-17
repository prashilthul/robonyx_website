# Robonyx Website

![Static Badge](https://img.shields.io/badge/status-build_not_complete-orange)

A modern web landing experience for the Robonyx (comET) club featuring smooth motion, interactive 3D, and modular sections.

## Tech Stack

- Custom cursor + section reveal logic
- Spline 3D scene (embedded via `<spline-viewer>`)
- AOS (progressive scroll fade/zoom on static HTML variant)
- Plain old HTML and CSS

## 3D & Animation

- Hero 3D model loaded from Spline CDN (lightweight runtime viewer).
- Additional scroll polish from AOS in the static HTML prototype (`index.html`).

## Structure (key)

- /index.html + style.css: Original static prototype.
- /public/icons, assets, and Spline runtime (loaded via external script).

## Getting Started
To get started:

1. **Clone the repository**  
    ```bash
    git clone https://github.com/your-username/robonyx_website.git
    cd robonyx_website
    ```

    *or*

    **Fork the repository**  
    - Click "Fork" on GitHub.
    - Clone your fork:
      ```bash
      git clone https://github.com/your-username/robonyx_website.git
      cd robonyx_website
      ```

2. **Make changes**  
    - Edit files as needed.
    - Commit and push your changes:
      ```bash
      git add .
      git commit -m "Describe your changes"
      git push
      ```

## Customization
- Replace Spline scene: update url prop on <spline-viewer>.
- Adjust animation timing: edit GSAP timelines in components using refs.
- Tailwind design tokens: configure in tailwind.config.js (not shown here).

## License

This project is licensed for distribution and use **only** by members of the IIIT NR Student Activity Club (SAC). Usage is restricted to clubs under the **Science and Tech** category and the **Web Dev** club under **Media and IT**. Redistribution or use outside these groups is not permitted.