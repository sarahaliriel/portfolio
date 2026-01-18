'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  const [isHovering, setIsHovering] = useState(false)
  const [showLabel, setShowLabel] = useState(false)

  // refs para controlar timers
  const openTimer = useRef<NodeJS.Timeout | null>(null)
  const closeTimer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return
      cursorRef.current.style.left = `${e.clientX}px`
      cursorRef.current.style.top = `${e.clientY}px`
    }

    const addView = () => {
      // cancela fechamento pendente
      if (closeTimer.current) {
        clearTimeout(closeTimer.current)
        closeTimer.current = null
      }

      setIsHovering(true)

      openTimer.current = setTimeout(() => {
        setShowLabel(true)
      }, 120)
    }

    const removeView = () => {
      // cancela abertura pendente
      if (openTimer.current) {
        clearTimeout(openTimer.current)
        openTimer.current = null
      }

      setShowLabel(false)

      closeTimer.current = setTimeout(() => {
        setIsHovering(false)
      }, 100)
    }

    document.querySelectorAll('[data-cursor="view"]').forEach(el => {
      el.addEventListener('mouseenter', addView)
      el.addEventListener('mouseleave', removeView)
    })

    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{ transform: 'translate(-50%, -50%)' }}
      className={`
        fixed top-0 left-0 z-[9999] pointer-events-none
        flex items-center justify-center rounded-full

        transition-[width,height,background-color] duration-300 ease-out

        ${
          isHovering
            ? `
              w-16 h-10
              bg-[#101c3d]
              dark:bg-[#AA9D8D]
            `
            : `
              w-3 h-3
              bg-[#101c3d]
              dark:bg-[#AA9D8D]
            `
        }
      `}
    >
      <span
        className={`
          text-sm font-medium whitespace-nowrap
          transition-all duration-200 ease-out
          ${
            showLabel
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-1'
          }
          text-white dark:text-black
        `}
      >
        Ver
      </span>
    </div>
  )
}
