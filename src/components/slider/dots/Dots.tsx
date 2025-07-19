function Dots({ activeindex, onClick, sliderImage}: {activeindex: number, onClick: (index: number) => void, sliderImage: {image: string, title: string}[]}) {
    return (
        <div className="">
            {
                sliderImage.map((_, index) => (
                    <span key={index} className={`w-3 h-3 rounded-full ${activeindex === index ? "bg-primary" : "bg-gray-light"}`} onClick={() => onClick(index)}></span>
                ))
            }
        </div>
    );
}

export default Dots;