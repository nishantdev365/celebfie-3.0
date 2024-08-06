// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { useState, useRef, useEffect } from 'react';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// import TestimonialPic1 from "../assets/testimonialpic1.jpg";
// import TestimonialPic2 from "../assets/testimonialpic2.jpg";
// import TestimonialPic3 from "../assets/testimonialpic3.jpg";
// import TestimonialPic4 from "../assets/testimonialpic4.jpg";
// import TestimonialPic5 from "../assets/testimonialpic5.jpg";
// import TestimonialPic6 from "../assets/testimonialpic6.jpg";
// import TestimonialPic7 from "../assets/testimonialpic7.jpg";

// const testimonials = [
//     {
//       id: 1,
//       name: "Aamarr P.",
//       image: TestimonialPic1,
//       quote:
//         "Chatting with my favorite celeb feels so personal! I loved earning Celeboins just by sharing moments together. Best experience ever",
//     },
//     {
//       id: 2,
//       name: "Sophie T.",
//       image: TestimonialPic2,
//       quote:
//         "The AI interaction is mind-blowing! I can text my fave stars anytime and feel like they really get me. It’s more than just a fan site",
//     },
//     {
//       id: 3,
//       name: "Sandeep S., CEO of EcoTech Solutions",
//       image: TestimonialPic3,
//       quote:
//         "Partnering with Celebfie means tapping into a vibrant fan community. Our campaigns feel more alive when celebs are genuinely connected",
//     },
//     {
//       id: 4,
//       name: "Simran K.",
//       image: TestimonialPic4,
//       quote:
//         "I never thought I could actually virtually hang out with my idols. The emojis turn into Celeboins, and I have already got merch on the way",
//     },
//     {
//       id: 5,
//       name: "Dolly J., Marketing Manager at Trendy Apparel",
//       image: TestimonialPic5,
//       quote:
//         "“Celebfie allowed us to showcase our products through authentic celebrity interactions, and we’ve seen our brand loyalty skyrocke",
//     },
//     {
//       id: 6,
//       name: "Vick R., Brand Strategist at Foodies Unite",
//       image: TestimonialPic6,
//       quote:
//         "The innovative platform helped us engage fans in a fun, fresh way. Leveraging celeb influence has opened new doors for our brand",
//     },
//     {
//       id: 7,
//       name: "Nidhi V.",
//       image: TestimonialPic7,
//       quote:
//         "I snagged VIP passes to a concert just by interacting with my stars! Celebfie 3.0 makes fandom totally rewarding",
//     },
//   ];

// const Testimonial = () => {

//     const [pause, setPause] = useState(false);

//     const swiperRef = useRef(null);
  
//     const onHoverStart = () => {
//       if (swiperRef.current) {
//         swiperRef.current.autoplay.stop();
//       }
//       setPause(true);
//     };
  
//     const onHoverEnd = () => {
//       if (swiperRef.current) {
//         swiperRef.current.autoplay.start();
//       }
//       setPause(false);
//     };
  
//     const handleSlideChange = () => {
//       const swiper = swiperRef.current;
//       if (swiper && swiper.slides) {
//         swiper.slides.forEach((slide) => {
//           const rect = slide.getBoundingClientRect();
//           const slideCenter = rect.left + rect.width / 2;
//           const viewportCenter = window.innerWidth / 2;
  
//           const flipCardInner = slide.querySelector('.flip-card-inner');
//           if (flipCardInner) {
//             if (Math.abs(slideCenter - viewportCenter) < rect.width / 2) {
//               flipCardInner.classList.add('flipped');
//             } else {
//               flipCardInner.classList.remove('flipped');
//             }
//           }
//         });
//       }
//     };
  
//     useEffect(() => {
//       handleSlideChange(); // Initial check
//       window.addEventListener('resize', handleSlideChange);
//       if (swiperRef.current) {
//         swiperRef.current.on('slideChange', handleSlideChange);
//         swiperRef.current.on('transitionEnd', handleSlideChange);
//       }
  
//       return () => {
//         window.removeEventListener('resize', handleSlideChange);
//         if (swiperRef.current) {
//           swiperRef.current.off('slideChange', handleSlideChange);
//           swiperRef.current.off('transitionEnd', handleSlideChange);
//         }
//       };
//     }, []);

   
       

      
  
   
//   return (    
//     <Swiper
//     modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//     spaceBetween={50}
//     slidesPerView={3}

  
//     // navigation
//     loop={true}
//     // pagination={{ clickable: true }}
//     // scrollbar={{ draggable: true }}
//     autoplay={{
//       delay: 3000,
//       disableOnInteraction: false,
//     }}
//     speed={2000} // Set the swipe speed to 1000ms (1 second)
//     onSwiper={(swiper) => (swiperRef.current = swiper)}
//     onSlideChange={handleSlideChange}
//     breakpoints={{
//       320: {
//         slidesPerView: 1, // Show 1 slide on screens 320px and up
//         spaceBetween: 10,
//       },
//       768: {
//         slidesPerView: 3, // Show 3 slides on screens 768px and up
//         spaceBetween: 50,
//       },
//     }}
//   >


// {testimonials.map((testimonial) => (
//           <SwiperSlide
//             key={testimonial.id}
//             className="flip-card"
//             onMouseEnter={onHoverStart}
//             onMouseLeave={onHoverEnd}
//           >
//             <div className="flip-card-inner">
//               <div className="flip-card-front">
//                 <img src={testimonial.image} alt={testimonial.name} style={{ width: '100%', height: '100%',  objectFit: 'cover', borderRadius: '20rem' }} />
//               </div>
//               <div className="flip-card-back">
//                 <p className="title" style={{fontSize: "1em", marginBottom: "10px"}}>{testimonial.name}</p>
//                 <p style={{fontSize: "0.8em"}}>{testimonial.quote}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}

  
//   </Swiper>

//   )
// };

// export default Testimonial


import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useRef, useEffect, useCallback } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import TestimonialPic1 from "../assets/testimonialpic1.jpg";
import TestimonialPic2 from "../assets/testimonialpic2.jpg";
import TestimonialPic3 from "../assets/testimonialpic3.jpg";
import TestimonialPic4 from "../assets/testimonialpic4.jpg";
import TestimonialPic5 from "../assets/testimonialpic5.jpg";
import TestimonialPic6 from "../assets/testimonialpic6.jpg";
import TestimonialPic7 from "../assets/testimonialpic7.jpg";

const testimonials = [
    {
      id: 1,
      name: "Aamarr P.",
      image: TestimonialPic1,
      quote:
        "Chatting with my favorite celeb feels so personal! I loved earning Celeboins just by sharing moments together. Best experience ever",
    },
    {
      id: 2,
      name: "Sophie T.",
      image: TestimonialPic2,
      quote:
        "The AI interaction is mind-blowing! I can text my fave stars anytime and feel like they really get me. It’s more than just a fan site",
    },
    {
      id: 3,
      name: "Sandeep S., CEO of EcoTech Solutions",
      image: TestimonialPic3,
      quote:
        "Partnering with Celebfie means tapping into a vibrant fan community. Our campaigns feel more alive when celebs are genuinely connected",
    },
    {
      id: 4,
      name: "Simran K.",
      image: TestimonialPic4,
      quote:
        "I never thought I could actually virtually hang out with my idols. The emojis turn into Celeboins, and I have already got merch on the way",
    },
    {
      id: 5,
      name: "Dolly J., Marketing Manager at Trendy Apparel",
      image: TestimonialPic5,
      quote:
        "“Celebfie allowed us to showcase our products through authentic celebrity interactions, and we’ve seen our brand loyalty skyrocke",
    },
    {
      id: 6,
      name: "Vick R., Brand Strategist at Foodies Unite",
      image: TestimonialPic6,
      quote:
        "The innovative platform helped us engage fans in a fun, fresh way. Leveraging celeb influence has opened new doors for our brand",
    },
    {
      id: 7,
      name: "Nidhi V.",
      image: TestimonialPic7,
      quote:
        "I snagged VIP passes to a concert just by interacting with my stars! Celebfie 3.0 makes fandom totally rewarding",
    },
  ];


const Testimonial = () => {
    const [pause, setPause] = useState(false);
    const swiperRef = useRef(null);

    const handleSlideChange = useCallback(() => {
        const swiper = swiperRef.current;
        if (swiper && swiper.slides) {
            swiper.slides.forEach((slide) => {
                const rect = slide.getBoundingClientRect();
                const slideCenter = rect.left + rect.width / 2;
                const viewportCenter = window.innerWidth / 2;

                const flipCardInner = slide.querySelector('.flip-card-inner');
                if (flipCardInner) {
                    if (Math.abs(slideCenter - viewportCenter) < rect.width / 2) {
                        flipCardInner.classList.add('flipped');
                    } else {
                        flipCardInner.classList.remove('flipped');
                    }
                }
            });
        }
    }, []);

    useEffect(() => {
        handleSlideChange(); // Initial check
        window.addEventListener('resize', handleSlideChange);
        const swiperInstance = swiperRef.current;
        if (swiperInstance) {
            swiperInstance.on('slideChange', handleSlideChange);
            swiperInstance.on('transitionEnd', handleSlideChange);
        }

        return () => {
            window.removeEventListener('resize', handleSlideChange);
            if (swiperInstance) {
                swiperInstance.off('slideChange', handleSlideChange);
                swiperInstance.off('transitionEnd', handleSlideChange);
            }
        };
    }, [handleSlideChange]);

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            speed={1000} // Reduced speed for smoother transitions
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
        >
            {testimonials.map((testimonial) => (
                <SwiperSlide
                    key={testimonial.id}
                    className="flip-card"
                    onMouseEnter={() => {
                        if (swiperRef.current) swiperRef.current.autoplay.stop();
                        setPause(true);
                    }}
                    onMouseLeave={() => {
                        if (swiperRef.current) swiperRef.current.autoplay.start();
                        setPause(false);
                    }}
                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20rem' }}
                            />
                        </div>
                        <div className="flip-card-back">
                            <p className="testimonial_name_title" >{testimonial.name}</p>
                            <p className='testimonial_quote'>{testimonial.quote}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Testimonial;
