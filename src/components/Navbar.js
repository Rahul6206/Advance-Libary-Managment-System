import React from 'react';
import Link from 'next/link';
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-[#2c3e50] px-8 py-2 text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
            <div className="flex items-center gap-5 ">
                <span className="font-bold text-xl mr-8">Library</span>
               
            </div>
            <div className="flex items-center justify-around gap-5 w-[40%]">
                 <Link href="/" className="text-white no-underline text-base transition-colors duration-200 hover:text-gray-300 ">Home</Link>
                <Link href="/api/books" className="text-white no-underline text-base transition-colors duration-200 hover:text-gray-300">Book</Link>
                <Link href="/addBook" className="text-white no-underline text-base transition-colors duration-200 hover:text-gray-300">Add Book</Link>
                <Link href="/user" className="text-white no-underline text-base transition-colors duration-200 hover:text-gray-300">User</Link>
            </div>
        </nav>
    );
};

export default Navbar;
