import HeroContent from "../sub/HeroContent"
import MobileBlackhole from "../sub/mobile-blackhole"

const Hero = () => {
  return (
    <>
    <div className="relative flex flex-col  h-full w-full">
        <video autoPlay muted loop className="rotate-180 absolute top-[-47%] z-[-1] w-full h-full hidden md:block object-cover">
            <source src="/blackhole.webm" type="video/webm" />
        </video>
        <MobileBlackhole />
        <HeroContent />
    </div>
     </>
  )
}

export default Hero

