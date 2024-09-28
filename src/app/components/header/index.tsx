import { ChevronLeft } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <ChevronLeft className="h-6 w-6 text-gray-400 mr-2" />
          <h1 className="text-xl font-semibold text-gray-900">Test 3_staging</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            Primary Feed
          </span>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Publish Feed
          </button>
        </div>
      </div>
    </header>
  );
}