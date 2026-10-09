function skipYouTubeAds() {
    // FIX: If the user is NOT on YouTube, stop running entirely!
    if (!window.location.hostname.includes('youtube.com')) {
        return;
    }

    const video = document.querySelector('video');
    const adOverlay = document.querySelector('.video-ads, .ytp-ad-module, .ytp-ad-player-overlay');
    const skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern');

    if (video && adOverlay && adOverlay.children.length > 0) {
        video.muted = true;
        video.playbackRate = 16.0;
        if (!isNaN(video.duration)) {
            video.currentTime = video.duration - 0.1;
        }
    }

    if (skipButton) {
        skipButton.click();
    }
}

// Check every 200ms
setInterval(skipYouTubeAds, 200);
