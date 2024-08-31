import React from 'react';
import { Avatar } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Carousel from 'react-multi-carousel';

const ReviewCarousel = () => {
    const googleReviews = [
        {
          userImage:
            "https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo",
          userName: "Md Nasir",
          review:
            "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate.",
        },
        {
          userImage: "",
          userName: "Rohit Bhati",
          review:
            "Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend.",
        },
        {
          userImage: "",
          userName: "Surjit Kumar",
          review:
            " Genuine and Authorized Tyre shop in indirapuram having latest manufactured stock. Well equipped workshop with professional staff. I change my care Tyre there, highly satisfied with service and lasted available stock.. Keep it up !!! ",
        },
        {
          userImage: "",
          userName: "Pradeep Kumar",
          review:
            " Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience ",
        },
        {
          userImage: "",
          userName: "Pradeep Kumar",
          review:
            " Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience ",
        },
        {
          userImage:
            "https://lh3.googleusercontent.com/a-/AOh14GhHSizwMQ5QJNIXpB3wdFKkkIEzs8WwYdQUngn6uw=s128-c0x00000000-cc-rp-mo",
          userName: "Surjit Kumar",
          review:
            " Genuine and Authorized Tyre shop in indirapuram having latest manufactured stock. Well equipped workshop with professional staff. I change my care Tyre there, highly satisfied with service and lasted available stock.. Keep it up !!! ",
        },
        {
          userImage:
            "https://lh3.googleusercontent.com/a-/AOh14GhHSizwMQ5QJNIXpB3wdFKkkIEzs8WwYdQUngn6uw=s128-c0x00000000-cc-rp-mo",
          userName: "Surjit Kumar",
          review:
            " Genuine and Authorized Tyre shop in indirapuram having latest manufactured stock. Well equipped workshop with professional staff. I change my care Tyre there, highly satisfied with service and lasted available stock.. Keep it up !!! ",
        }
      ];
  return (
    <div className='shadow-lg'>
        <Carousel
  additionalTransfrom={0}
  arrows={false}
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  partialVisible
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
        
{googleReviews.map((el, index) => <Card key={index} variant="outlined" className='mx-2'>
            <CardContent>
              <div className="flex items-center gap-3">
                <Avatar
                src={googleReviews[0].userImage != "" ? el.userImage : null}
                sx = {{ bgcolor: 'green' }}
              >
                {el.userImage == "" ? el.userName[0] : null}
              </Avatar>
              <h3 className="inline font-bold">{el.userName}</h3>
              </div>
              <div>
                <p className="font-light">{`${el.review.substring(0, 100)}...`}</p>
              </div>
              
            </CardContent>
        </Card>)}
      
       
      </Carousel>
    </div>
  )
}

export default ReviewCarousel