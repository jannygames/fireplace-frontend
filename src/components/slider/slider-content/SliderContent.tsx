function SliderContent({ activeindex, sliderImage}: {activeindex: number, sliderImage: {image: string, title: string}[]}) {
    return (
        <div className="w-full h-full overflow-hidden relative">
            <div 
                className="flex gap-2.5 h-full transition-transform duration-500 ease-in-out"
                style={{ 
                    transform: `translateX(calc(10% - ${activeindex * 75}%))`,
                }}>
                {
                    sliderImage.map((slide, index) => (
                        <div key={index} className="h-full flex-shrink-0" style={{ width: '65%' }}>
                            <img src={slide.image} alt={slide.title} className="w-full h-full object-contain" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SliderContent;