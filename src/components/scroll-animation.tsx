"use client"
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function ScrollAnimation() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Setup ScrollTrigger
    ScrollTrigger.defaults({
      markers: process.env.NODE_ENV === 'development'
    })

    // Example animation
    gsap.to(".animated-element", {
      scrollTrigger: {
        trigger: ".trigger-section",
        start: "top center",
        end: "bottom center",
        scrub: 1
      },
      x: 300,
      rotation: 360,
      duration: 2
    })

    // Parallax effect
    gsap.to(".parallax-bg", {
      scrollTrigger: {
        trigger: ".parallax-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: 100,
      ease: "none"
    })
  }, { scope: container })

  return (
    <div ref={container} className="space-y-20">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">Scroll Down</h1>
      </section>

      {/* Animated Section */}
      <section className="trigger-section h-screen flex items-center justify-center bg-slate-800">
        <div className="animated-element p-8 bg-primary text-primary-foreground rounded-lg text-xl">
          I will animate on scroll!
        </div>
      </section>

      {/* Parallax Section */}
      <section className="parallax-section h-screen relative overflow-hidden">
        <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-50"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h2 className="text-4xl font-bold">Parallax Effect</h2>
        </div>
      </section>

      {/* Final Section */}
      <section className="h-screen flex items-center justify-center">
        <h3 className="text-3xl">You've reached the end!</h3>
      </section>
    </div>
  )
}