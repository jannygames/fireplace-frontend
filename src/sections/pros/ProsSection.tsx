import ProItem from "../../components/pro/ProItem";
import pros from "../../components/pro/pros";

const ProsSection = () => {
    return (
        <section className="w-full h-[30vh] bg-bg-primary mt-[100vh]">
            <div className="w-full h-full flex justify-center items-center">
                {pros.map((pro, index) => (
                    <ProItem key={index} {...pro} />
                ))}
            </div>
        </section>
    )
}

export default ProsSection;