import React from "react";
import Image from "next/image";

function SocialProof() {
  return (
    <div className="bg-gray-50 flex flex-col justify-center items-center py-10">
      <h2 className="text-3xl font-bold my-4">Trusted by 5,000 companies</h2>
      <p className="max-w-4xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, incidunt
        illum quisquam delectus animi ea saepe quod nam repellendus adipisci,
        nemo ullam, quam ab pariatur molestias veritatis? Ipsa, at et.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-stretch gap-4 w-3/4 mt-10">
        {[
          {
            src: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_airbnb-256.png",
          },
          {
            src: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-256.png",
          },
          {
            src: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
          },
          {
            src: "https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-256.png",
          },
        ].map(({ src }) => (
          <div
            key={src}
            className="bg-white rounded-lg col-span-1 inline-flex justify-center py-4 grayscale shadow-sm"
          >
            <Image src={src} layout="fixed" width={64} height={64} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialProof;
