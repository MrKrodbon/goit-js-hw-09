const feedbackForm = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};

const fillFormFields = () => {
  const formDataFromLs = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (formDataFromLs === null) {
    return;
  }
  formData = formDataFromLs;
  for (const key in formDataFromLs) {
    if (formDataFromLs.hasOwnProperty(key)) {
      feedbackForm.elements[key].value = formDataFromLs[key];
    }
  }
};

fillFormFields();

const onFormFieldChange = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFormSubmit = event => {
  const emailValue = feedbackForm.elements['email'].value;
  const messageValue = feedbackForm.elements['message'].value;

  event.preventDefault();
  if (emailValue && messageValue) {
    console.log(formData);
    event.target.reset();
    localStorage.removeItem('feedback-form-state');
  } else {
    alert('Fill please all fields');
  }
};

feedbackForm.addEventListener('change', onFormFieldChange);
feedbackForm.addEventListener('submit', onFormSubmit);
