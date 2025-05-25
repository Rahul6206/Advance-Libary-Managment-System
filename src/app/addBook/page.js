"use client"
import BookSubmit from '../../components/BookSubmit';
import React from 'react'
import { useState } from 'react';
const page = () => {
    const [show, setshow] = useState(false)
    function handleSubmit(e) {
        console.log("Form submitted");
        e.preventDefault();
        const FormDatas=new FormData(e.target);
        const values = Object.fromEntries(FormDatas.entries());
        console.log(values);
        setshow(true);
        e.target.reset(); // Reset the form fields after submission

    }
    return (
        <>
        {show && <BookSubmit setshow={setshow}/>}
            <div className='bg-gray-100 p-4 mt-6'>
                <h1>Add Book</h1>


                <form method='POST' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="BookName">Name of The Book</label>
                        <input type="text" name='BookName' placeholder='Enter Book Name' required />
                    </div>
                    <div>
                        <label htmlFor="Author">Author</label>
                        <input type="text" name='Author' placeholder='Enter Author Name' required />
                    </div>
                    <div>
                        <label htmlFor="Publication">Publication</label>
                        <input type="text" name='Publication' placeholder='Enter Publication' required />
                    </div>
                    <div>
                        <label htmlFor="BookCode">Book Code</label>
                        <input type="text" name='BookCode' placeholder='Enter Book Code' required />
                    </div>
                    <div>
                        <label htmlFor="BookLocation">Book Location</label>
                        <input type="text" name='BookLocation' placeholder='Enter Book Location' required />
                    </div>
                    <div>
                        <label htmlFor="Price">Price</label>
                        <input type="number" name='Price' placeholder='Enter Price' required />
                    </div>
                    <div>
                        <label htmlFor="TotleCopy">Total Copy</label>
                    <input type="number" name='TotleCopy' placeholder='Enter Total Copy' required />
                </div>
                <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4' type="submit"  >Add Book</button>
            </form>
           
        </div >
        </>
    )
}

export default page