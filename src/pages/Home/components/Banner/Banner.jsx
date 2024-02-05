import WeatherCard from "../../../../components/WeatherCard/WeatherCard";

const Banner = () => {
    return (
        <section className="h- min-screen min-h-[800px] relative">
            <video
                className="absolute w-full h-full object-cover"
                src="https://finflow.uicore.co/financial-planning/wp-content/uploads/sites/7/2023/03/financial-planning-video.mp4"
                autoPlay
                loop
                muted
                playsInline
            ></video>
            <div className="banner-gradient w-full h-full flex items-center z-10 absolute">
                <div className="max-w-screen-xl mx-auto ">
                    <div className="w-1/2 space-y-10">
                        <h1 className="text-6xl font-semibold">
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
