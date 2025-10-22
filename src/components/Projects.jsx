import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import { Car } from 'lucide-react'
import CarouselItem from './ui/CarouselItem'

const projects = [
  {
    title: 'Letrix',
    description: 'Jogo inspirado no Termo, onde o jogador precisa adivinhar uma palavra de 5 letras em ate 5 tentativas.',
    image: '/project5.png',
    link: 'https://letrix-mocha.vercel.app',
    stacks: 'Next.js, Tailwind CSS'
  },
  {
    title: 'Gerador de frases',
    description: 'App web simples que cria frases aleatórias e divertidas',
    image: '/project1.png',
    link: 'https://daily-advice-ochre.vercel.app',
    stacks: 'Next.js, Tailwind CSS'
  },
  {
    title: 'Movie Discover',
    description: 'Site simples para buscar filmes e acompanhar as novidades do mundo cinematográfico, consumindo a api do TMDB.',
    image: '/project2.png',
    link: 'https://movie-discover-rho.vercel.app',
    stacks: 'Next.js, Tailwind CSS'
  },
  {
    title: 'Simple Todo App',
    description: 'Ainda em desenvolvimento, uma aplicação simples de lista de tarefas.',
    image: '/project3.png',
    link: 'https://fast-todo-eta.vercel.app',
    stacks: 'Next.js, Tailwind CSS'
  },
  {
    title: 'jnews',
    description: 'Ainda em desenvolvimento, um agregador de notícias que consome a API do NewsAPI.',
    image: '/project4.png',
    link: 'https://jnews-rouge.vercel.app',
    stacks: 'Next.js, Tailwind CSS'
  },
]

function Projects() {
  return (
    <div className='w-full bg-cover p-6 bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 flex flex-col items-center justify-center gap-4'>
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