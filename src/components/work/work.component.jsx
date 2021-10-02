import React from "react"
import "./work.styles.scss"
import CustomButton from "../custom-button/custom-button.component"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { WorkData } from "../../static-data/static-data.js"

const Work = () => (
  <section className="work-body" id="works">
    <div className="container px-4 lg:px-24 py-12 mx-auto">
      <div className="flex flex-col justify-center py-6">
        <h2 className="font-bold text-4xl mb-2 sm:mb-0">Featured Projects</h2>
        <div className="w-4/5 md:w-1/5 h-1 rounded-full line inline-flex"></div>
      </div>
      {WorkData.map(work => {
        const flipOrder = work.id % 2 === 0
        return (
          <div class="mx-auto flex py-16 md:flex-row flex-col items-center">
            <div
              class={` ${
                flipOrder
                  ? `md:order-2 md:items-end md:text-right lg:pl-48`
                  : "items-start lg:pr-48"
              } lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col mb-16 md:mb-0`}
            >
              <h2 class="font-bold sm:text-4xl text-3xl">{work.title}</h2>
              <div class="font-bold flex my-4">
                {work.tags.map(tag => (
                  <div
                    class={`${
                      flipOrder ? "mr-4 md:mr-0 md:ml-4" : "mr-4"
                    } px-2 py-1 bg-green-500 rounded tag`}
                  >
                    <p class="text-sm">{tag}</p>
                  </div>
                ))}
              </div>
              <p class="mb-12 leading-relaxed text-gray-600">
                {work.description}
              </p>

              <div class="flex md:justify-center">
                <CustomButton isPrimary>
                  <OutboundLink
                    href={work.url}
                    tOutboundLinkrget="_blank"
                    rel="noreferrer"
                  >
                    Visit Site
                  </OutboundLink>
                </CustomButton>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={work.imgUrl}
              />
            </div>
          </div>
        )
      })}
    </div>
  </section>
)

export default Work