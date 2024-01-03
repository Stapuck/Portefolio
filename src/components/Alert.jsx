import React from 'react'

const Alert = ({type, text}) => {
  return (
    // fixed à la place de absolute quand la page sera terminé
    <div className=' absolute top-12 left-0 right-0 flex justify-center items-center' >
        <div className={`${type === 'danger' ? 'bg-red-800' : 'bg-blue-800'} p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`} role='alert'>
            <p className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-500'} flex rounded-full uppercase px-2 py-1 font-semibold mr-3`}>{type === 'danger' ? 'Failed' : 'Success'}</p>
            <p className="mr-2 text-left text-xs">{text}</p>
        </div>
    </div>
  )
}

export default Alert