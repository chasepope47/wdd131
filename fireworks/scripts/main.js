document.getElementById('fun-fact-button').addEventListener('click', () => {
    const facts = [
        "Fireworks were invented in China over 2,000 years ago.",
        "The largest firework display ever recorded involved 810,904 fireworks!",
        "Fireworks get their colors from different metal salts.",
        "The first recorded use of fireworks in the U.S. was on July 4, 1777."
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fun-fact').textContent = randomFact;
});
