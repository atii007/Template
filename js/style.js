document.addEventListener('DOMContentLoaded', function () {
    var navToggle = document.getElementById('myNavToggle'); // Select the element by id
    navToggle.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });
