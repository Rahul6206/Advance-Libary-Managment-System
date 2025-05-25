import React from 'react'

const BookDetails = ({ setDetails, selectedBook }) => {
  if (!selectedBook) {
    return <div className='w-full flex justify-center items-center'>No Book Selected</div>;
  }
  return (
    <div className='w-[80vw] flex  justify-center items-center  m-auto'>

      <div className='w-[75vw] fixed top-[10%] left-0 right-0 bottom-0 z-50 flex justify-end items-center h-[20px] p-4  ml-auto mr-auto'  >
        <button type="button" onClick={() => setDetails(false)} >X</button>
      </div>

      <div className='bg-amber-600 w-full  flex flex-col justify-center items-center p-4 rounded-lg shadow-lg'>

        <h1 className='text-white'>{selectedBook.Name}</h1>
        <p className='text-white'>Author: {selectedBook.Author}</p>
        <p className='text-white'>Publication: {selectedBook.Publication}</p>
        <p className='text-white'>Book ID: {selectedBook.Book_Id}</p>
        <p className='text-white'>Location: {selectedBook.Location}</p>
        <p className='text-white'>Price: ₹{selectedBook.Price}</p>
        <p className='text-white'>Total Copies: {selectedBook.Totel_Copy}</p>

      </div>





    </div>
  )
}

export default BookDetails