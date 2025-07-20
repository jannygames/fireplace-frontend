function Dots({ activeindex, onClick, sliderImage}: {activeindex: number, onClick: (index: number) => void, sliderImage: {image: string, title: string}[]}) {
    return (
        <div className="flex gap-5 absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-[200%]">
            {
                sliderImage.map((_, index) => (
                    <div key={index} className={`w-6 h-6 rounded-full flex items-center justify-center ${activeindex === index ? "border border-primary" : ""}`} onClick={() => onClick(index)}>
                        <span key={index} className={`block w-3 h-3 rounded-full ${activeindex === index ? "bg-primary" : "bg-gray-light"}`}></span>
                    </div>
                ))
            }
        </div>
    );
}

export default Dots;