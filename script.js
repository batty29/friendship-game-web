function startGame() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const reward = document.getElementById('reward').value;

  if (!name || !age) {
    alert("Please enter your name and age!");
    return;
  }

  document.querySelector('.container').classList.add('hidden');
  document.querySelector('.game').classList.remove('hidden');
  document.getElementById('gameText').innerText = `Hi ${name}! Ready to win ${reward}?`;
}

function win() {
  const name = document.getElementById('name').value;
  const reward = document.getElementById('reward').value;

  document.querySelector('.game').classList.add('hidden');
  document.querySelector('.result').classList.remove('hidden');
  document.getElementById('resultText').innerText = `${name}, you just WON ${reward}! 🏆\nFrom Batoul with 💖`;
}
