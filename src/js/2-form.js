    

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit); 

function onFormSubmit(e) {
  e.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message){
    alert('Please fill in both email and message fields');
    return;
}
  const data = {
    email,
    message,
  };
  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
};

function onFormInput() {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const data = {
   email,
    message,
  };

saveToLS(STORAGE_KEY, data)
};

function saveToLS(key, value) {
    const storKey = JSON.stringify(value);
    localStorage.setItem(key, storKey);
};

function loadFromLS(key) {
  const storKey = localStorage.getItem(key);
  try {
    return JSON.parse(storKey);
  } catch {
    return storKey;
  }
};
   
function init() {
  const data = loadFromLS(STORAGE_KEY);
  form.elements.email.value = data.email;
  form.elements.message.value = data.message;
};

init();