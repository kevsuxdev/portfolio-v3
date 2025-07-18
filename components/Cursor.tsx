"use client"
import React, { useEffect } from 'react'

interface AnimatedCircle extends HTMLDivElement {
  x: number
  y: number
}


const Cursor = () => {

useEffect(() => {
  const coords = { x: 0, y: 0 }

  const circles = Array.from(window.document.querySelectorAll('.circle')) as AnimatedCircle[]
  const cursor = window.document.querySelector('.cursor') as HTMLDivElement | null

  circles.forEach((circle) => {
    circle.x = 0
    circle.y = 0
    circle.style.backgroundColor = 'white'
  })

  window.addEventListener('mousemove', (event) => {
    coords.x = event.clientX
    coords.y = event.clientY
  })

  const animateCircles = () => {
    let { y, x} = coords

    if (cursor) {
      // @ts-expect-error Assigning number directly to style.left; needs px string
      cursor.style.left = x
      // @ts-expect-error Assigning number directly to style.top; needs px string
      cursor.style.top = y
    }

    circles.forEach((circle, index) => {
      circle.style.left = `${x - 12}px`
      circle.style.top = `${y - 12}px`
      circle.style.scale = `${(circles.length - index) / circles.length}`

      circle.x = x
      circle.y = y

      const nextCircle = circles[index + 1] || circles[0]

      x += (nextCircle.x - x) * 0.3
      y += (nextCircle.y - y) * 0.3
    })

    requestAnimationFrame(animateCircles)
  }

  animateCircles()
}, [])

  return (
    <div className='cursor'>
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
    </div>
  )
}

export default Cursor
