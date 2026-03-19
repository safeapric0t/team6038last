export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
}
export const galleryImages: GalleryImage[] = [
  { id: "1", src: "/mainfoto.jpg", alt: "Team Main Image", category: "Team", featured: true },
  { id: "2", src: "/images/mainfoto-ai.jpg", alt: "Team AI Image", category: "Team", featured: true },
  { id: "2", src: "/images/team1.jpg", alt: "Takım Fotoğrafı 1", category: "Team", featured: true },
  { id: "3", src: "/images/team2.jpg", alt: "Team Image", category: "Team" },
  { id: "4", src: "/images/team3.jpg", alt: "Team Image", category: "Team" },
  { id: "5", src: "/images/robot.jpg", alt: "Robot Image", category: "Robot", featured: true },
  { id: "6", src: "/images/robot1.jpg", alt: "Robot Image", category: "Robot" },
  { id: "7", src: "/images/robot2.jpg", alt: "Robot Image", category: "Robot" },
  { id: "8", src: "/images/robot3.jpg", alt: "Robot Image", category: "Robot" },
  { id: "9", src: "/images/game.jpg", alt: "Game", category: "Action" },
  { id: "10", src: "/images/fun.jpg", alt: "Funny Moments", category: "Fun" },
  { id: "11", src: "/images/fun1.jpg", alt: "Funny Moments", category: "Fun" },
  { id: "12", src: "/images/fun2.jpg", alt: "Funny Moments", category: "Fun" },
  { id: "13", src: "/images/award.jpg", alt: "Award", category: "Awards", featured: true },
  { id: "14", src: "/images/award1.jpg", alt: "Award", category: "Awards" },
  { id: "15", src: "/images/award2.jpg", alt: "Award", category: "Awards" },
  { id: "16", src: "/images/vizitors.jpg", alt: "Our Visitors", category: "Visitors" },
  { id: "17", src: "/images/teamm.jpg", alt: "Team Image with Robot", category: "Team" },
  { id: "18", src: "/images/robott.jpg", alt: "Robot Image", category: "Robot" },
  { id: "19", src: "/images/fun9.jpg", alt: "Funny Moments", category: "Fun" },
  { id: "20", src: "/images/mach9.jpg", alt: "Mach Time", category: "Mach" },
 // { id: "21", src: "/images/robot9.jpg", alt: "Robot Image", category: "Robot" },

];

export const categories = Array.from(
  new Set(galleryImages.map(image => image.category))
);

export const featuredImages = galleryImages.filter(image => image.featured);
