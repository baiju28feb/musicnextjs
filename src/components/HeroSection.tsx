import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"
import { ImagesSlider } from "./ui/image-slider";

function HeroSection() {
    const images = [
        "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];
    
    return (
        <div className="h-screen w-full rounded-md overflow-hidden mx-auto relative">
            <ImagesSlider 
                className="h-full w-full" 
                images={images}
                overlay={true}
                overlayClassName="bg-black/50 z-40"
            >
                {/* Content with z-index higher than the overlay (z-50) */}
                <div className="relative z-50 h-full w-full flex flex-col items-center justify-center py-10 md:py-0">
                    <Spotlight
                        className="-top-40 left-0 md:-top-20 md:left-60"
                        fill="white"
                    />
                    
                    <div className="p-4 w-full text-center">
                        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Dwi Academy Of Music
                        </h1>
                        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                            Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential  
                        </p>
                        <div className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                            <Link href={"/Courses"}>
                                <Button
                                    borderRadius="1.75rem"
                                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                                >
                                    Explore courses
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </ImagesSlider>
        </div>
    )
}

export default HeroSection