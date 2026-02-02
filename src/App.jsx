import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import PostCard from './components/PostCard'
import FormInput from './components/FormInput'
import Footer from './components/Footer'
import Notification from './components/Notification'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState(null)
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [notification, setNotification] = useState(null)
  const [operationLoading, setOperationLoading] = useState(false)

  // Fetch data dari JSONPlaceholder API
  useEffect(() => {
    fetchPosts()
  }, [])

  // Fungsi untuk menampilkan notifikasi
  const showNotification = (message, type = 'info') => {
    setNotification({ message, type })
  }

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      
      if (!response.ok) {
        throw new Error('Gagal mengambil data dari server')
      }
      
      const data = await response.json()
      // Ambil hanya 12 posts pertama
      setPosts(data.slice(0, 12))
      setOperationLoading(true)
      
      // Optimistic Update - Tampilkan data baru sebelum API response
      const tempId = Date.now()
      const optimisticPost = { ...postData, id: tempId }
      setPosts([optimisticPost, ...posts])
      setShowForm(false)
      
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      
      if (!response.ok) {
        throw new Error('Gagal menambahkan post')
      }
      
      const newPost = await response.json()
      // Update dengan data yang benar dari server
      newPost.id = tempId // Gunakan ID sementara untuk konsistensi
      setPosts(prevPosts => 
        prevPosts.map(post => post.id === tempId ? newPost : post)
      )
      
      showNotification('Post berhasil ditambahkan!', 'success')
    } catch (error) {
      console.error('Error creating post:', error)
      // Rollback optimistic update jika gagal
    const originalPost = editingPost
    try {
      setOperationLoading(true)
      
      // Optimistic Update - Update UI sebelum API response
      setPosts(posts.map(post => 
        post.id === editingPost.id ? { ...postData, id: editingPost.id } : post
      ))
      setShowForm(false)
      setEditingPost(null)
      
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${originalPost.id}`, {
        method: 'PUT',
        body: JSON.stringify(postData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      
      if (!response.ok) {
        throw new Error('Gagal mengupdate post')
      }
      const deletedPost = posts.find(post => post.id === id)
      try {
        // Optimistic Update - Hapus dari UI dulu
        setPosts(posts.filter(post => post.id !== id))
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: 'DELETE',
        })
        
        if (!response.ok) {
          throw new Error('Gagal menghapus post')
        }
        
        showNotification('Post berhasil dihapus!', 'success')
      } catch (error) {
        console.error('Error deleting post:', error)
        // Rollback jika gagal - kembalikan post yang dihapus
        setPosts(prevPosts => [...prevPosts, deletedPost])
        showNotification('Gagal menghapus post. Silakan coba lagi.', 'error'success')
    } catch (error) {
      console.error('Error updating post:', error)
      // Rollback jika gagal
      setPosts(prevPosts => prevPosts.map(post => 
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      
        post.id === originalPost.id ? originalPost : post
      ))
      showNotification('Gagal mengupdate post. Silakan coba lagi.', 'error')
      setEditingPost(originalPost)
      setShowForm(true)
    } finally {
      setOperationLoading(false
      console.error('Error creating post:', error)
    }
  }

  // UPDATE - Edit post
  const handleUpdatePost = async (postData) => {
    try {
      cons  loading={operationLoading}
          t response = await fetch(`https://jsonplaceholder.typicode.com/posts/${editingPost.id}`, {
        method: 'PUT',
        body: JSON.stringify(postData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const updatedPost = await response.json()
      setPosts(posts.map(post => 
        post.id === editingPost.id ? { ...updatedPost, id: editingPost.id } : post
      ))
      setShowForm(false)
      setEditingPost(null)
    } catch (error) {
      console.error('Error updating post:', error)
    }
  }

  // DELETE - Hapus post
  const handleDeletePost = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus post ini?')) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: 'DELETE',
        })
        setPosts(posts.filter(post => post.id !== id))
      } catch (error) {
        console.error('Error deleting post:', error)
      }
    }
  }
<Footer />
  const handleEdit = (post) => {
    setEditingPost(post)
    setShowForm(true)
  }

  const handleFormClose = () => {
    setShowForm(false)
    setEditingPost(null)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar 
        onAddClick={() => setShowForm(true)}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Dashboard Manajemen Blog
          </h1>
          <p className="text-gray-600">
            Kelola postingan blog Anda dengan mudah - Create, Read, Update, Delete
          </p>
        </div>

        {showForm && (
          <FormInput
            onSubmit={editingPost ? handleUpdatePost : handleCreatePost}
            onClose={handleFormClose}
            initialData={editingPost}
            isEditing={!!editingPost}
          />
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "flex flex-col gap-4"
          }>
            {posts.map(post => (
              <PostCard
                key={post.id}
                post={post}
                onEdit={handleEdit}
                onDelete={handleDeletePost}
                viewMode={viewMode}
              />
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Belum ada postingan. Klik tombol "Tambah Post" untuk memulai!</p>
          </div>
        )}
      </main>

      {/* <Footer /> */}
    </div>
  )
}

export default App
