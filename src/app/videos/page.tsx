"use client"
import HeroSection from '@/components/hero-section/HeroSection'
import ImageBox from '@/components/mainBoxes/videoBox/videoBox'
import Bar from '@/components/img-vid-bar/bar'
import TitleSection from '@/components/titleBar/mainSection'
import React from 'react'

function Home() {
  return (
    <>
        <HeroSection type='video'/>
        <Bar/>
        <TitleSection
					title="Free Stock Videos"
					titleClassName="font-medium mt-8"
				/>
        <ImageBox />
    </>
  )
}

export default Home