function SliderContent({ activeindex, sliderImage}: {activeindex: number, sliderImage: {image: string, title: string}[]}) {
    const sliderImageWidth = '50%';
    return (
        <div className="w-full h-full overflow-hidden relative">
            <div 
                className="flex gap-15 h-full transition-transform duration-500 ease-in-out"
                style={{ 
                    transform: `translateX(calc(30% - ${activeindex * parseInt(sliderImageWidth.replace('%', ''))}%))`,
                }}>
                {
                    sliderImage.map((slide, index) => (
                        <div key={index} className="h-full flex-shrink-0" style={{ width: sliderImageWidth }}>
                            <img src={slide.image} alt={slide.title} className="w-full h-full object-fit" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SliderContent;