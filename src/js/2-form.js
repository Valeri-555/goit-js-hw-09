    

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const data = {
    email,
    message,
  };
  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();

   if (form.elements.email.value === '' || form.elements.message.value === ''){
        console.log('Please fill in both email and message fields');
        return;
}
};

function onFormInput() {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const data = {
   email,
    message,
  };


  localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
};

function loadFromLS(key) {
  const storKey = localStorage.getItem(key);
  try {
    return JSON.parse({});
  } catch {
    return storKey;
  }
};
 
// function filledForms() {
//     if (form.elements.email.value === '' || form.elements.message.value === ''){
//         console.log('Please fill in both email and message fields');
//         return;
// }
// };
// filledForms();