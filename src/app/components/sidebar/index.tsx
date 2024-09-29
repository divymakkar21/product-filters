import { Home, Image as SidebarImage, Link, ShoppingBag, Settings } from 'lucide-react';
import Image from "next/image";
import logo from '../../images/download.jpeg';

export default function Sidebar() {
  return (
    <div className="bg-black text-white w-16 flex flex-col items-center py-4 space-y-8">
      <Image src={logo} alt='logo' style={{ width: 30 }} />
      <nav className="flex flex-col space-y-8">
        <a href="#" className="text-gray-400 hover:text-white"><Home size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-white"><SidebarImage size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-white"><Link size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-white"><ShoppingBag size={24} /></a>
      </nav>
      <div className="mt-auto">
        <a href="#" className="text-gray-400 hover:text-white"><Settings size={24} /></a>
      </div>
    </div>
  );
}