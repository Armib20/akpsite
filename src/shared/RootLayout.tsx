import { Link, NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <img src="/images/AKPsiLogo.png" alt="AKPsi" className="h-10" />
            <span>AKPsi | UVA</span>
          </Link>
          <nav className="flex gap-4 text-sm">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/rush">Rush</NavLink>
            <NavLink to="/brothers">Brothers</NavLink>
            <NavLink to="/executives">Exec Board</NavLink>
            <NavLink to="/philanthropy">Philanthropy</NavLink>
            <NavLink to="/corporate-partners">Corporate Partners</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-6 py-8 grid gap-6 md:grid-cols-2">
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
        <div className="text-center text-xs py-4">
          © {new Date().getFullYear()} Alpha Kappa Psi | University of Virginia
        </div>
      </footer>
    </div>
  );
}
