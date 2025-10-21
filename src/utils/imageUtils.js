// Image utility functions for loading local images
export const getImagePath = (imageName) => {
  return `/images/${imageName}`;
};

export const getProfileImage = (imageName = 'profile.jpg') => {
  return getImagePath(imageName);
};

export const getAvatarImage = (imageName = 'avatar.jpg') => {
  return getImagePath(imageName);
};

export const getMiniAvatarImage = (imageName = 'mini-avatar.jpg') => {
  return getImagePath(imageName);
};

// Function to preload images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Function to preload multiple images
export const preloadImages = async (imageSources) => {
  try {
    const promises = imageSources.map(src => preloadImage(src));
    await Promise.all(promises);
    return true;
  } catch (error) {
    console.warn('Some images failed to load:', error);
    return false;
  }
};

// Function to check if image exists
export const checkImageExists = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};

// Default image fallbacks
export const DEFAULT_IMAGES = {
  profile: '/images/myself.png',
  avatar: '/images/myself.png',
  miniAvatar: '/images/myself.png',
  fallback: 'https://via.placeholder.com/300x300/3b82f6/ffffff?text=J'
};

// Function to get image with fallback
export const getImageWithFallback = async (imageName, fallbackImage = DEFAULT_IMAGES.fallback) => {
  const imagePath = getImagePath(imageName);
  const exists = await checkImageExists(imagePath);
  return exists ? imagePath : fallbackImage;
};
