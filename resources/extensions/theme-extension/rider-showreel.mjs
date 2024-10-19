import {bindEventListeners} from "./utils/html.mjs";

class RiderShowreel extends HTMLElement {
    connectedCallback() {
        super.connectedCallback?.();

        bindEventListeners(this, [
            {
                type: "mouseenter",
                handler: this.playVideo.bind(this)
            },
            {
                type: "mouseleave",
                handler: this.pauseVideo.bind(this)
            }
        ])
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