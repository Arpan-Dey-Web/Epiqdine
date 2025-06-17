import React, { useState, useCallback, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useInView } from "react-intersection-observer";

const allImages = [
  {
    src: "https://i.postimg.cc/3NhGWpbq/dining-table-with-chairs-tableware.jpg",
    thumbnail:
      "https://i.postimg.cc/3NhGWpbq/dining-table-with-chairs-tableware.jpg",
  },
  {
    src: "https://i.postimg.cc/zG2TpyVL/dining-table-with-chairs-tableware-1.jpg",
    thumbnail:
      "https://i.postimg.cc/zG2TpyVL/dining-table-with-chairs-tableware-1.jpg",
  },
  {
    src: "https://i.postimg.cc/MTQ0nzZn/pexels-abhinavcoca-291528.jpg",
    thumbnail: "https://i.postimg.cc/MTQ0nzZn/pexels-abhinavcoca-291528.jpg",
  },
  {
    src: "https://i.postimg.cc/kXcQ61Cv/pexels-adrienn-638530-1537635.jpg",
    thumbnail:
      "https://i.postimg.cc/kXcQ61Cv/pexels-adrienn-638530-1537635.jpg",
  },
  {
    src: "https://i.postimg.cc/nzB7HTT7/pexels-chanwalrus-958545.jpg",
    thumbnail: "https://i.postimg.cc/nzB7HTT7/pexels-chanwalrus-958545.jpg",
  },
  {
    src: "https://i.postimg.cc/BQs5vWrv/pexels-fotios-photos-1279330.jpg",
    thumbnail: "https://i.postimg.cc/BQs5vWrv/pexels-fotios-photos-1279330.jpg",
  },
  {
    src: "https://i.postimg.cc/0NLDRhGP/pexels-iina-luoto-460132-1211887.jpg",
    thumbnail:
      "https://i.postimg.cc/0NLDRhGP/pexels-iina-luoto-460132-1211887.jpg",
  },
  {
    src: "https://i.postimg.cc/FzXycw1D/pexels-janetrangdoan-1128678.jpg",
    thumbnail: "https://i.postimg.cc/FzXycw1D/pexels-janetrangdoan-1128678.jpg",
  },
  {
    src: "https://i.postimg.cc/j2h7f5pS/pexels-pixabay-262978.jpg",
    thumbnail: "https://i.postimg.cc/j2h7f5pS/pexels-pixabay-262978.jpg",
  },
  {
    src: "https://i.postimg.cc/SKXCPmMg/pexels-pixabay-327158.jpg",
    thumbnail: "https://i.postimg.cc/SKXCPmMg/pexels-pixabay-327158.jpg",
  },
  {
    src: "https://i.postimg.cc/qB2X0BZY/pexels-rajesh-tp-749235-1633525.jpg",
    thumbnail:
      "https://i.postimg.cc/qB2X0BZY/pexels-rajesh-tp-749235-1633525.jpg",
  },
  {
    src: "https://i.postimg.cc/W11MMGbL/pexels-tonyleong81-2092906.jpg",
    thumbnail: "https://i.postimg.cc/W11MMGbL/pexels-tonyleong81-2092906.jpg",
  },
];

const IMAGES_PER_BATCH = 4;

const LightBoxImages = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [visibleImages, setVisibleImages] = useState(
    allImages.slice(0, IMAGES_PER_BATCH)
  );
  const [ref, inView] = useInView({ threshold: 0 });

  const loadMoreImages = useCallback(() => {
    const currentCount = visibleImages.length;
    const nextBatch = allImages.slice(
      currentCount,
      currentCount + IMAGES_PER_BATCH
    );
    if (nextBatch.length > 0) {
      setVisibleImages((prev) => [...prev, ...nextBatch]);
    }
  }, [visibleImages]);

  useEffect(() => {
    if (inView) {
      loadMoreImages();
    }
  }, [inView, loadMoreImages]);

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {visibleImages.map((img, index) => (
          <img
            key={index}
            src={img.thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setOpenIndex(index)}
          />
        ))}
      </div>

      {/* Intersection Observer Target */}
      <div
        ref={ref}
        className="h-12 flex items-center justify-center mt-8 text-gray-500"
      >
        {visibleImages.length < allImages.length
          ? "Loading more..."
          : " "}
      </div>

      <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        index={openIndex}
        slides={visibleImages.map((img) => ({ src: img.src }))}
      />
    </div>
  );
};

export default LightBoxImages;
