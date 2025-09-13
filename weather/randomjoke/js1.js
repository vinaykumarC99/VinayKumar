// Fetches a joke from the API
async function getJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jokeData = await response.json();
    return jokeData;
  } catch (error) {
    console.error('Error fetching joke:', error);
    return null;
  }
}

// Updates the DOM with joke or error message
async function displayJoke() {
  const joke = await getJoke();

  const setupElement = document.getElementById('setup');
  const punchlineElement = document.getElementById('punchline');

  if (joke) {
    setupElement.textContent = joke.setup;
    punchlineElement.textContent = joke.punchline;
    setupElement.classList.remove('error');
  } else {
    setupElement.textContent = "Couldn't fetch a joke, try again.";
    punchlineElement.textContent = '';
    setupElement.classList.add('error');
  }
}

// Handles button click
function handleGetJoke() {
  displayJoke();
}
