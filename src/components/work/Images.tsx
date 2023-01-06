import React from 'react'
import { contentAnimation } from '../../config/animate'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/zoom'
import 'swiper/css/pagination'
import 'swiper/css'
import { Image } from 'antd'

import { IWork } from '../../ts-interfaces'

const Images = ({ info }: { info: IWork }) => {
  return (
    <div className='image-container'>
      <motion.div
        {...contentAnimation}
        className='images'>
        <Swiper
          spaceBetween={30}
          pagination={{ dynamicBullets: true, clickable: true }}
          modules={[Pagination]}
          zoom={true}
          className=''>
          {info.images.map((image: string, index: number) => (
            <SwiperSlide key={index}>
              <div className='swiper-zoom-container images'>
                <Image
                  className='img'
                  src={image}
                  alt={info.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  )
}

export default Images
