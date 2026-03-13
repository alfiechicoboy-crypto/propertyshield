import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const photos = [
  { src: "/gallery/IMG_0028_1773414857396.jpg",  label: "Chimney Flashing & Roof Tiles",   location: "Darlington" },
  { src: "/gallery/IMG_0147_1773414857396.jpg",  label: "Re-Roofing Works",                 location: "Darlington" },
  { src: "/gallery/IMG_0059_1773414857397.jpg",  label: "Roof Inspection & Repairs",        location: "Newton Aycliffe" },
  { src: "/gallery/IMG_0109_1773414857397.jpg",  label: "Ridge & Hip Tile Replacement",     location: "Darlington" },
  { src: "/gallery/IMG_0110_1773414857397.jpg",  label: "Full Roof Strip & Re-Cover",       location: "Stockton-on-Tees" },
  { src: "/gallery/IMG_0111_1773414857397.jpg",  label: "Flat Roof Installation",           location: "Darlington" },
  { src: "/gallery/IMG_0117_1773414857397.jpg",  label: "Lead Flashing Work",               location: "Shildon" },
  { src: "/gallery/IMG_0129_1773414857397.jpg",  label: "Chimney Repointing",               location: "Darlington" },
  { src: "/gallery/IMG_0148_1773414857397.jpg",  label: "Roof Tile Repairs",                location: "Newton Aycliffe" },
  { src: "/gallery/IMG_0149_1773414857397.jpg",  label: "Guttering & Fascia Replacement",   location: "Darlington" },
  { src: "/gallery/IMG_0150_1773414857397.jpg",  label: "New Roof Installation",            location: "Spennymoor" },
  { src: "/gallery/IMG_0155_1773414857397.jpg",  label: "Slate Roof Restoration",           location: "Darlington" },
  { src: "/gallery/IMG_0295_1773414857397.jpg",  label: "Roof Repair & Pointing",           location: "Ferryhill" },
  { src: "/gallery/IMG_0441_1773414857397.jpg",  label: "Chimney Stack Rebuild",            location: "Darlington" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % photos.length));

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-32 pt-40 flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #080a0d 0%, #111418 60%, #0d1018 100%)" }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg, transparent, #C9962A, #D4A843, #C9962A, transparent)" }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{ borderColor: "rgba(201,150,42,0.35)", background: "rgba(201,150,42,0.08)" }}
          >
            <ZoomIn className="w-4 h-4" style={{ color: "#C9962A" }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#C9962A" }}>
              Our Projects
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Real roofing projects completed across Darlington and the surrounding areas. Click any photo to view it full screen.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {photos.map((photo, i) => (
              <motion.button
                key={i}
                data-testid={`gallery-photo-${i}`}
                onClick={() => setLightbox(i)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.07 }}
                className="group relative aspect-square rounded-xl overflow-hidden bg-card border border-border cursor-pointer text-left"
                style={{ borderColor: "rgba(201,150,42,0.15)" }}
              >
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-semibold text-sm leading-tight">{photo.label}</p>
                  <p className="text-sm mt-0.5" style={{ color: "#C9962A" }}>{photo.location}</p>
                </div>
                {/* Zoom icon */}
                <div
                  className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(201,150,42,0.9)" }}
                >
                  <ZoomIn className="w-4 h-4 text-black" />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Count badge */}
          <div className="text-center mt-12">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold"
              style={{ background: "rgba(201,150,42,0.1)", border: "1px solid rgba(201,150,42,0.3)", color: "#C9962A" }}
            >
              Showing {photos.length} real project photos
            </span>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              data-testid="lightbox-close"
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Prev */}
            <button
              data-testid="lightbox-prev"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-colors z-10"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            >
              <img
                src={photos[lightbox].src}
                alt={photos[lightbox].label}
                className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain"
              />
              <div className="mt-4 text-center">
                <p className="text-white font-semibold text-lg">{photos[lightbox].label}</p>
                <p className="text-sm mt-1" style={{ color: "#C9962A" }}>{photos[lightbox].location}</p>
              </div>
              <p className="text-gray-500 text-xs mt-2">{lightbox + 1} / {photos.length}</p>
            </motion.div>

            {/* Next */}
            <button
              data-testid="lightbox-next"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-colors z-10"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
