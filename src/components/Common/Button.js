import React from 'react'

const Button = ({
  title,
  onClick
}) => {
  return (
    <button onClick={onClick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      {title}
    </button>
  )
}

export default Button