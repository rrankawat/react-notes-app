import { useState } from 'react'

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'medium',
    category: 'work',
    description: '',
  })
  const [isFormVisible, setIsFormVisible] = useState(false)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Validation
    if (!formData.title || !formData.description) return

    // Create note object
    setNotes([{ id: Date.now(), ...formData }, ...notes])

    // Reset form data
    setFormData({
      title: '',
      priority: 'medium',
      category: 'work',
      description: '',
    })
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className='w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4'
      >
        {isFormVisible ? 'Hide Form ✖️' : 'Add New Note ➕'}
      </button>

      {/* Form */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className='mb-6'>
          <div className='mb-4'>
            <label htmlFor='title' className='block font-semibold text-left'>
              Title
            </label>
            <input
              type='text'
              className='w-full p-2 border rounded-lg'
              name='title'
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='priority' className='block font-semibold text-left'>
              Priority
            </label>
            <select
              type='text'
              className='w-full p-2 border rounded-lg'
              name='priority'
              value={formData.priority}
              onChange={handleChange}
            >
              <option value='high'>🔴 High</option>
              <option value='medium'>🟡 Medium</option>
              <option value='low'>🟢 Low</option>
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor='category' className='block font-semibold text-left'>
              Category
            </label>
            <select
              type='text'
              className='w-full p-2 border rounded-lg'
              name='category'
              value={formData.category}
              onChange={handleChange}
            >
              <option value='work'>📁 Work</option>
              <option value='Personal'>🏠 Personal</option>
              <option value='Ideas'>💡 Ideas</option>
            </select>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block font-semibold text-left'
            >
              Description
            </label>
            <textarea
              type='text'
              className='w-full p-2 border rounded-lg'
              name='description'
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className='w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600'>
            Add Note
          </button>
        </form>
      )}
    </>
  )
}

export default NoteForm
