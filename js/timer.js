function countdownTimeStart(){
    const elSeconds = document.querySelector('.content-timer__timer___digits____content.seconds');
    const countDownDate = new Date("Feb 11, 2021 08:00:00").getTime();

    const animationInterval = setInterval(function () {

        elSeconds.classList.add('animate');
        setTimeout(() => elSeconds.classList.remove('animate'), 950);

    }, 1000);

    const timerInterval = setInterval(function() {

        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor((distance / (1000 * 60 * 60 * 24)));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('content-timer__timer___digits__days').innerText = (days < 10 ? '0' + days : days);
        document.getElementById('content-timer__timer___digits__hours').innerText = (hours < 10 ? '0' + hours : hours);
        document.getElementById('content-timer__timer___digits__minutes').innerText = (minutes < 10 ? '0' + minutes : minutes);
        document.getElementById('content-timer__timer___digits__seconds').innerText = (seconds < 10 ? '0' + seconds : seconds);

        setTimeout(() => {
            document.getElementById('content-timer__timer___digits__days-back').innerText = (days < 10 ? '0' + days : days);
            document.getElementById('content-timer__timer___digits__hours-back').innerText = (hours < 10 ? '0' + hours : hours);
            document.getElementById('content-timer__timer___digits__minutes-back').innerText = (minutes < 10 ? '0' + minutes : minutes);
            document.getElementById('content-timer__timer___digits__seconds-back').innerText = (seconds < 10 ? '0' + seconds : seconds);
        },500);

        if (distance < 0) {
            clearInterval(timerInterval);
            clearInterval(animationInterval);
        }
    }, 1000);
}
countdownTimeStart();
