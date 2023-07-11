import React from 'react'

const FormField = ({labelName, type, name, placeholder, value, handleChange , isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor="name" className='block text-sm font-medium text-grey-900'>{labelName}</label>

        {isSurpriseMe && (
          <button type='button' className='bg-blue-800 text-white text-xs px-2 py-1 rounded-[5px] hover:scale-105 duration-75' onClick={handleSurpriseMe}>Surprise Me</button>
        )}

      </div>
      <input type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='w-full border border-[#e6ebf4] rounded-[10px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent'
       />
    </div>
  )
}

export default FormField