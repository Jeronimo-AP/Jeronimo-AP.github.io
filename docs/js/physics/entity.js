export class PhysicsEntity {
    constructor(element, x, y) {
        this.el = element;

        this.x = x;
        this.y = y;

        this.vx = 0;
        this.vy = 0;
        this.mass = 1;
        this.radius = Math.max(this.width, this.height) / 2;

        this.updateSize();
    }

    updateSize() {
        const rect = this.el.getBoundingClientRect();
        this.width = rect.width;
        this.height = rect.height;
    }


    applyVelocity() {
        this.x += this.vx;
        this.y += this.vy;
    }

    render() {
        this.el.style.left = `${this.x}px`;
        this.el.style.top = `${this.y}px`;
    }
}
