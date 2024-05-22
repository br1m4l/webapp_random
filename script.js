function tirageAuSort(equipe) {
    const indexAleatoire = Math.floor(Math.random() * equipe.length);
    return equipe[indexAleatoire];
}

document.addEventListener('DOMContentLoaded', function() {
    const equipe = ["Aliocha", "Brice", "Dominique", "Etienne", "Nicolas", "Sandrine", "Stéphane", "Xavier"];
    const gagnant = tirageAuSort(equipe);
    document.getElementById('gagnant').textContent = gagnant;
});
