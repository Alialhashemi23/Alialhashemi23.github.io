# Stylish SvelteKit Portfolio Site

A modern, responsive portfolio website built with Svelte and Vite. Features a sleek design with smooth animations and interactive elements.

## Features

- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Beautiful transitions and hover effects
- **Dark Theme** - Modern dark interface with gradient accents
- **Interactive Components** - Engaging hero section, project showcase, skills display
- **Contact Form** - Fully functional contact form with validation
- **Navigation** - Smooth scrolling navigation with mobile menu

## Project Structure

```
src/
├── routes/
│   ├── +page.svelte       # Home page
│   └── +layout.svelte     # Main layout wrapper
├── lib/
│   ├── components/
│   │   ├── Navigation.svelte  # Navigation bar
│   │   ├── Hero.svelte        # Hero section
│   │   ├── Projects.svelte    # Projects showcase
│   │   ├── Skills.svelte      # Skills & experience
│   │   └── Contact.svelte     # Contact section
│   └── assets/            # Images and media
├── app.html               # HTML template
└── app.css                # Global styles
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Customization

- **Update Personal Info**: Edit the contact details in `src/lib/components/Contact.svelte`
- **Add Projects**: Modify the `projects` array in `src/lib/components/Projects.svelte`
- **Update Skills**: Edit the `skills` array in `src/lib/components/Skills.svelte`
- **Change Colors**: Update CSS variables in `src/app.css` (primary, secondary, dark, etc.)
- **Add Images**: Replace placeholder image URLs with your own in project cards

## Technologies Used

- **Svelte 4** - Reactive component framework
- **Vite** - Next-generation build tool
- **CSS3** - Modern styling with animations and gradients

## License

This project is open source and available under the MIT License.

## Author

Your Name - [Your Portfolio](your-url.com)

---

**Note:** Replace dummy content (name, email, projects, links) with your actual information to customize this portfolio for your needs.
