import React from 'react'


const Cards = ({ books }) => {

    return (
        <>

            {
                books.map((items) => {

                    let bookImage = items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail;
                    let amount = items.saleInfo.listPrice && items.saleInfo.listPrice.amount;

                    if (bookImage != undefined && amount != undefined) {
                        return <>
                            {/* card main div */}
                            <div className='w-[95%] md:w-[25%] lg:hover:scale-105 duration-500 md:cursor-pointer mb-2 md:mx-3 mt-8 text-center bg-purple-700 rounded-md m-auto' >
                                <img className='rounded-md md:shadow-black shadow-2xl md:shadow-xl md:w-[80%] md:m-auto md:mt-6 w-full' src={bookImage} alt={bookImage} />
                                <h3 className='text-2xl mt-4 md:mt-6 text-white font-semibold' > {items.volumeInfo.title} </h3>
                                <hr className='text-white' />
                                <p className='text-white mt-2 text-lg pb-2 '>₹ {amount} </p>
                            </div>

                           
                        </>
                    }


                })
            }


        </>
    );
}

export default Cards