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
                'prep_time' => '30 min',
                'cook_time' => '25 min',
                'servings' => 8,
                'ingredients' => [
                    '1 pâte sablée',
                    '500g de fraises fraîches',
                    '50cl de lait entier',
                    '4 jaunes d\'œufs',
                    '100g de sucre',
                    '40g de farine',
                    '1 gousse de vanille',
                    '20g de beurre',
                    'Quelques feuilles de menthe pour la décoration',
                ],
                'steps' => [
                    [
                        'title' => 'Préparation de la pâte',
                        'description' => 'Étalez la pâte sablée dans un moule à tarte de 28cm de diamètre. Piquez le fond avec une fourchette et réservez au réfrigérateur pendant 30 minutes.',
                    ],
                    [
                        'title' => 'Cuisson à blanc',
                        'description' => 'Préchauffez le four à 180°C. Recouvrez la pâte de papier sulfurisé et de haricots secs. Faites cuire pendant 15 minutes, puis retirez les haricots et le papier et poursuivez la cuisson pendant 10 minutes jusqu\'à ce que la pâte soit dorée.',
                    ],
                    [
                        'title' => 'Préparation de la crème pâtissière',
                        'description' => 'Fendez la gousse de vanille et grattez les graines. Dans une casserole, faites chauffer le lait avec la gousse et les graines de vanille. Dans un saladier, fouettez les jaunes d\'œufs avec le sucre jusqu\'à ce que le mélange blanchisse. Ajoutez la farine et mélangez. Versez progressivement le lait chaud sur ce mélange tout en remuant. Remettez le tout dans la casserole et faites épaissir à feu doux sans cesser de remuer. Hors du feu, ajoutez le beurre et mélangez. Laissez refroidir.',
                    ],
                    [
                        'title' => 'Montage de la tarte',
                        'description' => 'Étalez la crème pâtissière refroidie sur le fond de tarte. Lavez et équeutez les fraises, puis coupez-les en deux. Disposez-les harmonieusement sur la crème.',
                    ],
                    [
                        'title' => 'Finition',
                        'description' => 'Vous pouvez napper les fraises avec un peu de gelée de fraises ou de nappage neutre pour leur donner de la brillance. Décorez avec quelques feuilles de menthe fraîche.',
                    ],
                ],
                'tips' => [
                    'Pour une tarte encore plus gourmande, ajoutez un peu de mascarpone à votre crème pâtissière.',
                    'Vous pouvez remplacer les fraises par d\'autres fruits de saison comme les framboises ou les pêches.',
                    'Pour éviter que la pâte ne se détrempe, vous pouvez la badigeonner de blanc d\'œuf avant la cuisson.',
                ],
                'author' => 'Marie Dupont',
                'author_image' => '/images/placeholder-author.jpg',
                'date' => '2023-03-15',
            ],
            [
                'title' => 'Macarons à la Vanille',
                'description' => 'Des macarons parfaitement croustillants à l\'extérieur et moelleux à l\'intérieur.',
                'image' => '/images/placeholder.jpg',
                'category' => 'Petits Gâteaux',
                'difficulty' => 'Intermédiaire',
                'prep_time' => '45 min',
                'cook_time' => '15 min',
                'servings' => 20,
                'ingredients' => [
                    '200g de poudre d\'amandes',
                    '200g de sucre glace',
                    '75g de blancs d\'œufs',
                    '200g de sucre',
                    '50g d\'eau',
                    '1 gousse de vanille',
                ],
                'steps' => [
                    [
                        'title' => 'Préparation de la meringue',
                        'description' => 'Dans une casserole, faites chauffer le sucre et l\'eau jusqu\'à 118°C. Pendant ce temps, montez les blancs en neige. Versez le sirop chaud sur les blancs en neige tout en continuant de battre jusqu\'à ce que la meringue soit froide.',
                    ],
                    [
                        'title' => 'Mélange des ingrédients',
                        'description' => 'Mélangez la poudre d\'amandes et le sucre glace. Incorporez délicatement ce mélange à la meringue. Ajoutez les graines de la gousse de vanille.',
                    ],
                    [
                        'title' => 'Cuisson',
                        'description' => 'Préchauffez le four à 150°C. Formez des petits tas de pâte sur une plaque recouverte de papier sulfurisé. Laissez croûter 30 minutes, puis enfournez pendant 15 minutes.',
                    ],
                ],
                'tips' => [
                    'Laissez bien croûter les macarons avant la cuisson pour obtenir une coque lisse.',
                    'Vous pouvez ajouter du colorant alimentaire pour des macarons colorés.',
                ],
                'author' => 'Pierre Martin',
                'author_image' => '/images/placeholder-author.jpg',
                'date' => '2023-04-02',
            ],
        ];

        foreach ($recipes as $recipe) {
            Recipe::create($recipe);
        }
    }
} 