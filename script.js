let currentIndex = 0;
const yorumlar = document.querySelectorAll(".birinci");

function showYorum(index) {
    yorumlar.forEach((yorum, i) => {
        if (i === index) {
            yorum.classList.add("active");
        } else {
            yorum.classList.remove("active");
        }
    });
}

function nextYorum() {
    currentIndex++;
    if (currentIndex >= yorumlar.length) {
        currentIndex = 0;
    }
    showYorum(currentIndex);
}

function prevYorum() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = yorumlar.length - 1;
    }
    showYorum(currentIndex);
}