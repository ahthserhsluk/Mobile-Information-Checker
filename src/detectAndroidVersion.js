// src/detectAndroidVersion.js

export function getAndroidVersion() {
    let version = "unknown";

    const features = [
        // Android 4.0+
        { feature: 'WebSocket' in window, version: '4.0' },
        { feature: 'classList' in document.documentElement, version: '4.0' },
        // Android 4.1+
        { feature: 'requestAnimationFrame' in window, version: '4.1' },
        { feature: 'performance' in window && 'now' in performance, version: '4.1' },
        // Android 4.4+
        { feature: 'serviceWorker' in navigator, version: '4.4' },
        { feature: 'IntersectionObserver' in window, version: '4.4' },
        // Android 5.0+
        { feature: 'Promise' in window, version: '5.0' },
        { feature: 'Symbol' in window, version: '5.0' },
        // Android 6.0+
        { feature: 'fetch' in window, version: '6.0' },
        { feature: 'requestIdleCallback' in window, version: '6.0' },
        // Android 7.0+
        { feature: 'WebAssembly' in window, version: '7.0' },
        { feature: 'ResizeObserver' in window, version: '7.0' },
        // Android 7.1+
        { feature: 'Bluetooth' in navigator, version: '7.1' },
        { feature: 'AbortController' in window, version: '7.1' },
        // Android 8.0+
        { feature: 'OffscreenCanvas' in window, version: '8.0' },
        { feature: 'PaymentRequest' in window, version: '8.0' },
        // Android 9.0+
        { feature: 'TextEncoderStream' in window, version: '9.0' },
        { feature: 'FinalizationRegistry' in window, version: '9.0' },
        // Android 10.0+
        { feature: 'PerformanceObserver' in window, version: '10.0' },
        { feature: 'XRSession' in window, version: '10.0' },
        // Android 11.0+
        { feature: 'ClipboardItem' in window, version: '11.0' },
        { feature: 'SharedArrayBuffer' in window, version: '11.0' },
        // Android 12.0+
        { feature: 'USB' in navigator, version: '12.0' },
        { feature: 'navigator' in window && 'getBattery' in navigator, version: '12.0' },
        // Android 13.0+
        { feature: 'mediaCapabilities' in navigator, version: '13.0' },
        { feature: 'NavigationPreloadManager' in window, version: '13.0' },
        // Android 14.0+
        { feature: 'Ultra HDR' in HTMLVideoElement.prototype, version: '14.0' },
        { feature: 'Lossless USB audio' in navigator, version: '14.0' },
        { feature: 'MediaRecorder' in window, version: '14.0' },
        // Android 15.0+
        { feature: 'Low Light Boost' in HTMLVideoElement.prototype, version: '15.0' },
        { feature: 'HDR headroom control' in HTMLVideoElement.prototype, version: '15.0' },
        { feature: 'WebTransport' in window, version: '15.0' },
    ];

    for (const check of features) {
        if (check.feature) {
            version = check.version;
        }
    }

    return version;
}
