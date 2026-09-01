# Grace Baptist Church Irisan Mission – Design System & UI Specification

## 1. Design Philosophy & Aesthetic Rules

### Layout Principles
- **Grid System**: Full-width responsive sections (100vw) with fluid horizontal padding
- **Section Spacing**: 30px top margin between sections, generous vertical padding (40px–68px)
- **Max Content Width**: Adaptive padding using `clamp()` for responsive scaling
- **Visual Hierarchy**: Subtle shadows (0 4px 20px rgba) and background shifts separate content blocks
- **Border Treatment**: Minimal 1px borders with low-opacity strokes; reliance on shadows for elevation

### Color Palette

#### Primary Colors
| Token | Value | Usage |
|-------|-------|-------|
| **Deep Navy** | `#12273d` / `#11233d` | Primary text, headers, dark backgrounds |
| **Gold Accent** | `#d4af37` | Primary buttons, interactive elements, highlights |
| **Warm Burgundy** | `#8b263e` | Secondary accent, gradient overlays, hero CTA |
| **Light Tan** | `#f8f5ef` / `#f5f4ef` | Light text on dark, hero banner text |

#### Background Colors
| Token | Value | Usage |
|-------|-------|-------|
| **Pure White** | `#ffffff` | Card backgrounds, light sections |
| **Off-White** | `#f7f2ec` | Section backgrounds, subtle contrast |
| **Muted Light** | `#edf3f7` | Map/media container backgrounds |
| **Light Gray** | `#faf8f6` | Alternative light section background |

#### Border & Text Colors
| Token | Value | Usage |
|-------|-------|-------|
| **Border Stroke** | `rgba(17, 33, 51, 0.06)` | Card borders, subtle dividers |
| **Secondary Text** | `#64748b` / `#4e5d6c` | Body copy, meta information |
| **Muted Text** | `rgba(246, 240, 232, 0.82)` | Footer text, light mode secondary |
| **Light Overlay** | `rgba(255, 255, 255, 0.12)` | Frosted glass effects, light overlays |

### Typography System

#### Font Families
| Usage | Font | Weight | Line-Height |
|-------|------|--------|-------------|
| **Headers / Display** | Serif (browser default) | 600–700 | 1.2–1.4 |
| **Body / UI Text** | Sans-Serif (system default) | 400–600 | 1.6–1.8 |
| **Navigation / Labels** | Sans-Serif | 600–700 | 1.4 |

#### Type Scale
| Element | Size | Weight | Letter-Spacing | Color |
|---------|------|--------|-----------------|-------|
| **H1 (Hero)** | `clamp(2.4rem, 6vw, 4rem)` | 600 | 0.02em | `#f8f5ef` |
| **H2 (Section)** | `clamp(1.8rem, 4vw, 2.8rem)` | 600 | 0.01em | `#12273d` |
| **H3 (Card)** | `1.1rem` | 600 | 0.01em | `#13273e` |
| **Body Lead** | `1.08rem` | 400 | 0.01em | `#425465` |
| **Body Text** | `1rem` | 400 | normal | `#4e5d6c` |
| **Label / Eyebrow** | `0.72rem` | 700 | 0.12em–0.18em | `#8b263e` or `rgba(245, 229, 200, 0.9)` |
| **Caption** | `0.7rem` | 600 | 0.1em | `#7b5d38` |

### Border Radius & Spacing

| Property | Value | Usage |
|----------|-------|-------|
| **Button Border Radius** | `999px` | All button elements (pill-shaped) |
| **Card Border Radius** | `16px–24px` | Card containers, media frames |
| **Input Border Radius** | `12px` | Form inputs |
| **Small Elements** | `8px–14px` | Icon backgrounds, small badges |

### Shadow System

| Level | CSS | Usage |
|-------|-----|-------|
| **Subtle** | `0 4px 20px rgba(0, 0, 0, 0.04)` | Card hover, light elevation |
| **Standard** | `0 20px 44px rgba(16, 27, 39, 0.04)` | Content sections |
| **Elevated** | `0 18px 40px rgba(12, 20, 31, 0.14)` | Header, hero banner |
| **Strong** | `0 26px 52px rgba(15, 29, 42, 0.12)` | Major sections, banners |

---

## 2. Component Specifications

### A. Navigation Header

**Structure**:
- **Container**: Sticky, full-width, frosted glass background with blur
- **Left**: Brand logo (52x52px) + brand name with tag
- **Center**: Horizontal navigation links with underline hover state
- **Right**: Header actions (toggle, CTA button)

**CSS Properties**:
```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(17, 30, 44, 0.82);
  backdrop-filter: blur(16px);
  padding: 18px clamp(20px, 4vw, 48px);
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: 0 18px 40px rgba(12, 20, 31, 0.14);
}

.nav-link {
  color: rgba(248, 245, 240, 0.8);
  padding: 10px 12px;
  border-radius: 999px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
```

**Responsive**:
- **Desktop**: Full horizontal layout
- **Tablet (1024px)**: Navigation wraps, brand centered, flex layout
- **Mobile (640px)**: Collapses to top sticky logo + hamburger drawer

---

### B. Hero Banner Block

**Structure**:
- Full-width cover image with dark overlay gradient
- Centered content area with headline, subheading, and CTA
- Info cards row (service times) overlaid at bottom-right
- Carousel dot controls at bottom-right corner

**CSS Properties**:
```css
.hero-banner {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  min-height: 700px;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(110deg, rgba(10, 20, 32, 0.8), rgba(14, 31, 47, 0.45)), url(...);
  padding: 62px clamp(20px, 5vw, 68px) 34px;
  box-shadow: 0 28px 60px rgba(15, 29, 42, 0.18);
}

.hero-banner__content {
  max-width: 680px;
  z-index: 1;
  position: relative;
}

.hero-banner h1 {
  color: #f8f5ef;
  line-height: 1.2;
  max-width: 620px;
}

.hero-banner__info {
  display: grid;
  gap: 14px;
  width: min(100%, 300px);
}

.hero-banner__card {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(8px);
  border-radius: 18px;
  padding: 18px;
}
```

**Carousel Controls**:
- Dot indicators positioned at bottom-right
- Active state: wider pill shape, white fill
- Inactive: small circular, semi-transparent white

**Responsive**:
- **Tablet**: Hero cards stack to 1 column
- **Mobile**: Min-height 500px, padding reduced, cards stack vertically

---

### C. Content Section (Full-Width Blocks)

**Structure**:
- Full-width container (100vw) with symmetric horizontal padding
- Section header with eyebrow label, heading, optional action link
- Content grid (varies: 2-col, 3-col, 4-col depending on block type)

**CSS Properties**:
```css
.content-section {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 40px clamp(20px, 5vw, 68px);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(17, 33, 51, 0.05);
  border-left: none;
  border-right: none;
  box-shadow: 0 20px 44px rgba(16, 27, 39, 0.04);
}

.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 26px;
  gap: 18px;
}

.eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #8b263e;
}
```

**Responsive**:
- **Tablet (1024px)**: Grid changes to 1-col
- **Mobile**: Section padding reduced to 18px

---

### D. Card Components

#### Sermon / Media Card
**Grid**: 3-column on desktop, 1-col mobile

```css
.sermon-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(247, 242, 236, 0.92));
  border: 1px solid rgba(17, 33, 51, 0.06);
  border-radius: 22px;
  padding: 18px;
  box-shadow: 0 20px 30px rgba(18, 30, 44, 0.04);
}

.sermon-thumb {
  height: 180px;
  border-radius: 18px;
  margin-bottom: 18px;
  background: linear-gradient(135deg, rgba(18, 35, 52, 0.38), rgba(180, 142, 82, 0.24));
}

.sermon-tag {
  display: inline-block;
  color: #7f5d39;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 10px;
}
```

#### Community / Ministry Card
**Grid**: 4-column on desktop, 1-col mobile

```css
.community-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(247, 242, 236, 0.92));
  border: 1px solid rgba(17, 33, 51, 0.06);
  border-radius: 22px;
  padding: 18px;
}

.community-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(17, 39, 62, 0.12), rgba(212, 176, 122, 0.2));
  color: #16324f;
  font-size: 1.3rem;
  margin-bottom: 16px;
}
```

---

### E. Button Styles

#### Primary Button
```css
.primary-btn {
  background: linear-gradient(135deg, #d4af37, #c9954b);
  color: #12253d;
  padding: 0.9rem 1.35rem;
  border-radius: 999px;
  font-weight: 700;
  box-shadow: 0 18px 35px rgba(180, 132, 78, 0.22);
  transition: transform 0.2s ease;
}

.primary-btn:hover {
  transform: translateY(-1px);
}
```

#### Secondary Button
```css
.secondary-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #f8f5ef;
  padding: 0.9rem 1.35rem;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.2s ease;
}

.secondary-btn:hover {
  transform: translateY(-1px);
}
```

#### Hero CTA Button
```css
.hero-primary-btn {
  background: linear-gradient(135deg, #d4af37, #8b263e);
  color: #fffdf9;
  box-shadow: 0 18px 35px rgba(139, 38, 62, 0.25);
}
```

#### Text Link
```css
.text-link {
  background: transparent;
  color: #18314b;
  padding: 0.7rem 0.9rem;
  font-size: 0.9rem;
  text-decoration: none;
}
```

---

### F. Service Grid / Info Block

**Structure**: 2-column asymmetrical grid (1fr 1.4fr)
- Left: Service info rows stacked vertically
- Right: Embedded map container with iframe

```css
.service-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.4fr;
  gap: 26px;
}

.service-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  border-radius: 16px;
  background: rgba(247, 242, 236, 0.88);
  border: 1px solid rgba(17, 33, 51, 0.06);
}

.map-frame {
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(17, 33, 51, 0.06);
  min-height: 338px;
}

.map-frame iframe {
  width: 100%;
  height: 100%;
  min-height: 338px;
  border: 0;
}
```

**Responsive**:
- **Tablet (1024px)**: Stacks to 1-col
- **Mobile**: Service rows stack, map becomes full-width

---

### G. Event List Block

**Structure**: Vertical list with left date badge, center content, right actions

```css
.event-item {
  display: grid;
  grid-template-columns: 120px minmax(0, 1.5fr) auto;
  align-items: center;
  gap: 18px;
  padding: 18px;
  border-radius: 20px;
  background: rgba(248, 244, 240, 0.9);
  border: 1px solid rgba(17, 33, 51, 0.06);
}

.event-date {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 88px;
  border-radius: 18px;
  background: linear-gradient(135deg, #1c2f4a, #6b3a48);
  color: #f8f5ef;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.event-body h3 {
  margin: 0 0 8px;
  color: #13273e;
}

.event-body p {
  color: #4e5d6c;
  line-height: 1.7;
}

.event-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
```

**Responsive**:
- **Tablet**: All columns stack to 1fr
- **Mobile**: Date badge becomes full-width, actions flex vertically

---

### H. Welcome / About Section

**Structure**: 2-column asymmetrical (0.95fr 1.4fr)
- Left: Pastor photo placeholder
- Right: Welcome copy with value list

```css
.welcome-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.4fr;
  gap: 26px;
}

.pastor-card {
  min-height: 360px;
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(19, 46, 69, 0.16), rgba(19, 46, 69, 0.12));
  border: 1px solid rgba(17, 33, 51, 0.06);
}

.value-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.value-list li {
  position: relative;
  padding: 18px 18px 18px 42px;
  border-radius: 16px;
  background: rgba(247, 242, 236, 0.88);
  border: 1px solid rgba(17, 33, 51, 0.06);
  color: #2f4255;
}

.value-list li::before {
  content: '✦';
  position: absolute;
  left: 17px;
  top: 18px;
  color: #b78a45;
}
```

---

### I. Footer Block

**Structure**: 4-column equal-width layout with brand, navigation, links, newsletter
- Divider line at top
- 4 column grid: Brand | Service Times | Quick Links | Newsletter
- Copyright bar at bottom

```css
.site-footer {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 36px clamp(20px, 5vw, 68px) 18px;
  background: linear-gradient(180deg, #12273d 0%, #0b1d2f 100%);
  color: rgba(246, 240, 232, 0.9);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
  gap: 26px;
  padding-bottom: 26px;
}

.footer-brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: linear-gradient(135deg, #d4af37, #8b263e);
  color: #fff;
}

.footer-block h4 {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(233, 212, 173, 0.86);
  margin: 0 0 14px;
}

.map-card {
  margin: 10px 0 18px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.12);
}

.map-card iframe {
  width: 100%;
  height: 220px;
  border: 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 18px;
  border-top: 1px solid rgba(255,255,255,0.12);
  font-size: 0.85rem;
}
```

**Responsive**:
- **Tablet**: Footer grid stacks to 1-col
- **Mobile**: Single column, footer padding reduced

---

## 3. Layout Grid & Spacing System

### Section Margins & Padding
| Property | Value | Context |
|----------|-------|---------|
| **Section Top Margin** | `30px` | Between full-width sections |
| **Horizontal Padding** | `clamp(20px, 5vw, 68px)` | Responsive padding scaling |
| **Section Padding Y** | `40px` (default) / `62px` (hero) | Vertical internal padding |
| **Grid Gap** | `16px–26px` | Card/item spacing |
| **Margin Bottom** | `14px–26px` | Component-level spacing |

### Responsive Breakpoints
| Breakpoint | Width | Changes |
|------------|-------|---------|
| **Desktop** | `1280px+` | Full multi-column layouts, hero 700px min-height |
| **Tablet** | `768px–1024px` | Grid columns → 1-col, header wraps, hero 580px |
| **Mobile** | `< 768px` | Single column stacks, header sticky collapse, hero 500px |

---

## 4. Accessibility & Interaction

### Focus States
- All interactive elements have visible focus rings
- Focus outline: 2px solid with sufficient color contrast
- Button states: `:hover`, `:focus-visible`, `:active` with visual feedback

### Motion
- Transitions: `0.2s ease` for smooth interactions
- Hover Effects: `transform: translateY(-1px)` for subtle lift
- Reduced Motion: Respect `prefers-reduced-motion: reduce` media query

### Color Contrast
- Minimum WCAG AA (4.5:1) for all text
- Primary text (#12273d) on white: 14.5:1
- Secondary text (#64748b) on white: 9.2:1
- Light text on dark backgrounds: 9+:1

---

## 5. Component Usage Examples

### Welcome Section
```jsx
<section className="content-section welcome-section">
  <div className="section-header">
    <div className="section-heading-block">
      <p className="eyebrow">Welcome</p>
      <h2>Welcome home to a church shaped by grace and community.</h2>
    </div>
    <a href="/about" className="text-link">Meet our leadership</a>
  </div>
  <div className="welcome-grid">
    <div className="pastor-card">
      <div className="pastor-photo" />
    </div>
    <div className="welcome-copy">
      <p className="lead-copy">We believe every person is welcome here...</p>
      <ul className="value-list">
        <li>Christ-centered worship and biblical teaching</li>
      </ul>
    </div>
  </div>
</section>
```

### Service Times Section
```jsx
<section className="content-section">
  <div className="section-header">
    <div className="section-heading-block">
      <p className="eyebrow">Gathering Times</p>
      <h2>Worship with us this Sunday.</h2>
    </div>
  </div>
  <div className="service-grid">
    <div className="service-info">
      <div className="service-row">
        <span className="service-label">Sunday Worship</span>
        <strong>9:30 AM - 12:00 PM</strong>
      </div>
    </div>
    <div className="map-frame">
      <iframe title="map" src="..." />
    </div>
  </div>
</section>
```

---

## 6. Design Tokens Summary

### Color Variables
```
Primary Navy:     #12273d
Gold Accent:      #d4af37
Burgundy:         #8b263e
Light Text:       #f8f5ef
Dark Text:        #13273e
Secondary Text:   #64748b
Border Light:     rgba(17, 33, 51, 0.06)
```

### Spacing Variables
```
XS:  8px
SM:  14px
MD:  18px
LG:  26px
XL:  30px
XXL: 40px–68px
```

### Border Radius
```
Button:    999px (pill)
Card:      16px–24px
Input:     12px
Badge:     8px–14px
```

### Typography Scale
```
Display:   clamp(2.4rem, 6vw, 4rem)
H1:        clamp(1.8rem, 4vw, 2.8rem)
H2:        1.1rem
Body:      1rem
Label:     0.72rem–0.78rem
```

---

## 7. Maintenance & Future Updates

- **CSS Variables**: Consider implementing CSS custom properties for easier theme adjustments
- **Dark Mode**: Design system supports light theme; dark mode variant available via `.large-text` modifier
- **Breakpoint Library**: Use mobile-first approach; expand breakpoints as needed
- **Component Library**: Document reusable patterns and create component composition guidelines

---

**Version**: 1.0 | **Last Updated**: September 2026 | **Maintained By**: Grace Baptist Church Irisan Mission Web Team
