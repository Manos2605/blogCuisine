"use client"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici, vous pourriez envoyer les données du formulaire à votre backend Laravel
    console.log("Données du formulaire:", formData)
    // Réinitialiser le formulaire après soumission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    alert("Votre message a été envoyé avec succès!")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Contactez-nous</h1>
        <p className="text-gray-600 mb-8">
          Vous avez une question, une suggestion ou vous souhaitez collaborer avec nous ? N'hésitez pas à nous contacter
          en utilisant le formulaire ci-dessous ou les coordonnées fournies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 text-center border rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-pink-100">
                <Mail className="h-6 w-6 text-pink-500" />
              </div>
            </div>
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-gray-600">storydelice@gmail.com</p>
          </div>

          <div className="p-6 text-center border rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-pink-100">
                <Phone className="h-6 w-6 text-pink-500" />
              </div>
            </div>
            <h3 className="font-bold mb-2">Téléphone</h3>
            <p className="text-gray-600">+237 677 608 758</p>
          </div>

          <div className="p-6 text-center border rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-pink-100">
                <MapPin className="h-6 w-6 text-pink-500" />
              </div>
            </div>
            <h3 className="font-bold mb-2">Adresse</h3>
            <p className="text-gray-600">
              ENSPY
              <br />
              Yaoundé, Cameroun
            </p>
          </div>
        </div>

        <div className="p-6 mb-8 border rounded shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Formulaire de Contact</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="font-medium">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="font-medium">
                Sujet
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Sujet de votre message"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message"
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md w-full md:w-auto"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
