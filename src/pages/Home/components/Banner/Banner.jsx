const Banner = () => {
    return (
        <section className="h-[1028px] min-h-[800px] relative">
            <video
                className="absolute w-full h-full object-cover"
                src="https://finflow.uicore.co/financial-planning/wp-content/uploads/sites/7/2023/03/financial-planning-video.mp4"
                autoPlay
                loop
                muted
                playsInline
            ></video>
            <div className="banner-gradient w-full h-full z-10 absolute">
                <div className="flex flex-col items-center text-center"></div>
            </div>
        </section>
    );
};

export default Banner;
