import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import {
  MyTextInput,
  MyTextArea,
} from "../form-elements/form-elements.component"
import CustomButton from "../custom-button/custom-button.component"
import "./contact.styles.scss"

class Contact extends React.Component {
  render() {
    const encode = data => {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
    }
    return (
      <div className="text-black" id="contact">
        <Formik
          initialValues={{ fullname: "", email: "", message: "" }}
          validationSchema={Yup.object({
            fullname: Yup.string()

              .max(25, "Must be 15 characters or less")

              .required("Required"),

            email: Yup.string()

              .email("Invalid email address")

              .required("Required"),
            message: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            fetch("/", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: encode({ "form-name": "contact", ...values }),
            })
              .then(() => {
                alert("Success")
                resetForm()
              })
              .catch(() => {
                alert("Error")
              })
              .finally(() => setSubmitting(false))
          }}
        >
          <section className="relative sm:rounded-lg contact-body">
            <div className="container px-4 lg:px-24 py-24 md:mx-auto">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-1/2 mb-12">
                  <h2 className="sm:text-4xl text-2xl mb-4">
                    Let's talk about your project!
                  </h2>
                  <p className="lg:w-3/4 text-gray-700 text-xs leading-relaxed text-base mb-5">
                    Want to build something amazing? Let’s talk about your
                    amazing idea and figure out together how we can bring it to
                    life. Message me and let's talk.
                  </p>
                  <div className="my-auto">
                    <h2 className="sm:text-3xl text-xl">
                      For questions, email me at
                    </h2>
                    <h2 className="sm:text-3xl text-lg">
                      asif(.)khan10388(@)gmail(.)com
                    </h2>
                  </div>
                </div>

                <div className="w-full md:w-1/2 md:mx-auto md:px-6">
                  <Form
                    method="post"
                    netlify-honeypot="bot-field"
                    data-netlify={true}
                    name="contact"
                    className="flex flex-col sm:flex-row flex-wrap"
                  >
                    <div className="py-2 sm:w-full">
                      <MyTextInput
                        label="Full Name"
                        name="fullname"
                        type="text"
                        placeholder="Will Smith"
                      />
                    </div>
                    <div className="py-2 sm:w-full">
                      <MyTextInput
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="example@domain.com"
                      />
                    </div>
                    <div className="py-2 sm:w-full">
                      <MyTextArea
                        label="Message"
                        name="message"
                        type="text"
                        placeholder="Say hi..."
                      />
                    </div>
                    <div className="py-2">
                      <CustomButton isPrimary type="submit">
                        Let's Talk!
                      </CustomButton>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </section>
        </Formik>
      </div>
    )
  }
}
export default Contact
