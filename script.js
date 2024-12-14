document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('application-form');
    const pages = document.querySelectorAll('.page');
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const submitBtn = document.querySelector('.submit-btn');
    const clearBtn = document.querySelector('.clear-btn');
    let currentPage = 0;

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            if (index === pageIndex) {
                page.style.display = 'block';
                anime({
                    targets: page,
                    opacity: [0, 1],
                    translateY: [20, 0],
                    easing: 'easeOutExpo',
                    duration: 600
                });
            } else {
                page.style.display = 'none';
            }
        });
    }

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentPage < pages.length - 1) {
                currentPage++;
                showPage(currentPage);
            }
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                showPage(currentPage);
            }
        });
    });

    clearBtn.addEventListener('click', () => {
        form.reset();
        currentPage = 0;
        showPage(currentPage);
    });

    const hadBansRadios = document.querySelectorAll('input[name="hadBans"]');
    const banReasonField = document.getElementById('banReason');

    hadBansRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'yes') {
                banReasonField.style.display = 'block';
            } else {
                banReasonField.style.display = 'none';
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        
        fetch('https://script.google.com/macros/s/AKfycbydKJltYSoWmKsHlo6vWST-2El5u7kNy9wl0wtrQ7_jgGfNhrD0iNhq8_6aHmo3mh12Vg/exec', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert('Заявка успішно відправлена!');
            form.reset();
            currentPage = 0;
            showPage(currentPage);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Виникла помилка при відправці заявки. Будь ласка, спробуйте ще раз.');
        });
    });

    showPage(currentPage);
});

