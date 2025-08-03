const SelectInput = ({ label, name, value, onChange, options }) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block font-semibold text-left'>
        {label}
      </label>
      <select
        type='text'
        className='w-full p-2 border rounded-lg'
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectInput
