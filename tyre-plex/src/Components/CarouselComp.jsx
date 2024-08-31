import React from 'react';
import Carousel from 'react-multi-carousel';


const CarouselComp = ({images}) => {


  return (
    <div className='flex lg:w-1/2 lg:h-50%'>
<Carousel
  additionalTransfrom={0}
  arrows={false}
  autoPlaySpeed={3000}
  centerMode={false}
  className="h-[300px]"
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
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
      items: 1,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 640,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 640
      },
      items: 1,
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
        
           {images.map((el, index)=><div key={index} className='flex justify-center h-full w-11/12 lg:h-full'><img className='w-full' src={el} alt="" /></div>)}
      
       
      </Carousel>
    </div>
  )
}

export default CarouselComp;