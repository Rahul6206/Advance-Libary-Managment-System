import React from 'react'

const BookSubmit = ({setshow}) => {
  return (
    <div className='h-screen w-full fixed drop-shadow-2xl bg-gray-100 flex justify-center items-center'>
        <div>
            <h1>Book Are Added</h1>
            <button onClick={()=>setshow(false)}>OK</button>
        </div>
    </div>
  )
}

export default BookSubmit