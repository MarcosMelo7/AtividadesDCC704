const textbox = document.getElementById('textbox');
const keyboard = document.getElementById('keyboard');
const keys = keyboard.querySelectorAll('.key');

let capsLock = false;

textbox.addEventListener('focus', () => {
  keyboard.classList.remove('hidden');
});

keys.forEach(key => {
  key.addEventListener('click', () => {
    const value = key.textContent;

    if (value === 'Backspace') {
      textbox.value = textbox.value.slice(0, -1);
    } else if (value === '-') {
      textbox.value += ' ';
    } else if (value === 'Enter') {
      textbox.value += '\n';
    } else if (value === 'Caps Lock') {
      capsLock = !capsLock;
      toggleCapsLock();
    } else {
      if (capsLock) {
        textbox.value += value.toUpperCase();
      } else {
        textbox.value += value.toLowerCase();
      }
    }
  });
});

document.addEventListener('click', (event) => {
  if (!textbox.contains(event.target) && !keyboard.contains(event.target)) {
    keyboard.classList.add('hidden');
  }
});

function toggleCapsLock() {
  keys.forEach(key => {
    if (/^[a-zA-Z]$/.test(key.textContent)) {
      if (capsLock) {
        key.textContent = key.textContent.toUpperCase();
      } else {
        key.textContent = key.textContent.toLowerCase();
      }
    }
  });
}
