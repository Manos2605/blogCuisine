import { useForm } from "@inertiajs/react"
import { useState } from "react"

function Form({ recipe = null }) {
  const { data, setData, post, put, processing, errors } = useForm({
    title: recipe?.title || '',
    description: recipe?.description || '',
    image: null,
    category: recipe?.category || '',
    difficulty: recipe?.difficulty || '',
    prep_time: recipe?.prep_time || '',
    cook_time: recipe?.cook_time || '',
    servings: recipe?.servings || '',
    ingredients: recipe?.ingredients || [''],
    steps: recipe?.steps || [''],
    tips: recipe?.tips || [''],
  })

  const [imagePreview, setImagePreview] = useState(recipe?.image || null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (recipe) {
      put(route('admin.recipes.update', recipe.id))
    } else {
      post(route('admin.recipes.store'))
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setData('image', file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const addField = (field) => {
    setData(field, [...data[field], ''])
  }

  const removeField = (field, index) => {
    setData(field, data[field].filter((_, i) => i !== index))
  }

  const updateField = (field, index, value) => {
    const newFields = [...data[field]]
    newFields[index] = value
    setData(field, newFields)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Titre</label>
        <input
          type="text"
          value={data.title}
          onChange={e => setData('title', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
        />
        {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={data.description}
          onChange={e => setData('description', e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
        />
        {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 block w-full"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mt-2 h-32 w-32 object-cover rounded-md"
          />
        )}
        {errors.image && <div className="text-red-500 text-sm mt-1">{errors.image}</div>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Catégorie</label>
          <input
            type="text"
            value={data.category}
            onChange={e => setData('category', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          />
          {errors.category && <div className="text-red-500 text-sm mt-1">{errors.category}</div>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Difficulté</label>
          <select
            value={data.difficulty}
            onChange={e => setData('difficulty', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          >
            <option value="">Sélectionner une difficulté</option>
            <option value="Facile">Facile</option>
            <option value="Moyen">Moyen</option>
            <option value="Difficile">Difficile</option>
          </select>
          {errors.difficulty && <div className="text-red-500 text-sm mt-1">{errors.difficulty}</div>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Temps de préparation (minutes)</label>
          <input
            type="number"
            value={data.prep_time}
            onChange={e => setData('prep_time', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          />
          {errors.prep_time && <div className="text-red-500 text-sm mt-1">{errors.prep_time}</div>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Temps de cuisson (minutes)</label>
          <input
            type="number"
            value={data.cook_time}
            onChange={e => setData('cook_time', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          />
          {errors.cook_time && <div className="text-red-500 text-sm mt-1">{errors.cook_time}</div>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre de portions</label>
          <input
            type="number"
            value={data.servings}
            onChange={e => setData('servings', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          />
          {errors.servings && <div className="text-red-500 text-sm mt-1">{errors.servings}</div>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Ingrédients</label>
        {data.ingredients.map((ingredient, index) => (
          <div key={index} className="flex gap-2 mt-2">
            <input
              type="text"
              value={ingredient}
              onChange={e => updateField('ingredients', index, e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
            <button
              type="button"
              onClick={() => removeField('ingredients', index)}
              className="text-red-500 hover:text-red-700"
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addField('ingredients')}
          className="mt-2 text-pink-500 hover:text-pink-700"
        >
          + Ajouter un ingrédient
        </button>
        {errors.ingredients && <div className="text-red-500 text-sm mt-1">{errors.ingredients}</div>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Étapes</label>
        {data.steps.map((step, index) => (
          <div key={index} className="flex gap-2 mt-2">
            <input
              type="text"
              value={step}
              onChange={e => updateField('steps', index, e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
            <button
              type="button"
              onClick={() => removeField('steps', index)}
              className="text-red-500 hover:text-red-700"
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addField('steps')}
          className="mt-2 text-pink-500 hover:text-pink-700"
        >
          + Ajouter une étape
        </button>
        {errors.steps && <div className="text-red-500 text-sm mt-1">{errors.steps}</div>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Conseils (optionnel)</label>
        {data.tips.map((tip, index) => (
          <div key={index} className="flex gap-2 mt-2">
            <input
              type="text"
              value={tip}
              onChange={e => updateField('tips', index, e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
            <button
              type="button"
              onClick={() => removeField('tips', index)}
              className="text-red-500 hover:text-red-700"
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addField('tips')}
          className="mt-2 text-pink-500 hover:text-pink-700"
        >
          + Ajouter un conseil
        </button>
        {errors.tips && <div className="text-red-500 text-sm mt-1">{errors.tips}</div>}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={processing}
          className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors disabled:opacity-50"
        >
          {recipe ? 'Mettre à jour' : 'Créer'} la recette
        </button>
      </div>
    </form>
  )
}

export default Form 