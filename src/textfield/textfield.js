for (let i = 1; i <= 4; i++) {
  document.getElementById(`email-${i}`).addEventListener('input', function() {
    const emailField = this
    const errorMessage = document.getElementById(`error-message-${i}`)
    const emailPattern = /^\S+@\S+\.\S+$/

    if (emailField.value) {
      emailField.classList.add('filled');
    } else {
      emailField.classList.remove('filled');
    }

    // Проверка на правильный формат email
    if (!emailPattern.test(emailField.value)) {
      emailField.classList.add('error');
      errorMessage.classList.add('active');
    } else {
      emailField.classList.remove('error');
      errorMessage.classList.remove('active');
    }
  })
}