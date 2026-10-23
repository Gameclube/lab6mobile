// Показ/скрытие пароля
document.querySelectorAll('.form-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.previousElementSibling;
    if (input) input.type = input.type === 'password' ? 'text' : 'password';
  });
});

// Валидация формы авторизации
const authForm = document.querySelector('.auth-form');
if (authForm) {
  authForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = authForm.querySelector('#email');
    const password = authForm.querySelector('#password');
    let valid = true;

    [email, password].forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#ef4444';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    if (valid) window.location.href = 'catalog.html';
  });
}