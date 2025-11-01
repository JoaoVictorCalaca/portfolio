import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import { Car } from 'lucide-react'
import CarouselItem from './ui/CarouselItem'
import { projects } from '@/lib/projects'

function Projects() {
  return (
    <div className='w-full bg-cover p-6 bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 flex flex-col items-center justify-center gap-4' id='projects'>
      <h1 className='text-4xl'>Projetos pessoais</h1>

      <div className="w-full relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
          navigation={false}
          className="w-full"
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-6 shadow-lg overflow-hidden transition-transform max-w-sm"
            >
              <CarouselItem project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Projects