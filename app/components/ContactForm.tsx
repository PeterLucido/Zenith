'use client'

import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <h2 className="text-4xl font-light mb-8 text-center text-white">Contact Us</h2>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border-0 border-b border-white bg-transparent text-white placeholder-white focus:ring-0 focus:border-white focus:outline-none p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-0 border-b border-white bg-transparent text-white placeholder-white focus:ring-0 focus:border-white focus:outline-none p-2"
          />
        </div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border-0 border-b border-white bg-transparent text-white placeholder-white focus:ring-0 focus:border-white focus:outline-none p-2"
        />
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full border-0 border-b border-white bg-transparent text-white placeholder-white focus:ring-0 focus:border-white focus:outline-none p-2"
        >
          <option value="" disabled className="text-gray-500">
            Subject
          </option>
          <option value="software" className="text-black">Software</option>
          <option value="networking" className="text-black">Networking</option>
          <option value="partners" className="text-black">Partners</option>
          <option value="other" className="text-black">Other</option>
        </select>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full min-h-[150px] border-0 border-b border-white bg-transparent text-white placeholder-white focus:ring-0 focus:border-white focus:outline-none p-2 resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-md hover:bg-gray-200 transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
