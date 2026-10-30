# Dream Designs — Steel Doors | Gates | Windows | Laser Cutting

A high-fidelity responsive architectural website implementation based on the updated design mockup for **Dream Designs**.

---

## 📁 Project Directory Structure

```text
c:\DD\
├── index.html                  # Main responsive landing experience
├── doors.html                  # Dedicated page: Steel Doors specifications & consultation
├── gates.html                  # Dedicated page: Architectural Gates specifications
├── windows.html                # Dedicated page: Security Steel Windows specifications
├── laser-cutting.html          # Dedicated page: Metal Laser Cutting & Ornamental Screens
├── README.md                   # Documentation & guide
└── assets\
    ├── css\
    │   └── style.css           # Modern responsive stylesheet (CSS variables, fluid typography, animations)
    │
    ├── js\
    │   └── main.js             # Navigation scrollspy, mobile menu, quick-view modal, form handler
    │
    └── images\
        ├── mockup.jpg          # Updated reference mockup image with Laser Cutting
        ├── logo.png            # Sliced header logo with 4-product tagline
        ├── logo-transparent.png# Header logo with alpha transparency
        ├── logo-icon.png       # Sliced monogram gable icon
        ├── hero-backdrop.jpg   # Clean hero background without baked-in text
        ├── hero-architecture.png# High-res architectural photography
        ├── product-doors.png   # Sliced thumbnail for Steel Doors card
        ├── product-gates.png   # Sliced thumbnail for Gates card
        ├── product-windows.png # Sliced thumbnail for Windows card
        ├── product-laser.png   # Sliced thumbnail for Metal Laser Cutting card
        ├── card-laser-full.png # Full Metal Laser Cutting card slice
        ├── icon-door.png       # Door architectural icon
        ├── icon-gate.png       # Gate architectural icon
        ├── icon-window.png     # Window architectural icon
        ├── icon-laser.png      # Laser cutting torch icon
        ├── badge-security.png  # Hero security badge
        ├── badge-precision.png # Hero precision badge
        ├── badge-designs.png   # Hero modern design badge
        └── badge-laser.png     # Hero laser cutting expert badge
```

---

## 🎨 Design & Mockup Fidelity

| Section | Implementation Details |
| :--- | :--- |
| **Header Bar** | Fixed navigation with dark navy gradient (`#122230`), brand logo with tagline *"STEEL DOORS \| GATES \| WINDOWS \| LASER CUTTING"*, centered navigation links with gold indicator on the active link, right italic tagline *"Strong. Secure. Stylish."*, and mobile drawer toggle. |
| **Hero Section** | Sliced backdrop featuring the luxury villa exterior, steel gates, entry door, and barred windows. Crisp responsive text overlay: eyebrow *"PREMIUM STEEL SOLUTIONS"*, brand title *"Dream Designs"*, cursive golden script *"We design your dream."*, pitch subtitle *"Stylish steel doors, elegant gates, modern windows and precision laser cutting — all under one roof."*, 4 circular feature badges (including *"EXPERTS IN METAL LASER CUTTING"*), and the golden CTA button *"EXPLORE OUR PRODUCTS →"*. |
| **Feature Ribbon** | Horizontal value banner strip with 4 key guarantees: **Superior Strength** *(Built to last, in all conditions)*, **Enhanced Security** *(Peace of mind for your family)*, **Custom Designs** *(Tailored to your style & space)*, and **Premium Quality** *(Only the best materials & finish)*. |
| **Products & Services** | 4-column interactive cards matching the mockup: **Steel Doors**, **Gates**, **Windows**, and **Metal Laser Cutting**. Each card features the cropped photography on top, custom icon, bold title, descriptive subtitle, and arrow button with hover zoom and elevation effects. |
| **Interactive Modal** | Clicking on any of the product cards opens a quick-view modal displaying high-res imagery, technical specifications, and a direct inquiry action button. |
| **Dedicated Pages** | 4 dedicated specification pages (`doors.html`, `gates.html`, `windows.html`, and `laser-cutting.html`) with deep technical engineering specs, anti-corrosion features, and custom consultation request triggers. |
| **Supporting Sections** | Complete with an **Engineered Excellence** craftsmanship showcase, a **Why Choose Us** metrics section, and a **Contact / Custom Quote** form with interactive toast notifications. |

---

## 📍 Contact & Studio Locations

| Channel | Details |
| :--- | :--- |
| **Phone & WhatsApp** | `+91 7306181269` (Direct call & [Instant WhatsApp Chat](https://wa.me/917306181269)) |
| **Email** | `info@dreamdesignsindustries.com` |
| **Design Studio** | Near Kodanad Police Station, Kurichilakkod |
| **Head Office / Factory Unit** | Near St. Antony's Church, Kodanad |
| **GPS Coordinates** | `10°10'25.3"N 76°30'16.9"E` ([View on Google Maps](https://www.google.com/maps/search/?api=1&query=10%C2%B010'25.3%22N+76%C2%B030'16.9%22E)) |

---

## 📱 Responsiveness

- **Desktop (1025px+)**: 4-column product grid, 4-column feature ribbon, horizontal navigation bar, hero layout with left-aligned copy and architectural photography backdrop on the right.
- **Tablet (601px – 1024px)**: 2x2 wrapping product grid, 2x2 feature ribbon, centered hero presentation with subtle gradient overlay, and slide-in mobile navigation drawer.
- **Mobile (≤ 600px)**: Single-column product stack, single-column feature ribbon, 2x2 hero badge grid, full-width CTA buttons, compact header with hamburger toggle, and fluid typography.

---

## 🚀 How to Open the Website

Double-click `index.html` in Windows Explorer or open it in any web browser:

```powershell
start c:\DD\index.html
```

Or serve locally via any lightweight static server:

```powershell
python -m http.server 8000
```

---

## 📄 Dedicated Product Pages

All four dedicated child product pages are fully implemented and connected:
- `doors.html` — Precision Architectural Steel Doors
- `gates.html` — Motorized & Security Steel Gates
- `windows.html` — Integrated Burglar-Resistant Picture & Casement Windows
- `laser-cutting.html` — High-Power CNC Fiber Laser Cutting & Architectural Screens

Each card's arrow button (`→`) links directly to its dedicated page, while clicking on the card itself triggers the interactive modal for quick-view specifications.
