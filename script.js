// =====================================================
// LẤY CÁC PHẦN TỬ
// =====================================================

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const videoScreen = document.getElementById("video-screen");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");

const continueButton = document.getElementById("continue-btn");
const buttonContainer = document.getElementById("button-container");

const birthdayVideo = document.getElementById("birthday-video");
const music = document.getElementById("birthday-music");


// =====================================================
// KIỂM TRA
// =====================================================

console.log("JavaScript đã chạy");

console.log("screen1:", screen1);
console.log("screen2:", screen2);
console.log("video:", videoScreen);
console.log("screen3:", screen3);
console.log("screen4:", screen4);
console.log("button:", continueButton);


// =====================================================
// MÀN HÌNH HIỆN TẠI
// =====================================================

let currentScreen = 1;


// =====================================================
// HÀM HIỆN MỘT MÀN HÌNH
// =====================================================

function showScreen(screen) {

    // Ẩn tất cả màn hình
    screen1.style.opacity = "0";
    screen1.style.visibility = "hidden";
    screen1.style.pointerEvents = "none";

    screen2.style.opacity = "0";
    screen2.style.visibility = "hidden";
    screen2.style.pointerEvents = "none";

    videoScreen.style.opacity = "0";
    videoScreen.style.visibility = "hidden";
    videoScreen.style.pointerEvents = "none";

    screen3.style.opacity = "0";
    screen3.style.visibility = "hidden";
    screen3.style.pointerEvents = "none";

    screen4.style.opacity = "0";
    screen4.style.visibility = "hidden";
    screen4.style.pointerEvents = "none";


    // Hiện màn hình cần hiển thị
    screen.style.opacity = "1";
    screen.style.visibility = "visible";
    screen.style.pointerEvents = "auto";
    screen.style.transform = "scale(1)";
}


// =====================================================
// BAN ĐẦU
// =====================================================

showScreen(screen1);

buttonContainer.style.opacity = "1";
buttonContainer.style.visibility = "visible";
buttonContainer.style.pointerEvents = "auto";


// =====================================================
// PHÁT NHẠC
// =====================================================

function playMusic() {

    music.play().catch(function(error) {

        console.log("Không phát được nhạc:", error);

    });

}


// =====================================================
// NÚT TIẾP TỤC
// =====================================================

continueButton.addEventListener("click", function() {

    console.log("Đã bấm nút Tiếp tục");
    console.log("Màn hình hiện tại:", currentScreen);


    // =================================================
    // MÀN HÌNH 1 → MÀN HÌNH 2
    // =================================================

    if (currentScreen === 1) {

        playMusic();

        showScreen(screen2);

        currentScreen = 2;

        console.log("Đã chuyển sang màn hình 2");

        return;
    }


    // =================================================
    // MÀN HÌNH 2 → VIDEO
    // =================================================

    if (currentScreen === 2) {

        showScreen(videoScreen);

        buttonContainer.style.opacity = "0";
        buttonContainer.style.visibility = "hidden";
        buttonContainer.style.pointerEvents = "none";

        birthdayVideo.currentTime = 0;

        birthdayVideo.play().catch(function(error) {

            console.log("Không phát được video:", error);

        });

        currentScreen = 2.5;

        console.log("Đã chuyển sang video");

        return;
    }


    // =================================================
    // MÀN HÌNH 3 → MÀN HÌNH 4
    // =================================================

    if (currentScreen === 3) {

        showScreen(screen4);

        buttonContainer.style.opacity = "0";
        buttonContainer.style.visibility = "hidden";
        buttonContainer.style.pointerEvents = "none";

        currentScreen = 4;

        console.log("Đã chuyển sang màn hình 4");

        return;
    }

});


// =====================================================
// VIDEO KẾT THÚC
// → MÀN HÌNH 3
// =====================================================

birthdayVideo.addEventListener("ended", function() {

    console.log("Video đã kết thúc");

    showScreen(screen3);

    buttonContainer.style.opacity = "1";
    buttonContainer.style.visibility = "visible";
    buttonContainer.style.pointerEvents = "auto";

    currentScreen = 3;

    console.log("Đã chuyển sang màn hình 3");

});


// =====================================================
// TẠO NGÔI SAO
// =====================================================

const starsContainer = document.getElementById("stars");

if (starsContainer) {

    const numberOfStars =
        window.innerWidth <= 600 ? 100 : 180;

    for (let i = 0; i < numberOfStars; i++) {

        const star = document.createElement("div");

        star.classList.add("star");

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        const size =
            Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        starsContainer.appendChild(star);
    }
}


// =====================================================
// ÁNH SÁNG THEO CHUỘT
// =====================================================

const cursorLight =
    document.getElementById("cursor-light");

if (cursorLight) {

    document.addEventListener("mousemove", function(event) {

        if (window.innerWidth > 600) {

            cursorLight.style.left =
                event.clientX + "px";

            cursorLight.style.top =
                event.clientY + "px";
        }

    });

}