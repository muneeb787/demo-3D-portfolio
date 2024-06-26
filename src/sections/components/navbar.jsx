
import { MdDownload } from "react-icons/md";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <a
            href="/"
            className=" text-green-500 text-3xl font-bold">
            Muneeb A.
          </a>
        </div>
        <div className="flex items-center gap-3">
        <a className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-green-500 to-grey-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank"

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