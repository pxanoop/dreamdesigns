# Dream Designs — Steel Doors | Gates | Windows

A responsive website implementation based on the provided architectural mockup for **Dream Designs**.

---

## 📁 Project Directory Structure

```text
c:\DD\
├── index.html                  # Main responsive single-page experience
├── README.md                   # Documentation & child page guide
└── assets\
    ├── css\
    │   └── style.css           # Modern responsive stylesheet (CSS variables, fluid typography, animations)
    ├── js\
    │   └── main.js             # Navigation scrollspy, mobile menu, quick-view modal, form handler
    └── images\
        ├── mockup.jpg          # Original reference mockup image
        ├── logo.png            # Sliced header logo with tagline
        ├── logo-transparent.png# Header logo with alpha transparency
        ├── logo-icon.png       # Sliced monogram gable icon
        ├── hero-backdrop.jpg   # Clean hero background without baked-in text
        ├── hero-architecture.png# High-res architectural photography (villa, gates, door, window)
        ├── hero-original.png   # Full hero slice with original overlay
        ├── product-doors.png   # Sliced thumbnail for Steel Doors card
        ├── product-gates.png   # Sliced thumbnail for Gates card
        ├── product-windows.png # Sliced thumbnail for Windows card
        ├── icon-door.png       # Sliced bronze door icon
        ├── icon-gate.png       # Sliced bronze gate icon
        ├── icon-window.png     # Sliced bronze window icon
        ├── badge-security.png  # Sliced security badge
        ├── badge-precision.png # Sliced precision badge
        └── badge-designs.png   # Sliced modern design badge
```

---

## 🎨 Design & Mockup Fidelity

| Section | Implementation Details |
| :--- | :--- |
| **Header Bar** | Fixed navigation with dark navy gradient (`#122230`), brand logo on the left, centered navigation links with gold indicator on the active link, right italic tagline *"Strong. Secure. Stylish."*, and mobile drawer toggle. |
| **Hero Section** | Sliced backdrop featuring the luxury villa exterior, steel gates, entry door, and barred windows. Crisp responsive text overlay: brand title with golden underline, headline *"More than just doors, gates and windows..."*, cursive golden script *"We design your dream."*, 3 circular feature badges, and the golden CTA button *"EXPLORE OUR PRODUCTS →"*. |
| **Product Cards** | 3 interactive cards matching the mockup layout: **Steel Doors**, **Gates**, and **Windows**. Each card features the cropped photography on top, custom bronze icon, bold title, descriptive subtitle, and arrow button with hover zoom and elevation effects. |
| **Interactive Modal** | Clicking on any of the product cards opens a quick-view modal displaying high-res imagery, technical specifications, and a direct inquiry action button. |
| **Supporting Sections** | Complete with an **Engineered Excellence** craftsmanship showcase, a **Why Choose Us** metrics section, and a **Contact / Custom Quote** form with interactive toast notifications. |

---

## 📱 Responsiveness

- **Desktop (1025px+)**: 3-column product grid, horizontal navigation bar, hero layout with left-aligned copy and architectural photography backdrop on the right.
- **Tablet (601px – 1024px)**: 2-column wrapping product grid, centered hero presentation with subtle gradient overlay, and slide-in mobile navigation drawer.
- **Mobile (≤ 600px)**: Single-column product stack, full-width CTA buttons, compact header with hamburger toggle, and fluid typography.

---

## 🚀 How to Open the Website

Double-click `index.html` in Windows Explorer or open it in any web browser:

```powershell
start c:\DD\index.html
```

Or serve locally via any lightweight static server:

```powershell
npx serve .
# or
python -m http.server 8000
```

---

## 📄 Adding Child Pages Later

When you are ready to expand with individual child pages (e.g., `doors.html`, `gates.html`, `windows.html`, `about.html`, `contact.html`), follow these steps:

1. Create `doors.html` (copying the header and footer from `index.html`).
2. Update the navigation links in the header to point to the dedicated pages:
   ```html
   <ul class="nav-list">
     <li><a href="index.html" class="nav-link">Home</a></li>
     <li><a href="about.html" class="nav-link">About Us</a></li>
     <li><a href="doors.html" class="nav-link active">Doors</a></li>
     <li><a href="gates.html" class="nav-link">Gates</a></li>
     <li><a href="windows.html" class="nav-link">Windows</a></li>
     <li><a href="contact.html" class="nav-link">Contact</a></li>
   </ul>
   ```
3. Update the `href` on each product card's arrow button from opening the modal to linking to the corresponding child page (`href="doors.html"`).
