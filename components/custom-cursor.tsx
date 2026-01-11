'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    
    const addHover = () =>
    cursorRef.current?.classList.add('scale-150')

    const removeHover = () =>
    cursorRef.current?.classList.remove('scale-150')

    document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', addHover)
    el.addEventListener('mouseleave', removeHover)
})

    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return

      cursorRef.current.style.left = `${e.clientX}px`
      cursorRef.current.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)

  }, [])

  return (
    <div
      ref={cursorRef}
      className="
        fixed
        top-0 left-0
        w-3 h-3
        bg-[#101c3d]
        dark:bg-[#AA9D8D]
        rounded-full
        pointer-events-none
        z-[9999]
        transition-transform duration-150
      "
    />
  )
}
