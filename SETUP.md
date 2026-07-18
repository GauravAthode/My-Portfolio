# Portfolio Setup Instructions

## Project Images
Project images are located in `client/src/assets/images/`:
- `cravings.png` - Food ordering app
- `password-manager.png` - Password manager app
- `image-editor.png` - Image editor app
- `car-rental.png` - Car rental system

## Seeding Projects to Database

To populate the projects collection with data from your resume:

```bash
# Navigate to server directory
cd server

# Run the seeder
node src/seeders/seedProjects.js
```

This will:
- Connect to MongoDB
- Clear existing projects
- Insert 4 projects with images, links, and descriptions

## Resume Data Structure

Each project includes:
- **Title**: Project name
- **Stack**: Technology stack used
- **Description**: Brief project description
- **GitHub**: GitHub repository link
- **Live**: Live demo URL (if available)
- **Image**: Path to project image
- **Tags**: Technology tags for filtering

## Links Included

All links from your resume are integrated:
- **GitHub**: https://github.com/GauravAthode
- **LinkedIn**: https://linkedin.com/in/gaurav-athode-6b435a289
- **LeetCode**: https://leetcode.com/u/GauravAthode/
- **Phone**: +91-9755784190
- **Email**: gauravathode123@gmail.com

## Live Previews

Projects with live links:
- Cravings: https://cravings-app.vercel.app
- Password Manager: https://password-manage-by.netlify.app/
- Image Editor: https://gauravimageeditor.netlify.app/

## Dark/Light Theme

Toggle theme using the sun/moon icon in the top-right navbar. Default is Light Theme.

## Responsive Design

The portfolio is fully responsive:
- **Mobile**: Single column layout, optimized tap targets
- **Tablet**: 2-column grid for projects
- **Desktop**: 4-column grid with enhanced spacing

## Animations

The portfolio includes:
- Fade in animations for content
- Smooth page transitions
- Hover effects on cards and buttons
- Scroll animations
- Gradient text animations
- Blob animations in hero section
