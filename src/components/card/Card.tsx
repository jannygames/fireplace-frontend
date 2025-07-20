const Card = ({title, buttonText, className}: {title: string, buttonText: string, className?: string}) => {
    return (
        <div className={`absolute ${className} top-1/2 left-0 ml-20 -translate-y-1/2 w-[30vw] h-[70vh] bg-bg-primary/70 backdrop-blur-sm justify-center items-center justify-items-center`}>
            <div className="flex flex-col gap-10 w-[80%] h-full py-15">
                <h1 className="text-[3.8vw] font-normal text-dark-primary leading-[1.2] tracking-tight select-none">
                    {title}
                </h1>

                <div className="ml-0 mt-auto">
                    <button className="bg-primary text-white text-2xl uppercase px-4 py-2 w-full h-[60px] hover:bg-primary/80 transition-all duration-300 font-normal tracking-wide">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;