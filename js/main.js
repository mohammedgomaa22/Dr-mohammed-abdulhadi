// ********** Sidebar Toggler **********
const sidebarToggler = () => {
    const sidebar = document.querySelector("nav .sidebar");
    
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("toggler")) {
            sidebar.classList.toggle("-translate-x-[100%]");
        } else {
            sidebar.classList.add("-translate-x-[100%]");
        }
    });
};
sidebarToggler();
// ***************************************************

// Chose nav active
const navActive = () => {
    const links = document.querySelectorAll("[nav-active]");
    links.forEach((link) => {
        link.addEventListener("click", () => {
            // Delete Class
            links.forEach((link) => { link.classList.remove("nav-active"); });
            // Add Class
            link.classList.add("nav-active");
        })
    })
};
navActive();
// ***************************************************

// ********** Scroll Sections **********
const scrollSections = () => {
    // Start Variables
    // variables To Scroll To Top
        sectionSt = document.querySelector("#statistics"),
        textNum = document.querySelectorAll("#statistics .num");
    let started = false;
    // End Variables
        // ------------------
    // Start Coding
    function startCount(ele) {
        let num = ele.dataset.number;
        let count = setInterval(() => {
            ele.textContent++;
            if (ele.textContent == num) {
                clearInterval(count);
            }
        }, 1800 / num);
    };
    // End Coding
        // ------------------
    // Start All Scrolling
    window.onscroll = () => {
        // Scroll To Stats
        if (window.scrollY >= sectionSt.offsetTop - 200) {
            if (!started) {
                textNum.forEach((text) => startCount(text));
            }
            started = true;
        };
    };
    // End All Scrolling
};
scrollSections();
// ***************************************************

const playVideo = () => {    
    // -------------
    document.addEventListener("click", (e) => {
        if (e.target.tagName === "VIDEO") {
            let pic = document.querySelector(`.${e.target.parentElement.classList.contains("video") ? "video" : null} .${e.target.id}`).style.display = "none";
        }
    })
};
playVideo();
// ***************************************************

function sendMessToWhatsapp() {
    let params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
    };
    // ------------

    if (params.name != "" && params.phone != "" && params.email != "") {
        var url = "https://wa.me/" + "+966545381274" + "?text="
            
            + "أريد الاستفسار عن حجز موعد" + "%0a"
            + "الاسم: " + params.name + "%0a"
            + "رقم الهاتف: " + params.phone + "%0a"
            + "البريد الإلكتروني: " + params.email;
            
        window.open(url, '_blank').focus();
    } else {
        alert("يجب ملئ جميع البيانات");
    }
};
    
