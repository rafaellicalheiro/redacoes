
const topBtn = document.getElementById("topBtn");


window.onscroll = function () {
    topBtn.style.display =
        document.documentElement.scrollTop > 300 ? "block" : "none";
};


topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};


document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", () => {
        
        const preview = box.querySelector(".preview");
        const full = box.querySelector(".full-text");

        
        const isOpen = full.style.display === "block";

        
        document.querySelectorAll(".full-text").forEach(f => f.style.display = "none");
        document.querySelectorAll(".preview").forEach(p => p.style.display = "block");

        
        if (!isOpen) {
            preview.style.display = "none";
            full.style.display = "block";
        }
    });
});


document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
