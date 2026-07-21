---
name: Liquid Glass
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#c5c6d2'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#8e909c'
  outline-variant: '#444650'
  surface-tint: '#b3c5ff'
  primary: '#b3c5ff'
  on-primary: '#0d2c6e'
  primary-container: '#002366'
  on-primary-container: '#758dd5'
  inverse-primary: '#435b9f'
  secondary: '#89d0ed'
  on-secondary: '#003544'
  secondary-container: '#00627b'
  on-secondary-container: '#94dbf8'
  tertiary: '#fbbc00'
  on-tertiary: '#402d00'
  tertiary-container: '#362600'
  on-tertiary-container: '#b78800'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00174a'
  on-primary-fixed-variant: '#2a4386'
  secondary-fixed: '#baeaff'
  secondary-fixed-dim: '#89d0ed'
  on-secondary-fixed: '#001f29'
  on-secondary-fixed-variant: '#004d62'
  tertiary-fixed: '#ffdfa0'
  tertiary-fixed-dim: '#fbbc00'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system is centered on a "Liquid Glass" aesthetic, engineered to feel like a high-end digital cockpit for the future of travel. It targets a sophisticated audience that values both efficiency and a premium sensory experience. 

The style merges **Glassmorphism** with **Fluid Dynamics**. UI elements manifest as translucent, frosted panels suspended over a deep, shifting atmosphere of ethereal gradients. This creates a sense of depth and intelligence, where the interface feels less like a flat surface and more like a high-performance instrument. The emotional response should be one of "effortless command"—calm, clear, and technologically advanced.

## Colors
The palette is dominated by **Royal Blue**, serving as the deep, vast canvas of the sky. **Sky Blue** acts as a luminous accent, used for active states and data visualization. **Amber** is the high-visibility highlight color, reserved for primary Calls to Action (CTAs), urgent alerts, and meaningful contrast.

The default mode is **Dark**. Surfaces are not solid colors but translucent "Glass" layers. Backgrounds must feature fluid, animated gradients blending the blues with occasional amber wisps to simulate an organic, atmospheric environment. Text is primarily white or very light gray to maintain high legibility against the complex backgrounds.

## Typography
This design system utilizes **Outfit** for headlines to provide a modern, geometric, and premium feel. **Inter** is used for body text and labels to ensure maximum utility and readability at smaller sizes.

A "glowing" effect is applied to primary display headings: use a subtle `drop-shadow` or `text-shadow` in Sky Blue with a 10-15px blur and low opacity (20-30%) to simulate a backlit digital display. All labels and overlines should be set in uppercase with increased letter spacing to enhance the technical, aeronautical aesthetic.

## Layout & Spacing
The layout follows a **fluid grid** model with generous internal padding to maintain the "airy" feel of flight. 

- **Desktop:** 12-column grid, 24px gutters, and 64px side margins.
- **Tablet:** 8-column grid, 16px gutters, and 32px side margins.
- **Mobile:** 4-column grid, 16px gutters, and 16px side margins.

Spacing is based on an 8px rhythm. For glass panels, use `padding: 24px (md)` or `32px` to ensure content does not feel cramped against the translucent borders. Floating layouts are preferred over full-width bars to emphasize the "object in space" feel.

## Elevation & Depth
Elevation is achieved through a combination of **Backdrop Blur** and **Ambient Shadows**.

1.  **Surface Level:** The base background is the fluid gradient.
2.  **Panel Level:** Use `backdrop-filter: blur(20px)` and a background of `rgba(255, 255, 255, 0.08)`. 
3.  **Border:** Every glass panel must have a 1px solid border at `rgba(255, 255, 255, 0.2)`.
4.  **Shadows:** Use large, highly diffused shadows. Example: `0px 20px 40px rgba(0, 0, 0, 0.3)`. Shadows should have a slight tint of the Primary Royal Blue to integrate with the environment.
5.  **Gloss:** Apply a subtle linear gradient overlay (top-left to bottom-right) from `white (5% opacity)` to `transparent` to simulate light hitting a glass surface.

## Shapes
The shape language is smooth and organic. Use **Rounded (0.5rem / 8px)** for small utility elements like input fields and tags. Larger glass containers and cards must use **rounded-xl (1.5rem / 24px)** to reinforce the premium, "liquid" aesthetic. Buttons should favor the pill-shaped approach for a friendly yet futuristic touch.

## Components

### Buttons
- **Primary:** Amber background, black or deep navy text. High gloss overlay. On hover, increase the "glow" shadow.
- **Secondary (Glass):** Frosted white background (15% opacity), 1px white border. Subtle Sky Blue glow on hover.
- **Tertiary:** Ghost style with Sky Blue text and uppercase labels.

### Input Fields
Transparent backgrounds with a 1px `glass_border`. On focus, the border transitions to Sky Blue and the `backdrop-filter` blur increases.

### Cards & Lists
Glass panels with 24px rounded corners. List items should be separated by 1px translucent lines. Hovering over a list item should trigger a "liquid" light sweep effect—a subtle white gradient moving across the surface.

### AI Suggestions (Chips)
Small, pill-shaped glass elements with a pulsing Sky Blue border. They should feel like "living" elements within the UI.

### Flight Status & Progress
Use Sky Blue for the progress path and Amber for the current position indicator. The indicator should have a subtle outer glow to signify it as the active focal point.