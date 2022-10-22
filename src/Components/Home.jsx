import React, { useState } from 'react'
import ebook from "./images/ebook.jpg"
import Cards from './Cards';
import axios from "axios"

const Home = () => {

    // useState for search input
    const [search, setSearch] = useState("");
    // useState for cards 
    const [bookData, setBookData] = useState([]);

    // fetching data with axios
    const searchBook = (evnt) => {
        if (evnt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyAkwdqs916vQISsU94m3ilIIVGsrzziWm4' + '&maxResults=40')
                .then(res => setBookData(res.data.items))
                .catch(err => console.log(err));
        }
    }

    return (
        <>

            {/* heading , input-search section */}
            <h1 className='text-white text-4xl font-bold text-center px-2 mt-8'>Find Your Book</h1>

            {/* main div */}
            <div className='flex flex-col md:flex-row md:justify-evenly md:items-center w-[95%] m-auto justify-center mt-8 md:mt-12'>

                {/* div for input and search icon */}
                <div className='flex md:w-[45%] justify-evenly items-center'>
                    <input className='outline-none  rounded-md w-[90%] md:w-[80%] placeholder:text-center text-center py-2' type="text" placeholder='Enter Book Name' value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook} />
                </div>
                <img className='mt-8 md:h-[20rem] md:w-[20rem] rounded-md' src={ebook} alt={ebook} />

            </div>



            {/* cards main container */}
            <div className='flex flex-col mb-4 mt-6 md:w-[80%] lg:w-[70%] md:m-auto md:mt-12 lg:mt-16 md:flex-wrap md:flex-row md:justify-evenly md:items-center'>
                <Cards books={bookData} />
            </div>

        </>
    );
}

export default Home