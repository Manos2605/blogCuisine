function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">À propos de Story Délice</h1>

        <div className="relative h-[300px] mb-8 rounded-xl overflow-hidden">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="L'équipe de Story Délice"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-pink max-w-none">
          <p className="lead text-xl">
            Bienvenue sur <strong className="text-pink-500 text-2xl">Story Délice</strong>, votre destination gourmande pour découvrir les meilleures recettes de
            pâtisserie.
          </p>
            <h2 className="font-bold underline">Notre Philosophie</h2>
            <strong className="text-pink-500 text-xl">"Chez Story Délice, nous croyons que la pâtisserie est bien plus qu'une simple préparation culinaire – c'est
              un art, une science et une forme d'expression".</strong>
          <br />
          <h2 className="font-bold underline">Notre Histoire</h2>
          <p className="fs-4">
            Story Délice est né d'une passion partagée pour la pâtisserie et l'art culinaire. Fondé en 2020 par deux
            amis d'enfance passionnés de cuisine, notre blog s'est donné pour mission de rendre la pâtisserie accessible
            à tous, des débutants aux plus expérimentés.
          </p>

          <p>
            Ce qui a commencé comme un simple échange de recettes entre amis s'est transformé en une communauté vibrante
            de passionnés de pâtisserie du monde entier. Aujourd'hui, Story Délice est fier de partager des centaines de
            recettes testées et approuvées, des astuces de professionnels et des techniques pour vous aider à créer des
            desserts délicieux chez vous.
          </p>
          <br />
          <p>
            Reposant sur trois piliers fondamentaux :
          </p>

          <ul className="list-disc list-inside">
            <li>
              <strong className="text-pink-500">Accessibilité</strong> : Nous nous efforçons de rendre la pâtisserie accessible à tous, en
              proposant des recettes claires, des instructions détaillées et des astuces pratiques.
            </li>
            <li>
              <strong className="text-pink-500">Qualité</strong> : Chaque recette publiée sur notre blog est méticuleusement testée pour garantir
              sa réussite dans votre cuisine.
            </li>
            <li>
              <strong className="text-pink-500">Créativité</strong> : Nous encourageons l'innovation et la personnalisation, en vous donnant les
              bases pour ensuite laisser libre cours à votre imagination.
            </li>
          </ul>
          <br/>
          <h2 className="font-bold underline text-xl">Notre Équipe</h2>
          <p>
            Derrière Story Délice se cache une petite équipe passionnée, composée de pâtissiers amateurs et
            professionnels, de photographes culinaires et de rédacteurs gourmands. Ensemble, nous travaillons pour vous
            offrir le meilleur contenu possible et partager notre amour de la pâtisserie.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="text-center">
              <div className="relative h-[200px] mb-4 rounded-full overflow-hidden w-[200px] mx-auto">
                <img
                  src="/images/mesmine.jpg?height=200&width=200"
                  alt="MESMINE Ornela - Chef Pâtissière"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-bold text-xl">MESMINE Ornela</h3>
              <p className="text-pink-500">Chef Pâtissière & Developper</p>
            </div>

            <div className="text-center">
              <div className="relative h-[200px] mb-4 rounded-full overflow-hidden w-[200px] mx-auto">
                <img
                  src="/images/maxence.jpg?height=200&width=200"
                  alt="MAXENCE Schineider - Graphic Design"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-bold text-xl">MAXENCE Schineider</h3>
              <p className="text-pink-500">Co-Pâtissier & Graphic Design</p>
            </div>
            <div className="text-center">
              <div className="relative h-[200px] mb-4 rounded-full overflow-hidden w-[200px] mx-auto">
                <img
                  src="/images/dimitry.jpg?height=200&width=200"
                  alt="SONWA Dimitry - Developper"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-bold text-xl">SONWA Dimitry</h3>
              <p className="text-pink-500">Developper & Technical Manager</p>
            </div>
            <div className="text-center">
              <div className="relative h-[200px] mb-4 rounded-full overflow-hidden w-[200px] mx-auto">
                <img
                  src="/images/fs.jpg?height=200&width=200"
                  alt="MAXENCE Schineider - Graphic Design"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-bold text-xl">MAXENCE Schineider</h3>
              <p className="text-pink-500">Graphic Design & Montage vidéo</p>
            </div>
            <div className="text-center">
              <div className="relative h-[200px] mb-4 rounded-full overflow-hidden w-[200px] mx-auto">
                <img
                  src="/images/zizou.jpg?height=200&width=200"
                  alt="MAXENCE Schineider - Graphic Design"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-bold text-xl">NGUELA Zidane</h3>
              <p className="text-pink-500">Developper & Community Manager</p>
            </div>
          </div>

          <h2>Rejoignez l'Aventure</h2>
          <p>
            Story Délice est plus qu'un simple blog – c'est une communauté. Nous vous invitons à partager vos créations,
            à poser vos questions et à échanger avec d'autres passionnés de pâtisserie. Suivez-nous sur les réseaux
            sociaux, abonnez-vous à notre newsletter et n'hésitez pas à nous contacter pour partager vos idées ou
            suggestions.
          </p>

          <p>
            Merci de faire partie de cette aventure sucrée. Ensemble, continuons à créer, à partager et à savourer les
            délices de la pâtisserie !
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
