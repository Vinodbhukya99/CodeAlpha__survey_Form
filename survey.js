let currentPageIndex = 0;
const pages = document.querySelectorAll('.page');
const successMessage = document.getElementById('successMessage');
const currentPageNumber = document.getElementById('currentPageNumber');
const totalPages = document.getElementById('totalPages');

function updateNavigation() {
    currentPageNumber.textContent = currentPageIndex + 1;
}

function showPage(index) {
    pages.forEach(page => {
        page.style.display = 'none';
    });
    pages[index].style.display = 'block';
}

function nextPage(nextPageId) {
    const currentPage = pages[currentPageIndex];
    const inputFields = currentPage.querySelectorAll('input, select');

    // Check and show error message for empty input fields
    let isEmpty = false;
    inputFields.forEach(input => {
        if (input.value.trim() === '' || (input.tagName === 'SELECT' && input.value === '')) {
            isEmpty = true;
            input.classList.add('error');
            input.nextElementSibling.style.display = 'block';
        } else {
            input.classList.remove('error');
            input.nextElementSibling.style.display = 'none';
        }
    });

    if (!isEmpty) {
        currentPageIndex++;
        if (currentPageIndex < pages.length) {
            showPage(currentPageIndex);
        } else {
            submitForm();
        }
    }
}

function prevPage(prevPageId) {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        showPage(currentPageIndex);
    }
}
const surveyForm = document.getElementById('surveyForm');
const thankYouMessage = document.getElementById('thankYouMessage');

function submitForm() {
   
    function submitForm() {
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
}

    // Display thank you message and hide the form
    surveyForm.style.display = 'none';
    thankYouMessage.style.display = 'block';
}

function resetForm() {
    // Clear form input fields and show the form again
    const inputFields = surveyForm.querySelectorAll('input, select');
    inputFields.forEach(input => {
        input.value = '';
    });

    surveyForm.style.display = 'block';
    thankYouMessage.style.display = 'none';
}

// Check if the form has been submitted before and show appropriate content
if (localStorage.getItem('formSubmitted')) {
    submitForm(); // Show thank you message if form has been submitted
} else {
    resetForm(); // Show form input fields if form hasn't been submitted
}


showPage(currentPageIndex);