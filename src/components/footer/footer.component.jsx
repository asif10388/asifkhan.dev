import React from "react"
import "./footer.styles.scss"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faFacebook,
  faLinkedin,
  faGithub,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer className="footer-body">
    <div className="container px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
      <div className="flex-grow flex flex-wrap md:pr-20 md:text-left order-first">
        <div className="md:w-1/2 w-full flex items-center mb-5 mb:mb-0">
          <h2 className="title-font font-medium text-lg mr-3">Asif Khan</h2>
          <nav className="list-none ml-auto md:ml-0">
            <ul className="flex">
              <li className="mr-3">
                <a
                  href="https://drive.google.com/uc?export=download&id=1X7NnqxpnlBvXOPIX4Kvx1dFneppRDxec"
                  className="text-gray-600"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-end">
          <nav className="list-none flex justify-start mb-2 sm:mb-0">
            <ul className="flex nav-links">
              <li className="mr-12">
                <OutboundLink
                  href="https://dribbble.com/asif10388"
                  className="text-gray-600 mr-3"
                  target="_new"
                  aria-label="Dribble"
                >
                  <FontAwesomeIcon icon={faDribbble} size="2x" />
                </OutboundLink>
              </li>
              <li className="mr-12">
                <OutboundLink
                  href="https://github.com/asif10388"
                  className="text-gray-600 mr-3"
                  target="_new"
                  aria-label="Github"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </OutboundLink>
              </li>
              <li className="mr-12">
                <OutboundLink
                  href="https://www.linkedin.com/in/asif10388/"
                  className="text-gray-600 mr-3"
                  target="_new"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  href="https://www.facebook.com/asif10388"
                  className="text-gray-600"
                  target="_new"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </OutboundLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row text-center md:text-left">
      <p className="text-gray-600 text-xs">
        ©{new Date().getFullYear()} asifkhan — All Rights Reserved
      </p>
    </div>
  </footer>
)

export default Footer
