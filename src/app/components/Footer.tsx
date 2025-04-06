import React from 'react';

function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center items-center p-8 bg-gray-900 text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-purple-400 text-4xl font-bold border-b-2 border-purple-400 mb-4">Ecommerce</h1>
        <p className="text-gray-400 text-sm">© 2025 Ecommerce. All rights reserved.</p>
      </div>

      <div className="flex flex-col space-y-2 items-center">
        <h2 className="text-lg font-semibold text-purple-400">Legal</h2>
        <a href="#" className="text-gray-400 hover:text-purple-300">Privacy Policy</a>
        <a href="#" className="text-gray-400 hover:text-purple-300">Terms of Service</a>
        <a href="#" className="text-gray-400 hover:text-purple-300">Contact Us</a>
      </div>

      <div className="flex flex-col space-y-2 items-center">
        <h2 className="text-lg font-semibold text-purple-400">Social</h2>
        <a href="#" className="text-gray-400 hover:text-purple-300">Facebook</a>
        <a href="#" className="text-gray-400 hover:text-purple-300">Twitter</a>
        <a href="#" className="text-gray-400 hover:text-purple-300">Instagram</a>
        <a href="#" className="text-gray-400 hover:text-purple-300">LinkedIn</a>
      </div>

      <div className="flex flex-col space-y-2 items-center">
        <h2 className="text-lg font-semibold text-purple-400">Platforms</h2>
        <a href="#" className="text-gray-400 hover:text-purple-300">GitHub</a>
        <a href="#" className="text-gray-400 hover:text-purple-300">YouTube</a>
        <a href="#" className="text-gray-400 hover:text-purple-300">Discord</a>
        <a href="#" className="text-gray-400 hover:text-purple-300">Slack</a>
      </div>
    </footer>
  );
}

export default Footer;