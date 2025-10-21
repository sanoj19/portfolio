# Images Folder

This folder contains all the images used in the portfolio.

## Image Files

Current images in this folder:

- `myself.png` - Main profile image (your actual photo)
- `hero-bg.jpg` - Hero background image (optional)
- `project-*.jpg` - Project images
- `logo.png` - Portfolio logo (optional)

## Image Naming Convention

For future images, use these naming conventions:

- `profile.jpg` or `myself.png` - Main profile image (300x300px recommended)
- `avatar.jpg` - Avatar image (200x200px recommended)  
- `mini-avatar.jpg` - Mini avatar for user info (40x40px recommended)

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Optimize for web (compress images)
- **Profile Image**: Square aspect ratio recommended
- **Background Images**: High resolution for retina displays

## Usage

Images are automatically loaded from this folder using the image utility functions:

```javascript
import { getProfileImage, getAvatarImage } from '../utils/imageUtils';

const profileImage = getProfileImage('profile.jpg');
const avatarImage = getAvatarImage('avatar.jpg');
```

## Fallbacks

If images are not found, the system will use placeholder images automatically.
