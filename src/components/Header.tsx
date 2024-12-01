import { HomeIcon } from './icons';
import NavLink from './navigation/NavLink';
import { navigationItems } from '../config/navigation';
import { Car } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="navbar-start w-auto lg:w-1/2">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-purple-500 animate-header-car" />

              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                Unstoppable.limo
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {navigationItems.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;