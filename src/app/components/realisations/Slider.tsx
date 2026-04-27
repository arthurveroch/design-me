'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Project } from '@/payload-types'
import styles from './slider.module.css'
import Button from '@/app/reusable-ui/button/Button'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

import 'swiper/css'
import Image from 'next/image'

type Props = {
  projects: Project[]
}

export default function Slider({ projects }: Props) {
  const sliderRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(sliderRef.current, {
        opacity: 0,
        transform: 'translateY(300px)',
        duration: 0.3,
        scrollTrigger: {
          trigger: sliderRef.current,
          start: 'top 100%',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sliderRef} className={styles.swiperContainer}>
      <div className={styles.navigationButtons}>
        <button className={`${styles.prevSlide} prev`}>
          <Image
            src={'/buttons-icons/prev.svg'}
            width={40}
            height={40}
            alt="Icone de slider pour la slide précédente"
          />
        </button>
        <button className={`${styles.nextSlide} next`}>
          <Image
            src={'/buttons-icons/next.svg'}
            width={40}
            height={40}
            alt="Icone de slider pour la slide suivante"
          />
        </button>
      </div>
      <Swiper
        className={styles.sliderContainer}
        autoplay
        modules={[Navigation]}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {projects.map((project) => {
          return (
            <SwiperSlide
              style={{
                background: `url(${typeof project.background === 'object' && project.background?.url})`,
              }}
              className={styles.slide}
              key={project.id}
            >
              <div className={styles.description}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <Button
                  target="_blank"
                  link={project.link}
                  icon="/buttons-icons/target-blank.svg"
                  content="Voir le site"
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
