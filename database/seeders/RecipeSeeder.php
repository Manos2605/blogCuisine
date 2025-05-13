<?php

namespace Database\Seeders;

use App\Models\Recipe;
use App\Models\Comment;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RecipeSeeder extends Seeder
{
    public function run(): void
    {
        // Désactiver les contraintes de clés étrangères
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Comment::truncate();
        Recipe::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $recipes = [
            [
                'title' => 'Crêpes sucrées',
                'description' => 'Des crêpes moelleuses et parfumées, parfaites pour le goûter ou le petit-déjeuner.',
                'image' => '/images/placeholder.jpg',
                'category' => 'Pâtisseries',
                'difficulty' => 'Facile',
                'prep_time' => 15,
                'cook_time' => 20,
                'servings' => 6,
                'ingredients' => json_encode([
                    '4 œufs',
                    '250g de sucre',
                    '600g de farine (tamisée)',
                    '200g de lait concentré',
                    '800ml d\'eau',
                    '80ml d\'huile raffinée',
                    'Arôme au choix'
                ]),
                'steps' => json_encode([
                    'Mélanger dans un récipient, jusqu\'à homogénéisation, 4 œufs et 250g de sucre.',
                    'Ajouter 600g de farine, préalablement tamisée.',
                    'Verser 200g de lait concentré dans une marmite, ajouter 800ml d\'eau et poser le mélange à feu doux pendant 5 min.',
                    'Verser progressivement le lait chauffé dans le mélange œuf + sucre + farine et mélanger.',
                    'Ajoutez 80ml d\'huile raffinée et mélanger. Ajouter l\'arôme de votre choix et la pâte est prête.',
                    'Cuisson : placer à feu moyen une poêle (antiadhésive de préférence) et l\'échauffer. Verser à l\'aide d\'une louche la pâte à crêpes, dans la poêle, retourner après 2 min, laisser la seconde face cuire pendant environ 1 min 30 sec.'
                ]),
                'tips' => json_encode([
                    'Utilisez une poêle bien chaude pour des crêpes parfaites.',
                    'Ajoutez un peu de rhum ou de fleur d\'oranger pour parfumer la pâte.'
                ]),
                'author' => 'Chef Marie',
                'author_image' => '/images/placeholder-author.jpg',
                'date' => now()
            ],
            [
                'title' => 'Cookies Moelleux au Chocolat',
                'description' => 'Les cookies moelleux, c\'est le goûter parfait : croustillants à l\'extérieur, fondants à l\'intérieur, et pleins de pépites de chocolat !',
                'image' => '/images/placeholder.jpg',
                'category' => 'Biscuits',
                'difficulty' => 'Très facile',
                'prep_time' => 15,
                'cook_time' => 15,
                'servings' => 12,
                'ingredients' => json_encode([
                    '200 g de beurre mou',
                    '150 g de sucre',
                    '2 œufs',
                    '1 pincée de sel',
                    'Arôme vanille (environ 1 c. à café)',
                    '400 g de farine',
                    '1 c. à café de levure chimique',
                    '50 g de chocolat blanc ou noir (haché grossièrement)',
                    '50 g de chocolat blanc',
                    'Pépites de chocolat pour la décoration'
                ]),
                'steps' => json_encode([
                    'Préchauffez le four à 180°C. Préparez une plaque avec du papier cuisson.',
                    'Dans un grand bol, mélangez le beurre mou avec le sucre jusqu\'à obtenir une texture crémeuse.',
                    'Ajoutez les œufs un à un, puis l\'arôme vanille. Mélangez bien.',
                    'Ajoutez la farine, la levure chimique et la pincée de sel. Mélangez jusqu\'à l\'obtention d\'une pâte homogène.',
                    'Incorporez les morceaux de chocolat blanc et/ou noir dans la pâte.',
                    'Faites des boules de pâte (taille d\'une grosse noix) et disposez-les sur la plaque, en les espaçant bien. Ajoutez quelques pépites de chocolat sur le dessus pour une finition gourmande.',
                    'Faites cuire 12 à 15 minutes. Les bords doivent être dorés et le centre encore légèrement mou.',
                    'Laissez les cookies tiédir 5 minutes sur la plaque avant de les transférer sur une grille.'
                ]),
                'tips' => json_encode([
                    'Pour plus de moelleux, ne pas trop cuire les cookies : sortez-les quand le centre est encore un peu tendre.',
                    'Pour des cookies encore plus gourmands, ajoutez des noisettes concassées ou un cœur de pâte à tartiner dans chaque boule.',
                    'Vous pouvez conserver les cookies dans une boîte hermétique jusqu\'à 5 jours.'
                ]),
                'author' => 'Chef Marie',
                'author_image' => '/images/placeholder-author.jpg',
                'date' => now()
            ],
            [
                'title' => 'Croissants maison bien feuilletés',
                'description' => 'Des croissants maison délicieusement feuilletés, croustillants à l\'extérieur et moelleux à l\'intérieur.',
                'image' => '/images/placeholder.jpg',
                'category' => 'Viennoiseries',
                'difficulty' => 'Moyen',
                'prep_time' => 30,
                'cook_time' => 20,
                'servings' => 10,
                'ingredients' => json_encode([
                    '250 g de farine T45 ou T55',
                    '5 g de sel',
                    '30 g de sucre',
                    '10 g de levure boulangère fraîche (ou 4 g de sèche)',
                    '15 cl de lait tiède',
                    '125 g de beurre froid pour le tourage',
                    '1 œuf pour la dorure'
                ]),
                'steps' => json_encode([
                    'Préparer la pâte : Dans un grand bol, mélange la farine, le sucre et le sel. Délaye la levure dans le lait tiède et ajoute-la au mélange. Pétris jusqu\'à obtenir une pâte homogène (5-10 min). Forme une boule, filme et laisse reposer 1 h à température ambiante.',
                    'Le beurre de tourage : Découpe le beurre froid en un carré d\'environ 15x15 cm entre deux feuilles de papier cuisson. Réserve-le au frigo.',
                    'Le tourage (feuilletage) : Étale la pâte en un grand rectangle. Dépose le carré de beurre au centre et replie la pâte dessus. Étale dans la longueur, puis fais un "tour portefeuille" (replie les deux extrémités au centre puis replie en deux). Mets au frais 30 min. Recommence l\'opération 2 fois (3 tours au total).',
                    'Façonnage : Étale la pâte en un grand rectangle de 3-4 mm d\'épaisseur. Découpe des triangles et roule-les de la base vers la pointe. Dispose-les sur une plaque et laisse pousser 2 h à température ambiante.',
                    'Cuisson : Préchauffe le four à 200 °C. Dore les croissants à l\'œuf battu. Enfourne 15 à 20 min jusqu\'à ce qu\'ils soient bien dorés.'
                ]),
                'tips' => json_encode([
                    'Utilise du beurre de qualité (type AOP Charentes-Poitou) pour un vrai goût de croissant de boulangerie.',
                    'Pour une version encore plus gourmande, ajoute des barres de chocolat et fais des pains au chocolat.',
                    'Ne lésine pas sur les temps de repos, c\'est le secret d\'un bon feuilletage.'
                ]),
                'author' => 'Chef Marie',
                'author_image' => '/images/placeholder-author.jpg',
                'date' => now()
            ],
            [
                'title' => 'Cupcakes vanille glaçage crémeux',
                'description' => 'Des cupcakes moelleux à la vanille avec un délicieux glaçage crémeux, parfaits pour toutes les occasions !',
                'image' => '/images/placeholder.jpg',
                'category' => 'Petits Gâteaux',
                'difficulty' => 'Facile',
                'prep_time' => 20,
                'cook_time' => 20,
                'servings' => 10,
                'ingredients' => json_encode([
                    'Pour les cupcakes :',
                    '120 g de farine',
                    '100 g de sucre',
                    '1 œuf',
                    '60 g de beurre fondu',
                    '1/2 sachet de levure chimique',
                    '1 pincée de sel',
                    '1 cuillère à café d\'extrait de vanille',
                    '8 cl de lait',
                    'Pour le glaçage (buttercream vanille) :',
                    '100 g de beurre mou',
                    '200 g de sucre glace',
                    '1 cuillère à café de vanille',
                    '1 à 2 cuillères à soupe de lait (pour la texture)'
                ]),
                'steps' => json_encode([
                    'Préparer les cupcakes : Préchauffe ton four à 180°C. Dans un saladier, fouette l\'œuf avec le sucre jusqu\'à ce que le mélange blanchisse. Ajoute le beurre fondu, la vanille, puis le lait. Incorpore la farine, la levure et le sel. Verse la pâte dans des moules à cupcakes garnis de caissettes (remplis à moitié ou 2/3 max). Enfourne pour 18-20 minutes. Laisse refroidir complètement.',
                    'Préparer le glaçage : Fouette le beurre mou jusqu\'à ce qu\'il devienne crémeux. Ajoute petit à petit le sucre glace, la vanille et le lait. Fouette jusqu\'à obtenir une texture légère. Mets en poche à douille et décore tes cupcakes refroidis.'
                ]),
                'tips' => json_encode([
                    'Tu peux colorer ton glaçage avec une pointe de colorant ou ajouter quelques fruits mixés pour un twist.',
                    'Utilise des douilles étoilées pour un rendu pro, même en restant à la maison.',
                    'Tu veux faire une version choco ? Remplace 20 g de farine par du cacao non sucré.'
                ]),
                'author' => 'Chef Marie',
                'author_image' => '/images/placeholder-author.jpg',
                'date' => now()
            ],
            [
                'title' => 'Gâteau maison ultra moelleux',
                'description' => 'Un gâteau simple et délicieux, parfait pour toutes les occasions. Sa texture moelleuse et son goût délicat en font un classique indémodable.',
                'image' => '/images/placeholder.jpg',
                'category' => 'Gâteaux',
                'difficulty' => 'Très facile',
                'prep_time' => 15,
                'cook_time' => 40,
                'servings' => 8,
                'ingredients' => json_encode([
                    '200 g de farine',
                    '100 g de sucre',
                    '3 œufs',
                    '100 g de beurre fondu',
                    '1 sachet de levure chimique',
                    '10 cl de lait',
                    '1 cuillère à café d\'extrait de vanille (ou zeste de citron, fleur d\'oranger…)',
                    '1 pincée de sel'
                ]),
                'steps' => json_encode([
                    'Préchauffe le four à 180°C.',
                    'Dans un grand saladier, bats les œufs avec le sucre jusqu\'à ce que le mélange blanchisse.',
                    'Ajoute le beurre fondu, le lait et la vanille.',
                    'Incorpore la farine, la levure et la pincée de sel.',
                    'Verse la pâte dans un moule beurré et fariné.',
                    'Enfourne 35 à 40 min. Vérifie la cuisson avec la lame d\'un couteau : elle doit ressortir sèche.',
                    'Laisse refroidir avant de démouler. Décore selon ton humeur : sucre glace, glaçage, fruits, pépites…'
                ]),
                'tips' => json_encode([
                    'Pour un gâteau marbré : sépare la pâte en deux et ajoute du cacao dans l\'une des moitiés.',
                    'Pour une version fruitée : ajoute des pommes en lamelles, des framboises ou des bananes écrasées.',
                    'Envie d\'un topping fondant ? Glaçage chocolat ou crème citron, fais-toi plaisir.'
                ]),
                'author' => 'Chef Marie',
                'author_image' => '/images/placeholder-author.jpg',
                'date' => now()
            ],
            [
                'title' => 'Gâteau au chocolat fondant maison',
                'description' => 'Un gâteau au chocolat délicieusement fondant, parfait pour les amateurs de chocolat. Son cœur moelleux et son goût intense en font un dessert irrésistible.',
                'image' => '/images/placeholder.jpg',
                'category' => 'Gâteaux',
                'difficulty' => 'Facile',
                'prep_time' => 15,
                'cook_time' => 30,
                'servings' => 8,
                'ingredients' => json_encode([
                    '200 g de chocolat noir pâtissier',
                    '100 g de beurre',
                    '100 g de sucre',
                    '3 œufs',
                    '70 g de farine',
                    '1 sachet de levure chimique',
                    '1 pincée de sel',
                    '1 cuillère à soupe de lait ou de crème (optionnel)'
                ]),
                'steps' => json_encode([
                    'Préchauffe le four à 180°C.',
                    'Fais fondre le chocolat avec le beurre (au bain-marie ou micro-ondes 30 s à 1 min).',
                    'Dans un saladier, fouette les œufs avec le sucre jusqu\'à obtenir un mélange mousseux.',
                    'Ajoute le chocolat fondu, puis la farine, la levure et le sel.',
                    'Mélange jusqu\'à obtenir une pâte homogène.',
                    'Verse dans un moule beurré et fariné.',
                    'Enfourne pour 25 à 30 min selon la texture souhaitée : 25 min pour un cœur fondant, 30 min pour un gâteau moelleux.',
                    'Laisse tiédir avant de démouler.'
                ]),
                'tips' => json_encode([
                    'Pour un cœur encore plus fondant, ajoute des morceaux de chocolat dans la pâte avant cuisson.',
                    'Tu peux parsemer de noix, noisettes ou éclats de caramel pour un croquant irrésistible.',
                    'Pour un glaçage rapide : fais fondre 50 g de chocolat avec un peu de crème et verse sur le gâteau refroidi.'
                ]),
                'author' => 'Chef Marie',
                'author_image' => '/images/placeholder-author.jpg',
                'date' => now()
            ]
        ];

        foreach ($recipes as $recipe) {
            Recipe::create($recipe);
        }
    }
} 