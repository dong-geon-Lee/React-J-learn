import Logo from "./Logo";

const Navbar = ({ children }: any) => {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
};

export default Navbar;
