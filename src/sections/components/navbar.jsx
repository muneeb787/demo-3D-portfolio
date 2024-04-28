// @flow strict
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <a
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            Muneeb A.
          </a>
        </div>
        <div className="flex items-center gap-3">
            <a className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </a>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;