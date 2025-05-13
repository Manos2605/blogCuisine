function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-gray-800">
          À propos de <span className="text-pink-500">Story Délice</span>
        </h1>

        <div className="relative h-[350px] mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="L'équipe de Story Délice"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-pink max-w-none text-lg leading-relaxed">
          <p className="text-xl font-light mb-6">
            Bienvenue sur <strong className="text-pink-500 text-2xl">Story Délice</strong>, votre destination gourmande pour découvrir les meilleures recettes de
            pâtisserie.
          </p>

          <h2 className="text-2xl font-bold underline mb-4">Notre Philosophie</h2>
          <p className="italic text-gray-700 mb-6">
            <strong className="text-pink-500 text-xl">"Chez Story Délice, nous croyons que la pâtisserie est bien plus qu'une simple préparation culinaire – c'est
              un art, une science et une forme d'expression".</strong>
          </p>

          <h2 className="text-2xl font-bold underline mb-4">Notre Histoire</h2>
          <p className="mb-6">
            Story Délice est né d'une passion partagée pour la pâtisserie et l'art culinaire. Fondé en 2020 par deux
            amis d'enfance passionnés de cuisine, notre blog s'est donné pour mission de rendre la pâtisserie accessible
            à tous, des débutants aux plus expérimentés.
          </p>

          <p className="mb-6">
            Ce qui a commencé comme un simple échange de recettes entre amis s'est transformé en une communauté vibrante
            de passionnés de pâtisserie du monde entier. Aujourd'hui, Story Délice est fier de partager des centaines de
            recettes testées et approuvées, des astuces de professionnels et des techniques pour vous aider à créer des
            desserts délicieux chez vous.
          </p>

          <h2 className="text-2xl font-bold underline mb-4">Nos Valeurs</h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong className="text-pink-500">Accessibilité</strong> : Des recettes claires, des instructions détaillées et des astuces pratiques.
            </li>
            <li>
              <strong className="text-pink-500">Qualité</strong> : Chaque recette est méticuleusement testée pour garantir sa réussite.
            </li>
            <li>
              <strong className="text-pink-500">Créativité</strong> : Laissez libre cours à votre imagination avec nos bases solides.
            </li>
          </ul>

          <h2 className="text-2xl font-bold underline mb-4">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {[
              {
                name: "MESMINE Ornela",
                role: "Chef Pâtissière & Developper",
                img: "/images/mesmine.jpg",
              },
              {
                name: "MAXENCE Schineider",
                role: "Co-Pâtissier & Graphic Design",
                img: "/images/maxence.jpg",
              },
              {
                name: "SONWA Dimitry",
                role: "Developper & Technical Manager",
                img: "/images/dimitry.jpg",
              },
              {
                name: "Tong Meufokou Freedy",
                role: "Graphic Design & Animateur video",
                img: "/images/fs.jpg",
              },
              {
                name: "NGUELA Zidane",
                role: "Developper & Community Manager",
                img: "/images/zizou.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-[200px] mb-4 rounded-full overflow-hidden w-[200px] mx-auto shadow-md">
                  <img
                    src={`${member.img}?height=200&width=200`}
                    alt={member.name}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-pink-500">{member.role}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold underline mb-4">Rejoignez l'Aventure</h2>
          <p className="mb-6">
            Story Délice est plus qu'un simple blog – c'est une communauté. Nous vous invitons à partager vos créations,
            à poser vos questions et à échanger avec d'autres passionnés de pâtisserie. Suivez-nous sur les réseaux
            sociaux, abonnez-vous à notre newsletter et n'hésitez pas à nous contacter pour partager vos idées ou
            suggestions.
          </p>

          <p className="font-semibold text-center text-gray-800">
            Merci de faire partie de cette aventure sucrée. Ensemble, continuons à créer, à partager et à savourer les
            délices de la pâtisserie !
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
