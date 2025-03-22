import { hover, inView } from "motion";

class RiderShowreel extends HTMLElement {
    connectedCallback() {
        super.connectedCallback?.();

        const isMobileMatcher = window.matchMedia('(max-width: 768px)');

        hover(this, () => {
            this.playVideo();

            return () => this.pauseVideo()
        })

        if (isMobileMatcher.matches) {
            inView(this, () => {
                this.playVideo();

                return () => this.pauseVideo()
            }, {amount: 0.75, margin: '-133px 0px 0px'})
        }
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