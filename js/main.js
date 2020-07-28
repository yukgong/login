const input = document.querySelector("input"),
    label = document.querySelector("label"),
    nextSubmitBtn = document.querySelectorAll(".js-nextBtn"),
    inner_wrapper_A = document.querySelector(".js-email"),
    inner_wrapper_B = document.querySelector(".js-pw");


const a = document.querySelectorAll("a");


function inputRemoveEvent() {
    setTimeout(() => {
        input.placeholder = label.innerText;
        label.classList.remove("show");
    }, 300);
    TweenMax.to(label, 0.3, {
        top: "42px",
        left: "16px",
        fontSize: "16px",
        fontWeight: "400"
    });
}

function inputClickEvent() {
    input.placeholder = "";
    label.className = "show";
    TweenMax.to(label, 0.2, {
        top: 2,
        left: 0,
        fontSize: "14px",
    });
}

// function nextBtnEvent(e) {
//     e.preventDefault();

//     TweenMax.to(inner_wrapper_A, 0.2, {
//         left: "-100%",
//     });
//     setTimeout(() => {
//         location.href = "password.html";
//     }, 200);
// }

function init() {
    input.addEventListener("focus", inputClickEvent);
    input.addEventListener("blur", () => {
        if (input.value == "") {
            inputRemoveEvent();
        }
    });
    window.addEventListener("load", () => {
        input.focus();
    });

    // nextSubmitBtn.forEach(el => {
    //     el.addEventListener("click", nextBtnEvent);
    // });
}

init();