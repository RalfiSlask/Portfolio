import type { ISourceOptions } from "tsparticles-engine";
export const particlesRain: ISourceOptions = {
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
            value: "#000000", // Change to "#0077be" for blue raindrops if desired
        },
        links: {
            enable: false,
        },
        move: {
            direction: "bottom",
            enable: true,
            outModes: {
                default: "out",
            },
            straight: false, // Slight deviation for a more natural look
            speed: 0.5, // Slower movement for raindrops
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 100, // Increase for more raindrops
        },
        opacity: {
            value: 0.6, // Slightly transparent like water
        },
        shape: {
            type: "circle", // Circular raindrops
        },
        size: {
            value: { min: 0.5, max: 2.5 }, // Size variation for raindrops
        },
    },
    detectRetina: true,
};
