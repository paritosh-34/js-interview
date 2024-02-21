// Simple currying application

function updateElementText(id) {
  return function (content) {
    document.querySelector(`#${id}`).textContent = content;
  };
}

const updateHeader = updateElementText("heading");

updateHeader("I am a curry function");
updateHeader("I am a curry function again");

// Here we can use this function again and again and only need to intialize it once.
// We don't need to use querySelector again and again.
