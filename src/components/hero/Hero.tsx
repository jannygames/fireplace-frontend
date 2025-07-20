import Slider from "../slider/Slider";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-bg-primary absolute top-0 overflow-hidden">
        <div className="absolute w-2/3 h-full bg-bg-secondary top-0 left-0" />
                 <Slider className="absolute top-1/2 right-0 w-4/5 h-2/3 -translate-y-1/2" />
    </section>
  )
}

export default Hero