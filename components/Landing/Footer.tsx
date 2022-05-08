import React from "react";

function Footer() {
  return (
    <div className="w-full bg-yellow-200">
      <div className="flex flex-col items-center justify-center p-10 gap-2">
        <h2>Made with ❤️ for everyone</h2>
        <h2 className="text-center">
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved By{" "}
          <a href="#" className="text-gray-900 font-bold">
            GoodShot
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Footer;
