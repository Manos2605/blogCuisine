-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 14 mai 2025 à 01:16
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `delice`
--

-- --------------------------------------------------------

--
-- Structure de la table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `recipe_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ingredients`
--

CREATE TABLE `ingredients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_03_19_000000_create_recipes_table', 1),
(5, '2024_03_20_000000_create_recipe_likes_table', 1),
(6, '2025_04_09_073918_create_categories_table', 1),
(7, '2025_04_09_073919_create_ingredients_table', 1),
(8, '2025_04_09_073920_create_steps_table', 1),
(9, '2025_05_13_170157_add_likes_to_recipes_table', 1),
(10, '2025_05_13_170158_create_comments_table', 1);

-- --------------------------------------------------------

--
-- Structure de la table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `recipes`
--

CREATE TABLE `recipes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `difficulty` varchar(255) NOT NULL,
  `prep_time` int(11) NOT NULL,
  `cook_time` int(11) NOT NULL,
  `servings` int(11) NOT NULL,
  `ingredients` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`ingredients`)),
  `steps` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`steps`)),
  `tips` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tips`)),
  `author` varchar(255) NOT NULL,
  `author_image` varchar(255) DEFAULT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `likes` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `recipes`
--

INSERT INTO `recipes` (`id`, `title`, `description`, `image`, `category`, `difficulty`, `prep_time`, `cook_time`, `servings`, `ingredients`, `steps`, `tips`, `author`, `author_image`, `date`, `created_at`, `updated_at`, `likes`) VALUES
(1, 'Crêpes sucrées', 'Des crêpes moelleuses et parfumées, parfaites pour le goûter ou le petit-déjeuner.', '/images/placeholder.jpg', 'Pâtisseries', 'Facile', 15, 20, 6, '\"[\\\"4 \\\\u0153ufs\\\",\\\"250g de sucre\\\",\\\"600g de farine (tamis\\\\u00e9e)\\\",\\\"200g de lait concentr\\\\u00e9\\\",\\\"800ml d\'eau\\\",\\\"80ml d\'huile raffin\\\\u00e9e\\\",\\\"Ar\\\\u00f4me au choix\\\"]\"', '\"[\\\"M\\\\u00e9langer dans un r\\\\u00e9cipient, jusqu\'\\\\u00e0 homog\\\\u00e9n\\\\u00e9isation, 4 \\\\u0153ufs et 250g de sucre.\\\",\\\"Ajouter 600g de farine, pr\\\\u00e9alablement tamis\\\\u00e9e.\\\",\\\"Verser 200g de lait concentr\\\\u00e9 dans une marmite, ajouter 800ml d\'eau et poser le m\\\\u00e9lange \\\\u00e0 feu doux pendant 5 min.\\\",\\\"Verser progressivement le lait chauff\\\\u00e9 dans le m\\\\u00e9lange \\\\u0153uf + sucre + farine et m\\\\u00e9langer.\\\",\\\"Ajoutez 80ml d\'huile raffin\\\\u00e9e et m\\\\u00e9langer. Ajouter l\'ar\\\\u00f4me de votre choix et la p\\\\u00e2te est pr\\\\u00eate.\\\",\\\"Cuisson : placer \\\\u00e0 feu moyen une po\\\\u00eale (antiadh\\\\u00e9sive de pr\\\\u00e9f\\\\u00e9rence) et l\'\\\\u00e9chauffer. Verser \\\\u00e0 l\'aide d\'une louche la p\\\\u00e2te \\\\u00e0 cr\\\\u00eapes, dans la po\\\\u00eale, retourner apr\\\\u00e8s 2 min, laisser la seconde face cuire pendant environ 1 min 30 sec.\\\"]\"', '\"[\\\"Utilisez une po\\\\u00eale bien chaude pour des cr\\\\u00eapes parfaites.\\\",\\\"Ajoutez un peu de rhum ou de fleur d\'oranger pour parfumer la p\\\\u00e2te.\\\"]\"', 'Chef Marie', '/images/placeholder-author.jpg', '2025-05-13', '2025-05-13 22:14:58', '2025-05-13 22:14:58', 0),
(2, 'Cookies Moelleux au Chocolat', 'Les cookies moelleux, c\'est le goûter parfait : croustillants à l\'extérieur, fondants à l\'intérieur, et pleins de pépites de chocolat !', '/images/placeholder.jpg', 'Biscuits', 'Très facile', 15, 15, 12, '\"[\\\"200 g de beurre mou\\\",\\\"150 g de sucre\\\",\\\"2 \\\\u0153ufs\\\",\\\"1 pinc\\\\u00e9e de sel\\\",\\\"Ar\\\\u00f4me vanille (environ 1 c. \\\\u00e0 caf\\\\u00e9)\\\",\\\"400 g de farine\\\",\\\"1 c. \\\\u00e0 caf\\\\u00e9 de levure chimique\\\",\\\"50 g de chocolat blanc ou noir (hach\\\\u00e9 grossi\\\\u00e8rement)\\\",\\\"50 g de chocolat blanc\\\",\\\"P\\\\u00e9pites de chocolat pour la d\\\\u00e9coration\\\"]\"', '\"[\\\"Pr\\\\u00e9chauffez le four \\\\u00e0 180\\\\u00b0C. Pr\\\\u00e9parez une plaque avec du papier cuisson.\\\",\\\"Dans un grand bol, m\\\\u00e9langez le beurre mou avec le sucre jusqu\'\\\\u00e0 obtenir une texture cr\\\\u00e9meuse.\\\",\\\"Ajoutez les \\\\u0153ufs un \\\\u00e0 un, puis l\'ar\\\\u00f4me vanille. M\\\\u00e9langez bien.\\\",\\\"Ajoutez la farine, la levure chimique et la pinc\\\\u00e9e de sel. M\\\\u00e9langez jusqu\'\\\\u00e0 l\'obtention d\'une p\\\\u00e2te homog\\\\u00e8ne.\\\",\\\"Incorporez les morceaux de chocolat blanc et\\\\\\/ou noir dans la p\\\\u00e2te.\\\",\\\"Faites des boules de p\\\\u00e2te (taille d\'une grosse noix) et disposez-les sur la plaque, en les espa\\\\u00e7ant bien. Ajoutez quelques p\\\\u00e9pites de chocolat sur le dessus pour une finition gourmande.\\\",\\\"Faites cuire 12 \\\\u00e0 15 minutes. Les bords doivent \\\\u00eatre dor\\\\u00e9s et le centre encore l\\\\u00e9g\\\\u00e8rement mou.\\\",\\\"Laissez les cookies ti\\\\u00e9dir 5 minutes sur la plaque avant de les transf\\\\u00e9rer sur une grille.\\\"]\"', '\"[\\\"Pour plus de moelleux, ne pas trop cuire les cookies : sortez-les quand le centre est encore un peu tendre.\\\",\\\"Pour des cookies encore plus gourmands, ajoutez des noisettes concass\\\\u00e9es ou un c\\\\u0153ur de p\\\\u00e2te \\\\u00e0 tartiner dans chaque boule.\\\",\\\"Vous pouvez conserver les cookies dans une bo\\\\u00eete herm\\\\u00e9tique jusqu\'\\\\u00e0 5 jours.\\\"]\"', 'Chef Marie', '/images/placeholder-author.jpg', '2025-05-13', '2025-05-13 22:14:58', '2025-05-13 22:14:58', 0),
(3, 'Croissants maison bien feuilletés', 'Des croissants maison délicieusement feuilletés, croustillants à l\'extérieur et moelleux à l\'intérieur.', '/images/placeholder.jpg', 'Viennoiseries', 'Moyen', 30, 20, 10, '\"[\\\"250 g de farine T45 ou T55\\\",\\\"5 g de sel\\\",\\\"30 g de sucre\\\",\\\"10 g de levure boulang\\\\u00e8re fra\\\\u00eeche (ou 4 g de s\\\\u00e8che)\\\",\\\"15 cl de lait ti\\\\u00e8de\\\",\\\"125 g de beurre froid pour le tourage\\\",\\\"1 \\\\u0153uf pour la dorure\\\"]\"', '\"[\\\"Pr\\\\u00e9parer la p\\\\u00e2te : Dans un grand bol, m\\\\u00e9lange la farine, le sucre et le sel. D\\\\u00e9laye la levure dans le lait ti\\\\u00e8de et ajoute-la au m\\\\u00e9lange. P\\\\u00e9tris jusqu\'\\\\u00e0 obtenir une p\\\\u00e2te homog\\\\u00e8ne (5-10 min). Forme une boule, filme et laisse reposer 1 h \\\\u00e0 temp\\\\u00e9rature ambiante.\\\",\\\"Le beurre de tourage : D\\\\u00e9coupe le beurre froid en un carr\\\\u00e9 d\'environ 15x15 cm entre deux feuilles de papier cuisson. R\\\\u00e9serve-le au frigo.\\\",\\\"Le tourage (feuilletage) : \\\\u00c9tale la p\\\\u00e2te en un grand rectangle. D\\\\u00e9pose le carr\\\\u00e9 de beurre au centre et replie la p\\\\u00e2te dessus. \\\\u00c9tale dans la longueur, puis fais un \\\\\\\"tour portefeuille\\\\\\\" (replie les deux extr\\\\u00e9mit\\\\u00e9s au centre puis replie en deux). Mets au frais 30 min. Recommence l\'op\\\\u00e9ration 2 fois (3 tours au total).\\\",\\\"Fa\\\\u00e7onnage : \\\\u00c9tale la p\\\\u00e2te en un grand rectangle de 3-4 mm d\'\\\\u00e9paisseur. D\\\\u00e9coupe des triangles et roule-les de la base vers la pointe. Dispose-les sur une plaque et laisse pousser 2 h \\\\u00e0 temp\\\\u00e9rature ambiante.\\\",\\\"Cuisson : Pr\\\\u00e9chauffe le four \\\\u00e0 200 \\\\u00b0C. Dore les croissants \\\\u00e0 l\'\\\\u0153uf battu. Enfourne 15 \\\\u00e0 20 min jusqu\'\\\\u00e0 ce qu\'ils soient bien dor\\\\u00e9s.\\\"]\"', '\"[\\\"Utilise du beurre de qualit\\\\u00e9 (type AOP Charentes-Poitou) pour un vrai go\\\\u00fbt de croissant de boulangerie.\\\",\\\"Pour une version encore plus gourmande, ajoute des barres de chocolat et fais des pains au chocolat.\\\",\\\"Ne l\\\\u00e9sine pas sur les temps de repos, c\'est le secret d\'un bon feuilletage.\\\"]\"', 'Chef Marie', '/images/placeholder-author.jpg', '2025-05-13', '2025-05-13 22:14:58', '2025-05-13 22:14:58', 0),
(4, 'Cupcakes vanille glaçage crémeux', 'Des cupcakes moelleux à la vanille avec un délicieux glaçage crémeux, parfaits pour toutes les occasions !', '/images/placeholder.jpg', 'Petits Gâteaux', 'Facile', 20, 20, 10, '\"[\\\"Pour les cupcakes :\\\",\\\"120 g de farine\\\",\\\"100 g de sucre\\\",\\\"1 \\\\u0153uf\\\",\\\"60 g de beurre fondu\\\",\\\"1\\\\\\/2 sachet de levure chimique\\\",\\\"1 pinc\\\\u00e9e de sel\\\",\\\"1 cuill\\\\u00e8re \\\\u00e0 caf\\\\u00e9 d\'extrait de vanille\\\",\\\"8 cl de lait\\\",\\\"Pour le gla\\\\u00e7age (buttercream vanille) :\\\",\\\"100 g de beurre mou\\\",\\\"200 g de sucre glace\\\",\\\"1 cuill\\\\u00e8re \\\\u00e0 caf\\\\u00e9 de vanille\\\",\\\"1 \\\\u00e0 2 cuill\\\\u00e8res \\\\u00e0 soupe de lait (pour la texture)\\\"]\"', '\"[\\\"Pr\\\\u00e9parer les cupcakes : Pr\\\\u00e9chauffe ton four \\\\u00e0 180\\\\u00b0C. Dans un saladier, fouette l\'\\\\u0153uf avec le sucre jusqu\'\\\\u00e0 ce que le m\\\\u00e9lange blanchisse. Ajoute le beurre fondu, la vanille, puis le lait. Incorpore la farine, la levure et le sel. Verse la p\\\\u00e2te dans des moules \\\\u00e0 cupcakes garnis de caissettes (remplis \\\\u00e0 moiti\\\\u00e9 ou 2\\\\\\/3 max). Enfourne pour 18-20 minutes. Laisse refroidir compl\\\\u00e8tement.\\\",\\\"Pr\\\\u00e9parer le gla\\\\u00e7age : Fouette le beurre mou jusqu\'\\\\u00e0 ce qu\'il devienne cr\\\\u00e9meux. Ajoute petit \\\\u00e0 petit le sucre glace, la vanille et le lait. Fouette jusqu\'\\\\u00e0 obtenir une texture l\\\\u00e9g\\\\u00e8re. Mets en poche \\\\u00e0 douille et d\\\\u00e9core tes cupcakes refroidis.\\\"]\"', '\"[\\\"Tu peux colorer ton gla\\\\u00e7age avec une pointe de colorant ou ajouter quelques fruits mix\\\\u00e9s pour un twist.\\\",\\\"Utilise des douilles \\\\u00e9toil\\\\u00e9es pour un rendu pro, m\\\\u00eame en restant \\\\u00e0 la maison.\\\",\\\"Tu veux faire une version choco ? Remplace 20 g de farine par du cacao non sucr\\\\u00e9.\\\"]\"', 'Chef Marie', '/images/placeholder-author.jpg', '2025-05-13', '2025-05-13 22:14:58', '2025-05-13 22:14:58', 0),
(5, 'Gâteau maison ultra moelleux', 'Un gâteau simple et délicieux, parfait pour toutes les occasions. Sa texture moelleuse et son goût délicat en font un classique indémodable.', '/images/placeholder.jpg', 'Gâteaux', 'Très facile', 15, 40, 8, '\"[\\\"200 g de farine\\\",\\\"100 g de sucre\\\",\\\"3 \\\\u0153ufs\\\",\\\"100 g de beurre fondu\\\",\\\"1 sachet de levure chimique\\\",\\\"10 cl de lait\\\",\\\"1 cuill\\\\u00e8re \\\\u00e0 caf\\\\u00e9 d\'extrait de vanille (ou zeste de citron, fleur d\'oranger\\\\u2026)\\\",\\\"1 pinc\\\\u00e9e de sel\\\"]\"', '\"[\\\"Pr\\\\u00e9chauffe le four \\\\u00e0 180\\\\u00b0C.\\\",\\\"Dans un grand saladier, bats les \\\\u0153ufs avec le sucre jusqu\'\\\\u00e0 ce que le m\\\\u00e9lange blanchisse.\\\",\\\"Ajoute le beurre fondu, le lait et la vanille.\\\",\\\"Incorpore la farine, la levure et la pinc\\\\u00e9e de sel.\\\",\\\"Verse la p\\\\u00e2te dans un moule beurr\\\\u00e9 et farin\\\\u00e9.\\\",\\\"Enfourne 35 \\\\u00e0 40 min. V\\\\u00e9rifie la cuisson avec la lame d\'un couteau : elle doit ressortir s\\\\u00e8che.\\\",\\\"Laisse refroidir avant de d\\\\u00e9mouler. D\\\\u00e9core selon ton humeur : sucre glace, gla\\\\u00e7age, fruits, p\\\\u00e9pites\\\\u2026\\\"]\"', '\"[\\\"Pour un g\\\\u00e2teau marbr\\\\u00e9 : s\\\\u00e9pare la p\\\\u00e2te en deux et ajoute du cacao dans l\'une des moiti\\\\u00e9s.\\\",\\\"Pour une version fruit\\\\u00e9e : ajoute des pommes en lamelles, des framboises ou des bananes \\\\u00e9cras\\\\u00e9es.\\\",\\\"Envie d\'un topping fondant ? Gla\\\\u00e7age chocolat ou cr\\\\u00e8me citron, fais-toi plaisir.\\\"]\"', 'Chef Marie', '/images/placeholder-author.jpg', '2025-05-13', '2025-05-13 22:14:58', '2025-05-13 22:14:58', 0),
(6, 'Gâteau au chocolat fondant maison', 'Un gâteau au chocolat délicieusement fondant, parfait pour les amateurs de chocolat. Son cœur moelleux et son goût intense en font un dessert irrésistible.', '/images/placeholder.jpg', 'Gâteaux', 'Facile', 15, 30, 8, '\"[\\\"200 g de chocolat noir p\\\\u00e2tissier\\\",\\\"100 g de beurre\\\",\\\"100 g de sucre\\\",\\\"3 \\\\u0153ufs\\\",\\\"70 g de farine\\\",\\\"1 sachet de levure chimique\\\",\\\"1 pinc\\\\u00e9e de sel\\\",\\\"1 cuill\\\\u00e8re \\\\u00e0 soupe de lait ou de cr\\\\u00e8me (optionnel)\\\"]\"', '\"[\\\"Pr\\\\u00e9chauffe le four \\\\u00e0 180\\\\u00b0C.\\\",\\\"Fais fondre le chocolat avec le beurre (au bain-marie ou micro-ondes 30 s \\\\u00e0 1 min).\\\",\\\"Dans un saladier, fouette les \\\\u0153ufs avec le sucre jusqu\'\\\\u00e0 obtenir un m\\\\u00e9lange mousseux.\\\",\\\"Ajoute le chocolat fondu, puis la farine, la levure et le sel.\\\",\\\"M\\\\u00e9lange jusqu\'\\\\u00e0 obtenir une p\\\\u00e2te homog\\\\u00e8ne.\\\",\\\"Verse dans un moule beurr\\\\u00e9 et farin\\\\u00e9.\\\",\\\"Enfourne pour 25 \\\\u00e0 30 min selon la texture souhait\\\\u00e9e : 25 min pour un c\\\\u0153ur fondant, 30 min pour un g\\\\u00e2teau moelleux.\\\",\\\"Laisse ti\\\\u00e9dir avant de d\\\\u00e9mouler.\\\"]\"', '\"[\\\"Pour un c\\\\u0153ur encore plus fondant, ajoute des morceaux de chocolat dans la p\\\\u00e2te avant cuisson.\\\",\\\"Tu peux parsemer de noix, noisettes ou \\\\u00e9clats de caramel pour un croquant irr\\\\u00e9sistible.\\\",\\\"Pour un gla\\\\u00e7age rapide : fais fondre 50 g de chocolat avec un peu de cr\\\\u00e8me et verse sur le g\\\\u00e2teau refroidi.\\\"]\"', 'Chef Marie', '/images/placeholder-author.jpg', '2025-05-13', '2025-05-13 22:14:58', '2025-05-13 22:14:58', 0);

-- --------------------------------------------------------

--
-- Structure de la table `recipe_likes`
--

CREATE TABLE `recipe_likes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `recipe_id` bigint(20) UNSIGNED NOT NULL,
  `is_liked` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('vdNeNHxdHYFIQU12ptE7LptleSKnBpoROEjioeXQ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWXR6cVdabGxrbkhVM3RzTjFMWHJVWGxyMWZWUlJCb3VEZ0wwM01CUyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1747178143);

-- --------------------------------------------------------

--
-- Structure de la table `steps`
--

CREATE TABLE `steps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Test User', 'test@example.com', '2025-05-13 22:00:35', '$2y$12$avYS.E7LEs4ZRb1MVLd/Q.3j33.E5b3cDvhniwLMBs1hsKvjlwypa', 'ThIVaZirlR', '2025-05-13 22:00:35', '2025-05-13 22:00:35');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Index pour la table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_recipe_id_foreign` (`recipe_id`),
  ADD KEY `comments_user_id_foreign` (`user_id`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Index pour la table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Index pour la table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `recipe_likes`
--
ALTER TABLE `recipe_likes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `recipe_likes_user_id_recipe_id_unique` (`user_id`,`recipe_id`),
  ADD KEY `recipe_likes_recipe_id_foreign` (`recipe_id`);

--
-- Index pour la table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Index pour la table `steps`
--
ALTER TABLE `steps`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `recipe_likes`
--
ALTER TABLE `recipe_likes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `steps`
--
ALTER TABLE `steps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_recipe_id_foreign` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `recipe_likes`
--
ALTER TABLE `recipe_likes`
  ADD CONSTRAINT `recipe_likes_recipe_id_foreign` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `recipe_likes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
