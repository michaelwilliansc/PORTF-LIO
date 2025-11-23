document.querySelectorAll('.book').forEach(book => {
  book.addEventListener('click', () => {
    const link = book.getAttribute('data-link');
    window.location.href = link;
  });
});
