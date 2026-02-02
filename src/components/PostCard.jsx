import React from 'react'

const PostCard = ({ post, onEdit, onDelete, viewMode }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-grow">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800 capitalize flex-grow">
              {post.title}
            </h3>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
              ID: {post.id}
            </span>
          </div>
          <p className="text-gray-600 line-clamp-2">{post.body}</p>
        </div>
        
        <div className="flex space-x-2 md:flex-shrink-0">
          <button
            onClick={() => onEdit(post)}
            className="flex-1 md:flex-none bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center space-x-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span>Edit</span>
          </button>
          <button
            onClick={() => onDelete(post.id)}
            className="flex-1 md:flex-none bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center space-x-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <span>Hapus</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
        <div className="flex items-center justify-between">
          <span className="bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
            ID: {post.id}
          </span>
          <span className="text-white text-xs">User: {post.userId}</span>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-3 capitalize line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {post.body}
        </p>
      </div>
      
      <div className="p-4 bg-gray-50 flex space-x-2">
        <button
          onClick={() => onEdit(post)}
          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <span>Edit</span>
        </button>
        <button
          onClick={() => onDelete(post.id)}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          <span>Hapus</span>
        </button>
      </div>
    </div>
  )
}

export default PostCard
