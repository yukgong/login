const input = document.querySelector("input"),
    label = document.querySelector("label");

function inputRemoveEvent() {
    label.classList.remove("show");
    input.placeholder = "이메일";
    TweenMax.to(label, 1, {
        top: "32px",
        left: "16px",
        fontSize: "16px"
    });
}

function inputClickEvent() {
    input.placeholder = "";
    label.className = "show";
    TweenMax.to(label, 1, {
        top: 0,
        left: 0,
        fontSize: "14px"
    });
}

function init() {
    input.addEventListener("focus", inputClickEvent);
    input.addEventListener("blur", inputRemoveEvent);
}

init();