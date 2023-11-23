import React from 'react';
import {ReactComponent as LeftCarouselSVG} from '../../assets/landing-assets/left-carousel-button.svg';
import {ReactComponent as RightCarouselSVG} from '../../assets/landing-assets/right-carousel-button.svg';

const TestimonialsComponent = () => {
  return (
    <section className='mx-[7%] flex px-5'>
        <div className='w-[20%]'>
            <h6 className='text-lg font-bold text-[#FBC507]'>TESTIMONIALS</h6>
            <p className='font-bold text-4xl text-[#090701]'>Interesting Customer Stories</p>
            <div className='flex gap-x-2'>
                <button><LeftCarouselSVG /></button>
                <button><RightCarouselSVG /></button>
            </div>
        </div>
        <div className='w-[80%]'>

        </div>
    </section>
  )
}

export default TestimonialsComponent;