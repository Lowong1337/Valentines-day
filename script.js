const messages = [
    "Ây cậu chắc chứ?",
    "Chắc thật rồi à??",
    "Cậu nghiêm túc đúng không?",
    "Làm ơn đấy...",
    "Thử nghĩ lại xem!!!!!",
    "Tớ không nghĩ cậu sẽ nói Không đâu...",
    "Nhưng mà nếu mà có thì tớ buồn lắm ấy...",
    "Tớ sẽ cực kì cực kì buồn luôn ấy 😭😭😭 ",
    "Thế thôi vậy, không làm phiền cậu nữa...",
    "Đùa thôi, Ấn vào đây này! ❤️"
];

let messageIndex = 0;

function noButton() {
    const noButton = document.querySelector('.no');
    const yesButton = document.querySelector('.yes');

    yesButton.textContent = messages[messageIndex];

    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    messageIndex++;

    if (messageIndex >= messages.length) {
        noButton.remove();
    }
}

function yesButton() {
    window.location.href = "she-accepted.html";
}

let clickedTime = 0;
function handleCaution() {
    const cautionButton = document.querySelector('.agree')
    clickedTime++;

    switch (clickedTime) {
        case 1:
            cautionButton.textContent = "Bạn có thật sự chắc chắn chứ?";
            break;
        case 2:
            cautionButton.textContent = "Không có đường lui đâu, chắc chưa?";
            break;
        case 3:
            cautionButton.textContent = "Lần cuối này, chắc chắn chưa?";
            break;
        case 4:
            window.location.href = "asking.html";
            break;
    }
}