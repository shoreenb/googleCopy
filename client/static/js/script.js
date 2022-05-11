const form = document.querySelector('form')

form.addEventListener('submit', allSearch(e))

function allSearch(e) {
  e.preventDefault()
  fetch('http://localhost:3000/results')
    .then(resp => resp.text)
    .then(document.getElementById('text').textContent = result)
}
allSearch(e);
