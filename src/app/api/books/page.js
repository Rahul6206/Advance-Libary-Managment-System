"use client";
import React, { useState } from 'react'
import BookData from '@/BoookData/Books'
import BookDetalise from '@/components/BookDetails';
const books = () => {
  const [Details, setDetails] = useState(false)
  
  const [selectedBook, setSelectedBook] = useState(null);

  const handleDetalis = (book) => {
    setSelectedBook(book);
    setDetails(true);
  };

  return (
    <>
      <h1 className='text-2xl font-bold text-center mt-4'>Books List</h1>
      <div className='bg-gray-100 p-4 mt-6'>
        {Details && selectedBook ? (
          <BookDetalise setDetails={setDetails} selectedBook={selectedBook} />
        ) : (
          BookData.map((book, index) => (
            <div key={index}  className="border p-4 m-2 rounded-lg shadow-lg" onClick={() => handleDetalis(book)} >
              <h2 className="text-xl font-bold">{book.Name}</h2>
              <p><strong>Author:</strong> {book.Author}</p>
              <p><strong>Publication:</strong> {book.Publication}</p>
              <p><strong>Book ID:</strong> {book.Book_Id}</p>
              <p><strong>Location:</strong> {book.Location}</p>
              <p><strong>Price:</strong> ₹{book.Price}</p>
              <p><strong>Total Copies:</strong> {book.Totel_Copy}</p>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default books