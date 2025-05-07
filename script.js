const Special = document.getElementById('counter');
        const finishMessage = document.getElementById('winMessage');
        const upButton = document.getElementById('upButton');
        const downButton = document.getElementById('downButton');
        const audioPlayer = document.getElementById('audioPlayer');

        let count = 0;
        const finishNumber = 10;

        // Funksiya yangilangandagi holat
        function updateSpecial() {
            if (count >= finishNumber) {
                Special.style.display = 'none';
                finishMessage.style.display = 'block';
                upButton.style.display = 'none';
                downButton.style.display = 'none';
            } else {
                Special.style.display = 'flex';
                finishMessage.style.display = 'none';
                upButton.style.display = 'flex';
                downButton.style.display = 'flex';
                Special.textContent = count;
            }
        }

        // Kupaytish uchun funksiya
        function incrementCounter() {
            count++;
            updateSpecial();
        }

        // Kamaytirish uchun
        function decrementCounter() {
            if (count > 0) {
                count--;
                updateSpecial();
            }
        }

        // Boshiga qaytarish uchun
        function resetCounter() {
            count = 0;
            updateSpecial();
        }

        // Qushini boshlash va tuxtatish uchun
        function toggleQuranAudio() {
            if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
                audioPlayer.currentTime = 0;
            }
        }

        // Add active class to button
        function activateButton(button) {
            button.classList.add('active');
            setTimeout(() => {
                button.classList.remove('active');
            }, 200);
        }

        // buttonlar bosilganda ishlashi
        upButton.addEventListener('click', incrementCounter);
        downButton.addEventListener('click', decrementCounter);

        // Event keydownlari bilan ishlash
        document.addEventListener('keydown', function(event) {
            if (event.code === 'Space') {
                event.preventDefault();
                incrementCounter();
                activateButton(upButton);
            }
            else if (event.code === 'AltLeft' || event.code === 'AltRight') {
                event.preventDefault();
                decrementCounter();
                activateButton(downButton);
            }
            else if (event.code === 'Escape') {
                resetCounter();
            }
            else if (event.code === 'Tab') {
                event.preventDefault();
                toggleQuranAudio();
            }
        });
        updateSpecial();