export default function About() {
    return (
        <div className="bg-tail px-6 py-24 sm:py-32 lg:px-8 relative">
            <img src="/spaceman.png" className="absolute ] w-[30rem] top-0 left-30 xl:block hidden" />
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300 text-balance">
                    We are proud and thrilled to announce ‘NASA Space Apps Colombo, 2022’ International hackathon event in Sri Lanka for the third consecutive year. In line with NASA’s guidelines and direct collaboration. The event is organized by SEDS Sri Lanka , which is the international body that strives to promote space exploration and development via educational and engineering projects.
                    Find out more about NASA Space Apps Colombo from our Social Media Channels.
                </p>
            </div>
            <div className="mx-auto max-w-2xl text-center flex flex-col gap-10 items-center mt-10">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">Our Sponsor</h2>
                <a href="https://lk.usembassy.gov/education-culture/american-spaces/american-center-colombo/" target="_blank">
                    <img src="/sponsor.jpg" className="w-80 cursor-pointer hover:scale-110 transition-all" /></a>

            </div>
        </div>
    )
}
