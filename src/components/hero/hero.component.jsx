import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./hero.styles.scss"
import CustomButton from "../custom-button/custom-button.component"
import scrollTo from "gatsby-plugin-smoothscroll"

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
        <div className="lg:flex-grow lg:w-1/2 lg:pr-10 flex flex-col mb-16 md:mb-0">
          <p className="text-lg font-semibold leading-relaxed">
            I'm Asif & I'll
          </p>
          <h1 className="sm:text-3xl text-2xl mb-4 font-medium">
            Make your business stand out <br className="hidden md:block" /> with
            websites that convert.
          </h1>
          <p className="mb-8 leading-relaxed w-full">
            For over 3 years, I've been helping startups, corporate businesses,
            non-profits, bring their business online. I specialize in building
            professional, user-friendly, high-converting and lightning fast
            websites.
          </p>
          <div className="flex flex-row items-center md:items-start">
            <CustomButton
              isPrimary
              utilities="mr-4 md:mr-8"
              onClick={() => scrollTo("#works")}
            >
              My Projects
            </CustomButton>
            <div className="tooltip">
              <CustomButton
                isSecondary
                onClick={copyToClipBoard}
                onMouseOut={outFunc}
              >
                <span className="tooltiptext" id="myTooltip">
                  {toolTip}
                </span>
                Copy Email
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="relative lg:hidden w-full">
          <img
            className="object-cover object-center rounded"
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
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
export default Hero
