"use client"
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from "swiper/modules"
import 'swiper/css';
import "swiper/css/effect-fade"
import { Button } from '@/src/components/ui/button'
import Title from '@/src/components/ui/title'
import { testimonialData } from '@/src/lib/fackData/testimonialData';
import CardOne from './cardOne';
import SlideUp from '@/src/components/animations/slideUp';
import Script from 'next/script'
import CurriculumTable1 from '@/src/components/sections/testimonials/curriculumtable1';
import CurriculumTable2 from '@/src/components/sections/testimonials/curriculumtable2';
import CurriculumTable3 from '@/src/components/sections/testimonials/curriculumtable3';
import Strategy from '@/src/components/sections/strategy'

const Curriculum = () => {


  return (
    <section className='lg:py-15 py-9'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <SlideUp>
          <div className='flex flex-col items-center'>
            <Button variant="secondary">Curriculum</Button>
            <Title size={"5xl"} className="max-w-[869px] pt-6 text-center">UND항공대학교 학과별 커리큘럼</Title>
          </div>
        </SlideUp>
        <SlideUp>
          <CurriculumTable1></CurriculumTable1>

        </SlideUp>
        <SlideUp>
          <CurriculumTable2></CurriculumTable2>
        </SlideUp>
        <SlideUp>
          <CurriculumTable3></CurriculumTable3>
        </SlideUp>
        <SlideUp>
          <Strategy></Strategy>
        </SlideUp>

      </div>
    </section>
  )
}

export default Curriculum