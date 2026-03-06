# Adding Your Profile Photo

To add your profile photo to the resume website:

1. Place your photo file in the `public/images/` folder
2. Name it `profile-photo.jpg` (or update the file name in `components/sidebar.tsx` if you use a different name)
3. The photo should be:
   - Square format (1:1 aspect ratio) works best
   - High quality (at least 400x400 pixels recommended)
   - Professional headshot style

The photo will automatically display in the sidebar with a circular border and shadow effect.

## Supported Formats
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

If you use a different format, update the image source in `components/sidebar.tsx`:

```tsx
<Image
  src="/images/profile-photo.jpg"  // Change this to your file name
  alt={resumeData.name}
  fill
  className="object-cover"
  priority
/>
```


