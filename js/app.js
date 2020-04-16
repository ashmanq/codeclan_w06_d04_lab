document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // const titleTextInput = document.querySelector('#title');
  // titleTextInput.addEventListener('input', handleTitleInput);
  //
  // const authorTextInput = document.querySelector('#author');
  // authorTextInput.addEventListener('input', handleTitleInput);
  //
  // const selectCategory = document.querySelector('#category');
  // selectCategory.addEventListener('change', handleCategorySelection);

  const formInput = document.querySelector('#new-item-form');
  formInput.addEventListener('submit', handleFormSubmission);

})

const handleFormSubmission = function(event) {
  event.preventDefault();
  const formResult = document.querySelector('#reading-list');

  const sectionElement = document.createElement("section");
  sectionElement.innerHTML =
      `<ul>
        <li>${event.target.title.value}</li>
        <li>${event.target.author.value}</li>
        <li>${event.target.category.value}</li>
      </ul>`;

  formResult.appendChild(sectionElement);


  document.getElementById('new-item-form').reset();
}
