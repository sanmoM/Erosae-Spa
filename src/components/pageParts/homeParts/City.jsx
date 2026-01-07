import Container from '@/components/shared/other/Container'
import React from 'react'

const City = () => {
  return (
    <Container>
              <div className="max-w-3xl mx-auto text-center mb-4 md:mb-12 ">
                <div className="flex justify-center items-center gap-2 mb-3 md:mb-6 ">
                  <div className="h-[1px] w-8  bg-primary"></div>
                  <span className="text-primary font-semibold tracking-[0.2em] uppercase text-xs">
                    Global Presence
                  </span>
                  <div className="h-[1px] w-8 bg-primary"></div>
                </div>
                <h2 className="mb-2 heading-primary">
                  Cities We Serve
                </h2>
                <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                  Experience luxury wellness in your city with our network of certified professionals.
                </p>
              </div>
    </Container>
  )
}

export default City
