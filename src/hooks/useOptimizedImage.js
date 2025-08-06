import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for optimized image loading with lazy loading and loading states
 * @param {string} src - Image source URL
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection observer threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @returns {Object} - Image loading state and ref
 */
export const useOptimizedImage = (src, options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px'
  } = options;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Set up intersection observer for lazy loading
  useEffect(() => {
    const element = imgRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observerRef.current?.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observerRef.current.observe(element);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold, rootMargin]);

  // Load image when in view
  useEffect(() => {
    if (!inView || !src) return;

    const img = new Image();
    
    const handleLoad = () => {
      setImageSrc(src);
      setLoading(false);
      setError(false);
    };

    const handleError = () => {
      setError(true);
      setLoading(false);
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);
    
    // Start loading the image
    img.src = src;

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [inView, src]);

  return {
    imgRef,
    loading,
    error,
    imageSrc,
    inView
  };
};

/**
 * Preload images for better performance
 * @param {string[]} srcArray - Array of image URLs to preload
 */
export const preloadImages = (srcArray) => {
  srcArray.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};