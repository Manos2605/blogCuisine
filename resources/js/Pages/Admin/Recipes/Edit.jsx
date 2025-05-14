import Form from "./Form"

function Edit({ recipe }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Modifier la recette</h1>
      <Form recipe={recipe} />
    </div>
  )
}

export default Edit 