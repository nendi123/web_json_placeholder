import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Blog Manager</h3>
            <p className="text-gray-400 text-sm">
              Aplikasi manajemen blog modern dengan fitur CRUD lengkap. 
              Dibangun dengan React dan Tailwind CSS.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Fitur</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Create - Tambah postingan baru</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Read - Tampilkan semua postingan</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Update - Edit postingan</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Delete - Hapus postingan</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Responsive Design</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Teknologi</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                React
              </span>
              <span className="bg-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Vite
              </span>
              <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                JSONPlaceholder API
              </span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Blog Manager. Single Page Application dengan CRUD Lengkap.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
