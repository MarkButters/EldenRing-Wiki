document.addEventListener('DOMContentLoaded', () => {
    const stats = ['Vigor', 'Mind', 'Endurance', 'Strength', 'Dexterity', 'Intelligence', 'Faith', 'Arcane'];
    const statsContainer = document.querySelector('.stats');
    stats.forEach(stat => {
        const statElement = document.querySelector('#stat-template').cloneNode(true);
        statElement.style.display = 'flex';
        statElement.querySelector('div').textContent = stat;
        statElement.querySelector('.level').addEventListener('input', updateStats);
        statsContainer.appendChild(statElement);
    });
});

function updateStats() {
    const levelInputs = document.querySelectorAll('.level');
    let totalLevel = 0;
    levelInputs.forEach(input => {
        const total = input.parentNode.querySelector('.total');
        total.textContent = input.value;
        totalLevel += parseInt(input.value);
    });
    document.getElementById('current-level').textContent = totalLevel - (levelInputs.length * 9);
    calculateRunes();
}

function calculateRunes() {
    const currentLevel = parseInt(document.getElementById('current-level').textContent);
    const x = Math.max(0, ((currentLevel + 81) ** 2.02));
    const runeCost = Math.floor((x * 0.1) + ((currentLevel + 81) ** 2) + 1);
    document.getElementById('total-runes').textContent = runeCost;

    const toNextLevel = Math.floor(x);
    document.getElementById('to-next-level').textContent = toNextLevel;
}
