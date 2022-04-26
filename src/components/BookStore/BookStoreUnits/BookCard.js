import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookCard = () => {

    const navigate = useNavigate()

    const bookInfo = [
        {
            bookId: '001',
            bookTitle: 'Bangla Book',
            bookImg: 'https://cdn.10minuteschool.com/images/store/2022/thumbnails/hsc-bio-1-s.jpg',
            bookPrice: '600',
            bookAuthor: 'Unknown Author'
        },
        {
            bookId: '002',
            bookTitle: 'Bangla Book Bangla Book Bangla Book',
            bookImg: 'https://lms10.s3.ap-southeast-1.amazonaws.com/store/thumbnails/HSC_Chemistry_2nd%20_Paper.png',
            bookPrice: '600',
            bookAuthor: 'Unknown Author'
        },
        {
            bookId: '003',
            bookTitle: 'Bangla Book',
            bookImg: 'https://cdn.10minuteschool.com/images/store/2022/thumbnails/hsc-bio-2-s.jpg',
            bookPrice: '600',
            bookAuthor: 'Unknown Author'
        },
        {
            bookId: '004',
            bookTitle: 'Bangla Book',
            bookImg: 'https://d1bcd28fvv0vzb.cloudfront.net/fit-in/480x480/filters:autojpg()/store/thumbnails/hsc_physics_1st_paper_portrait.png',
            bookPrice: '600',
            bookAuthor: 'Unknown Author'
        },
    ]

    const category = 'Books Academic'

    const handleBook = ( bookId ) =>{
        const selectedBook = bookInfo.find((eachBook) =>{
            return eachBook.bookId === bookId
        })
        navigate(`/bookStore/det/${ selectedBook.bookId }`, { state:{ selectedBook }} )
        window.scrollTo(0, 0)
    }


    return (
        <div className='h-screen' >
            <div className=' mx-16 py-10 ' >
                <div>
                    <h1 className='text-2xl font-bold text-left my-2 mb-6' >{ category }</h1>
                </div>
                <div className=' grid sm:grid-cols-2 md:grid-cols-4 gap-4 ' >
                    {
                    bookInfo.map((eachBook)=>(<div onClick={ ()=>{ handleBook( eachBook.bookId ) }} key={eachBook.bookId} className=' hover:-translate-y-5 shadow-md hover:shadow-2xl scale-95 hover:scale-100 transition-all duration-300 ease-in-out bg-slate-100 rounded-md p-4 relative ' >
                        <div className='flex justify-center items-center rounded-xl' >

                            <div className='p-5' >
                                <img height='240px' width='150px' src={ eachBook.bookImg } alt={ eachBook.bookTitle } />
                            </div>

                        </div>
                        <div className=' mx-2' >
                            <h1 className='text-lg font-bold truncate ' >{ eachBook.bookTitle }</h1>
                            <p>{ eachBook.bookAuthor }</p>
                        </div>
                        <div className='absolute top-2 rounded-full right-2 px-3 bg-yellow-300 text-white ' >
                            <p className='text-sm' > ৳ {eachBook.bookPrice}</p>
                        </div>

                    </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default BookCard;