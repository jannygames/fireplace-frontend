const ProItem = ({title, description, icon}: {title: string, description: string, icon: string}) => {
    return (
        <div className="w-[20vw] h-auto grid grid-flow-col grid-rows-3">
            <div className="row-span-3 col-span-1 py-3 mt-0 mb-auto">
                <img src={icon} alt="pros-1" className="w-12 h-12 object-contain" />
            </div>
            <div className="col-span-2 mt-0 mb-auto">
                <div className="col-span-2">
                    <h1 className="text-2xl font-bold text-dark-primary">
                        {title}
                    </h1>
                </div>
                <div className="col-span-2 row-span-2 mt-2 text-md">
                    <p className="text-dark-secondary whitespace-pre-line">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProItem;