import type { ISourceOptions } from "tsparticles-engine";

export const particlesCode: ISourceOptions = {
    background: {
        color: {
            value: "#EAEDED",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
        
            resize: true,
        },
        modes: {
            push: {
                quantity: 2,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#000000",
        },
        links: {
            enable: false, // Disabling links
        },
        move: {
            direction: "bottom", // Moving from top to bottom
            enable: true,
            outModes: {
                default: "out", // Particles will leave the canvas (not bounce)
            },
            straight: true,
            speed: 0.8, // Slower movement
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 30, // Fewer particles
        },
        opacity: {
            value: 0.8, // Less visible
        },
        shape: {
            type: "char",
            options: {
                char: {
                    value: ["{ }", "< >", "< />"],
                    font: "Verdana",
                    style: "", 
                    weight: "500", // From 100 to 900
                },
            },
        },
        size: {
            value: { min: 1, max: 4 }, 
        },
    },
    detectRetina: true,
};