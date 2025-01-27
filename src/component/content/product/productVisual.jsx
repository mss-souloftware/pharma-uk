import React from 'react';

const ProductVisual = () => {
  return (
    <div className="mt-28 px-4">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-hoverUnderlineColor mb-8 text-center">
        Experience Our Product in Action
      </h1>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Video Container */}
        <div className="w-full max-w-4xl mx-auto">
          <video
            src="/2340-157269921_tiny.mp4"
            loop
            autoPlay
            muted
            controls
            className="w-full rounded-lg shadow-lg"
            preload="auto"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Description Section */}
        <div className="w-full md:ml-10">
          <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Expert Guidance, Anytime, Anywhere.
          </h4>
          <p className="leading-relaxed text-sm sm:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            sequi fuga itaque harum recusandae asperiores ut excepturi quaerat
            minima impedit. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Dicta culpa harum laudantium vel quasi temporibus eum. Sequi
            similique, dolorem rem debitis eligendi magnam repellendus laborum?
            Sunt, ad voluptas, obcaecati natus dolores tempora corporis velit,
            sapiente ea aliquid et animi cumque? Corrupti quasi facere,
            tenetur laboriosam veniam animi at quidem fuga! Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Dolores accusantium alias
            itaque quod totam veritatis mollitia provident eum, culpa eaque
            minima fuga quaerat, eveniet iste ex.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductVisual;
