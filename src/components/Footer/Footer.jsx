import { contactInfos } from "../../utils/utils";

const Footer = () => {
    return (
        <footer className="bg-purple-bg rounded-t-3xl text-white px-8 xl:px-0">
            <div className="max-w-screen-xl mx-auto flex flex-col gap-8 sm:flex-row justify-between items-end py-24">
                <div className="w-full sm:w-3/5 flex flex-col gap-2">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                        Contact Information
                    </h1>
                    <a className="text-paragraph font-medium" href="tel:+8801619152852">
                        Call us anytime – +880 1619 152852
                    </a>
                </div>

                <div className="w-full sm:w-2/5 space-y-2">
                    {contactInfos.map((info) => (
                        <div
                            className="flex items-center gap-2 font-semibold"
                            key={info.link}
                        >
                            <info.icon className="text-blue-400" />
                            <a
                                className="hover:text-blue-400 transition"
                                href={info.link}
                            >
                                {info.label}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto pt-2 pb-12 font-semibold text-center xl:text-right text-paragraph">
                Copyright: © 2023 Mikail All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
