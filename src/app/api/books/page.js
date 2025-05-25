import React from 'react'
import BookData from '@/BoookData/Books'
const books = () => {
  return (
    <>
    <div className=' bg-gray-100 p-4 mt-6'>
    {        BookData.map((book, index) => (
        <div key={index} className="border p-4 m-2 rounded-lg shadow-lg  ">
          <h2 className="text-xl font-bold">{book.Name}</h2>
          <p><strong>Author:</strong> {book.Author}</p>
          <p><strong>Publication:</strong> {book.Publication}</p>
          <p><strong>Book ID:</strong> {book.Book_Id}</p>
          <p><strong>Location:</strong> {book.Location}</p>
          <p><strong>Price:</strong> ₹{book.Price}</p>
          <p><strong>Total Copies:</strong> {book.Totel_Copy}</p>
        </div>
      ))}
    
    
    </div>
    </>
  )
}

export default books