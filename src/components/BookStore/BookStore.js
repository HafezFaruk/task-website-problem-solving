import React from 'react';
import PeopleThoutht from '../Shared/PeopleThoutht';
import BookCard from './BookStoreUnits/BookCard';

const BookStore = () => {
    return (
        <div style={{ marginTop: '99px' }} >
            <BookCard/>
            <BookCard/>
            <PeopleThoutht />
        </div>
    );
};

export default BookStore;