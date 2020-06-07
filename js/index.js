const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

const display = document.querySelector(".display")

document.querySelector('.genBtn').addEventListener('click', genGenr)
const genUrl = 'https://binaryjazz.us/wp-json/genrenator/v1/genre/'
async function genGenr() {
    const response = await fetch(genUrl);
    const data = await response.json();
    document.querySelector('.display').value = data;
    document.querySelector('.youTubeSearchBox').value = data;
    }

