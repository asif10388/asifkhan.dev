import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./hero.styles.scss"
import CustomButton from "../custom-button/custom-button.component"
//import scrollTo from "gatsby-plugin-smoothscroll"

const Hero = () => {
  const [toolTip, setToolTip] = useState("Copy to clipboard")

  const copyToClipBoard = () => {
    navigator.clipboard.writeText("asif.khan10388@gmail.com")
    setToolTip("Copied: asif.khan10388@gmail.com")
  }

  const outFunc = () => {
    setToolTip("Copy to clipboard")
  }

  return (
    <section className="hero-body">
      <div className="container mx-auto flex px-4 lg:px-24 py-32 md:flex-row flex-col items-center">
        <div className="lg:flex-grow lg:w-1/2 lg:pr-24 flex flex-col mb-16 md:mb-0">
          <p className="text-lg font-semibold leading-relaxed">I'm Asif &</p>
          <h1 className="sm:text-4xl text-3xl mb-4 font-medium">
            I Will Help You Build
            <br />
            <span>Digital Experiences</span>
          </h1>
          <p className="mb-8 leading-relaxed w-4/5 lg:w-full">
            For over 3 years, I've been helping startups, corporate businesses,
            non-profits, and pets launch their online business.
          </p>
          <div className="flex flex-row items-center md:items-start">
            <CustomButton
              isPrimary
              utilities="mr-4 md:mr-8"
              // onClick={() => scrollTo("#works")}
            >
              My Projects
            </CustomButton>
            <div class="tooltip">
              <CustomButton
                isSecondary
                onClick={copyToClipBoard}
                onMouseOut={outFunc}
              >
                <span class="tooltiptext" id="myTooltip">
                  {toolTip}
                </span>
                Email Me!
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="relative lg:hidden w-full">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://res.cloudinary.com/asif10388/image/upload/v1631978564/Images/hero3_1-min_vu9wjg.png"
          />
        </div>
        <div className="relative hidden lg:block lg:max-w-lg lg:w-full">
          <StaticImage
            src="https://res.cloudinary.com/asif10388/image/upload/v1631978564/Images/hero3_1-min_vu9wjg.png"
            quality={95}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            alt="Web Developer Hero"
          />
        </div>
      </div>
    </section>
  )
}
export default Hero