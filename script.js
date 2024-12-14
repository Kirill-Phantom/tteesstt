document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('application-form');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const submitBtn = document.getElementById('submit');
    const startBtn = document.getElementById('startApplication');

    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    const adequacySlider = document.getElementById('adequacy');
    const adequacyValue = document.getElementById('adequacy-value');
    const stressSlider = document.getElementById('stress');
    const stressValue = document.getElementById('stress-value');
    const learningSlider = document.getElementById('learning');
    const learningValue = document.getElementById('learning-value');

    function updateSliderValue(slider, valueSpan) {
        valueSpan.textContent = slider.value;
    }

    adequacySlider.addEventListener('input', () => updateSliderValue(adequacySlider, adequacyValue));
    stressSlider.addEventListener('input', () => updateSliderValue(stressSlider, stressValue));
    learningSlider.addEventListener('input', () => updateSliderValue(learningSlider, learningValue));

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            if (index === pageIndex) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });

        prevBtn.style.display = pageIndex > 1 ? 'block' : 'none';
        nextBtn.style.display = pageIndex < pages.length - 1 ? 'block' : 'none';
        submitBtn.style.display = pageIndex === pages.length - 1 ? 'block' : 'none';
    }

    startBtn.addEventListener('click', function() {
        currentPage = 1;
        showPage(currentPage);
    });

    prevBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    const hadBansSelect = document.getElementById('hadBans');
    const banReasonDiv = document.getElementById('banReason');

    hadBansSelect.addEventListener('change', function() {
    if (this.value === 'yes') {
        banReasonDiv.style.display = 'block';
    } else {
        banReasonDiv.style.display = 'none';
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Implement form submission
    console.log('Form submitted');
    alert('Заявку успішно надіслано!');
    form.reset();
    currentPage = 0;
    showPage(currentPage);
});

// Initialize the first page
showPage(currentPage);

// Add animation to form groups on scroll
const formGroups = document.querySelectorAll('.form-group');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInLeft 0.5s forwards';
        }
    });
}, { threshold: 0.1 });

formGroups.forEach(group => {
    observer.observe(group);
});
});

