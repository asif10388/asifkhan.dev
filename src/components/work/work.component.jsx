import React from "react"
import "./work.styles.scss"
import CustomButton from "../custom-button/custom-button.component"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { useStaticQuery, graphql } from "gatsby"

const Work = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
            context {
              custom {
                Url
                alt
                caption
              }
            }
          }
        }
      }
    }
  `)
  data.allCloudinaryMedia.edges.shift()
  const WorkData = data.allCloudinaryMedia.edges

  return (
    <section className="work-body" id="works">
      <div className="container px-4 lg:px-24 py-12 mx-auto">
        <div className="flex flex-col justify-center py-6">
          <h2 className="font-bold text-4xl mb-2 sm:mb-0">Featured Projects</h2>
          <div className="flex mt-4">
            <div className="w-4/5 md:w-1/5 h-1 rounded-full line inline-flex"></div>
          </div>
        </div>
        {WorkData.map((work, index) => {
          const flipOrder = index % 2 === 0
          const info = work.node.context.custom
          return (
            <div
              className="mx-auto flex py-16 md:flex-row flex-col items-center"
              key={index}
            >
              <div
                className={` ${
                  !flipOrder
                    ? `md:order-2 md:items-end md:text-right lg:pl-48`
                    : "items-start lg:pr-48"
                } lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col mb-16 md:mb-0`}
              >
                <h2 className="font-bold sm:text-4xl text-3xl mb-2">
                  {info.caption}
                </h2>
                <p className="mb-12 leading-relaxed text-gray-600">
                  {info.alt}
                </p>

                <div className="flex md:justify-center">
                  <a href={info.Url} target="_blank">
                    <CustomButton isPrimary>Visit Site</CustomButton>
                  </a>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
                <img
                  className="w-full h-full object-cover object-center rounded"
                  alt="Project"
                  src={work.node.secure_url}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Work
