<?php

namespace Database\Seeders;

use App\Models\Recipe;
use Illuminate\Database\Seeder;

class RecipeSeeder extends Seeder
{
    public function run(): void
    {
        $recipes = [
            [
                'title' => 'Tarte aux Fraises',
                'description' => 'Une délicieuse tarte aux fraises fraîches sur une crème pâtissière onctueuse.',
                'image' => '/images/placeholder.jpg',
                'category' => 'Tartes',
                'difficulty' => 'Facile',
                'prep_time' => 30,
                'cook_time' => 25,
                'servings' => 8,
                'ingredients' => json_encode([
                    '1 pâte sablée',
                    '500g de fraises fraîches',
                    '50cl de lait entier',
                    '4 jaunes d\'œufs',
                    '100g de sucre',
                    '40g de farine',
                    '1 gousse de vanille',
                    '20g de beurre',
                    'Quelques feuilles de menthe pour la décoration'
                ]),
                'steps' => json_encode([
                    'Étaler la pâte sablée dans un moule',
                    'Préparer la crème pâtissière',
                    'Laver et couper les fraises',
                    'Assembler la tarte',
                    'Décorer avec les fraises et la menthe'
                ]),
                'tips' => json_encode([
                    'Utiliser des fraises bien mûres',
                    'Laisser refroidir la crème pâtissière avant montage'
                ]),
                'author' => 'Chef Marie',
                'author_image' => '/images/placeholder-author.jpg',
                'date' => now()
            ],
            [
                'title' => 'Macarons à la Vanille',
                'description' => 'Des macarons parfaitement croustillants à l\'extérieur et moelleux à l\'intérieur.',
                'image' => '/images/placeholder.jpg',
                'category' => 'Petits Gâteaux',
                'difficulty' => 'Intermédiaire',
                'prep_time' => 45,
                'cook_time' => 15,
                'servings' => 20,
                'ingredients' => json_encode([
                    '200g de poudre d\'amandes',
                    '200g de sucre glace',
                    '75g de blancs d\'œufs',
                    '200g de sucre',
                    '50g d\'eau',
                    '1 gousse de vanille'
                ]),
                'steps' => json_encode([
                    'Tamiser la poudre d\'amandes et le sucre glace',
                    'Préparer la meringue italienne',
                    'Macaronner la pâte',
                    'Dresser les coques',
                    'Cuire à 150°C'
                ]),
                'tips' => json_encode([
                    'Laisser croûter les macarons avant cuisson',
                    'Surveiller attentivement la cuisson'
                ]),
                'author' => 'Chef Pierre',
                'author_image' => '/images/placeholder-author.jpg',
                'date' => now()
            ],
            [
                'title' => 'Éclair au Chocolat',
                'description' => 'Un classique de la pâtisserie française avec une ganache au chocolat intense.',
                'image' => '/images/placeholder.jpg',
                'category' => 'Pâtisseries Françaises',
                'difficulty' => 'Intermédiaire',
                'prep_time' => 40,
                'cook_time' => 30,
                'servings' => 8,
                'ingredients' => json_encode([
                    '250ml d\'eau',
                    '100g de beurre',
                    '150g de farine',
                    '4 œufs',
                    '200g de chocolat noir',
                    '200ml de crème liquide'
                ]),
                'steps' => json_encode([
                    'Préparer la pâte à choux',
                    'Former les éclairs',
                    'Cuire à 180°C',
                    'Préparer la ganache',
                    'Garnir les éclairs'
                ]),
                'tips' => json_encode([
                    'Ne pas ouvrir le four pendant la cuisson',
                    'Laisser refroidir avant de garnir'
                ]),
                'author' => 'Chef Sophie',
                'author_image' => '/images/placeholder-author.jpg',
                'date' => now()
                    ],
                    [
                'title' => 'Cheesecake New-Yorkais',
                'description' => 'Un cheesecake crémeux avec une base de biscuits croquante et une touche de citron.',
                'image' => '/images/placeholder.jpg',
                'category' => 'Gâteaux',
                'difficulty' => 'Facile',
                'prep_time' => 20,
                'cook_time' => 50,
                'servings' => 12,
                'ingredients' => json_encode([
                    '300g de biscuits spéculoos',
                    '150g de beurre fondu',
                    '750g de cream cheese',
                    '200g de sucre',
                    '3 œufs',
                    '200ml de crème fraîche',
                    '1 citron'
                ]),
                'steps' => json_encode([
                    'Préparer la base biscuitée',
                    'Mélanger la garniture',
                    'Cuire au bain-marie',
                    'Laisser refroidir',
                    'Réfrigérer 4 heures'
                ]),
                'tips' => json_encode([
                    'Sortir les ingrédients à température ambiante',
                    'Utiliser un moule à charnière'
                ]),
                'author' => 'Chef John',
                'author_image' => '/images/placeholder-author.jpg',
                'date' => now()
            ],
            [
                'title' => 'Mille-feuille',
                'description' => 'Couches de pâte feuilletée croustillante et de crème pâtissière à la vanille.',
                'image' => '/images/placeholder.jpg',
                'category' => 'Pâtisseries Françaises',
                'difficulty' => 'Avancé',
                'prep_time' => 60,
                'cook_time' => 25,
                'servings' => 6,
                'ingredients' => json_encode([
                    '2 pâtes feuilletées',
                    '1L de lait',
                    '8 jaunes d\'œufs',
                    '250g de sucre',
                    '100g de farine',
                    '2 gousses de vanille',
                    'Sucre glace'
                ]),
                'steps' => json_encode([
                    'Cuire la pâte feuilletée',
                    'Préparer la crème pâtissière',
                    'Découper les rectangles',
                    'Monter les mille-feuilles',
                    'Glacer au sucre glace'
                ]),
                'tips' => json_encode([
                    'Bien refroidir la crème pâtissière',
                    'Découper la pâte encore chaude'
                ]),
                'author' => 'Chef Michel',
                'author_image' => '/images/placeholder-author.jpg',
                'date' => now()
            ],
            [
                'title' => 'Cookies aux Pépites de Chocolat',
                'description' => 'Des cookies moelleux avec des pépites de chocolat fondantes.',
                'image' => '/images/placeholder.jpg',
                'category' => 'Biscuits',
                'difficulty' => 'Facile',
                'prep_time' => 15,
                'cook_time' => 12,
                'servings' => 20,
                'ingredients' => json_encode([
                    '250g de farine',
                    '150g de beurre mou',
                    '150g de sucre roux',
                    '1 œuf',
                    '200g de pépites de chocolat',
                    '1 sachet de levure chimique',
                    '1 pincée de sel'
                ]),
                'steps' => json_encode([
                    'Mélanger le beurre et le sucre',
                    'Ajouter l\'œuf',
                    'Incorporer les ingrédients secs',
                    'Former les cookies',
                    'Cuire à 180°C'
                ]),
                'tips' => json_encode([
                    'Laisser reposer la pâte au frais',
                    'Ne pas trop cuire pour des cookies moelleux'
                ]),
                'author' => 'Chef Sarah',
                'author_image' => '/images/placeholder-author.jpg',
                'date' => now()
            ]
        ];

        foreach ($recipes as $recipe) {
            Recipe::create($recipe);
        }
    }
} 