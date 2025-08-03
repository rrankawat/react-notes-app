const TextInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block font-semibold text-left'>
        {label}
      </label>
      <input
        type='text'
        className='w-full p-2 border rounded-lg'
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}

export default TextInput
