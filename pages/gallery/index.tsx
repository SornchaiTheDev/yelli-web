import React from "react";
import Navbar from "@components/common/Navbar";
import Album from "@components/Album";
function Index() {
  return (
    <div>
      <Navbar active="Gallery" />
      <div className="mt-24 w-full flex flex-col items-center">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-semibold my-14">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14 p-4">
            <Album
              name="Roselyn and Antonio's Wedding"
              amount={5}
              imgset={[
                "https://photos.smugmug.com/2022/Roselyn-and-Antonios-Wedding/i-7zRr6M9/0/05a091da/X2/mirmir126_017275-X2.jpg",
                "https://photos.smugmug.com/2022/Roselyn-and-Antonios-Wedding/i-MrzQFHv/0/3271d378/X2/mirmir126_017274-X2.jpg",
                "https://photos.smugmug.com/2022/Roselyn-and-Antonios-Wedding/i-dwXdhNB/0/69ba6063/X2/mirmir126_017276-X2.jpg",
                "https://photos.smugmug.com/2022/Roselyn-and-Antonios-Wedding/i-XF75FGt/0/2fa26fb4/X2/mirmir126_017277-X2.jpg",
              ]}
            />
            {/* <Album />
            <Album />
            <Album />
            <Album /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
