import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import animation from '../assets/loader.json';

export default function Preloader({ show = true, size = 160 }) {
    if (!show) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            role="status"
            aria-busy="true"
            aria-live="polite"
        >
            <Lottie
                animationData={animation}
                play
                loop
                style={{ width: size, height: size }}
                aria-label="Loading"
            />
        </div>
    );
}