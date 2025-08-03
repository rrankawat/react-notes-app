import { useState } from 'react'
import TextInput from './inputs/TextInput'
import SelectInput from './inputs/SelectInput'
import TextAreaInput from './inputs/TextAreaInput'

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
          <TextInput
            label='Title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            required
          />
          <SelectInput
            label='Priority'
            name='priority'
            value={formData.priority}
            onChange={handleChange}
            options={[
              { label: '🔴 High', value: 'high' },
              { label: '🟡 Medium', value: 'medium' },
              { label: '🟢 Low', value: 'low' },
            ]}
          />
          <SelectInput
            label='Category'
            name='category'
            value={formData.category}
            onChange={handleChange}
            options={[
              { label: '📁 Work', value: 'work' },
              { label: '🏠 Personal', value: 'personal' },
              { label: '💡 Ideas', value: 'ideas' },
            ]}
          />
          <TextAreaInput
            label='Description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button className='w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600'>
            Add Note
          </button>
        </form>
      )}
    </>
  )
}

export default NoteForm
