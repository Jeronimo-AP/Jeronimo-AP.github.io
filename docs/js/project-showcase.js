export function initProjectShowcase(features) {
  const img = document.getElementById("featureImage");
  const video = document.getElementById("featureVideo");
  const title = document.getElementById("featureTitle");
  const desc = document.getElementById("featureDescription");
  const list = document.querySelector(".feature-list");

    document.querySelectorAll(".feature-selector button").forEach(btn => {
        btn.addEventListener("click", () => {
        document.querySelector(".feature-selector .active")?.classList.remove("active");
        btn.classList.add("active");

        const data = features[btn.dataset.feature];
        if (!data) return;

        if (!data.img) {
            img.classList.add('hidden');
        } else {
            img.src = data.img;
            img.classList.remove('hidden');
        }

        if (!data.video) {
            video.classList.add('hidden');
            video.pause();
            video.currentTime = 0;
        } else {
            video.src = data.video;
            video.classList.remove('hidden');
            video.play().catch(e => console.error("Video play failed:", e));
        }

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
}
