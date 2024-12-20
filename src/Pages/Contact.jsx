import { useState } from "react"
import { FaEnvelope, FaPencilAlt, FaCommentDots } from "react-icons/fa"
import FadeIn from "../Components/FramerMotion/FadeIn"

function Contact() {
  const [formData, setFormdata] = useState({
    email :'',
    subject :'',
    message :'',
  })

  const {email, subject, message} = formData

  const onChange = (e) => {
    setFormdata((prevState) =>({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }


  return (
  <FadeIn>
      <h1 className="text-3xl font-bold mb-8 mt-8 text-center">Me contacter</h1>
    <form className="max-w-lg mx-auto p-6 bg-slate-200  text-white rounded-lg shadow-md space-y-4">
      {/* Email Field */}
      <div className="flex items-center border border-gray-700 rounded-lg p-2">
        <FaEnvelope className="text-gray-400 mr-3" />
        <input
          type="email"
          id="email"
          value={email}
          onChange={onChange}
          placeholder="Votre email"
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
        />
      </div>

      {/* Subject Field */}
      <div className="flex items-center border border-gray-700 rounded-lg p-2">
        <FaPencilAlt className="text-gray-400 mr-3" />
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={onChange}
          placeholder="Sujet"
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
        />
      </div>

      {/* Message Field */}
      <div className="flex items-start border border-gray-700 rounded-lg p-2">
        <FaCommentDots className="text-gray-400 mr-3 mt-1" />
        <textarea
          id="message"
          value={message}
          onChange={onChange}
          placeholder="Votre message"
          rows="5"
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        Envoyer
      </button>
    </form>
  </FadeIn>    
  );
}

export default Contact