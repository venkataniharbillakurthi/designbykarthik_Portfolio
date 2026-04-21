import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper required modules
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Import the specific fade style

const SocialMediaSection = () => {
  const postGridImages = [
    "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775040213/Group_52_2_ynj18c.png",
    "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775039492/Group_52_1_sztn0h.png",
    "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775039492/Group_52_3_gaheop.png",
  ];

  const sliderImages = [
    "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775039492/ZARIVARAM_1_whgotl.png",
    "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775039492/Banner_Dista_1_xxuban.png",
  ];

  return (
    <section id="social-media" className="relative bg-white overflow-hidden ">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="mb-10 md:mb-16 max-w-4xl">
          <h1 className="font-bold text-black tracking-tighter leading-none" style={{ fontSize: 'clamp(50px, 10vw, 100px)'}}>
            SOCIAL MEDIA
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mt-4 font-medium">
            Logos, identity systems, and visual direction for modern brands.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-4 items-start">
          
          <div className="order-2 md:order-1 md:col-span-4 flex justify-center md:justify-start w-full">
            <div className="relative w-full max-w-[300px] md:max-w-[380px] md:-translate-x-4">
              <img 
                src="https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775040214/iPhone_11_Pro_3x_1_hkh0js.png" 
                alt="iPhone 11 Pro Mockup" 
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-span-8 space-y-5 relative w-full">
            
            <div className="grid grid-cols-3 gap-2 items-end">
              {postGridImages.map((src, index) => (
                <div key={index} className={`rounded-[12px] md:rounded-[20px] overflow-hidden ${index === 0 ? 'scale-90 origin-bottom' : ''} ${index === 1 ? 'scale-95 origin-bottom' : ''}`} >
                  <img 
                    src={src} 
                    alt={`Social Post ${index + 1}`} 
                    className="w-full h-auto object-contain drop-shadow-base"
                  />
                </div>
              ))}
            </div>

            <div className="relative rounded-[15px] md:rounded-[25px] overflow-hidden bg-gray-50 aspect-[1.8/1] md:aspect-[2.4/1]">
              <Swiper
                // Added EffectFade to the modules array
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade" // Set the effect to fade
                fadeEffect={{ crossFade: true }} // Ensures a smooth transition between images
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                pagination={{ 
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet !bg-black !w-2 !h-2 md:!w-2.5 md:!h-2.5 !opacity-30',
                  bulletActiveClass: 'swiper-pagination-bullet-active !opacity-100'
                }}
                className="w-full h-full mySwiper"
              >
                {sliderImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={src} 
                      alt={`Slider Image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-14 relative h-10 w-full overflow-hidden">
          <div className="absolute left-0 w-[95%] md:w-[85%] flex items-center">
            <img 
              src="https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774431617/Line_299_wbbpgf.png" 
              alt="Timeline" 
              className="w-full h-auto opacity-80 scale-x-[-1] "
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SocialMediaSection;