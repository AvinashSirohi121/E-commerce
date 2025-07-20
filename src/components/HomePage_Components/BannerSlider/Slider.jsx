import React, { useEffect , useState} from 'react'
import { GrNext } from "react-icons/gr";

const Slider = () => {

    const [currentImage,setCurrentImage] = useState(null);
    const images = [
        "https://m.media-amazon.com/images/G/31/2024/Cons/Primejan25/Primejun25/NewCr/PC_Hesder_2.png",
        "https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg",
        "https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg",
        "https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg",
        "https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg",
        "https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        setCurrentImage(images[currentIndex]);
    }, [currentIndex, images]);

    const handlePrev = () => {
        setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev + 1) % images.length);
    };

    
    return (
        
        <div className="slider flex relative items-center justify-center  m-auto w-[95%] bg-[#bababa] " style={{ height: '60vh', maxHeight: '60vh' , }}>
            <div
                onClick={handlePrev}
                className=" absolute right-[95%] mx-2 cursor-pointer p-[10px] flex justify-center items-center  bg-[#f3f3f3] rounded-full shadow hover:bg-[#ff5252]"
                style={{ zIndex: 1 }}
                aria-label="Previous"
            >
                <GrNext className="rotate-180 text-[30px]" />
            </div>
            <div className=" flex-1 flex justify-center items-center">
                <img
                    src={currentImage}
                    alt="banner"
                    className="rounded-md w-[95vw] min-w-[95vw] h-[60vh] max-h-[60vh] contain-content"
                   
                />
            </div>
            <div
                onClick={handleNext}
                 className="absolute left-[95%] mx-2 cursor-pointer p-[10px] flex justify-center items-center  bg-[#f3f3f3] rounded-full shadow hover:bg-[#ff5252]"
                style={{ zIndex: 1 }}
                aria-label="Next"
            >
                <GrNext className="text-[30px]" />
            </div>
        </div>
        
    )
}

export default Slider