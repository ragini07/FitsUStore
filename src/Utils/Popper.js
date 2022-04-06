import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export const Popper = () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
      recycle={false}
    />
  )
}

