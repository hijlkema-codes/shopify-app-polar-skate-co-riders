import { bindEventListeners } from "./utils/html.mjs";
import { isMobile } from "./utils/size.mjs";

class RiderShowreel extends HTMLElement {
    connectedCallback() {
        super.connectedCallback?.();

        if (window.matchMedia('(pointer: fine)').matches) {
            bindEventListeners(this, [
                {
                    type: "mouseenter",
                    handler: this.playVideo.bind(this)
                },
                {
                    type: "mouseleave",
                    handler: this.pauseVideo.bind(this)
                }
            ]);
        }

        if (isMobile()) {
            this.initIntersectionObserver();
        }
    }

    initIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= 0.75) {
                    this.playVideo();
                } else if (entry.intersectionRatio < 0.25) {
                    this.pauseVideo();
                }
            });
        }, {
            threshold: [0.25, 0.75]
        });

        observer.observe(this);
    }

    playVideo() {
        // noinspection JSIgnoredPromiseFromCall
        this.querySelector('video').play();
    }

    pauseVideo() {
        this.querySelector('video').pause();
    }
}

if (!customElements.get('rider-showreel')) {
    customElements.define('rider-showreel', RiderShowreel);
}