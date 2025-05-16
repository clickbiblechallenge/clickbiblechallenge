const form = document.getElementById('challengeForm');
const message = document.getElementById('message');
const urlParams = new URLSearchParams(window.location.search);
const editDate = urlParams.get('edit');

// Si on modifie une entrée existante
if (editDate) {
  const existingData = JSON.parse(localStorage.getItem(`challenge-${editDate}`));
  if (existingData) {
    document.getElementById('date').value = existingData.date;
    document.getElementById('passage').value = existingData.passage;
    document.getElementById('social').value = existingData.social;
    document.getElementById('done').checked = existingData.done;
    document.getElementById('with').value = existingData.with;
    document.getElementById('note').value = existingData.note;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    date: document.getElementById('date').value,
    passage: document.getElementById('passage').value,
    social: document.getElementById('social').value,
    done: document.getElementById('done').checked,
    with: document.getElementById('with').value,
    note: document.getElementById('note').value
  };

  localStorage.setItem(`challenge-${data.date}`, JSON.stringify(data));
  message.textContent = '✅ Enregistré ! Tu peux continuer ✨';

  setTimeout(() => {
    window.location.href = 'index.html'; // ou entries.html selon ta structure
  }, 1000);
});

// Pour afficher les anciennes entrées
function displayEntries() {
  const entriesList = document.getElementById('entriesList');
  if (!entriesList) return;

  entriesList.innerHTML = '<h2>📅 Entrées précédentes</h2>';
  const keys = Object.keys(localStorage)
    .filter(k => k.startsWith('challenge-'))
    .sort()
    .reverse();

  for (const key of keys) {
    const data = JSON.parse(localStorage.getItem(key));
    entriesList.innerHTML += `
      <div class="entry">
        <strong>${data.date}</strong><br>
        Passage: ${data.passage}<br>
        Social: ${data.social}<br>
        Fait: ${data.done ? 'Oui' : 'Non'}<br>
        Avec: ${data.with}<br>
        Note: ${data.note}<br>
        <button onclick="editEntry('${data.date}')">Modifier</button>
        <button onclick="deleteEntry('${data.date}')">Supprimer</button>
      </div>
      <hr>
    `;
  }
}

function editEntry(date) {
  window.location.href = `form.html?edit=${date}`;
}

function deleteEntry(date) {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette entrée ?')) {
    localStorage.removeItem(`challenge-${date}`);
    displayEntries();
  }
}

// Appel de la fonction pour afficher les anciennes entrées
displayEntries();