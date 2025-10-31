import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function Carousel() {
    const slides = [
        {
            id: 1,
            title: 'Summer Collection',
            description: 'Discover the latest trends for the season',
            color: 'from-blue-500 to-purple-600'
        },
        {
            id: 2,
            title: 'New Arrivals',
            description: 'Fresh styles just dropped',
            color: 'from-pink-500 to-orange-500'
        },
        {
            id: 3,
            title: 'Limited Edition',
            description: 'Exclusive pieces you won\'t find anywhere else',
            color: 'from-green-500 to-teal-600'
        },
        {
            id: 4,
            title: 'Sale Event',
            description: 'Up to 50% off selected items',
            color: 'from-red-500 to-pink-600'
        }
    ];

    const [current, setCurrent] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlay, slides.length]);

    const goToPrevious = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrent(index);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white p-4">
            <div className="w-full max-w-4xl">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    {/* Slides Container */}
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {slides.map((slide) => (
                            <div
                                key={slide.id}
                                className={`min-w-full h-96 bg-gradient-to-br ${slide.color} flex items-center justify-center`}
                            >
                                <div className="text-center text-white px-8">
                                    <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                                    <p className="text-xl opacity-90">{slide.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Auto-play Toggle */}
                    <button
                        onClick={() => setIsAutoPlay(!isAutoPlay)}
                        className="absolute top-4 right-4 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                        aria-label={isAutoPlay ? 'Pause autoplay' : 'Start autoplay'}
                    >
                        {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    current === index
                                        ? 'bg-white w-8 h-3'
                                        : 'bg-white/50 w-3 h-3 hover:bg-white/75'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Info Text */}
                <div className="text-center mt-6 text-gray-600">
                    <p className="text-sm">
                        Slide {current + 1} of {slides.length} •
                        {isAutoPlay ? ' Auto-playing' : ' Paused'}
                    </p>
                </div>
            </div>
        </div>
    );
}