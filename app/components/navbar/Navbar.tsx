import { NavLink } from "react-router";


export default function Navbar() {
  return (
    <div className="container  px-40  mx-auto mt-4 ">
      <div
    className="  mx-auto w-full border border-gray-100 bg-gray-100 py-1 shadow backdrop-blur-lg md:rounded-3xl">
    <div className="px-3">
        <div className="flex items-center justify-between">
            <NavLink to="/">
            <div className="flex shrink-0">
                <a aria-current="page" className="flex items-center" href="/">
                    <img className="h-[70px] w-auto" src="https://www.svgrepo.com/show/399134/world-map.svg" alt=""/>
                </a>
            </div>
            </NavLink>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                <NavLink to="/countries">
                    <div>
                        <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="#">Countries Info</a>
                    </div>
                </NavLink>

                <NavLink to="/about">
                    <div>
                        <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="#">About</a>
                    </div>
                </NavLink>
               
            </div>
            <div className="flex items-center justify-end gap-3">
                <a className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                    >Theme</a>
                
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
