import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex space-x-8">
        <Link to="/" className="font-bold text-xl">TELsTP Sonic Core</Link>
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/library" className="hover:underline">Motif Library</Link>
        <Link to="/timeline" className="hover:underline">Timeline</Link>
      </div>
    </nav>
  );
};

export default Navbar;