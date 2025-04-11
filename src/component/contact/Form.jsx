import React from 'react'

function Form() {
  return (
    <section className="py-20  bg-white">
      <div className="max-w-[1440px] mx-auto grid px-[15px] md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <div>
          <h3 className="text-[44px] font-semibold mb-6">
            Get In <span className="text-[#018d43]">Touch</span> With Us
          </h3>
          <form
            className="space-y-6"
          >

            <div>
              <label className="block text-[#696969] mb-1">
                Your Name*
              </label>
              <input
                required
                type="text"
                id="contact_form_page-name"
                name="contact[name]"
                className="w-full border border-gray-300  p-3"
              />
            </div>

            <div>
              <label className="block mb-1 text-[#696969]">
                Your Email*
              </label>
              <input
                required
                type="email"

                name="email"
                className="w-full border border-gray-300  p-3"
              />
            </div>

            <div>
              <label  className="block mb-1 text-[#696969]">
                Question*
              </label>
              <textarea
                rows="7"
                name="body"
                required
                className="w-full border border-gray-300  p-3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#018d43] hover:cursor text-white font-medium py-3 px-6  transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Embedded Map */}
        <div >
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1558182231074!2d72.80666497587615!3d21.22566888098516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa535872d2f%3A0xd022b05cca2643f8!2sDevprayag%20residency!5e0!3m2!1sen!2sin!4v1733720544625!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe> */}
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1859.5800505363418!2d72.809125!3d21.225499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa535872d2f%3A0xd022b05cca2643f8!2sDevprayag%20Residency!5e0!3m2!1sen!2sin!4v1744084030543!5m2!1sen!2sin"
  width="100%"
  height="600"
  style={{ border: 0 }}
  className='  '
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Location Map"
/>
        </div>
      </div>
    </section>
  )
}

export default Form
