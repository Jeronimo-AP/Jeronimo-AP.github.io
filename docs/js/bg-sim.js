const canvas = document.getElementById('bg-simulation');
const ctx = canvas.getContext('2d');

// ============================
// Simulation Parameters
// ============================
const latticeConstant = 60; // Distance between equilibrium points
const atomSize = 2;
const bondColor = 'rgba(163, 216, 255, 0.15)';
const atomColor = 'rgba(255, 255, 255, 0.4)';

// Phonon Modes (Wave superposition)
// We combine a few waves to make the movement look "organic" yet structured
const waves = [
    { kx: 0.02, ky: 0.00, w: 0.002, amp: 4 },  // Long horizontal wave (Longitudinal)
    { kx: 0.01, ky: 0.02, w: 0.003, amp: 3 },  // Diagonal wave
    { kx: 0.00, ky: 0.03, w: 0.001, amp: 2 }   // Vertical wave (Transverse)
];

let atoms = [];
let cols = 0;
let rows = 0;
let time = 0;

// Mouse interaction (Thermal spike)
const mouse = { x: -1000, y: -1000, active: false };

// ============================
// Classes
// ============================
class Atom {
    constructor(c, r) {
        this.c = c; // Column index
        this.r = r; // Row index

        // Equilibrium position (The "Lattice Site")
        this.x0 = c * latticeConstant;
        this.y0 = r * latticeConstant;

        // Current position
        this.x = this.x0;
        this.y = this.y0;
    }

    update(t) {
        let dx = 0;
        let dy = 0;

        // 1. Apply Phonon Waves (Superposition)
        // Displacement u = A * sin(k·r - ωt)
        waves.forEach(wave => {
            const phase = (wave.kx * this.x0) + (wave.ky * this.y0) - (wave.w * t);
            dx += Math.sin(phase) * wave.amp;
            dy += Math.cos(phase) * wave.amp;
        });

        // 2. Apply Mouse Interaction (Local repulsive potential)
        if (mouse.active) {
            const distDx = this.x - mouse.x;
            const distDy = this.y - mouse.y;
            const dist = Math.sqrt(distDx * distDx + distDy * distDy);
            const interactionRadius = 100;

            if (dist < interactionRadius) {
                const force = (interactionRadius - dist) / interactionRadius;
                const repulsion = 10 * force; // Strength of push
                const angle = Math.atan2(distDy, distDx);

                dx += Math.cos(angle) * repulsion;
                dy += Math.sin(angle) * repulsion;
            }
        }

        // Update Position
        this.x = this.x0 + dx;
        this.y = this.y0 + dy;
    }

    draw(atomsArray) {
        // Draw the atom
        ctx.fillStyle = atomColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, atomSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw Bonds (Nearest Neighbors only)
        // We only draw to the RIGHT and BOTTOM to avoid double-drawing lines
        ctx.strokeStyle = bondColor;
        ctx.lineWidth = 1;

        // Neighbor to the right
        if (this.c < cols - 1) {
            const rightAtom = atomsArray[getIndex(this.c + 1, this.r)];
            if (rightAtom) {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(rightAtom.x, rightAtom.y);
                ctx.stroke();
            }
        }

        // Neighbor below
        if (this.r < rows - 1) {
            const bottomAtom = atomsArray[getIndex(this.c, this.r + 1)];
            if (bottomAtom) {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(bottomAtom.x, bottomAtom.y);
                ctx.stroke();
            }
        }
    }
}

// Helper to find atom in 1D array from 2D coords
function getIndex(c, r) {
    return r * cols + c;
}

// ============================
// Setup & Loop
// ============================
function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Add extra margin so the lattice covers the whole screen even when waving
    cols = Math.ceil(canvas.width / latticeConstant) + 2;
    rows = Math.ceil(canvas.height / latticeConstant) + 2;

    atoms = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            atoms.push(new Atom(c, r));
        }
    }
}

function animate(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Use timestamp for smooth wave propagation
    time = timestamp;

    atoms.forEach(atom => {
        atom.update(time);
        atom.draw(atoms);
    });

    requestAnimationFrame(animate);
}

// Events
window.addEventListener('resize', init);
window.addEventListener('mousemove', (e) => {
    mouse.active = true;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});
window.addEventListener('mouseout', () => {
    mouse.active = false;
});

// Start
init();
requestAnimationFrame(animate);