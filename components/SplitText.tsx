"use client"

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string
  splitType?: 'chars' | 'words' | 'lines'
  from?: {
    opacity?: number
    y?: number
    x?: number
    scale?: number
    rotateX?: number
    rotateY?: number
    rotateZ?: number
  }
  to?: {
    opacity?: number
    y?: number
    x?: number
    scale?: number
    rotateX?: number
    rotateY?: number
    rotateZ?: number
  }
  threshold?: number
  rootMargin?: string
  textAlign?: 'left' | 'center' | 'right'
  onLetterAnimationComplete?: () => void
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 0.6,
  ease = "power3.out",
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "left",
  onLetterAnimationComplete
}) => {
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [threshold, rootMargin])

  const splitText = () => {
    if (splitType === 'chars') {
      return text.split('').map((char, index) => ({
        char: char === ' ' ? '\u00A0' : char,
        index
      }))
    } else if (splitType === 'words') {
      return text.split(' ').map((word, index) => ({
        char: word,
        index
      }))
    } else {
      return text.split('\n').map((line, index) => ({
        char: line,
        index
      }))
    }
  }

  const splitChars = splitText()

  const getTransition = () => {
    switch (ease) {
      case "power3.out":
        return { type: "tween" as const, ease: [0.215, 0.610, 0.355, 1.000] as const, duration }
      case "power2.out":
        return { type: "tween" as const, ease: [0.165, 0.84, 0.44, 1] as const, duration }
      case "bounce":
        return { type: "spring" as const, bounce: 0.6, duration }
      case "elastic":
        return { type: "spring" as const, bounce: 0.8, duration }
      default:
        return { type: "tween" as const, duration }
    }
  }

  return (
    <div 
      ref={containerRef}
      className={`${className} inline-block`}
      style={{ textAlign }}
    >
      {splitChars.map(({ char, index }) => (
        <motion.span
          key={index}
          initial={from}
          animate={isInView ? to : from}
          transition={{
            ...getTransition(),
            delay: (index * delay) / 1000
          }}
          onAnimationComplete={() => {
            if (index === splitChars.length - 1 && onLetterAnimationComplete) {
              onLetterAnimationComplete()
            }
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}

export default SplitText
