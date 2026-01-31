// =======================
// MENU (jQuery)
// =======================
const $menuBtn=$('.menu-btn');
const $menu=$('.menu');
const $menuNav=$('.menu-nav');
const $menuBranding=$('.menu-branding');
const $navItem=$('li');

//Set Initial State Of Menu
let showMenu=false;
$menuBtn.on('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        $menuBtn.addClass('close');
        $menu.addClass('show');
        $menuNav.addClass('show');
        $menuBranding.addClass('show');
        $navItem.addClass('show');
        showMenu=true
    } else {
        $menuBtn.removeClass('close');
        $menu.removeClass('show');
        $menuNav.removeClass('show');
        $menuBranding.removeClass('show');
        $navItem.removeClass('show');
        showMenu=false
    }
}

// =======================
// Project Showcase
// =======================
const features = {
    home: {
        img: "../../img/projects/bioquimicaunc_index.png",
        title: "Homepage & Navigation",
        desc: "Clear landing page with structured navigation to course material, announcements, and community features.",
        points: [
        "Responsive layout",
        "Semantic HTML",
        "Mobile-first navigation"
        ]
    },
    forum: {
        img: "../../img/projects/bioquimicaunc_forum.png",
        title: "Student Forum",
        desc: "Community discussion space designed for questions, collaboration, and knowledge sharing.",
        points: [
        "Thread-based discussions",
        "Expandable backend logic",
        "User-centered layout"
        ]
    },
    listings: {
        img: "../../img/projects/bioquimicaunc_listings.png",
        title: "Academic Listings",
        desc: "Centralized listings for courses, materials, and announcements with structured presentation.",
        points: [
        "Card-based UI",
        "Scalable content structure",
        "Clear visual hierarchy"
        ]
    },
    resources: {
        img: "../../img/projects/bioquimicaunc_resourses.png",
        title: "Resource Hub",
        desc: "Curated academic resources organized for quick access and long-term maintainability.",
        points: [
        "Consistent layout system",
        "Future backend integration",
        "Accessibility-focused design"
        ]
    }
};

const img = document.getElementById("featureImage");
const title = document.getElementById("featureTitle");
const desc = document.getElementById("featureDescription");
const list = document.querySelector(".feature-list");

document.querySelectorAll(".feature-selector button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".feature-selector .active")?.classList.remove("active");
        btn.classList.add("active");

        const data = features[btn.dataset.feature];
        img.src = data.img;
        title.textContent = data.title;
        desc.textContent = data.desc;

        list.innerHTML = "";
        data.points.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p;
        list.appendChild(li);
        });
    });
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-modal");

img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
});
