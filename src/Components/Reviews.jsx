import React, { useState } from 'react'
import { BsBookmarkStar } from "react-icons/bs";
import ReviewBox from "../Components/ReviewBox";
import { CiStar } from 'react-icons/ci';

function Reviews() {
    const [rate, setRate] = useState(0)
    const [message, setMessage] = useState('')
    const [reviews, setReviews] = useState([{ name: 'saman', title: "best!", rate: 5 }])
    const clickHandler = () => {
        if (reviews.title !== '')
            setReviews([...reviews, { name: 'ali', title: message, rate }])
        const elements = [];

        for (let i = 0; i < rate; i++) {
            elements.push( < CiStar / > );
        }
        console.log(elements);


    }
    return ( <
            div className = 'container' >
            <
            div className = "  popularMovie d-flex align-items-center    " >
            <
            BsBookmarkStar className = "icon-color fs-2-8-rem m-0 ms-4" / >
            <
            h3 className = "text-color-white fs-2-4-rem " > Top Rated < /h3>  < /
            div >

            <
            div className = 'row bg-box-color p-5 gap-5 border-radius-0-8-rem ' >
            <
            div className = 'col-lg-5 col-md-12 ' >
            <
            p className = 'text-color-for-paraghraph fs-2-6-rem fw-bold' > Review "Army Of The Dead" < /p> <
            p className = 'text-color-sec fs-1-8-rem' > Write a review
            for this movie.It will be posted on this page. < /p> <
            p className = 'text-color-sec fs-1-8-rem fw-bold mt-4' > Select Rating < /p> <
            select className = '  py-3  px-5 border-radius-0-8-rem sec-bg-color text-color-white fs-1-8-rem w-100 '

            value = { rate }
            onChange = {
                e => {
                    setRate(e.target.value)

                }

            } >
            <
            option value = { 0 } > 0 - Poor < /option> <
            option value = { 1 } > 1 - Fair < /option> <
            option value = { 2 } > 2 - Good < /option> <
            option value = { 3 } > 3 - Very Good < /option>

            <
            option value = { 4 } > 4 - Excellent < /option> <
            option value = { 5 } > 5 - Masterpiece < /option> < /
            select >
            <
            div >
            <
            p className = 'mt-5 text-color-sec fs-1-8-rem fw-bold ' > Message < /p> <
            textarea type = 'text'
            rows = { 7 }
            className = 'w-100 py-3  px-5 border-radius-0-8-rem sec-bg-color text-color-white fs-1-8-rem inputMessage'
            value = { message }
            onChange = { e => setMessage(e.target.value) }
            placeholder = 'Make it short and sweet...' / >
            <
            button className = 'w-100 mt-5 border-radius-0-4-rem cursor-p bg-btn-color text-color-white text-center p-3 fs-1-8-rem'
            onClick = { clickHandler } > Submit < /button>

            <
            /div>


            <
            /div>  <
            div className = "col-lg-6 col-md-12 px-5 commentsBox" >
            <
            p className = 'text-color-for-paraghraph fs-2-8-rem fw-bold' > Reviews < /p> {
            reviews.map(review => ( <
                ReviewBox comment = { review }
                />

            ))
        } <
        /
    div > <
        /
    div > <
        /div>
)
}

export default Reviews