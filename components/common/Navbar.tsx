import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
const Hamburger = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="md:hidden" onClick={onClick}>
    {isOpen ? <MdClose size="1.5rem" /> : <GiHamburgerMenu size="1.5rem" />}
  </div>
);

interface NavbarProps {
  scrollToSection?: (section: string) => void;
  home?: boolean;
  activeSection: string;
}

function Navbar({ scrollToSection, home, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const active = activeSection.toLowerCase();
  const router = useRouter();
  const intl = useIntl();

  const NavPaths = [
    { path: "/", id: "home", name: intl.formatMessage({ id: "navbar.home" }) },
    {
      path: "/#plans",
      id: "plans",
      name: intl.formatMessage({ id: "navbar.plans" }),
    },
    {
      path: "/#contact",
      id: "contact",
      name: intl.formatMessage({ id: "navbar.contact" }),
    },
    {
      path: "/gallery",
      id: "gallery",
      name: intl.formatMessage({ id: "navbar.gallery" }),
    },
  ];

  return (
    <nav className={`left-0 top-0 z-20 p-2 w-full bg-white fixed shadow-sm`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 w-full">
        <div className="px-2 py-2 flex justify-between items-center relative w-full">
          <Link href="/" passHref>
            <div className="relative w-12 h-12 cursor-pointer">
              <Image
                src="/logo.png"
                layout="fill"
                alt="Phuket Instant Print logo"
              />
            </div>
          </Link>
          <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
        {isOpen && (
          <ul className="flex md:hidden flex-col items-stretch px-2 space-y-3 cursor-pointer w-full z-20">
            {NavPaths.map(({ path, name, id }) => {
              if (id === "gallery")
                return (
                  <Link href={path} key={path} passHref>
                    <li
                      className={
                        active === id
                          ? "font-bold border-b-2 border-yellow-500"
                          : ""
                      }
                    >
                      {name}
                    </li>
                  </Link>
                );

              if (home) {
                return (
                  <li
                    key={path}
                    onClick={() => home && scrollToSection!(id)}
                    className={
                      active === id
                        ? "font-bold border-b-2 border-yellow-500"
                        : ""
                    }
                  >
                    {name}
                  </li>
                );
              }

              return (
                <Link href={path} key={path} passHref>
                  <li
                    className={
                      active === id
                        ? "font-bold border-b-2 border-yellow-500"
                        : ""
                    }
                  >
                    {name}
                  </li>
                </Link>
              );
            })}
          </ul>
        )}

        <ul className="hidden md:flex justify-end items-stretch px-0 space-x-3 cursor-pointer w-full z-20">
          {NavPaths.map(({ path, name, id }) => {
            if (id === "gallery")
              return (
                <Link href={path} key={path} passHref>
                  <li
                    className={
                      active === id
                        ? "font-bold border-b-2 border-yellow-500"
                        : ""
                    }
                  >
                    {name}
                  </li>
                </Link>
              );

            if (home) {
              return (
                <li
                  key={path}
                  onClick={() => home && scrollToSection!(id)}
                  className={
                    active === id
                      ? "font-bold border-b-2 border-yellow-500"
                      : ""
                  }
                >
                  {name}
                </li>
              );
            }

            return (
              <Link href={path} key={path} passHref>
                <li
                  className={
                    active === id
                      ? "font-bold border-b-2 border-yellow-500"
                      : ""
                  }
                >
                  {name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
