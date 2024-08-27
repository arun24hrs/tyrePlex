import { Avatar } from '@mui/material'
import React from 'react'

const Reviews = () => {
    const googleReviews = [
        {userImage: "https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo",
            userName: "Md Nasir",
            review: "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate."
        },
        {userImage: "",
            userName: "Rohit Bhati",
            review: "Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend."
        },
        {userImage: "",
            userName: "Pradeep Kumar",
            review: " Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience "
        },
        {userImage: "",
            userName: "Pradeep Kumar",
            review: " Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience "
        },
        {userImage: "https://lh3.googleusercontent.com/a-/AOh14GhHSizwMQ5QJNIXpB3wdFKkkIEzs8WwYdQUngn6uw=s128-c0x00000000-cc-rp-mo",
            userName: "Surjit Kumar",
            review: " Genuine and Authorized Tyre shop in indirapuram having latest manufactured stock. Well equipped workshop with professional staff. I change my care Tyre there, highly satisfied with service and lasted available stock.. Keep it up !!! "
        }

    ]
  return (
    <div className='mt-8 w-11/12 m-auto'>
        <h2 className='font-bold text-lg'>2278 Google Reviews</h2>
        <Avatar src={(googleReviews[1].userImage!="") ? googleReviews[1].userImage : null}>{(googleReviews[1].userImage=="") ? googleReviews[1].userName[0] : ""}</Avatar>
    </div>
  )
}

export default Reviews