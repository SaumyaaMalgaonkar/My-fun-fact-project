document.getElementById('showFactsBtn').addEventListener('click', function() {
    const factsList = document.getElementById('funFactsList');
    if (factsList.classList.contains('hidden')) {
        factsList.classList.remove('hidden');
    } else {
        factsList.classList.add('hidden');
    }
});
