import { Link, NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <div className="w-full flex items-center justify-between px-6 md:px-16 py-5">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <img src="/images/AKPsiLogo.png" alt="AKPsi" className="h-10" />
          </Link>
          <nav className="flex gap-5 text-sm md:text-[15px]">
            <NavLink
              to="/about"
              className="px-1 transition-transform transition-colors duration-200 ease-out hover:scale-110 hover:text-blue-600"
            >
              About
            </NavLink>
            <NavLink
              to="/rush"
              className="px-1 transition-transform transition-colors duration-200 ease-out hover:scale-110 hover:text-blue-600"
            >
              Rush
            </NavLink>
            <NavLink
              to="/brothers"
              className="px-1 transition-transform transition-colors duration-200 ease-out hover:scale-110 hover:text-blue-600"
            >
              Brothers
            </NavLink>
            <NavLink
              to="/executives"
              className="px-1 transition-transform transition-colors duration-200 ease-out hover:scale-110 hover:text-blue-600"
            >
              Exec Board
            </NavLink>
            <NavLink
              to="/philanthropy"
              className="px-1 transition-transform transition-colors duration-200 ease-out hover:scale-110 hover:text-blue-600"
            >
              Philanthropy
            </NavLink>
            <NavLink
              to="/corporate-partners"
              className="px-1 transition-transform transition-colors duration-200 ease-out hover:scale-110 hover:text-blue-600"
            >
              Corporate Partners
            </NavLink>
            <NavLink
              to="/contact"
              className="px-1 transition-transform transition-colors duration-200 ease-out hover:scale-110 hover:text-blue-600"
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-6 md:px-8 py-12 grid gap-10 md:grid-cols-2">
          <div>
            <img
              src="/images/AKPsiLogo.png"
              alt="AKPsi"
              className="h-12 opacity-75"
            />
            <p className="mt-2 text-sm">"Shaping people, Shaping Business"</p>
          </div>
          <div>
            <h5 className="text-sm font-medium mb-2">Contact Us</h5>
            <ul className="space-y-1 text-sm">
              <li>General: rqn3dp@virginia.edu</li>
              <li>Corporate Relations: zjk5gh@virginia.edu</li>
              <li>Alumni: xnq2ng@virginia.edu</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs py-6">
          © {new Date().getFullYear()} Alpha Kappa Psi | University of Virginia
        </div>
      </footer>
    </div>
  );
}
