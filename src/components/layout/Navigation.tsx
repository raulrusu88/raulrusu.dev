import Link from "next/link";
import { Button } from "../button/Button";

export default function Header() {
  return (
    <div
      className="sticky top-0 z-50 bg-gradient-to-r from-gray-50 to-gray-100 text-white pt-3"
      id="top"
    >
      <div className="flex items-center justify-between h-14 px-12">
        <nav className="w-full flex justify-between items-center">
          <Link href="#top">
            <div className=" h-12 flex items-center">
              <img src="/logo.svg" className="w-9" />
              {/* <p className="text-raulDark-500 ml-4 font-semibold text-lg ">
                Raul Rusu
              </p> */}
            </div>
          </Link>
          <div className="w-auto">
            <ul className="flex items-center">
              <li className="cursor-pointer">
                <Button
                  text="LinkedIn"
                  href="https://linkedin.com/in/rusuraul"
                />
              </li>
              <li className="cursor-pointer">
                <Button text="Github" />
              </li>
              <li className="cursor-pointer">
                <Button text="About" />
              </li>
              <li className="cursor-pointer">
                <Button text="Contact" />
              </li>
              <li className="cursor-pointer">
                <Button text="View Work" variant="secondary" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
