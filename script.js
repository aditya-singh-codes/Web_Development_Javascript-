const text = document.getElementById('text');
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
if (text.textContent === 'Text changed!') {
        text.textContent = 'Welcome to my interactive project';
    } else {
        text.textContent = 'Text changed!';
    }
});
