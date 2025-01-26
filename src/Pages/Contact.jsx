import { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPencilAlt, FaCommentDots } from "react-icons/fa";
import FadeIn from "../Components/FramerMotion/FadeIn";
import { toast } from 'react-toastify';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    name: '',
    message: '',
  });

  const { email, subject, name, message } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !subject || !message || !name) {
      alert("Tous les champs sont requis !");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Veuillez entrer une adresse email valide !");
      return;
    }

    
    emailjs
      .send(
        "service_83xmxce", 
        "template_k549vox", 
        {
          from_name: formData.name,
          subject: formData.subject,
          email: formData.email,
          message: formData.message,
        },
        "Q_HQ5mrm3DMhKb73x"
      )
      .then(() => {
        toast.success("Message envoyé avec succès !");
        setFormData({ email: '', subject: '', name: '', message: '' });
      })
      .catch(() => {
        toast.error("Une erreur s'est produite. Veuillez réessayer.");
      });
  };

  return (
    <FadeIn>
      <h1 className="text-3xl font-bold mb-8 mt-8 text-center text-gray-700">Me contacter</h1>
      <form
        onSubmit={onSubmit}
        className="max-w-lg mx-auto p-6 bg-slate-200 text-white rounded-lg shadow-md space-y-4"
      >
        {/* Email Field */}
        <div className="flex items-center border border-gray-700 rounded-lg p-2">
          <FaEnvelope className="text-gray-400 mr-3" />
          <input
            type="email"
            id="email"
            value={email}
            onChange={onChange}
            placeholder="Votre email"
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Name Field */}
        <div className="flex items-center border border-gray-700 rounded-lg p-2">
          <FaPencilAlt className="text-gray-400 mr-3" />
          <input
            type="text"
            id="name"
            value={name}
            onChange={onChange}
            placeholder="Votre nom"
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
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
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
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
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 hover:text-white text-gray-700 font-semibold py-2 px-4 rounded-lg transition"
        >
          Envoyer
        </button>
      </form>
    </FadeIn>
  );
}

export default Contact;
