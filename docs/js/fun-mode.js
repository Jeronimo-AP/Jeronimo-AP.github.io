import { PhysicsEngine } from './physics/engine.js';
import { PhysicsEntity } from './physics/entity.js';

// ============================
// Physics state
// ============================
let engine = null;

// ============================
// Fun Mode state + persistence
// ============================
const funToggle = document.getElementById('fun-toggle');
const projectCards = document.querySelectorAll('.project-card');

let funMode = localStorage.getItem('funMode') === 'true';

function applyFunMode(state) {
    if (funMode && !state) {
        localStorage.setItem('funMode', 'false');
        location.reload();
        return;
    }

    funMode = state;
    localStorage.setItem('funMode', funMode);

    document.body.classList.toggle('fun-mode', funMode);
    projectCards.forEach(card => {
        card.classList.toggle('fun', funMode);
    });

    if (funMode) showFunHint();
}

if (funToggle) {
    funToggle.addEventListener('click', () => {
        applyFunMode(!funMode);
    });
}

// Apply persisted state on load
applyFunMode(funMode);

function showFunHint() {
    const hint = document.getElementById('fun-hint');
    if (!hint) return;

    if (funMode) {
        collapseToCenter();
        setTimeout(startPhysics, 450);
    } else { stopPhysics(); }

    hint.classList.add('show');
    setTimeout(() => hint.classList.remove('show'), 1200);
}

function startPhysics() {
    const world = document.getElementById('physics-world');
    const worldRect = world.getBoundingClientRect();

    engine = new PhysicsEngine(world);

    document.querySelectorAll('.project-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const scale = 1;

        card.style.width = `${rect.width * scale}px`;
        card.style.height = `${rect.height * scale}px`;

        // Convert viewport → world coordinates
        const x = rect.left - worldRect.left;
        const y = rect.top - worldRect.top;

        card.style.position = 'absolute';
        card.style.left = `${x}px`;
        card.style.top = `${y}px`;
        card.style.margin = '0';

        const entity = new PhysicsEntity(card, x, y);

        entity.vx = (Math.random() - 0.5) * 18;
        entity.vy = (Math.random() - 0.5) * 18;

        engine.add(entity);
    });

    engine.start();
}


function stopPhysics() {
    if (engine) {
        engine.stop();
        engine = null;
    }

    // Reset cards visually
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.transform = '';
        card.style.position = '';
        card.style.left = '';
        card.style.top = '';
        card.style.width = '';
        card.style.height = '';
    });
}

function collapseToCenter() {
    const world = document.getElementById('physics-world');
    const w = world.clientWidth;
    const h = world.clientHeight;

    projectCards.forEach(card => {
        card.classList.add('transitioning');

        const rect = card.getBoundingClientRect();
        const worldRect = world.getBoundingClientRect();

        const x = rect.left - worldRect.left;
        const y = rect.top - worldRect.top;

        card.style.position = 'absolute';
        card.style.left = `${x}px`;
        card.style.top = `${y}px`;

        // Move to center
        card.style.left = `${w / 2 - rect.width * 0.5}px`;
        card.style.top = `${h / 2 - rect.height * 0.5}px`;
        card.style.transform = `scale(0.5)`;
    });
}
