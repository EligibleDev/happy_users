import WeatherCard from "../../../../components/WeatherCard/WeatherCard";

const Banner = () => {
    return (
        <section className="h-screen min-h-[700px] relative">
            <video
                className="absolute w-full h-full object-cover"
                src="https://finflow.uicore.co/financial-planning/wp-content/uploads/sites/7/2023/03/financial-planning-video.mp4"
                autoPlay
                loop
                muted
                playsInline
            ></video>
            <div className="banner-gradient w-full h-full flex items-center z-10 absolute">
                <div className="max-w-screen-xl mx-auto px-8 xl:px-0">
                    <div className="w-full sm:w-2/3 xl:w-1/2 space-y-10">
                        <h1 className="text-[40px] leading-none sm:text-5xl font-semibold">
                            Manage your users & weather in the simple way
                        </h1>
                        <p className="text-xl font-semibold">
                            Lorem, ipsum dolor sit amet consectetur adipisic elit.
                            Voluptatum hic ratione at.
                        </p>

                        <WeatherCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
