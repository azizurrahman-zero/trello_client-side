import React, { useEffect, useState } from 'react';
import List from './List';

const Review = ({ setEditTicket }) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [reviews]);

    return (
        <div className='bg-[#9A9A9A] p-4'>
            <h1 className='font-bold font-roboto text-xl pb-2'>Review</h1>
            {reviews.map((review) => (
                <List key={review._id} ticket={review} setEditTicket={setEditTicket}></List>
            ))}
        </div>
    );
};

export default Review;