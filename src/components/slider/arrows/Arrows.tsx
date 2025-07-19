function Arrows({ prevSlide, nextSlide }: {prevSlide: () => void, nextSlide: () => void}) {
    return (
        <div className="">
            <span onClick={prevSlide}></span>
            <span onClick={nextSlide}></span>
        </div>
    );
}

export default Arrows;