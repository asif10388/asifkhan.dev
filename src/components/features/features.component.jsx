import React from "react"
import "./features.styles.scss"

const Features = () => {
  return (
    <section className="features-body mb-24">
      <div className="container px-4 lg:px-24 pt-24 pb-32 mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl mb-4">What I Do.</h2>
          <div className="flex mt-4">
            <div className="w-3/5 md:w-1/5 h-1 rounded-full line inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-no-wrap lg:flex-wrap justify-between">
          <div className="feature-card">
            <div className="feature-image">
              <img
                src="https://res.cloudinary.com/asif10388/image/upload/v1632998565/Web_Dev_qbd2ti.svg"
                alt="Web Development"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl title-font font-medium mb-3">
                Web Development
              </h3>
              <p className="leading-relaxed text-base sm:px-4">
                Beautiful websites for any business is a must. That's why I
                ensure that all websites I built are 100% responsive and will
                deliver a great user experience.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-image">
              <img
                src="https://res.cloudinary.com/asif10388/image/upload/v1632998545/Design_Pen_o2tswd.svg"
                alt=" Web Design"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl title-font font-medium mb-3">
                Web Design
              </h3>
              <p className="leading-relaxed text-base sm:px-4">
                I focus on designing pixel perfect websites and illustrations so
                your consumers can have an amazing time on your site.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-image">
              <img
                src="https://res.cloudinary.com/asif10388/image/upload/v1633000053/SEO_phkovs.svg"
                alt="Search Engine Optimization"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl title-font font-medium mb-3">SEO</h3>
              <p className="leading-relaxed text-base sm:px-4">
                Just designing and building a website isn't enough. You need
                people to know about it. So, I can help you with SEO rank on the
                first page also
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Features
