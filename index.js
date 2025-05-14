// Tableau des lectures
const lectures = [
  "La création et la chute - Genèse 1-3",
  "Le premier meurtre - Genèse 4:1-16",
  "Noé et le déluge - Genèse 6:1 à 9:17",
  "La tour de Babel - Genèse 11:1-9",
  "La destruction de Sodome et Gomorrhe et la femme de Lot - Genèse 19:1-29",
  "Abraham est prêt à sacrifier Isaac - Genèse 22:1-19",
  "L’histoire de Jacob - Genèse 25:19 à 35:29",
  "L’histoire de Joseph - Genèse 37 à 50",
  "Moïse en Égypte - Exode 1 à 14",
  "Moïse: L’Exode - Exode 12:27 à 18:27",
  "Le passage à travers la mer - Exode 14:15-31",
  "Au mont Sinaï - Exode 19 à 40:38",
  "Les dix commandements - Exode 20:1-17; Deutéronome 5:7 à 21",
  "Errant dans le désert - Nombres 14:32 à 17:15",
  "Adieu et mort de Moïse - Deutéronome 31 à 34",
  "Balaam et Balac - Nombres 22 à 24",
  "L’histoire de Ruth - Ruth 1 à 4",
  "L’histoire de Samuel - 1 Samuel 1 à 16",
  "Saül, le premier roi - 1 Samuel 8 à 31",
  "David, le roi berger - 1 Samuel 16 à 31; 2 Samuel 1 à 24; 1 Rois 1 à 2:12",
  "Le roi Salomon - 1 Rois 2:12 à 11:43",
  "Élie, le grand prophète - 1 Rois 17 à 21; 2 Rois 1",
  "Élisée, son successeur - 2 Rois 2-21",
  "Victoire de Jéhu sur Jézabel - 2 Rois 9",
  "Néhémie, constructeur héroïque - Néhémie 1 à 4",
  "Esther, reine héroïque - Esther 1:9 à 7:10",
  "Chadrac, Méchak et Abed-nego - Daniel 3",
  "Le banquet de Baltazar et l’inscription mystérieuse - Daniel 5",
  "Daniel dans la fosse aux lions - Daniel 6",
  "Jonas rebelle à sa mission - Jonas 1 à 4",
  "Jean-Baptiste : Sa naissance - Luc 1:5-25",
  "Jean-Baptiste : Son ministère - Matthieu 3; Marc 1:1-11; Luc 3:1-20",
  "Jean-Baptiste : Son exécution par Hérode - Matthieu 14:1-12; Marc 6:14-29",
  "La naissance de Jésus - Matthieu 1:18 à 2:15; Luc 1:26-56; 2:1-40",
  "Jésus à douze ans dans le temple - Luc 2:41-52",
  "Le baptême de Jésus - Matthieu 3:13-17; Marc 1:9-11; Luc 3:21-22",
  "La tentation de Jésus - Matthieu 4:1-11; Marc 1:12,13; Luc 4:1-13",
  "Le sermon sur la montagne - Matthieu 5 à 7; Luc 6:20-49",
  "L’entrée triomphale de Jésus à Jérusalem - Matthieu 21:1-11; Marc 11:1-11; Luc 19:28-44; Jean 12:12-19",
  "La passion et la résurrection - Matthieu 26 à 28; Marc 14 à 16; Luc 22 à 24; Jean 13 à 21",
  "L’Ascension de Jésus - Marc 16:19; Luc 24:50-53; Actes 1:6-11",
  "La graine de moutarde - Matthieu 13:31-32; Marc 4:30-32; Luc 13:18-19",
  "Le semeur - Matthieu 13:1-23; Marc 4:1-20; Luc 8:4-15",
  "La semence qui pousse toute seule - Marc 4:26-29",
  "La mauvaise herbe - Matthieu 13:24-43; Le levain - Matthieu 13:33; Luc 13:20-21",
  "Le trésor caché - Matthieu 13:44",
  "La perle précieuse - Matthieu 13:45-46",
  "Le filet - Matthieu 13:47-50",
  "Le serviteur impitoyable - Matthieu 18:21-35",
  "Les ouvriers dans la vigne - Matthieu 20:1-16",
  "Les deux fils - Matthieu 21:28-32; Les vignerons - Matthieu 21:33-46; Marc 12:1-12; Luc 20:9-18",
  "Le banquet nuptial - Matthieu 22:1-14; Luc 14:15-24",
  "Les dix vierges - Matthieu 25:1-13",
  "Les talents - Matthieu 25:14-30",
  "Le jugement dernier - Matthieu 25:31-46",
  "Les deux débiteurs - Luc 7:36-50",
  "Le bon Samaritain - Luc 10:25-37",
  "Le riche insensé - Luc 12:16-21",
  "Les serviteurs qui veillent - Luc 12:35-48",
  "Le figuier stérile - Luc 13:6-9; La brebis égarée - Luc 15:3-7",
  "La pièce d’argent perdue et retrouvée - Luc 15:8-10",
  "Le fils prodigue - Luc 15:11-32; L’intendant infidèle - Luc 16:1-13",
  "L’homme riche et Lazare - Luc 16:19-31",
  "Le juste injuste - Luc 18:1-8; Le pharisien et le publicain - Luc 18:9-14",
  "Les pièces d’or - Luc 19:11-27",
  "Guérison d’un lépreux - Matthieu 8:1-4; Marc 1:40-45; Luc 5:12-16; Guérison du serviteur d’un centurion - Matthieu 8:5-13; Luc 7:1-10",
  "Guérison de la belle-mère de Pierre - Matthieu 8:14-15; Marc 1:29-31; Luc 4:38-39; La tempête apaisée - Matthieu 8:23-27; Marc 4:35-41; Luc 8:22-25",
  "Les démoniaques Gadaréniens - Matthieu 8:28-34; Marc 5:1-20; Luc 8:26-39; Guérison d’un paralytique - Matthieu 9:1-8; Marc 2:1-12; Luc 5:17-26",
  "Les démoniaques Gadaréniens - Matthieu 8:28-34; Marc 5:1-20; Luc 8:26-39; Guérison d’un paralytique - Matthieu 9:1-8; Marc 2:1-12; Luc 5:17-26",
  "La fille de Jaïrus et la femme malade - Matthieu 9:18-26; Marc 5:21-43; Luc 8:40-56",
  "Les deux aveugles et le muet - Matthieu 9:27-34; L’homme à la main paralysée - Matthieu 12:9-14; Marc 3:1-6; Luc 6:6-11",
  "L’aveugle et muet possédé - Matthieu 12:22-32; Marc 3:20-30; Luc 11:14-23",
  "Guérison d’une femme infirme - Luc 13:10-17; Guérison d’un homme hydropique - Luc 14:1-6",
  "Les dix lépreux - Luc 17:11-19; L’aveugle Bartimée - Matthieu 20:29-34; Marc 10:46-52; Luc 18:35-43",
  "La résurrection de Lazare - Jean 11:1-44",
  "Le paralytique à Béthesda - Jean 5:1-18",
  "L’aveugle-né - Jean 9:1-41",
  "L’eau changée en vin - Jean 2:1-12; La multiplication des pains - Matthieu 14:13-21; Marc 6:30-44; Luc 9:10-17; Jean 6:1-15",
  "Jésus marche sur l’eau - Matthieu 14:22-33; Marc 6:45-52; Jean 6:16-21",
  "Les dix commandements (rappel) - Exode 20:1-17",
  "Le fruit de l’Esprit - Galates 5:16-26",
  "L’amour selon 1 Corinthiens - 1 Corinthiens 13",
];

// Fonction pour obtenir la date du jour au format DD/MM/YYYY

// Obtenir la lecture du jour
function getLectureOfTheDay() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    const createdAt = new Date(Number(user.createdAt));
    const currentDate = new Date();

    const timeDiff = currentDate - createdAt;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const lectureIndex = daysDiff % lectures.length;

    if (lectureIndex < 0) {
      console.error("Index de lecture invalide :", lectureIndex);
      return null;
    }

    if (lectureIndex >= lectures.length) {
      console.error("Index de lecture hors limites :", lectureIndex);
      return "C'est la fin du parcours biblique.";
    }

    return lectures[lectureIndex];
  } else {
    console.error("Aucun utilisateur trouvé dans le stockage local.");
    return null;
  }
}

if (JSON.parse(localStorage.getItem("user"))) {
  document.getElementById("verset").textContent = "Verset du jour : " + getLectureOfTheDay();
}
