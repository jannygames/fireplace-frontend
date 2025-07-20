import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Arrows({ prevSlide, nextSlide }: {prevSlide: () => void, nextSlide: () => void}) {
    return (
        <div className="flex gap-5 absolute top-0 right-0 -translate-x-9/10 -translate-y-[200%] mr-10 mb-10">
            <span onClick={prevSlide} className="text-2xl cursor-pointer text-white bg-secondary p-4 rounded-full">
                <FaArrowLeft />
            </span>
            <span onClick={nextSlide} className="text-2xl cursor-pointer text-white bg-primary p-4 rounded-full">
                <FaArrowRight />
            </span>
        </div>
    );
}

export default Arrows;