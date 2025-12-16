# Systems & Networks Design System

## 1. Color Palette

### Primary Colors
- **Primary Blue**: #0066CC (Main brand color for CTAs, navigation, highlights)
- **Secondary Dark Blue**: #004080 (Darker shade for hover states, headings)
- **Accent Cyan**: #00AAFF (Highlights, secondary actions)

### Neutral Colors
- **Dark Text**: #333333 (Primary text)
- **Light Text**: #666666 (Secondary text, descriptions)
- **Light Background**: #F5F5F5 (Section backgrounds, cards)
- **White**: #FFFFFF (Card backgrounds, body background)
- **Border**: #E0E0E0 (Dividers, subtle borders)

### Semantic Colors
- **Success**: #28A745 (Positive actions, confirmations)
- **Warning**: #FFC107 (Caution, alerts)
- **Error**: #DC3545 (Errors, destructive actions)
- **Info**: #17A2B8 (Information messages)

## 2. Typography

### Font Family
- **Primary Font**: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif (System fonts)
- **Google Font Option**: Inter (Modern, professional for headings)
- **Fallback**: System fonts (no external dependency required)

### Font Sizes
- **H1 (Hero Title)**: 3.5rem (56px) - Desktop, 2rem (32px) - Mobile
- **H2 (Section Title)**: 2.5rem (40px) - Desktop, 1.75rem (28px) - Mobile
- **H3 (Subsection)**: 1.75rem (28px) - Desktop, 1.5rem (24px) - Mobile
- **H4**: 1.5rem (24px)
- **Body Text**: 1rem (16px)
- **Small Text**: 0.875rem (14px)
- **Micro Text**: 0.75rem (12px)

### Font Weights
- **Light**: 300 (Not commonly used)
- **Regular**: 400 (Body text)
- **Medium**: 500 (Buttons, navigation)
- **Semibold**: 600 (Subheadings)
- **Bold**: 700 (Main headings, emphasis)

### Line Heights
- **Headings**: 1.2 (Tight line height for titles)
- **Body**: 1.6 (Readable line height)
- **Large Text**: 1.8 (For better readability)

## 3. Layout & Spacing

### Container Width
- **Max Container**: 1200px
- **Desktop**: 1140px (with gutters)
- **Tablet**: 720px
- **Mobile**: 100% (with side padding)
- **Gutter**: 1.5rem (24px) on desktop, 1rem (16px) on mobile

### Spacing Scale
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)

### Section Padding
- **Desktop**: 4rem (64px) top and bottom
- **Tablet**: 3rem (48px) top and bottom
- **Mobile**: 2rem (32px) top and bottom

## 4. Button Styles

### Primary Button
- **Background**: Primary Blue (#0066CC)
- **Text Color**: White
- **Padding**: 0.75rem 1.5rem (12px 24px)
- **Border Radius**: 4px
- **Font Weight**: 500
- **Hover**: Secondary Dark Blue (#004080), slight shadow
- **Active**: Darker shade with transform down 2px

### Secondary Button
- **Background**: Transparent
- **Border**: 2px solid Primary Blue (#0066CC)
- **Text Color**: Primary Blue
- **Padding**: 0.75rem 1.5rem
- **Border Radius**: 4px
- **Hover**: Background Primary Blue, text white
- **Active**: Darker shade

### Large Button (CTA)
- **Padding**: 1rem 2rem (16px 32px)
- **Font Size**: 1.125rem (18px)
- **Same color scheme as above**

### Button States
- **Normal**: Full opacity
- **Hover**: Slight shadow (0 4px 12px rgba(0, 0, 0, 0.15))
- **Active**: Transform translateY(-2px)
- **Disabled**: Opacity 0.5, cursor not-allowed

## 5. Header Design Rules

### Header Structure
- **Height**: 64px (fixed/sticky)
- **Background**: White with 1px bottom border
- **Position**: Sticky on scroll
- **Z-index**: 1000
- **Shadow**: Subtle shadow on scroll

### Navigation
- **Text Color**: Dark (#333333)
- **Active Link**: Primary Blue with underline
- **Hover**: Primary Blue color
- **Font Weight**: 500
- **Spacing**: 1.5rem between items

### Logo
- **Max Height**: 40px
- **Aspect Ratio**: 3:1 (approximately)
- **Left Margin**: Auto maintain structure
- **Right Margin**: Auto (flex space)

### Mobile Navigation
- **Hamburger Menu**: 24px icon
- **Toggle**: Smooth open/close animation
- **Dropdown**: Full width, below header
- **Background**: White with shadow

## 6. Footer Design Rules

### Footer Structure
- **Background**: Secondary Dark Blue (#004080)
- **Text Color**: White
- **Padding**: 3rem 0
- **Margin Top**: 4rem

### Footer Content
- **Grid Layout**: 3-4 columns on desktop, stacked on mobile
- **Column Gap**: 2rem
- **Row Gap**: 1.5rem
- **Max Width**: Same as body (1200px)

### Footer Links
- **Color**: White with 0.8 opacity
- **Hover**: Full white, underline
- **Font Size**: 0.95rem

### Copyright Section
- **Border Top**: 1px solid rgba(255, 255, 255, 0.2)
- **Padding Top**: 1.5rem
- **Text Align**: Center
- **Font Size**: 0.85rem
- **Opacity**: 0.8

## 7. Other Components

### Cards
- **Background**: White
- **Border**: None (shadow instead)
- **Shadow**: 0 2px 10px rgba(0, 0, 0, 0.1)
- **Padding**: 2rem
- **Border Radius**: 8px
- **Hover**: Transform up 5px, shadow increase

### Divider/Separator
- **Height**: 1px
- **Color**: Border color (#E0E0E0)
- **Margin**: 2rem 0

### Input Fields
- **Border**: 1px solid #E0E0E0
- **Padding**: 0.75rem 1rem
- **Border Radius**: 4px
- **Font Size**: 1rem
- **Focus**: Border primary blue, outline none

### Focus States
- **All interactive elements**: Blue outline (2px solid #0066CC)
- **Offset**: 2px

## 8. Responsive Design Breakpoints

- **Mobile**: < 576px
- **Small Mobile**: 576px - 767px
- **Tablet**: 768px - 991px
- **Desktop**: 992px - 1199px
- **Large Desktop**: >= 1200px

## 9. Animations & Transitions

- **Default Transition**: all 0.3s ease
- **Quick Transition**: 0.15s ease (hover states)
- **Slow Transition**: 0.6s ease (scroll animations)

### Animation Classes
- `.fade-in`: Fade from 0 to 1 opacity
- `.slide-up`: Slide from bottom with fade
- `.slide-left`: Slide from right with fade
- `.slide-right`: Slide from left with fade
- `.zoom-in`: Scale from 0.8 to 1 with fade

## 10. Z-Index Scale

- Header: 1000
- Mobile Menu: 999
- Modals: 2000
- Tooltips: 1500
- Default: 1
