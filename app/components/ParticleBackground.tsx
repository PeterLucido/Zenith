import dynamic from 'next/dynamic';
import React from 'react';
import p5Types from 'p5';

const Sketch = dynamic(() => import('react-p5'), {
    ssr: false
});

class Particle {
    pos: p5Types.Vector;
    vel: p5Types.Vector;
    size: number;
    shrink: number;
    color: p5Types.Color;
    p5: p5Types;

    constructor(p5: p5Types) {
        this.p5 = p5;
        this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
        this.vel = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
        this.size = 8;
        this.shrink = p5.random(0.01, 0.03);
        this.color = p5.color(p5.random(['#29ABE2', '#FFFFFF', '#FF00FF', 'rgba(255, 255, 255, 0.5)']));
    }

    update() {
        this.pos.add(this.vel);
        this.size -= this.shrink;
        this.edges();
        this.interactWithMouse();
        this.vel.mult(0.97);
    }

    display(p5: p5Types) {
        p5.push();
        p5.noStroke();
        p5.fill(this.color);
        // Add a subtle glow effect without changing the color
        p5.ellipse(this.pos.x, this.pos.y, this.size * 1.2);
        p5.ellipse(this.pos.x, this.pos.y, this.size);
        p5.pop();
    }

    edges() {
        if (this.pos.x < 0 || this.pos.x > this.p5.windowWidth || this.pos.y < 0 || this.pos.y > this.p5.windowHeight) {
            this.pos.x = this.p5.random(this.p5.width);
            this.pos.y = this.p5.random(this.p5.height); // Respawn at a random position within the window
        }
    }

    interactWithMouse() {
        const mouseVec = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);
        const dist = p5Types.Vector.dist(this.pos, mouseVec);
        if (dist < 200) {
            const force = p5Types.Vector.sub(this.pos, mouseVec);
            force.setMag(0.3);
            if (dist < 50) {
                force.mult(-2); // Repel more strongly when very close
            }
            this.vel.add(force);
        }
    }
}

let particles: Particle[] = [];

const ParticleBackground = () => {
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        particles = Array.from({ length: 100 }, () => new Particle(p5));
    };

    const draw = (p5: p5Types) => {
        p5.background(0);
        for (let i = particles.length - 1; i >= 0; i--) {
            const particle = particles[i];
            particle.update();
            particle.display(p5);
            if (particle.size <= 0) {
                particles.splice(i, 1);
                particles.push(new Particle(p5));
            }
        }
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <Sketch setup={setup} draw={draw} />
        </div>
    );
};

export default ParticleBackground;
