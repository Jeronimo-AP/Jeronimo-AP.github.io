export class PhysicsEngine {
    constructor(world) {
        this.world = world;
        this.entities = [];
        this.running = false;
    }

    add(entity) {
        this.entities.push(entity);
    }

    start() {
        if (this.running) return;
        this.running = true;
        requestAnimationFrame(this.update.bind(this));
    }

    stop() {
        this.running = false;
    }

    update() {
        if (!this.running) return;

        this.applyRepulsion();
        this.entities.forEach(e => {
            e.applyVelocity();
            this.handleBounds(e);
        });

        this.handleCollisions();

        this.entities.forEach(e => e.render());

        requestAnimationFrame(this.update.bind(this));
    }

    applyRepulsion() {
        const K = 200;        // strength
        const SOFTENING = 100; // prevents singularity
        //const DAMPING = 0.985;

        for (let i = 0; i < this.entities.length; i++) {
            const a = this.entities[i];

            for (let j = i + 1; j < this.entities.length; j++) {
                const b = this.entities[j];

                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const distSq = dx * dx + dy * dy + SOFTENING;
                const dist = Math.sqrt(distSq);

                const R = 2*SOFTENING*SOFTENING; // interaction range
                if (dist > R) continue;
                const strength = (1 - dist / R); // fades to zero
                const force = K * strength / distSq;


                const fx = force * dx / dist;
                const fy = force * dy / dist;

                a.vx += fx / a.mass;
                a.vy += fy / a.mass;
                b.vx -= fx / b.mass;
                b.vy -= fy / b.mass;
            }
        }

        // damping
        //this.entities.forEach(e => {
            //e.vx *= DAMPING;
            //e.vy *= DAMPING;
        //});
    }

    handleBounds(entity) {
        const maxX = this.world.clientWidth - entity.width - 55;
        const maxY = this.world.clientHeight - entity.height - 45;

        if (entity.x <= 0 || entity.x >= maxX) {
            entity.vx *= -1;
            entity.x = Math.max(0, Math.min(entity.x, maxX));
        }

        if (entity.y <= 0 || entity.y >= maxY) {
            entity.vy *= -1;
            entity.y = Math.max(0, Math.min(entity.y, maxY));
        }
    }

    handleCollisions() {
        const ents = this.entities;

        for (let i = 0; i < ents.length; i++) {
            for (let j = i + 1; j < ents.length; j++) {
                const a = ents[i];
                const b = ents[j];

                if (!this.intersects(a, b)) continue;

                // Compute overlap
                const dx = (a.x + a.width / 2) - (b.x + b.width / 2);
                const dy = (a.y + a.height / 2) - (b.y + b.height / 2);

                const overlapX = (a.width + b.width) / 2 - Math.abs(dx);
                const overlapY = (a.height + b.height) / 2 - Math.abs(dy);

                if (overlapX < overlapY) {
                    // Horizontal collision
                    const sign = Math.sign(dx);
                    a.x += overlapX * sign;
                    b.x -= overlapX * sign;

                    const temp = a.vx;
                    a.vx = b.vx;
                    b.vx = temp;
                } else {
                    // Vertical collision
                    const sign = Math.sign(dy);
                    a.y += overlapY * sign;
                    b.y -= overlapY * sign;

                    const temp = a.vy;
                    a.vy = b.vy;
                    b.vy = temp;
                }
            }
        }
    }

    intersects(a, b) {
        return (
            a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
        );
    }
}
