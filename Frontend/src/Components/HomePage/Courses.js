import { useState, useEffect } from "react";
import HomeGarden1 from "../Pictures/HomeGarden1.jpg";
import HomeGarden2 from "../Pictures/HomeGarden2.jpg";
import HomeGarden3 from "../Pictures/HomeGarden3.webp";
import HomeGarden4 from "../Pictures/HomeGarden4.jpeg";
import HomeGarden5 from "../Pictures/HomeGarden5.webp";
import { Link } from "react-router-dom";




const CarouselComponent = () => {
    const images = [ HomeGarden1, HomeGarden2, HomeGarden3, HomeGarden4, HomeGarden5
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };
    // Automatically change slides every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="relative w-full h-96 lg:w-[550px]">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-500"
            />
            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-2xl px-2" onClick={prevSlide}
            >
                &#8249;
            </button>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-2xl px-2"
                onClick={nextSlide}
            >
                &#8250;
            </button>
        </div>
    );
};

const Courses= () => {
    return (
        <div>
        <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-gray-100">
            {/* Carousel */}
            <CarouselComponent />

            {/* Features Section */}
            <div className="lg:w-[800px] flex flex-col justify-center space-y-6 p-6 text-green-800 bg-white shadow-lg rounded-lg ml-8 h-96  ">
                <h2 className="text-4xl font-bold">Master Home Gardening</h2>
                <p className="text-lg">
                    Learn essential skills to transform your home into a green oasis. From growing your own vegetables to designing beautiful indoor gardens, our courses are perfect for all levels.
                </p>
                <h3 className="text-2xl font-semibold">Buy Gardening Courses</h3>
                <p className="text-md">
                    Start your journey to becoming a home gardening expert with our easy-to-follow courses. Purchase today and get access to expert advice, tools, and more.
                </p>
                <button className="self-start px-6 py-2 bg-green-900  text-white hover:bg-white hover:text-green-900 font-bold shadow-lg">
                    <Link to="/learn">
                    Explore Courses
                    </Link>
                </button>
            </div>
            </div>
        </div>

    );
};
export default  Courses;
