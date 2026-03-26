document.addEventListener("DOMContentLoaded", () => {
    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-question');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.nextElementSibling;
                    otherAnswer.style.maxHeight = null;
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            const answer = item.nextElementSibling;
            
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    // Top Banner Date Logic
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const today = new Date();
        // Exemplo: 25/03/2026
        dateElement.textContent = today.toLocaleDateString('pt-BR');
    }

    // Upsell Modal Logic
    const btnBasic = document.getElementById('btn-basic-offer');
    const modal = document.getElementById('upsell-modal');
    const btnAccept = document.getElementById('btn-accept-upsell');
    const btnDecline = document.getElementById('btn-decline-upsell');

    if (btnBasic && modal) {
        btnBasic.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active'); // Abre o modal
        });

        btnAccept.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = "https://pay.wiapy.com/DHuUL7h1Nc";
        });

        btnDecline.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('active');
            window.location.href = "https://pay.wiapy.com/PNxTXSjWWg";
        });

        // Fecha ao clicar fundo escuro
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // 30-Minute Timer Logic
    const minEl = document.getElementById('timer-minutes');
    const secEl = document.getElementById('timer-seconds');
    
    if (minEl && secEl) {
        let timerTime = localStorage.getItem('uau_timer');
        if (!timerTime) {
            timerTime = 30 * 60; // 30 minutes
        } else {
            timerTime = parseInt(timerTime);
        }

        const updateTimer = () => {
            if (timerTime <= 0) return;
            timerTime--;
            localStorage.setItem('uau_timer', timerTime);
            
            const m = Math.floor(timerTime / 60);
            const s = timerTime % 60;
            
            minEl.textContent = m < 10 ? '0' + m : m;
            secEl.textContent = s < 10 ? '0' + s : s;
        };

        if (timerTime > 0) {
            updateTimer();
            setInterval(updateTimer, 1000);
        } else {
            minEl.textContent = '00';
            secEl.textContent = '00';
        }
    }

    // Purchase Notifications Logic
    const toast = document.getElementById('purchase-notification');
    const toastName = document.getElementById('toast-name');
    const toastProduct = document.getElementById('toast-product');
    const toastTime = document.getElementById('toast-time');

    if (toast) {
        const names = ["Ana P.", "Mariana C.", "Júlia S.", "Camila T.", "Fernanda L.", "Letícia M.", "Carla F.", "Beatriz", "Paulo H.", "Rafael G."];
        const products = ["Kit Completo UAU", "Kit Completo UAU", "Kit Teste (R$ 10)"]; 
        const times = ["Há 1 minuto", "Há 2 minutos", "Há 3 minutos", "Agora mesmo", "Há 5 minutos"];

        const showToast = () => {
            toastName.textContent = names[Math.floor(Math.random() * names.length)];
            toastProduct.textContent = products[Math.floor(Math.random() * products.length)];
            toastTime.textContent = times[Math.floor(Math.random() * times.length)];

            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 5000);
        };

        setTimeout(() => {
            showToast();
            setInterval(showToast, 18000);
        }, 3000);
    }
});
