export function initProjectShowcase(features) {
    const imagePanel = document.querySelector(".showcase-image");
    const title = document.getElementById("featureTitle");
    const desc = document.getElementById("featureDescription");
    const list = document.querySelector(".feature-list");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close-modal");

    function openImageModal(src) {
        if (!src) return;
        modal.style.display = "flex";
        modalImg.src = src;
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
            modalImg.src = "";
        });
    }

    const mainFeatureImage = document.getElementById("featureImage");
    if (mainFeatureImage) {
        mainFeatureImage.addEventListener("click", () => {
        openImageModal(mainFeatureImage.src);
        });
    }

    document.querySelectorAll(".feature-selector button").forEach(btn => {
        btn.addEventListener("click", () => {
        document.querySelector(".feature-selector .active")?.classList.remove("active");
        btn.classList.add("active");

        const key = btn.dataset.feature;
        const data = features[key];
        if (!data) return;

        // 🟦 STRUCTURE SPECIAL CASE
        if (key === "structure") {
            imagePanel.innerHTML = ""; // wipe image/video
            renderStructureGraph(imagePanel, openImageModal);
        } else {
            // reset image panel
            imagePanel.innerHTML = `
                <img id="featureImage" style="border: 2px solid cyan;" class="${data.img ? "" : "hidden"}">
                <video id="featureVideo" style="border: 2px solid cyan;" class="hidden" muted loop playsinline></video>
            `;

            const imgEl = imagePanel.querySelector("#featureImage");
            const vidEl = imagePanel.querySelector("#featureVideo");

            if (data.img) {
                imgEl.src = data.img;
                imgEl.addEventListener("click", () => openImageModal(data.img));
            }
                if (data.video) {
                vidEl.src = data.video;
                vidEl.classList.remove("hidden");
                vidEl.play().catch(() => {});
            }
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


function renderStructureGraph(parent, openModalCallback) {
    parent.innerHTML = ""; // clear previous content

    const title = document.createElement("h3");
    title.textContent = "Presentation Structure Graph";
    title.classList.add('graph-title')
    parent.appendChild(title);

    const wrapper = document.createElement("div");
    wrapper.id = "structure-wrapper";

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = "structure-graph";
    svg.setAttribute("viewBox", "0 0 1000 2850");
    svg.style.width = "100%";
    svg.style.height = "auto";
    svg.setAttribute("preserveAspectRatio", "xMidYMin meet");

    wrapper.appendChild(svg);
    wrapper.style.maxHeight = "70vh";
    wrapper.style.overflowY = "auto";
    parent.appendChild(wrapper);

    drawStructureGraph(svg, openModalCallback);
}

function drawStructureGraph(svg, openModalCallback) {
    const slides = [
        { id: "title_slide",        title: "Título",                                img: "../../img/projects/licPresentation_slide_ (1).png", x: 0.1, y: 0 },
        { id: "index",              title: "Marco Teórico",                         img: "../../img/projects/licPresentation_slide_ (2).png", x: 0.3, y: 0 },
        { id: "theory-DFT1",        title: "DFT: Introducción (1)",                 img: "../../img/projects/licPresentation_slide_ (3).png", x: 0.5, y: 0 },
        { id: "theory-DFT2",        title: "DFT: Introducción (2)",                 img: "../../img/projects/licPresentation_slide_ (4).png", x: 0.7, y: 0 },
        { id: "theory-DFT3",        title: "DFT: Pros",                             img: "../../img/projects/licPresentation_slide_ (5).png", x: 0.9, y: 0 },
        { id: "theory-DFT4",        title: "DFT: Cons",                             img: "../../img/projects/licPresentation_slide_ (6).png", x: 0.9, y: 1 },
        { id: "theory-GW1",         title: "GW: G",                                 img: "../../img/projects/licPresentation_slide_ (7).png", x: 0.7, y: 1 },
        { id: "theory-GW2",         title: "GW: W",                                 img: "../../img/projects/licPresentation_slide_ (8).png", x: 0.5, y: 1 },
        { id: "theory-GW3",         title: "GW: G0W0",                              img: "../../img/projects/licPresentation_slide_ (9).png", x: 0.3, y: 1 },
        { id: "theory-GW4",         title: "GW: Pros",                              img: "../../img/projects/licPresentation_slide_ (10).png", x: 0.1, y: 1 },
        { id: "theory-GW5",         title: "GW: Cons",                              img: "../../img/projects/licPresentation_slide_ (11).png", x: 0.1, y: 2 },
        { id: "theory-BSE1",        title: "BSE: Introducción (1)",                 img: "../../img/projects/licPresentation_slide_ (12).png", x: 0.3, y: 2 },
        { id: "theory-BSE2",        title: "BSE: Introducción (2)",                 img: "../../img/projects/licPresentation_slide_ (13).png", x: 0.5, y: 2 },
        { id: "results_materials1", title: "Estructura Cristalina",                 img: "../../img/projects/licPresentation_slide_ (14).png", x: 0.7, y: 2 },
        { id: "results_materials2", title: "Estructura Electrónica",                img: "../../img/projects/licPresentation_slide_ (15).png", x: 0.5, y: 3 },
        { id: "results_materials3", title: "Estructura Electrónica: LiF",           img: "../../img/projects/licPresentation_slide_ (16).png", x: 0.1, y: 4, optional: true },
        { id: "results_materials4", title: "Estructura Electrónica: MgO",           img: "../../img/projects/licPresentation_slide_ (17).png", x: 0.3, y: 4, optional: true },
        { id: "results_materials5", title: "Estructura Electrónica: CaO",           img: "../../img/projects/licPresentation_slide_ (18).png", x: 0.7, y: 4, optional: true },
        { id: "results_materials6", title: "Estructura Electrónica: ZnO",           img: "../../img/projects/licPresentation_slide_ (19).png", x: 0.9, y: 4, optional: true },
        { id: "results_materials7", title: "Estructura Electrónica: Gaps",          img: "../../img/projects/licPresentation_slide_ (20).png", x: 0.5, y: 5 },
        { id: "optical1",           title: "Espectros Ópticos: Absorción",          img: "../../img/projects/licPresentation_slide_ (21).png", x: 0.5, y: 6 },
        { id: "optical2",           title: "Espectros Ópticos: LiF - excitones",    img: "../../img/projects/licPresentation_slide_ (22).png", x: 0.1, y: 7, optional: true  },
        { id: "optical3",           title: "Espectros Ópticos: MgO - excitones",    img: "../../img/projects/licPresentation_slide_ (23).png", x: 0.3, y: 7, optional: true  },
        { id: "optical4",           title: "Espectros Ópticos: CaO - excitones",    img: "../../img/projects/licPresentation_slide_ (24).png", x: 0.7, y: 7, optional: true  },
        { id: "optical5",           title: "Espectros Ópticos: ZnO - excitones",    img: "../../img/projects/licPresentation_slide_ (25).png", x: 0.9, y: 7, optional: true  },
        { id: "optical6",           title: "Espectros Ópticos: Dispersión",         img: "../../img/projects/licPresentation_slide_ (26).png", x: 0.5, y: 8 },
        { id: "XANES1",             title: "XANES",                                 img: "../../img/projects/licPresentation_slide_ (27).png", x: 0.5, y: 9 },
        { id: "XANES2",             title: "XANES: LiF",                            img: "../../img/projects/licPresentation_slide_ (28).png", x: 0.1, y: 10, optional: true },
        { id: "XANES3",             title: "XANES: LiF - Borde K del Li",           img: "../../img/projects/licPresentation_slide_ (29).png", x: 0.1, y: 11, optional: true },
        { id: "XANES4",             title: "XANES: LiF - Borde K del F",            img: "../../img/projects/licPresentation_slide_ (30).png", x: 0.1, y: 12, optional: true },
        { id: "XANES5",             title: "XANES: MgO",                            img: "../../img/projects/licPresentation_slide_ (31).png", x: 0.3, y: 10, optional: true },
        { id: "XANES6",             title: "XANES: MgO - Borde K del Mg",           img: "../../img/projects/licPresentation_slide_ (32).png", x: 0.3, y: 11, optional: true },
        { id: "XANES7",             title: "XANES: MgO - Borde K del O",            img: "../../img/projects/licPresentation_slide_ (33).png", x: 0.3, y: 12, optional: true },
        { id: "XANES8",             title: "XANES: MgO - Borde \(L_{23}\) del Mg",  img: "../../img/projects/licPresentation_slide_ (34).png", x: 0.3, y: 13, optional: true },
        { id: "XANES9",             title: "XANES: CaO",                            img: "../../img/projects/licPresentation_slide_ (35).png", x: 0.7, y: 10, optional: true },
        { id: "XANES10",            title: "XANES: CaO - Borde K del Ca",           img: "../../img/projects/licPresentation_slide_ (36).png", x: 0.7, y: 11, optional: true },
        { id: "XANES11",            title: "XANES: CaO - Borde K del O",            img: "../../img/projects/licPresentation_slide_ (37).png", x: 0.7, y: 12, optional: true },
        { id: "XANES12",            title: "XANES: ZnO",                            img: "../../img/projects/licPresentation_slide_ (38).png", x: 0.9, y: 10, optional: true },
        { id: "Defects1",           title: "Defectos: Estructura Cristalina",       img: "../../img/projects/licPresentation_slide_ (39).png", x: 0.5, y: 14 },
        { id: "Defects2",           title: "Defectos: LiF",                         img: "../../img/projects/licPresentation_slide_ (40).png", x: 0.1, y: 15, optional: true },
        { id: "Defects3",           title: "Defectos: LiF - Li vacante",            img: "../../img/projects/licPresentation_slide_ (41).png", x: 0.26, y: 15, optional: true },
        { id: "Defects4",           title: "Defectos: LiF - F vacante",             img: "../../img/projects/licPresentation_slide_ (42).png", x: 0.42, y: 15, optional: true },
        { id: "Defects5",           title: "Defectos: LiF - dopante Na",            img: "../../img/projects/licPresentation_slide_ (43).png", x: 0.58, y: 15, optional: true },
        { id: "Defects6",           title: "Defectos: LiF - dopante Mg",            img: "../../img/projects/licPresentation_slide_ (44).png", x: 0.74, y: 15, optional: true },
        { id: "Defects7",           title: "Defectos: LiF - dopante Be",            img: "../../img/projects/licPresentation_slide_ (45).png", x: 0.9, y: 15, optional: true },
        { id: "Defects8",           title: "Defectos: Estructura Electrónica",      img: "../../img/projects/licPresentation_slide_ (46).png", x: 0.5, y: 16 },
        { id: "Conclusion",         title: "Conclusión",                            img: "../../img/projects/licPresentation_slide_ (47).png", x: 0.7, y: 16 },
        { id: "Acknowledgements",   title: "Agradecimientos",                       img: "../../img/projects/licPresentation_slide_ (48).png", x: 0.9, y: 16 },
        { id: "Citations",          title: "Referencias",                           img: "../../img/projects/licPresentation_slide_ (49).png", x: 0.9, y: 17 },

    ];

    const edges = [
        { from: "title_slide", to: "index", center: true },
        { from: "index", to: "theory-DFT1", center: true },
        { from: "theory-DFT1", to: "theory-DFT2", center: true },
        { from: "theory-DFT2", to: "theory-DFT3", center: true },
        { from: "theory-DFT3", to: "theory-DFT4", center: true },
        { from: "theory-DFT4", to: "theory-GW1", center: true },
        { from: "theory-GW1", to: "theory-GW2", center: true },
        { from: "theory-GW2", to: "theory-GW3", center: true },
        { from: "theory-GW3", to: "theory-GW4", center: true },
        { from: "theory-GW4", to: "theory-GW5", center: true },
        { from: "theory-GW5", to: "theory-BSE1", center: true },
        { from: "theory-BSE1", to: "theory-BSE2", center: true },
        { from: "theory-BSE2", to: "results_materials1", center: true },
        { from: "results_materials1", to: "results_materials2" },
        { from: "results_materials2", to: "results_materials3", optional: true },
        { from: "results_materials2", to: "results_materials4", optional: true },
        { from: "results_materials2", to: "results_materials5", optional: true },
        { from: "results_materials2", to: "results_materials6", optional: true },
        { from: "results_materials2", to: "results_materials7" },
        { from: "results_materials3", to: "results_materials7", optional: true },
        { from: "results_materials4", to: "results_materials7", optional: true },
        { from: "results_materials5", to: "results_materials7", optional: true },
        { from: "results_materials6", to: "results_materials7", optional: true },
        { from: "results_materials7", to: "optical1" },
        { from: "optical1", to: "optical6" },
        { from: "optical1", to: "optical2", optional: true },
        { from: "optical1", to: "optical3", optional: true },
        { from: "optical1", to: "optical4", optional: true },
        { from: "optical1", to: "optical5", optional: true },
        { from: "optical2", to: "optical6", optional: true },
        { from: "optical3", to: "optical6", optional: true },
        { from: "optical4", to: "optical6", optional: true },
        { from: "optical5", to: "optical6", optional: true },
        { from: "optical1", to: "XANES1" },
        { from: "XANES1", to: "XANES2", optional: true },
        { from: "XANES1", to: "XANES3", optional: true },
        { from: "XANES1", to: "XANES4", optional: true },
        { from: "XANES1", to: "XANES5", optional: true },
        { from: "XANES1", to: "XANES6", optional: true },
        { from: "XANES1", to: "XANES7", optional: true },
        { from: "XANES1", to: "XANES8", optional: true },
        { from: "XANES1", to: "XANES9", optional: true },
        { from: "XANES1", to: "XANES10", optional: true },
        { from: "XANES1", to: "XANES11", optional: true },
        { from: "XANES1", to: "XANES12", optional: true },
        { from: "XANES2", to: "Defects1", optional: true },
        { from: "XANES3", to: "Defects1", optional: true },
        { from: "XANES4", to: "Defects1", optional: true },
        { from: "XANES5", to: "Defects1", optional: true },
        { from: "XANES6", to: "Defects1", optional: true },
        { from: "XANES7", to: "Defects1", optional: true },
        { from: "XANES8", to: "Defects1", optional: true },
        { from: "XANES9", to: "Defects1", optional: true },
        { from: "XANES10", to: "Defects1", optional: true },
        { from: "XANES11", to: "Defects1", optional: true },
        { from: "XANES12", to: "Defects1", optional: true },
        { from: "XANES1", to: "Defects1" },
        { from: "Defects1", to: "Defects2", optional: true },
        { from: "Defects1", to: "Defects3", optional: true },
        { from: "Defects1", to: "Defects4", optional: true },
        { from: "Defects1", to: "Defects5", optional: true },
        { from: "Defects1", to: "Defects6", optional: true },
        { from: "Defects1", to: "Defects7", optional: true },
        { from: "Defects1", to: "Defects8" },
        { from: "Defects2", to: "Defects8", optional: true },
        { from: "Defects3", to: "Defects8", optional: true },
        { from: "Defects4", to: "Defects8", optional: true },
        { from: "Defects5", to: "Defects8", optional: true },
        { from: "Defects6", to: "Defects8", optional: true },
        { from: "Defects7", to: "Defects8", optional: true },
        { from: "Defects8", to: "Conclusion", center: true },
        { from: "Conclusion", to: "Acknowledgements", center: true },
        { from: "Acknowledgements", to: "Citations", center: true },
    ];

    const WIDTH = 1000;
    const ROW_HEIGHT = 160;
    const NODE_W = 140;
    const NODE_H = 90;

    const nodePositions = {};

    slides.forEach(slide => {
        nodePositions[slide.id] = {
            x: slide.x * WIDTH,
            y: slide.y * ROW_HEIGHT
        };
    });

    edges.forEach(edge => {
        const from = nodePositions[edge.from];
        const to = nodePositions[edge.to];
        if (!from || !to) return;

        const line = document.createElementNS(svg.namespaceURI, "line");

        line.setAttribute("x1", from.x);
        line.setAttribute("x2", to.x);
        if (edge.center === true) {
            line.setAttribute("y1", from.y + NODE_H / 2); // center of parent
            line.setAttribute("y2", to.y + NODE_H / 2); // center of child
        } else {
            line.setAttribute("y1", from.y + NODE_H); // bottom of parent
            line.setAttribute("y2", to.y); // top of child
        }

        line.setAttribute("stroke", edge.optional ? "#555" : "#888");
        line.setAttribute("stroke-width", "4");
        line.setAttribute("stroke-dasharray", edge.optional ? "10 4" : "none");

        svg.appendChild(line);
    });

    slides.forEach(slide => {
        const cx = slide.x * WIDTH;
        const cy = slide.y * ROW_HEIGHT;

        const g = document.createElementNS(svg.namespaceURI, "g");
        g.style.cursor = "pointer";

        const clipId = `clip-${slide.id}`;

        const clipPath = document.createElementNS(svg.namespaceURI, "clipPath");
        clipPath.id = clipId;

        const clipRect = document.createElementNS(svg.namespaceURI, "rect");
        clipRect.setAttribute("x", cx - NODE_W / 2);
        clipRect.setAttribute("y", cy);
        clipRect.setAttribute("width", NODE_W);
        clipRect.setAttribute("height", NODE_H);
        clipRect.setAttribute("rx", 8);

        clipPath.appendChild(clipRect);
        g.appendChild(clipPath);

        const img = document.createElementNS(svg.namespaceURI, "image");
        img.setAttribute("href", slide.img);
        img.setAttribute("x", cx - NODE_W / 2);
        img.setAttribute("y", cy);
        img.setAttribute("width", NODE_W);
        img.setAttribute("height", NODE_H);
        img.setAttribute("preserveAspectRatio", "xMidYMid slice");
        img.setAttribute("clip-path", `url(#${clipId})`);

        g.appendChild(img);

        const rect = document.createElementNS(svg.namespaceURI, "rect");
        rect.setAttribute("x", cx - NODE_W / 2);
        rect.setAttribute("y", cy);
        rect.setAttribute("width", NODE_W);
        rect.setAttribute("height", NODE_H);
        rect.setAttribute("rx", 8);
        rect.setAttribute("fill", "none");
        rect.setAttribute("stroke", slide.optional ? "#666" : "#00ffff");
        rect.setAttribute("stroke-width", slide.optional ? "1.5" : "2.5");

        const title = document.createElementNS(svg.namespaceURI, "title");
        title.textContent = slide.title;

        g.appendChild(title);
        g.appendChild(rect);

        g.addEventListener("click", () => {
            if (openModalCallback) {
                openModalCallback(slide.img);
            }
        });

        svg.appendChild(g);
    });
}

