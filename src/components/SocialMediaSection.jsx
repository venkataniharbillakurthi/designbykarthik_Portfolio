import React from 'react';
// Swiper Core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SocialMediaSection = () => {
  // Array for the top-right grid of social media posts
  const postGridImages = [
    "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775040213/Group_52_2_ynj18c.png",
    "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775039492/Group_52_1_sztn0h.png",
    "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775039492/Group_52_3_gaheop.png",
  ];

  // Array for the images inside the Maya Bazar auto-slider
  const sliderImages = [
    "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775039492/ZARIVARAM_1_whgotl.png",
    "https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775039492/Banner_Dista_1_xxuban.png",
  ];

  return (
    <section id="social-media" className="relative bg-white  overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Top Typography Header */}
        <div className="mb-10 md:mb-16 max-w-4xl">
          <h1 className="font-bold text-black tracking-tighter leading-none" style={{ fontSize: 'clamp(50px, 10vw, 100px)'}  }>
            SOCIAL MEDIA
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mt-4 font-medium">
            Logos, identity systems, and visual direction for modern brands.
          </p>
        </div>

        {/* Main Content Grid: flex-col on mobile, grid on desktop */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-4 items-start">
          
          {/* LEFT: IPHONE MOCKUP (4 Columns) - Stacks on bottom/middle for mobile */}
          <div className="order-2 md:order-1 md:col-span-4 flex justify-center md:justify-start w-full">
            <div className="relative w-full max-w-[300px] md:max-w-[380px] md:-translate-x-4">
              <img 
                src="https://res.cloudinary.com/dn9lv7p7d/image/upload/q_auto/f_auto/v1775040214/iPhone_11_Pro_3x_1_hkh0js.png" 
                alt="iPhone 11 Pro Mockup" 
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>

          {/* RIGHT: CONTENT BLOCKS (8 Columns) - Stacks on top for mobile */}
          <div className="order-1 md:order-2 md:col-span-8 space-y-5 relative w-full">
            
            {/* Right Row 1: Triple Post Grid */}
            <div className="grid grid-cols-3 gap-2 items-end">
              {postGridImages.map((src, index) => (
                <div key={index} className={`rounded-[12px] md:rounded-[20px] overflow-hidden ${index === 0 ? 'scale-90 origin-bottom' : ''} ${index === 1 ? 'scale-95 origin-bottom' : ''}`}>
                  <img 
                    src={src} 
                    alt={`Social Post ${index + 1}`} 
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Right Row 2: Maya Bazar Auto-Slider Block */}
            <div className="relative rounded-[15px] md:rounded-[25px] overflow-hidden bg-gray-50 aspect-[1.8/1] md:aspect-[2.4/1]">
              <Swiper
                modules={[Autoplay, Pagination]}
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

            {/* Navigation Button (Arrow) - Hidden on Mobile */}
            <div className="hidden md:block absolute bottom-10 right-0 md:-right-20">
              <div className="relative cursor-pointer hover:scale-110 transition-transform flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dn9lv7p7d/image/upload/v1774431617/Button_18_1_w7jewn.png" 
                  alt="Navigation Arrow" 
                  className="w-32 h-32 md:w-16 md:h-9"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM TIMELINE / LINE */}
        <div className="mt-12 md:mt-14 relative h-10 w-screen left-1/2 -translate-x-1/2 overflow-hidden">
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