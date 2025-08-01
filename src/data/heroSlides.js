const imageImports = import.meta.glob('../assets/hero/*.{jpg,jpeg,png,webp}', { eager: true });

const heroSlides = Object.keys(imageImports).map((path, index) => ({
  id: index,
  image: imageImports[path].default,
//   heading: "Explore Nature",
//   subheading: "Discover the beauty of our environment.",
//   button: "Learn More",
}));

export default heroSlides;
