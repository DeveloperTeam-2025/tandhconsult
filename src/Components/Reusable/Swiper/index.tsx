import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './style.module.scss';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function index() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
          clickable: true,
        }}
        navigation={{
          prevEl: '#prev',
          nextEl: '#next',
        }}
        modules={[ Navigation]}
        className="mySwiper"
        style={{padding: '0rem 5rem'}}
      >
        
        <SwiperSlide><picture style={{height: '5rem'}} className={styles.partner_pic}><img src="https://tandhconsult.com/wp-content/uploads/2024/04/nordvpn_logo_rgb_primary_blue_black.png" alt="1" /></picture></SwiperSlide>
        <SwiperSlide><picture style={{height: '5rem'}} className={styles.partner_pic}><img src="https://tandhconsult.com/wp-content/uploads/2021/09/bitrank_registersymbol_2019_oneline_329x70.png" alt="2" /></picture></SwiperSlide>
        <SwiperSlide><picture style={{height: '5rem'}} className={styles.partner_pic}><img src="https://tandhconsult.com/wp-content/uploads/2022/12/logo3.webp" alt="3" /></picture></SwiperSlide>
        <SwiperSlide><picture style={{height: '5rem'}} className={styles.partner_pic}><img src="https://tandhconsult.com/wp-content/uploads/2024/04/logotype-color-horizontal.png" alt="4" /></picture></SwiperSlide>
        <SwiperSlide><picture style={{height: '5rem'}} className={styles.partner_pic}><img src="https://tandhconsult.com/wp-content/uploads/2021/09/qlue_tm_2019_193x55.png" alt="5" /></picture></SwiperSlide>
        <SwiperSlide><picture style={{height: '5rem'}} className={styles.partner_pic}><img src="https://tandhconsult.com/wp-content/uploads/2023/08/learnvent_colour.png" alt="6" /></picture></SwiperSlide>
        <SwiperSlide><picture style={{height: '5rem'}} className={styles.partner_pic}><img src="https://tandhconsult.com/wp-content/uploads/2023/08/navy-1.png" alt="7" /></picture></SwiperSlide>
        <div className={styles.custom_prev} id='prev'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </div>
        <div className={styles.custom_next} id='next'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </div>
      </Swiper>

    </>
  );
}
