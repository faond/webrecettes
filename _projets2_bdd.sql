-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Sam 02 Mai 2020 à 19:32
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `_projets2_bdd`
--

-- --------------------------------------------------------

--
-- Structure de la table `projets2_auteur`
--

CREATE TABLE IF NOT EXISTS `projets2_auteur` (
  `pseudo` varchar(50) NOT NULL,
  `categorieScl` varchar(100) NOT NULL,
  `id_region` int(11) NOT NULL,
  PRIMARY KEY (`pseudo`),
  KEY `id_region` (`id_region`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `projets2_auteur`
--

INSERT INTO `projets2_auteur` (`pseudo`, `categorieScl`, `id_region`) VALUES
('Erwann', 'Etudiant', 10),
('Fanny', 'Etudiant', 7),
('Jeanne', 'Etudiant', 7),
('Paul', 'Etudiant', 7);

-- --------------------------------------------------------

--
-- Structure de la table `projets2_comprend`
--

CREATE TABLE IF NOT EXISTS `projets2_comprend` (
  `id_recette` int(11) NOT NULL,
  `id_ingredient` int(11) NOT NULL,
  `quantite` int(11) NOT NULL,
  PRIMARY KEY (`id_recette`,`id_ingredient`),
  KEY `id_ingredient` (`id_ingredient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `projets2_comprend`
--

INSERT INTO `projets2_comprend` (`id_recette`, `id_ingredient`, `quantite`) VALUES
(1, 1, 5),
(1, 2, 1),
(1, 3, 1),
(1, 4, 1),
(1, 5, 1),
(1, 6, 1),
(1, 7, 1),
(1, 8, 1),
(1, 9, 1),
(1, 10, 1),
(1, 11, 1),
(1, 12, 1),
(2, 6, 1),
(2, 7, 1),
(2, 12, 1),
(2, 13, 1),
(2, 14, 3),
(2, 15, 2),
(2, 16, 1),
(2, 17, 1),
(2, 18, 600),
(2, 19, 800),
(2, 20, 15),
(2, 21, 20),
(2, 22, 2),
(2, 23, 1),
(2, 24, 3),
(2, 25, 70),
(2, 26, 25),
(2, 27, 100),
(2, 28, 125),
(2, 29, 100),
(3, 27, 50),
(3, 28, 100),
(3, 30, 200),
(3, 31, 3),
(3, 32, 100),
(4, 9, 2),
(4, 20, 300),
(4, 33, 1),
(4, 38, 250),
(5, 28, 100),
(5, 31, 3),
(5, 32, 150),
(5, 33, 1),
(5, 34, 1),
(6, 2, 3),
(6, 6, 1),
(6, 7, 1),
(6, 10, 29),
(6, 31, 3),
(6, 34, 1),
(6, 35, 100),
(6, 36, 200),
(6, 37, 20),
(7, 31, 3),
(7, 32, 400),
(8, 6, 1),
(8, 7, 1),
(8, 14, 1),
(8, 35, 200),
(8, 37, 20),
(8, 39, 300),
(8, 40, 1),
(9, 41, 4),
(9, 42, 2),
(9, 43, 6),
(9, 44, 10),
(9, 45, 1),
(9, 46, 10),
(10, 6, 1),
(10, 7, 1),
(10, 8, 3),
(10, 31, 1),
(10, 35, 200),
(10, 37, 20),
(10, 47, 250),
(11, 6, 1),
(11, 8, 2),
(11, 15, 2),
(11, 33, 1),
(11, 48, 300),
(11, 49, 10),
(11, 50, 1),
(12, 27, 160),
(12, 28, 160),
(12, 31, 3),
(12, 51, 140),
(12, 52, 1),
(12, 53, 80),
(12, 54, 150),
(13, 55, 3),
(13, 56, 3),
(13, 57, 6),
(13, 58, 10),
(14, 45, 4),
(14, 59, 6),
(14, 60, 15),
(15, 46, 5),
(15, 61, 5),
(15, 62, 13),
(15, 63, 3),
(16, 33, 2),
(16, 55, 4),
(16, 64, 3),
(17, 27, 80),
(17, 28, 120),
(17, 30, 200),
(17, 31, 3),
(17, 32, 120),
(17, 65, 8),
(18, 31, 1),
(18, 52, 1),
(18, 66, 1),
(18, 67, 3),
(18, 68, 70),
(19, 1, 4),
(19, 5, 200),
(19, 6, 1),
(19, 7, 1),
(19, 8, 3),
(19, 9, 3),
(19, 12, 5),
(19, 14, 2),
(19, 31, 4),
(19, 69, 1),
(19, 70, 40),
(19, 71, 10),
(19, 72, 8),
(20, 14, 1),
(20, 15, 2),
(20, 25, 50),
(20, 37, 15),
(20, 73, 4),
(20, 74, 70),
(20, 75, 1),
(21, 6, 1),
(21, 7, 1),
(21, 14, 1),
(21, 17, 2),
(21, 31, 1),
(21, 33, 1),
(21, 37, 20),
(21, 75, 1),
(21, 76, 1000),
(21, 77, 230),
(21, 78, 25),
(22, 41, 4),
(22, 57, 12),
(22, 79, 2),
(22, 80, 4),
(23, 37, 10),
(23, 81, 300),
(23, 82, 1),
(24, 27, 625),
(24, 28, 125),
(24, 29, 130),
(24, 31, 10),
(24, 32, 10),
(25, 29, 10),
(25, 31, 2),
(25, 32, 30),
(25, 83, 250),
(25, 84, 200),
(25, 85, 150),
(25, 86, 5),
(26, 1, 1),
(26, 8, 3),
(26, 14, 1),
(26, 15, 1),
(26, 17, 1),
(26, 69, 1),
(26, 87, 1),
(26, 88, 1),
(26, 89, 1),
(26, 90, 100),
(26, 91, 1),
(27, 8, 3),
(27, 14, 1),
(27, 18, 150),
(27, 31, 1),
(27, 92, 2),
(27, 93, 5),
(27, 94, 1),
(27, 95, 0),
(28, 6, 1),
(28, 7, 1),
(28, 8, 2),
(28, 14, 3),
(28, 33, 1),
(28, 96, 150),
(28, 97, 150),
(28, 98, 150),
(28, 99, 1),
(28, 100, 1),
(29, 6, 1),
(29, 8, 3),
(29, 9, 1),
(29, 12, 10),
(29, 14, 2),
(29, 15, 3),
(29, 31, 3),
(29, 38, 10),
(29, 43, 10),
(29, 101, 250),
(29, 102, 3),
(29, 103, 2),
(29, 104, 2),
(29, 106, 1),
(29, 107, 10),
(29, 108, 175),
(30, 1, 2),
(30, 15, 4),
(30, 20, 1000),
(30, 54, 1),
(30, 75, 1),
(30, 77, 180),
(30, 109, 16),
(30, 110, 4),
(30, 111, 4),
(30, 112, 10),
(30, 113, 3),
(30, 114, 15),
(30, 115, 15),
(30, 116, 1);

-- --------------------------------------------------------

--
-- Structure de la table `projets2_etape`
--

CREATE TABLE IF NOT EXISTS `projets2_etape` (
  `numEtape` int(11) NOT NULL,
  `description` text NOT NULL,
  `id_recette` int(11) NOT NULL,
  PRIMARY KEY (`numEtape`,`id_recette`),
  KEY `id_recette` (`id_recette`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `projets2_etape`
--

INSERT INTO `projets2_etape` (`numEtape`, `description`, `id_recette`) VALUES
(1, 'Dans une casserole, faire cuire le riz. ', 1),
(1, ' Faire revenir gousses hachées d''ail et les oignons émincés dans un peu d''huile d''olive.', 2),
(1, 'Préchauffez votre four à 180°C (thermostat 6).', 3),
(1, 'Couper le citron en fines rondelles et le mettre dans un grand pot en terre. ', 4),
(1, 'Préchauffer le four à 200°C.\r\nAbaisser la pâte brisée.', 5),
(1, 'Etalez la pâte dans le moule beurré et fariné.', 6),
(1, 'Préchauffer le four à thermostat 3 (température inférieure à 80°C).', 7),
(1, 'Faire cuire les crozets dans l''eau bouillante salée pendant 20 minutes.', 8),
(1, 'Dans un verre à Mojito, disposez 6 à 8 feuilles de menthe entières préalablement lavées et essuyées.\r\n', 9),
(1, 'Faites bouillir de l''eau dans une casserole avec sel, poivre et une petite c. à soupe d''huile. Quand l''eau bout, versez les pâtes, laissez cuire 9 min.\r\n', 10),
(1, 'Mettre les pois chiches égouttés dans un mixeur. Mixer légèrement en ajoutant un peu d''eau de cuisson.\r\n', 11),
(1, 'Préchauffer le four à 160°C.\r\n\r\nBeurrer et fariner le moule à cake.', 12),
(1, 'Mettez les ingrédients avec quelques glaçons dans un shaker, secouez et versez sur des glaçons dans un verre à long drink.', 13),
(1, 'Verser citron et rhum sur des glaçons. Compléter avec le coca cola. Remuer lentement.\r\n\r\nServir dans un verre de type "tumbler".\r\n\r\nDécorer avec une tranche de citron vert.', 14),
(1, 'Dans un grand verre, verser les ingrédients et bien les mélanger.\r\nJuste au moment de servir, verser la grenadine en filet. \r\nNe surtout pas mélanger. Servir aussitôt.', 15),
(1, 'Pressez le jus d''un demi-citron, ajoutez dans le shaker avec les autres ingrédients et des glaçons.\r\n\r\nFrappez puis versez dans le verre en filtrant.', 16),
(1, 'Préchauffer le four à 180°C (chaleur tournante)', 17),
(1, 'Dans un saladier, mélanger les flocons d''avoine, la levure, l''oeuf et la banane bien mûre écrasé.\r\n\r\nAjouter la boisson aux amandes et bien mélanger.\r\n', 18),
(1, 'Faire durcir les oeufs (6 à 8 minutes après ébullition de l''eau), puis les faire bien refroidir à l''eau froide.', 19),
(1, 'Préparation de l’ail et l’oignon : pelez et ciselez l’oignon et l’ail. \r\n\r\nFaites revenir l’ail dans l’huile pour la parfumer, puis retirez l’ail et ajoutez l’oignon. \r\n\r\nFaites-le rissoler 5 minutes. Puis ajoutez les coquillettes et laissez-les dorer 3 minutes.\r\n', 20),
(1, 'Faire revenir la viande dans un peu de beurre doux jusqu''à ce que les morceaux soient un peu dorés.\r\n\r\nSaupoudrer de 2 cuillères de farine. Bien remuer.', 21),
(1, ' Dans un blender, versez tous les ingrédients avec 5 ou 6 glaçons et mixez le tout.\r\n\r\nC''est prêt ! Versez dans le verre et dégustez.', 22),
(1, 'Faire bouillir deux casseroles d''eau chaude.\r\n\r\nPendant que l''eau chauffe couper le brocolis de façon à faire des petits arbrisseaux.', 23),
(1, 'Mettez la farine dans un saladier avec le sel et le sucre.\r\n\r\nFaites un puits au milieu et versez-y les œufs.', 24),
(1, 'Prenez les oeufs et séparez les jaunes des blancs.\r\n\r\nBattez les jaunes avec la vanille, le sucre et le mascarpone. Fouettez jusqu''à ce que le mélange soit lisse et onctueux.', 25),
(1, 'Préchauffer le four à 150°C (thermostat 5).', 26),
(1, 'Séparer le jaune et le blanc, mettre le blanc dans un bol.\r\n', 27),
(1, 'Coupez les 3 poissons en tout petits dés. \r\n\r\nSalez, poivrez, versez le jus du citron. \r\n\r\nMélangez et réservez au frais.', 28),
(1, 'Faire chauffer un wok ou une grosse poêle.\r\n\r\nAjouter 1 cuillère d''huile, ajouter le basilic, le laisser frire pendant une minute.\r\n\r\nL''enlever et l''essorer sur du papier.', 29),
(1, 'Tout d''abord, préparer tous les ingrédients (laver, couper, etc).', 30),
(2, 'Coupez les tomates en dés, mettez le maïs, le thon, la salade coupée en lamelles fines et le blanc de poireau (cru) coupé comme lorsqu''on émince un oignon.\r\n', 1),
(2, 'Ajouter la carotte et la branche de céleri hachée puis la viande et faire revenir le tout.\r\nAu bout de quelques minutes, ajouter le vin rouge. Laisser cuire jusqu''à évaporation.', 2),
(2, 'Dans une casserole, faites fondre le chocolat et le beurre coupé en morceaux à feu très doux.', 3),
(2, 'Ajouter le sucre, le vinaigre et l''eau. Poser dessus un couvercle en laissant passer un peu d''air. Placer au soleil pendant 1 semaine.', 4),
(2, 'Battre les oeufs avec le sucre en poudre jusqu''à l''obtention d''un mélange mousseux. Ajouter le jus de citron, ainsi que le beurre fondu.', 5),
(2, 'Nettoyez puis émincez les blancs des 3 poireaux.', 6),
(2, 'Monter les blancs en neige et incorporer le sucre.', 7),
(2, 'Au bout de 10 minutes de cuisson des crozets, couper l''oignon et le faire revenir dans du beurre. Faites le caraméliser.\r\n', 8),
(2, 'Coupez 1/2 citron vert en dés, et versez les 2 cl de sirop de canne.\r\n', 9),
(2, 'Dans un bol, battez l’œuf, ajoutez la crème fraîche et mélangez.\r\n', 10),
(2, 'Ajouter le tahin, le jus de citron, l''ail, le cumin et le sel, et continuer de mixer en incorporant l''huile d''olive petit à petit jusqu''à obtenir une texture homogène et crémeuse.\r\n', 11),
(2, ' Mélanger le sucre glace avec le beurre pommade.\r\n\r\nAjouter un a un les oeufs puis la farine et le 1/2 sachet de levure, les amandes en pouvres.\r\n\r\nIncorporer les pralines roses pilées.\r\n\r\n', 12),
(2, 'Afin qu''il soit plus frais et léger, remplissez auparavant le verre de glace pilée.\r\n\r\nServir dans un verre de type "verre à martini".\r\nUn long zeste de citron vert.', 16),
(2, 'Faire fondre le chocolat et le beurre pendant 1 min au micro-ondes ou au bain-marie.', 17),
(2, '(Si vous avez le temps, laissez reposer 30 minutes à 1h.)\r\n\r\nCuire les pancakes dans une poêle bien chaude avec un peu d''huile ou de beurre. Cuire environ 2 minutes de chaque côté.', 18),
(2, 'Hacher les cébettes et les disposer au fond du plat.', 19),
(2, 'Lancement du risotto : ajoutez une louche de bouillon pour mouiller à hauteur et mélangez jusqu''à absorption. \r\n\r\nRecommencez l''opération pendant 9 minutes pour que les coquillettes soient al dente ! \r\n', 20),
(2, 'Ajouter 2 ou 3 verres d''eau, les cubes de bouillon, le vin et remuer. \r\n\r\nAjouter de l''eau si nécessaire pour couvrir.', 21),
(2, 'Plonger les brocolis dans l''eau et les faire cuire pendant 5/6 minutes puis les réserver sur le côté.', 23),
(2, 'Commencez à mélanger doucement. Quand le mélange devient épais, ajoutez le lait froid petit à petit.\r\n\r\nQuand tout le lait est mélangé, la pâte doit être assez fluide. Si elle vous paraît trop épaisse, rajoutez un peu de lait. \r\n\r\nAjoutez ensuite le beurre fondu refroidi, mélangez bien.', 24),
(2, 'Montez les blancs en neige avec une pincée de sel. Incorporez-les très délicatement avec la crème au mascarpone et mélangez tout doucement pour ne pas casser les blancs en neige.', 25),
(2, 'Laver, et préparer les légumes : épépiner les poivrons, les découper en lamelles, couper les courgettes en rondelles ainsi que les tomates, faire des bâtonnets de carottes et des dés de chair d''aubergine...\r\n\r\n N''hésitez pas à avoir varier la présentation des légumes, et à laissez parler votre créativité !', 26),
(2, 'Ajouter les ingrédients les uns après les autres en mélangeant convenablement.', 27),
(2, 'Pelez le pamplemousse à vif. Détachez les quartiers en éliminant les membranes. \r\n\r\nDécoupez la pulpe en petits dés et réservez au frais.', 28),
(2, 'Ajouter un autre cuillère d''huile à la poêle, faire revenir le poulet, ajouter le sel et le paprika, faire cuire pendant 4 à 5 minutes.', 29),
(2, 'Pendant ce temps, dans une casserole, faire le bouillon avec les cubes.', 30),
(3, 'Sauce : \r\nMêlez 6 cuillères à soupe d''huile à 2 ou 3 de vinaigre selon le goût. \r\nAjoutez une cuillère à café dde moutarde. Salez, poivrez. Laisser au frigo pendant 15 à 20 min.', 1),
(3, 'Ajouter la purée de tomates, l''eau et les herbes.\r\nSaler, poivrer, puis laisser mijoter à feu doux 45 minutes.', 2),
(3, 'Dans un saladier, ajoutez le sucre, les oeufs, la farine. Mélangez.\r\nAjoutez le mélange chocolat/beurre. Mélangez bien.', 3),
(3, 'Passer la limonade. Embouteiller et boucher hermétiquement. Elle se garde environ 2 mois.', 4),
(3, 'Enfourner et laisser cuire environ 30 min. La préparation doit dorer.', 5),
(3, 'Faites dorer les lardons dont vous utiliserez la graisse pour faire revenir les poireaux ensuite.\r\n\r\nRépartissez lardons et poireaux sur le fond de tarte.', 6),
(3, 'Disposer sur une plaque de cuisson et mettre au four thermostat 3 pendant 1 heure.\r\n\r\nMais attention, le temps de cuisson dépend de la grosseur des meringues ET du four!', 7),
(3, 'Mettre les oignons de coté et faire revenir les lardons.\r\n\r\nMettre les oignons cuits lardons crème dans la poêle et faire réduire.', 8),
(3, 'Écrasez délicatement avec un pilon les dés de citron vert sur les feuilles de menthe afin d’en extraire le jus.\r\n', 9),
(3, 'Faites revenir les lardons dans une poêle.\r\n', 10),
(3, 'On peut éventuellement couvrir l''houmous d''huile de sésame et de cumin.', 11),
(3, 'Faire cuire environ 50 min, en surveillant attentivement la cuisson ', 12),
(3, 'Dans un saladier mélanger le chocolat fondu avec les œufs puis après avoir obtenu un mélange lisse, ajouter le sucre.\r\n\r\nAjouter la farine quand le sucre est bien incorporé à la préparation, bien mélanger pour éviter les grumeaux.\r\n\r\nAjouter les noix et bien mélanger.', 17),
(3, 'Ajouter les févettes, le poivron vert finement coupé, les radis coupés en rondelles et le thon bien égouté et émietté. \r\n\r\nMélanger grossièrement tous ces ingrédients avec du sel et du poivre.', 19),
(3, 'Pendant que les coquillettes cuisent, coupez le jambon en fines lamelles.\r\n', 20),
(3, 'Couper les carottes en rondelles et émincer les oignons puis les incorporer à la viande, ainsi que les champignons.\r\n\r\nLaisser mijoter à feu très doux environ 1h30 à 2h00 en remuant. Si nécessaire, ajouter de l''eau de temps en temps.', 21),
(3, 'Plonger les pâtes dans l''eau (bouillante) et les faire cuire. \r\n\r\nÉgoutter les pâtes.', 23),
(3, 'Faites cuire les crêpes dans une poêle chaude (par précaution légèrement huilée si votre poêle à crêpes n''est pas anti-adhésive). \r\n\r\nVersez une petite louche de pâte dans la poêle, faites un mouvement de rotation pour répartir la pâte sur toute la surface. Posez sur le feu et quand le tour de la crêpe se colore en roux clair, il est temps de la retourner.\r\n\r\nLaissez cuire environ une minute de ce côté et la crêpe est prête.', 24),
(3, 'Faites fondre le nutella avec le lait au micro-ondes ou à la casserole.\r\n\r\nCassez les spéculoos en morceaux et disposez-les au fond de chaque verrine. Émiettez-les en les écrasant avec une spatule ou le bout d''un rouleau à pâtisserie, par exemple.', 25),
(3, 'Faire chauffer l''huile d''olive, y faire revenir les oignons puis, une fois qu''ils sont bien dorés, ajouter le reste des légumes, les herbes, le sel et le poivre.\r\n\r\nAjouter 1 verre d''eau moyen, couvrir, et laisser mijoter durant le quart d''heure restant, en n''oubliant pas de remuer de temps en temps !', 26),
(3, 'Ajouter la viande hâchée et mélanger le tout.', 27),
(3, 'Pelez et hachez finement les oignons.', 28),
(3, 'Ajouter les œufs et bien mélanger (ça doit ressembler à des œufs brouillés).\r\n\r\nEnlever le tout et mettre dans un plat. ', 29),
(3, 'Ajouter dans le bouillon ail, échalotes, citronnelle, galangal, champignons et faire cuire 10 min à feu moyen.\r\n\r\nAjouter dans la préparation le zeste de kaffir lime, piments, tomates, sauce de poisson, faire cuire 5 minutes.\r\n\r\nAjouter les crevettes, faire cuire 5 minutes, et en dernier rajouter le jus de citron vert.', 30),
(4, 'Avant de servir, ajouter basilic persil ou d''autres herbes aromatiques.', 1),
(4, 'Pour la béchamel : \r\n- Faire fondre le beurre.\r\n- Hors du feu, ajouter la farine d''un coup.\r\n- Remettre sur le feu et remuer avec un fouet jusqu''à l''obtention d''un mélange bien lisse.\r\n- Ajouter le lait peu à peu.\r\n- Remuer sans cesse, jusqu''à ce que le mélange s''épaississe.\r\n- Ensuite, parfumer avec la muscade, saler, poivrer. Laisser cuire environ 5 minutes, à feu très doux, en remuant. Réserver.', 2),
(4, 'Beurrez et farinez votre moule puis y versez la pâte à gâteau.', 3),
(4, 'Préchauffez le four à 180°C ( Th 6).', 6),
(4, 'Égoutter les crozets.\r\n\r\nMettre dans le plat à gratin une couche de crozet, une couche de crème/lardons/oignons.\r\n\r\nRemplir le plat de cette manière et mettre au dessus le reblochon coupé en 2.', 8),
(4, 'Préparez la glace pilée en déposant les glaçons dans un torchon, refermez, puis à l’aide d’un pilon spécial cocktail, frappez fortement pour casser la glace.\r\n', 9),
(4, 'Versez le mélange crème fraîche/œuf dessus et mélangez doucement dans la poêle à l''aide d''une spatule.\r\n\r\nQuand la sauce est un peu épaissie, c''est prêt.\r\n', 10),
(4, 'Mettre la préparation dans un moule et le mettre au four pendant 15 minutes.\r\n\r\nÀ partir de 15 min planter un couteau dans le cœur du gâteau pour vérifier la cuisson et l’adapter selon vos goûts.\r\n', 17),
(4, 'Couper les tomates en fines rondelles et les ajouter. \r\n\r\nCouper les oeufs durs en quartiers et les disposer sur le dessus et ajouter les filets d''anchois, les olives noires et le basilic finement ciselé.', 19),
(4, 'Une fois que les coquillettes sont cuites, ajoutez le fromage râpé et mélangez bien pour qu''il fonde.\r\n', 20),
(4, 'Dans un bol, bien mélanger la crème fraîche, le jaune d’oeuf et le jus de citron. \r\n\r\nAjouter ce mélange au dernier moment, bien remuer et servir tout de suite.', 21),
(4, 'Dans la casserole à feux doux, mettre les pâtes, les brocolis et la crème et mélanger.\r\n\r\nAssaisonner et servir.', 23),
(4, 'Recouvrez les spéculoos de nutella fondu. \r\n\r\nAjoutez la mousse au mascarpone par dessus.\r\n\r\nRecouvrez le tout de spéculoos émiettés et/ou de chocolat en poudre.', 25),
(4, 'Une fois cela fait, récuperer le jus des légumes (que vous aurez déglacé à l''eau, si besoin était), et les faire refroidir au frigo.', 26),
(4, 'Mélangez tous les ingrédients préparés, salez, poivrez et assaisonnez d’huile. Répartissez sur les assiettes et servez très frais avec du pain grillé.', 28),
(4, 'Ajouter la dernière cuillère d''huile dans la poêle. \r\n\r\nMettre l''ail, le vinaigre le nuoc nam et le sucre, faire cuire pendant 2 minutes.', 29),
(4, 'Rajouter la coriandre juste avant de servir, directement dans les bols.', 30),
(5, 'Préchauffer le four à 200°C (thermostat 6-7).', 2),
(5, 'Faites cuire au four environ 20 minutes.\r\n\r\nA la sortie du four le gâteau ne paraît pas assez cuit. C''est normal, laissez-le refroidir puis démoulez- le.', 3),
(5, 'Dans un bol battez les oeufs, la crème et le lait. Assaisonnez à votre goût puis versez le mélange dans la tarte.\r\n\r\nDécouper le fromage de chèvre en rondelles que vous déposerez sur la quiche.', 6),
(5, 'Faire cuire au four pendant 20 minutes à 200°C', 8),
(5, 'Versez ensuite dans votre verre à cocktail 4 cl de rhum blanc 40°, la glace pilée et allongez avec l’eau gazeuse.\r\n', 9),
(5, 'Égouttez les pâtes et servez dans des assiettes avec la sauce dessus.', 10),
(5, 'Enfin, saupoudrer de sel et de poivre, puis arroser d''huile d''olive et de vinaigre de vin.', 19),
(5, 'Versez la crème fraîche. Poivrez. Ajoutez le jambon à votre risotto et mélangez bien. \r\n\r\nServez aussitôt dans 4 assiettes.', 20),
(5, 'Placez les verrines au réfrigérateur minimum 4h et au mieux une nuit entière pour que la mousse du tiramisu soit bien prise.', 25),
(5, 'Pendant ce temps, faire griller 6 tranches de pain aux olives pendant 3 min.\r\n\r\nLes réserver, à la sortie du four (qu''on laisse tourner!).', 26),
(5, 'Ajouter les pâtes (que vous avez fait cuire) dans cette sauce. \r\n\r\nMettre le piment et les arachides, rajouter le poulet et les légumes au tout et bien mélanger.', 29),
(6, 'Huiler le plat à lasagnes. \r\nPoser une fine couche de béchamel puis des feuilles de lasagnes, de la bolognaise, de la béchamel et du parmesan.\r\nRépéter l''opération 3 fois de suite.\r\nSur la dernière couche de lasagnes, ne mettre que de la béchamel et recouvrir de fromage râpé. Parsemer quelques noisettes de beurre.              ', 2),
(6, 'Cuire au four de 25 à 30 mn.', 6),
(6, 'Mettre au frais 1 heure et bien mélanger la salade juste avant de la servir.\r\n', 19),
(6, 'Préparer la sauce du mesclun : mélanger la moutarde, le parmesan, l''huile d''olive, le vinaigre basalmique, le sel, le poivre et le jus des légumes.', 26),
(6, 'Mettre le tout dans un plat, décorer avec le basilic frit et des tranches de citron.', 29),
(7, 'Enfourner pour environ 25 minutes de cuisson.', 2),
(7, 'Poser les tranches de mozzarella sur les toasts, les faire fondre au four, puis passer en mode grill, jusqu''à ce qu''elles soient bien dorées.\r\n\r\nMonter alors une belle cuillère à soupe de légumes froids sur les tartines.', 26);

-- --------------------------------------------------------

--
-- Structure de la table `projets2_ingredient`
--

CREATE TABLE IF NOT EXISTS `projets2_ingredient` (
  `id_ingredient` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(100) NOT NULL,
  `unite` varchar(50) NOT NULL,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id_ingredient`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=117 ;

--
-- Contenu de la table `projets2_ingredient`
--

INSERT INTO `projets2_ingredient` (`id_ingredient`, `libelle`, `unite`, `type`) VALUES
(1, 'Tomate', 'int', 'Légume'),
(2, 'Poireau', 'int', 'Légume'),
(3, 'Maïs', 'int', 'Légume'),
(4, 'Salade', 'int', 'Légume'),
(5, 'Thon', 'g', 'Poisson'),
(6, 'Sel', 'g', 'Assaisonnement'),
(7, 'Poivre', 'g', 'Assaisonnement '),
(8, 'Huile d''olive', 'cl', 'Assaisonnement'),
(9, 'Vinaigre', 'cl', 'Assaisonnement'),
(10, 'Moutarde', 'g', 'Assaisonnement'),
(11, 'Riz', 'g', 'Féculent'),
(12, 'Basilic', 'g', 'Assaisonnement'),
(13, 'Pâtes lasagne', 'g', 'Féculent'),
(14, 'Oignon', 'int', 'Légume'),
(15, 'Ail', 'int', 'Assaisonnement'),
(16, 'Céleri', 'int', 'Légume'),
(17, 'Carotte', 'int', 'Légume'),
(18, 'Viande hachée', 'g', 'Viande'),
(19, 'Purée de tomate', 'g', 'Légume'),
(20, 'Eau', 'cl', 'Boisson'),
(21, 'Vin rouge', 'cl', 'Boisson'),
(22, 'Feuilles de laurier', 'int', 'Assaisonnement'),
(23, 'Thym', 'g', 'Assaisonnement'),
(24, 'Muscade', 'g', 'Assaisonnement'),
(25, 'Fromage râpé', 'g', 'Produit laitier'),
(26, 'Parmesan', 'g', 'Produit laitier'),
(27, 'Farine', 'g', 'Céréales'),
(28, 'Beurre', 'g', 'Produit laitier'),
(29, 'Lait', 'cl', 'Produit laitier'),
(30, 'Chocolat de cuisine', 'g', 'Sucrerie'),
(31, 'Oeufs', 'int', 'Produit laitier'),
(32, 'Sucre en poudre', 'g', 'Sucrerie'),
(33, 'Citron', 'int', 'Fruit'),
(34, 'Pâte à tarte', 'int', 'Produit laitier'),
(35, 'Lardons', 'g', 'Viande'),
(36, 'Chèvre', 'g', 'Produit laitier'),
(37, 'Crème fraiche', 'cl', 'Produit laitier'),
(38, 'Sucre roux', 'g', 'Sucrerie'),
(39, 'Crozet', 'g', 'Féculent'),
(40, 'Reblochon', 'int', 'Produit laitier'),
(41, 'Rhum blanc', 'cl', 'Boisson'),
(42, 'Sirop sucre de canne', 'cl', 'Boisson'),
(43, 'Feuilles de menthe', 'int', 'Assaisonnement'),
(44, 'Eau gazeuse', 'cl', 'Boisson'),
(45, 'Citron vert', 'int', 'Légume'),
(46, 'Glaçons', 'int', 'Boisson'),
(47, 'Tagliatelles', 'g', 'Féculent'),
(48, 'Pois chiches', 'g', 'Céréales'),
(49, 'Tahin', 'g', 'Assaisonnement'),
(50, 'Cumin', 'g', 'Assaisonnement'),
(51, 'Sucre glace', 'g', 'Sucrerie'),
(52, 'Levure chimique', 'g', 'Sucrerie'),
(53, 'Amande en poudre', 'g', 'Céréales'),
(54, 'Pralines roses aux amandes concassées', 'g', 'Céréales'),
(55, 'Vodka', 'cl', 'Boisson'),
(56, 'Liqueur de pêche', 'cl', 'Boisson'),
(57, 'Jus d''ananas', 'cl', 'Boisson'),
(58, 'Jus de Cranberry', 'cl', 'Boisson'),
(59, 'Rhum cubain', 'cl', 'Boisson'),
(60, 'Cola', 'cl', 'Boisson'),
(61, 'Tequila', 'cl', 'Boisson'),
(62, 'Jus d''orange', 'cl', 'Boisson'),
(63, 'Grenadine', 'cl', 'Boisson'),
(64, 'Curaçao Bleu', 'cl', 'Boisson'),
(65, 'Noix', 'int', 'Céréales'),
(66, 'Banane', 'int', 'Fruit'),
(67, 'Lait aux amandes', 'cl', 'Boisson'),
(68, 'Flocons d''avoine', 'g', 'Céréales'),
(69, 'Poivron', 'int', 'Légume'),
(70, 'Filets d''anchois', 'g', 'Poisson'),
(71, 'Olives noires', 'g', 'Légume'),
(72, 'Radis', 'int', 'Légume'),
(73, 'Coquillettes', 'g', 'Féculent'),
(74, 'Jambon blanc', 'g', 'Viande'),
(75, 'Bouillon de volaille', 'int', 'Assaisonnement'),
(76, 'Sauté de veau', 'g', 'Viande'),
(77, 'Champignons', 'g', 'Légume'),
(78, 'Vin blanc', 'cl', 'Boisson'),
(79, 'Rhum ambré', 'cl', 'Boisson'),
(80, 'Lait de coco', 'cl', 'Boisson'),
(81, 'Pâtes', 'g', 'Féculent'),
(82, 'Brocoli', 'int', 'Légume'),
(83, 'Mascarpone', 'g', 'Produit laitier'),
(84, 'Pâte à tartiner', 'g', 'Sucrerie'),
(85, 'Spéculos', 'g', 'Sucrerie'),
(86, 'Cacao en poudre', 'g', 'Sucrerie'),
(87, 'Courgette', 'int', 'Légume'),
(88, 'Aubergine', 'int', 'Légume'),
(89, 'Herbes de provence', 'g', 'Assaisonnement'),
(90, 'Mozzarella', 'g', 'Produit laitier'),
(91, 'Pain aux olives', 'int', 'Céréales'),
(92, 'Câpres hachées', 'g', 'Assaisonnement'),
(93, 'Ketchup', 'g', 'Assaisonnement'),
(94, 'Worcestershire sauce', 'cl', 'Assaisonnement'),
(95, 'Tabasco', 'cl', 'Assaisonnement'),
(96, 'Filet de daurade sans peau', 'g', 'Poisson'),
(97, 'Filet de cabillaud sans peau', 'g', 'Poisson'),
(98, 'Filet de bar sans peau', 'g', 'Poisson'),
(99, 'Pamplemousse', 'int', 'Fruit'),
(100, 'Ciboulette', 'g', 'Assaisonnement'),
(101, 'Pâtes à la semoule de riz', 'g', 'Féculent'),
(102, 'Escalope de poulet', 'int', 'Viande'),
(103, 'Paprika', 'g', 'Assaisonnement'),
(104, 'Nuoc mam', 'cl', 'Assaisonnement'),
(105, 'Sucre roux', 'g', 'Sucrerie'),
(106, 'Harissa', 'g', 'Assaisonnement'),
(107, 'Arachide', 'g', 'Assaisonnement'),
(108, 'Germes de soja', 'g', 'Assaisonnement'),
(109, 'Crevettes', 'int', 'Poisson'),
(110, 'Echalotes', 'int', 'Assaisonnement'),
(111, 'Citronelle', 'int', 'Assaisonnement'),
(112, 'Galanga', 'int', 'Assaisonnement'),
(113, 'Piment rouge', 'int', 'Légume'),
(114, 'Poisson', 'g', 'Poisson'),
(115, 'Coriandre', 'g', 'Assaisonnement'),
(116, 'Bouillon cube Knorr « Tom Yam »', 'int', 'Assaisonnement');

-- --------------------------------------------------------

--
-- Structure de la table `projets2_photo`
--

CREATE TABLE IF NOT EXISTS `projets2_photo` (
  `id_photo` int(11) NOT NULL AUTO_INCREMENT,
  `cheminPhoto` varchar(100) NOT NULL,
  `id_recette` int(11) NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  PRIMARY KEY (`id_photo`),
  KEY `id_recette` (`id_recette`),
  KEY `pseudo` (`pseudo`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `projets2_photo`
--

INSERT INTO `projets2_photo` (`id_photo`, `cheminPhoto`, `id_recette`, `pseudo`) VALUES
(1, 'cupcakes.jpg', 3, 'Erwann'),
(2, 'lasagnes.jpg', 2, 'Fanny'),
(3, 'mojito.jpg', 9, 'Paul'),
(4, 'muffin.jpg', 3, 'Jeanne'),
(5, 'tiramisu.jpg', 25, 'Erwann');

-- --------------------------------------------------------

--
-- Structure de la table `projets2_recette`
--

CREATE TABLE IF NOT EXISTS `projets2_recette` (
  `id_recette` int(11) NOT NULL AUTO_INCREMENT,
  `intitule` varchar(300) NOT NULL,
  `resume` text NOT NULL,
  `nbPersonne` int(11) NOT NULL,
  `tpsPreparation` int(11) NOT NULL,
  `tpsCuisson` int(11) NOT NULL,
  `difficulte` int(11) NOT NULL,
  `typeCout` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `id_type` int(11) NOT NULL,
  `id_region` int(11) NOT NULL,
  `pseudo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_recette`),
  KEY `id_type` (`id_type`),
  KEY `id_region` (`id_region`),
  KEY `pseudo` (`pseudo`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='Fiche technique recette ' AUTO_INCREMENT=31 ;

--
-- Contenu de la table `projets2_recette`
--

INSERT INTO `projets2_recette` (`id_recette`, `intitule`, `resume`, `nbPersonne`, `tpsPreparation`, `tpsCuisson`, `difficulte`, `typeCout`, `date`, `id_type`, `id_region`, `pseudo`) VALUES
(1, 'Salade composée', 'Salade composée thon/maïs très simple pour \r\ngarantir une entrée qui fonctionne à tous les coups !', 4, 25, 10, 1, 'Faible', '2020-04-16', 1, 2, 'Fanny'),
(2, 'Lasagnes à la bolognaise', 'Un petit gout d''Italie bien mérité après la préparation de ces lasagnes bolognaises maison !', 8, 125, 95, 2, 'Moyen', '2020-04-16', 2, 3, 'Fanny'),
(3, 'Fondant au chocolat', 'Une envie de dessert ? Une envie de chocolat ? \r\nFaites vous plaisir avec un fondant au chocolat, en quantité suffisante vous en garderez même pour plusieurs repas ! ', 6, 40, 30, 1, 'Faible', '2020-04-16', 3, 1, 'Fanny'),
(4, 'Limonade', 'Que le soleil rayonne ou non rien de tel qu''une petite limonade pour se rafraichir !\r\n', 12, 20, 0, 1, 'Faible', '2020-04-16', 4, 2, 'Fanny'),
(5, 'Tarte au citron', 'En prenant des oranges pour des citrons vous vous retrouvez avec trop de citrons à ne plus savoir qu''en faire ? En 45 minutes cuisinez une superbe tarte au citron qui ravira vos papilles !', 6, 45, 30, 1, 'Faible', '2020-04-16', 3, 2, 'Fanny'),
(6, 'Quiche aux poireaux lardons chèvre', 'Des poireaux... Des lardons... Du chèvre... Mais que\r\nfaire avec ça ? \r\nEt bien une quiche poireaux lardons chèvres ! Pourquoi inventer un nom ? ', 4, 55, 35, 1, 'Faible', '2020-04-16', 2, 1, 'Fanny'),
(7, 'Meringues', 'Rien de plus simple, des oeufs et du sucre.\r\nSoyez innovant avec le jaune d''oeuf car vous n''en aurez pas besoin pour des meringues !', 8, 75, 60, 1, 'Faible', '2020-04-16', 3, 1, 'Fanny'),
(8, 'Croziflette', '- "Ah j''aime la tartiflette mais j''ai un peu de mal avec la\r\npomme de terre " \r\n- "Pas de problèmes Dimitri ! \r\n  Remplacez-les par des pâtes !"\r\n- "C''est pas bête ça Jean-François !"\r\n\r\nVoilà comment a été inventé la croziflette, mais ne le dites à personne.', 4, 70, 40, 1, 'Moyen', '2020-04-16', 2, 4, 'Fanny'),
(9, 'Mojito (avec alcool)', 'La journée a été longue ? Vous voulez vous faire plaisir\r\npour une fois ? \r\n\r\nPas besoin de se justifier pour boire un bon mojito maison ! Même si tout va bien le cocktail reste délicieux !', 2, 10, 0, 1, 'Faible', '2020-04-16', 4, 5, 'Jeanne'),
(10, 'Pâtes à la carbonara', 'Pas besoin de faire de courses vous avez déjà tout dans\r\nle frigo !\r\nA moins d''être intolérant au lactose vous devriez avoir de la crème fraiche ! \r\nEn espérant pour vous que vous aimez les lardons sinon on peut vous préconiser des pâtes au beurre (ah non vous \r\nêtes intolérant au lactose).\r\n\r\nEnfin bref, c''est des pates carbonara quoi.', 2, 13, 10, 1, 'Faible', '2020-04-16', 2, 3, 'Jeanne'),
(11, 'Houmous', 'Vous aimez les pois chiches mais ne voulez pas placer votre après midi ou votre soirée sous le signe du vent ?\r\n\r\nAlors optez pour cette bonne recette de houmous très simple !', 4, 10, 0, 1, 'Faible', '2020-04-16', 1, 6, 'Jeanne'),
(12, 'Cake aux pralines rose', 'Vous vous sentez un peu mou ? Je pense qu''un peu de sucre vous ferait le plus grand bien.\r\n\r\nOu plutôt BEAUCOUP de sucres parce que la praline c''est sucré aussi.\r\n\r\nBon appétit ! Ce cake aux pralines fera pâlir vos tartines de pain de mie !', 5, 70, 50, 1, 'Moyen', '2020-04-16', 3, 7, 'Jeanne'),
(13, 'Sex on the beach', 'Vodka, liqueur de pêche, jus d''ananas et cranberry.\r\nC''est bon de le savoir parce que contrairement à "eau minérale" on ne sait clairement pas ce que veut dire "Sex on the Beach", enfin pas pour un cocktail.', 1, 5, 0, 1, 'Moyen', '2020-04-16', 4, 14, 'Jeanne'),
(14, 'Cuba libre', 'Une petite envie de révolution ? Et bien peut-être qu''après 3 ou 4 Cuba Libre l''âme du Che viendra en vous !', 1, 5, 0, 1, 'Moyen', '2020-04-16', 4, 5, 'Jeanne'),
(15, 'Tequila sunrise', 'Voilà un nom de Cocktail un peu plus explicite !\r\nOn sait rapidement qu''il y a de la Tequila dedans.\r\nPar contre pour les plus malins d''entre vous il n''y a pas réellement de soleil qui se lève dans votre verre.\r\nC''est juste de la grenadine.', 1, 5, 0, 1, 'Moyen', '2020-04-16', 4, 8, 'Jeanne'),
(16, 'Blue Lagoon', 'Parce que boire des cocktails colorés c''est vraiment cool, préparez-vous un Blue Lagoon. \r\nSi vous n''aimez pas la couleur bleu c''est dommage, et puis si vous changez la couleur ça ferait bizarre, vous avez déjà vu des lagons rouges ? On appelle ça des \r\nvolcans, et personne ne veut boire dans un volcan. \r\nEnfin pas moi en tout cas.', 1, 5, 0, 1, 'Moyen', '2020-04-16', 4, 9, 'Jeanne'),
(17, 'Brownies au chocolat', '"J''aime le chocolat, et contrairement à mon ami Henri je ne suis pas allergique aux arachides, quelle\r\nchance j''ai !"\r\n\r\nVous vous sentirez sûrement plus chanceux après avoir dégusté cette superbe recette de Brownies !\r\n\r\n(Sinon pour Henri on a d''autres recettes.)', 6, 10, 20, 1, 'Faible', '2020-04-16', 3, 1, 'Erwann'),
(18, 'Pancakes healthy aux flocons d''avoine', 'Difficile de ne pas culpabiliser après avoir mangé des pancakes ? C''est un peu lourd ? \r\n\r\nEt bien rajoutez "healthy" dans le nom de la recette pour enlever toute culpabilité !\r\nBon c''est quand même bon pour vous, faites-vous plaisir.', 4, 5, 2, 1, 'Faible', '2020-04-16', 3, 1, 'Erwann'),
(19, 'Salade niçoise', 'Si vous n''êtes pas allergique au sud (ainsi qu''aux tomates, oeufs, oignons, poivron, thon, anchois, olives, basilic, radis, olive, vinaigre)\r\nEt bien la Salade Niçoise est faite pour vous !', 4, 20, 8, 1, 'Faible', '2020-04-16', 1, 10, 'Erwann'),
(20, 'Risotto de coquillettes au jambon', '"Attend mais du Risotto de coquillettes ça veut dire qu''il y a du riz et des coquillettes ?"\r\n\r\nEt bien non, cette recette devrait s''appeler : Patesotto au jambon\r\n\r\nMais personne ne comprendrait donc c''est juste un risotto sans riz et avec des pates (et du jambon aussi mais vous savez lire)', 4, 50, 45, 1, 'Faible', '2020-04-16', 2, 15, 'Erwann'),
(21, 'Blanquette de veau', '"Comment est votre blanquette ?"\r\n"Elle est bonne."\r\n\r\nSi vous ne connaissez pas OSS 117 vous venez de passer à côté d''une blague.\r\n\r\nSi vous n''avez pas compris c''est juste moins drôle mais la blanquette est bonne quand même, bon appétit.', 4, 15, 120, 1, 'Elevé', '2020-04-16', 2, 15, 'Erwann'),
(22, 'Piña Colada', 'Aucun rapport avec la piñata, vous n''allez pas éclater votre cocktail avec une batte de baseball au calme.\r\n\r\nC''est juste un très bon cocktail à la noix de coco.\r\n\r\nSi vous n''aimez pas vous pourrez prétendre que le cocktail est en fait une piñata et l''éclater pour ne pas avoir à le boire, mais je n''ai rien dit.', 1, 5, 0, 1, 'Moyen', '2020-04-16', 4, 11, 'Erwann'),
(23, 'Pâtes aux brocolis', '"Pâtes aux brocolis" c''est étrange non ? \r\n\r\nEtrange certes, mais c''est bon.', 2, 5, 15, 1, 'Faible', '2020-04-16', 2, 1, 'Erwann'),
(24, 'Crêpes', 'Sucrées, salées, collées au plafond, éclatées par terre...\r\n\r\nLibre à vous de les cuisiner comme bon vous semble mais la recette est correcte donc si ne n''est pas bon ce n''est pas de notre faute.', 10, 10, 15, 1, 'Faible', '2020-04-16', 3, 12, 'Paul'),
(25, 'Tiramisù au Nutella et Spéculoos', 'Vous avez des verres à verrine mais ne les avez jamais utilisés autrement que pour boire des shots? \r\n\r\nPensez aux moins de 18 ans et cuisinez un délicieux tiramisu.', 4, 25, 0, 2, 'Moyen', '2020-04-16', 3, 3, 'Paul'),
(26, 'Tartines grillées aux légumes du soleil', '"Tartines grillées aux légumes du soleil"\r\n\r\nC''est joli comme nom, on aurait presque l''impression qu''il existe des légumes de la nuit. Cependant si on fait tourner un neurone 7 fois dans notre cerveau à vitesse 8, thermostat 7 on se rend compte que c''est exactement la même chose que :\r\n\r\n"Tartines grillées aux légumes"\r\n\r\nMais sinon c''est bon, vous devriez essayer.', 6, 30, 20, 2, 'Moyen', '2020-04-16', 1, 2, 'Paul'),
(27, 'Steak tartare', 'Un peu fatigué que le serveur vous prépare votre tartare comme si vous aviez 7 ans ? (Et encore vous aviez de la chance si vous mangiez déjà du steak tartare à 7 ans)\r\n\r\nEt bien avec cette recette préparez-le enfin vous même.\r\n\r\nC''est chouette l''indépendance non ? ', 1, 10, 0, 1, 'Moyen', '2020-04-16', 2, 15, 'Paul'),
(28, 'Tartare aux trois poissons', 'On associe souvent "tartare" à l''idée de viande.\r\n\r\nSi vous lisez "Tartare aux 3 poissons" ne mettez que du poisson, le goût serait vraiment gâché.\r\n\r\nMais si vous ne voulez pas vous péter un neurone vous pouvez tout de même lire la liste des ingrédients...\r\nBingo, il n''y a pas de viande, on a encore eu de la chance.', 4, 20, 0, 1, 'Moyen', '2020-04-16', 2, 15, 'Paul'),
(29, 'Pad Thai', 'Il est préférable d''aller faire des courses avant de préparer un pad thai, déjà il faut lire un livre pour trouver tous les ingrédients et en plus les pâtes à la \r\nsemoule de riz ça ne court pas les placards.\r\n(Ca ne court d''ailleurs pas du tout, ça n''a pas de jambes)\r\n\r\nC''est excellent donc faites un petit effort et faites vous plaisir !', 6, 30, 15, 1, 'Faible', '2020-04-16', 2, 13, 'Paul'),
(30, 'Tom Yamm Goong', '- "Mais Jeannine je comprends rien à Tom Yamm Goong", c''est du chinois pour moi !".\r\n\r\nAlors c''est du Thailandais, mais effectivement on ne sait pas ce que ça veut dire non plus. Et je doute que Jeannine\r\nsoit d''une meilleure aide que google traduction pour le coup.\r\n\r\nJe vous aide un peu, c''est une soupe pimentée, il n''y a pas vraiment plus de choses à savoir dessus.\r\n\r\nCa dégage bien les sinus et c''est super bon ! \r\nAvant d''aller à la pharmacie essayez de cuisiner un peu !', 4, 30, 20, 1, 'Faible', '2020-04-16', 1, 13, 'Paul');

-- --------------------------------------------------------

--
-- Structure de la table `projets2_region`
--

CREATE TABLE IF NOT EXISTS `projets2_region` (
  `id_region` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  PRIMARY KEY (`id_region`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- Contenu de la table `projets2_region`
--

INSERT INTO `projets2_region` (`id_region`, `nom`) VALUES
(1, 'Pas de région particulière'),
(2, 'Sud de la France'),
(3, 'Italie'),
(4, 'Savoie'),
(5, 'Cuba'),
(6, 'Moyen-Orient'),
(7, 'Lyon'),
(8, 'Arizona'),
(9, 'Paris'),
(10, 'Nice'),
(11, 'Porto Rico'),
(12, 'Bretagne'),
(13, 'Thaïlande'),
(14, 'Floride'),
(15, 'France');

-- --------------------------------------------------------

--
-- Structure de la table `projets2_requiert`
--

CREATE TABLE IF NOT EXISTS `projets2_requiert` (
  `id_recette` int(11) NOT NULL,
  `id_ustensile` int(11) NOT NULL,
  `quantite` int(11) NOT NULL,
  PRIMARY KEY (`id_recette`,`id_ustensile`),
  KEY `id_ustensile` (`id_ustensile`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `projets2_requiert`
--

INSERT INTO `projets2_requiert` (`id_recette`, `id_ustensile`, `quantite`) VALUES
(1, 1, 1),
(1, 18, 1),
(2, 1, 1),
(2, 14, 1),
(2, 17, 1),
(2, 18, 1),
(2, 19, 1),
(2, 25, 1),
(2, 26, 1),
(3, 10, 1),
(3, 13, 1),
(3, 18, 1),
(3, 26, 1),
(4, 1, 1),
(4, 9, 1),
(4, 19, 1),
(4, 30, 1),
(5, 9, 1),
(5, 14, 1),
(5, 26, 1),
(5, 31, 1),
(6, 1, 1),
(6, 9, 1),
(6, 19, 1),
(6, 26, 1),
(6, 31, 1),
(7, 9, 1),
(7, 22, 1),
(7, 26, 1),
(8, 1, 1),
(8, 17, 1),
(8, 18, 1),
(8, 19, 1),
(8, 25, 1),
(8, 26, 1),
(9, 1, 1),
(9, 2, 1),
(9, 3, 1),
(9, 4, 1),
(10, 9, 1),
(10, 17, 1),
(10, 18, 1),
(11, 9, 1),
(11, 21, 1),
(12, 5, 1),
(12, 14, 1),
(12, 26, 1),
(13, 6, 1),
(13, 7, 1),
(14, 7, 1),
(15, 7, 1),
(16, 6, 1),
(16, 8, 1),
(17, 9, 1),
(17, 10, 1),
(17, 12, 1),
(17, 13, 1),
(17, 14, 1),
(17, 15, 1),
(17, 26, 1),
(18, 10, 1),
(18, 11, 1),
(18, 14, 1),
(18, 16, 1),
(18, 17, 1),
(19, 1, 1),
(19, 10, 1),
(19, 18, 1),
(19, 19, 1),
(20, 1, 1),
(20, 18, 1),
(20, 19, 1),
(21, 1, 1),
(21, 19, 1),
(21, 20, 1),
(22, 6, 1),
(22, 23, 1),
(23, 1, 1),
(23, 18, 2),
(24, 10, 1),
(24, 11, 1),
(24, 16, 1),
(24, 17, 1),
(25, 10, 1),
(25, 11, 1),
(25, 14, 1),
(25, 22, 1),
(25, 24, 1),
(26, 1, 1),
(26, 19, 1),
(26, 26, 1),
(27, 9, 1),
(27, 27, 1),
(28, 1, 1),
(28, 19, 1),
(29, 17, 1),
(29, 28, 1),
(29, 29, 1),
(30, 1, 1),
(30, 18, 1),
(30, 19, 1);

-- --------------------------------------------------------

--
-- Structure de la table `projets2_type`
--

CREATE TABLE IF NOT EXISTS `projets2_type` (
  `id_type` int(11) NOT NULL AUTO_INCREMENT,
  `typeRecette` varchar(100) NOT NULL,
  PRIMARY KEY (`id_type`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Contenu de la table `projets2_type`
--

INSERT INTO `projets2_type` (`id_type`, `typeRecette`) VALUES
(1, 'Entrée'),
(2, 'Plat'),
(3, 'Dessert'),
(4, 'Boisson');

-- --------------------------------------------------------

--
-- Structure de la table `projets2_ustensile`
--

CREATE TABLE IF NOT EXISTS `projets2_ustensile` (
  `id_ustensile` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(100) NOT NULL,
  PRIMARY KEY (`id_ustensile`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=32 ;

--
-- Contenu de la table `projets2_ustensile`
--

INSERT INTO `projets2_ustensile` (`id_ustensile`, `libelle`) VALUES
(1, 'Couteau d''office'),
(2, 'Rouleau à pâtisserie'),
(3, 'Pilon à cocktail'),
(4, 'Torchon'),
(5, 'Moule à cake'),
(6, 'Shaker'),
(7, 'Verre de type tumbler'),
(8, 'Verre à Martini'),
(9, 'Bol'),
(10, 'Saladier'),
(11, 'Verre doseur'),
(12, 'Balance'),
(13, 'Moule'),
(14, 'Fouet'),
(15, 'Cuillère en bois'),
(16, 'Louche'),
(17, 'Poêle'),
(18, 'Casserole'),
(19, 'Planche à découper'),
(20, 'Cocotte'),
(21, 'Mixer'),
(22, 'Batteur'),
(23, 'Verres'),
(24, 'Verrines'),
(25, 'Plat'),
(26, 'Four'),
(27, 'Fourchette'),
(28, 'Wok'),
(29, 'Friteuse'),
(30, 'Bouteille'),
(31, 'Plat à tarte');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `projets2_auteur`
--
ALTER TABLE `projets2_auteur`
  ADD CONSTRAINT `projets2_auteur_ibfk_1` FOREIGN KEY (`id_region`) REFERENCES `projets2_region` (`id_region`);

--
-- Contraintes pour la table `projets2_comprend`
--
ALTER TABLE `projets2_comprend`
  ADD CONSTRAINT `projets2_comprend_ibfk_1` FOREIGN KEY (`id_recette`) REFERENCES `projets2_recette` (`id_recette`),
  ADD CONSTRAINT `projets2_comprend_ibfk_2` FOREIGN KEY (`id_ingredient`) REFERENCES `projets2_ingredient` (`id_ingredient`);

--
-- Contraintes pour la table `projets2_etape`
--
ALTER TABLE `projets2_etape`
  ADD CONSTRAINT `projets2_etape_ibfk_1` FOREIGN KEY (`id_recette`) REFERENCES `projets2_recette` (`id_recette`);

--
-- Contraintes pour la table `projets2_photo`
--
ALTER TABLE `projets2_photo`
  ADD CONSTRAINT `projets2_photo_ibfk_1` FOREIGN KEY (`id_recette`) REFERENCES `projets2_recette` (`id_recette`);

--
-- Contraintes pour la table `projets2_recette`
--
ALTER TABLE `projets2_recette`
  ADD CONSTRAINT `projets2_recette_ibfk_1` FOREIGN KEY (`pseudo`) REFERENCES `projets2_auteur` (`pseudo`);

--
-- Contraintes pour la table `projets2_requiert`
--
ALTER TABLE `projets2_requiert`
  ADD CONSTRAINT `projets2_requiert_ibfk_1` FOREIGN KEY (`id_recette`) REFERENCES `projets2_recette` (`id_recette`),
  ADD CONSTRAINT `projets2_requiert_ibfk_2` FOREIGN KEY (`id_ustensile`) REFERENCES `projets2_ustensile` (`id_ustensile`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
