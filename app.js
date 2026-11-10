const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Ouvrir le menu');
  navigation.classList.remove('is-open');
}
menuButton?.addEventListener('click', () => {
  const opening = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.setAttribute('aria-label', opening ? 'Fermer le menu' : 'Ouvrir le menu');
  navigation?.classList.toggle('is-open', opening);
});
navigation?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const projectForm = document.querySelector('#project-form');
const formMessage = document.querySelector('.form-message');
const query = new URLSearchParams(window.location.search);
const requestedSolution = query.get('solution');
const projectType = document.querySelector('#project-type');
let requestedType = '';
if (requestedSolution && projectType) {
  const key = requestedSolution.toLocaleLowerCase('fr');
  const matchingOption = [...projectType.options].find(option => {
    const label = option.text.toLocaleLowerCase('fr');
    if (key.includes('dêminké')) return label.includes('dêminké');
    if (key === 'kit solaire sur mesure') return label === key;
    return label.includes(key.slice(0, Math.min(10, key.length)));
  });
  if (matchingOption) { projectType.value = matchingOption.value; requestedType = matchingOption.value; }
}
function prepareRequest() {
  if (!projectForm) return '';
  const data = new FormData(projectForm);
  const type = String(data.get('projectType') || '').trim();
  const place = String(data.get('place') || '').trim();
  const details = String(data.get('details') || '').trim();
  const name = String(data.get('clientName') || '').trim();
  const goal = String(data.get('goal') || '').trim();
  return ['Bonjour Digital Énergies, je souhaite un renseignement ou un devis', name ? `Mon nom : ${name}` : '', `Mon projet : ${requestedSolution && requestedType === type ? requestedSolution : type || 'à préciser'}`, `Ma localité : ${place || 'à préciser'}`, goal ? `Mon objectif : ${goal}` : '', details ? `Appareils ou précisions : ${details}` : ''].filter(Boolean).join('\n');
}
function updateRequestPreview() {
  const preview = document.querySelector('#request-preview');
  if (preview) preview.textContent = prepareRequest();
  const selected = document.querySelector('#selected-project');
  if (selected) {
    selected.hidden = !(requestedSolution && requestedType === projectType?.value);
    selected.textContent = `Votre sélection : ${requestedSolution || ''}`;
  }
}
projectForm?.addEventListener('submit', event => {
  event.preventDefault();
  if (!projectForm.reportValidity()) return;
  const place = projectForm.elements.place.value.trim();
  if (!place) { if (formMessage) formMessage.textContent = 'Indiquez votre localité pour préparer le message'; projectForm.elements.place.focus(); return; }
  window.location.href = `https://wa.me/2250564984892?text=${encodeURIComponent(prepareRequest())}`;
});
projectForm?.addEventListener('input', () => { if (formMessage) formMessage.textContent = ''; updateRequestPreview(); });
projectForm?.addEventListener('change', updateRequestPreview);
updateRequestPreview();

// Accueil : explorer les usages et le principe du stockage.
const needButtons = [...document.querySelectorAll('[data-need]')];
needButtons.forEach(button => button.addEventListener('click', () => {
  needButtons.forEach(item => { const selected = item === button; item.setAttribute('aria-pressed', String(selected)); item.classList.toggle('is-selected', selected); });
  document.querySelectorAll('[data-need-panel]').forEach(panel => { panel.hidden = panel.dataset.needPanel !== button.dataset.need; });
}));
const energyDemo = document.querySelector('.energy-demo');
document.querySelectorAll('[data-energy-mode]').forEach(button => button.addEventListener('click', () => {
  const night = button.dataset.energyMode === 'night';
  energyDemo.dataset.energy = night ? 'night' : 'day';
  document.querySelectorAll('[data-energy-mode]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelector('#energy-caption-title').textContent = night ? 'Profiter de l’énergie stockée' : 'Produire et mettre de côté';
  document.querySelector('#energy-caption-text').textContent = night ? 'La batterie peut prendre le relais pour les appareils prévus, selon sa charge et leur consommation' : 'L’énergie solaire peut alimenter les usages et charger la batterie, selon la configuration';
}));
