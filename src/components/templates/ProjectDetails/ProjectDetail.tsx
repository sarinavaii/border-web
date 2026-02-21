"use client";

import XContainer from "@atoms/XContainer";

import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import LightGallery from "lightgallery/react";
import Image from "next/image";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const ProjectDetail = () => {
    return (
        <>
            <div className="h-20 bg-black mb-8"></div>
            <XContainer>
                <h1 className="lg:header-3 header-4 mb-4">Project X</h1>
                <div className="flex justify-between items-center mb-8">
                    <div className="lg:paragraph-4 paragraph-5">Projcet Company</div>
                    <div className="flex gap-4 text-green paragraph-5 justify-center items-center lg:mb-4 max-lg:grow">
                        <span>New York, NY</span>
                        <span>Jan 2023 - Present</span>
                    </div>
                </div>
                <div className="flex gap-4 max-md:flex-col mb-8">
                    <div className="bg-smoke flex-1 hover:flex-[1.25] transition-all delay-100 duration-500">
                        <Image
                            src="/images/footer-bg.webp"
                            height={360}
                            width={360}
                            alt="placeholder"
                            className="w-full h-[360px] object-cover"
                        />
                        <div className="p-6 bg-smoke h-[200px] flex flex-col justify-between">
                            <div className="header-4">Challenge</div>
                            <div className="paragraph-4">
                                We needed to build a platform that could scale with demand and support a growing
                                userbase.
                            </div>
                        </div>
                    </div>
                    <div className="bg-smoke flex-1 hover:flex-[1.25] transition-all delay-100 duration-500">
                        <div className="p-6 bg-smoke h-[200px] flex flex-col justify-between">
                            <div className="header-4">Solution</div>
                            <div className="paragraph-4">
                                Our team designed and implemented a robust architecture using modern technologies.
                            </div>
                        </div>
                        <Image
                            src="/images/footer-bg.webp"
                            height={360}
                            width={360}
                            alt="placeholder"
                            className="w-full h-[360px] object-cover"
                        />
                    </div>
                    <div className="bg-smoke flex-1 hover:flex-[1.25] transition-all delay-100 duration-500">
                        <Image
                            src="/images/footer-bg.webp"
                            height={360}
                            width={360}
                            alt="placeholder"
                            className="w-full h-[360px] object-cover"
                        />
                        <div className="p-6 bg-smoke h-[200px] flex flex-col justify-between">
                            <div className="header-4">Result</div>
                            <div className="paragraph-4">
                                The project successfully launched and attracted thousands of active users within months.
                            </div>
                        </div>
                    </div>
                </div>
            </XContainer>
            <div className="border-y border-gray my-12">
                <XContainer className="lg:p-0!">
                    <div className="grid grid-cols-4 h-24">
                        <div className="h-full border-r border-gray"></div>
                        <div className="h-full"></div>
                        <div className="h-full"></div>
                        <div className="h-full border-l border-gray"></div>
                    </div>
                </XContainer>
            </div>
            <XContainer>
                <div className="paragraph-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nulla explicabo repellendus ad ullam
                    doloribus ea veritatis reprehenderit sequi mollitia et animi quo enim quae dolore suscipit debitis
                    sapiente libero distinctio aut nihil id beatae ab esse. Ipsa dolor molestias in magnam repellat
                    voluptatum earum sapiente ut, hic vitae temporibus eligendi corporis recusandae unde illum a
                    inventore ipsum, nisi nemo facilis id alias. Magnam saepe harum, facere fugit ipsum culpa. Ducimus
                    debitis suscipit optio, nemo dolorem adipisci totam possimus explicabo nobis iste ipsa natus
                    incidunt sapiente facere in pariatur! Corporis, iste? Consectetur nesciunt eos sit repellat dolorem,
                    nam quas et corrupti exercitationem culpa id odio nobis, omnis nostrum voluptatem atque laboriosam
                    vel modi asperiores? Laudantium optio saepe architecto dolorem modi sunt numquam, soluta esse
                    praesentium ipsum laboriosam quos! Eos error sunt at sed quo, illum aspernatur doloremque, quis
                    facere ut fugiat eveniet. Ab omnis perferendis optio necessitatibus culpa fuga, ipsa amet aut quas
                    voluptates, quam eveniet facere temporibus porro ipsam, aliquam vel delectus! Rerum nulla
                    consequatur quia nobis qui sit obcaecati nostrum, eius esse earum asperiores. Optio ex quae
                    laboriosam odio. Non autem ipsam totam voluptas vero! Dolore nemo fuga reprehenderit atque,
                    necessitatibus, optio molestiae non quod veritatis, in earum.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nulla explicabo repellendus ad ullam
                    doloribus ea veritatis reprehenderit sequi mollitia et animi quo enim quae dolore suscipit debitis
                    sapiente libero distinctio aut nihil id beatae ab esse. Ipsa dolor molestias in magnam repellat
                    voluptatum earum sapiente ut, hic vitae temporibus eligendi corporis recusandae unde illum a
                    inventore ipsum, nisi nemo facilis id alias. Magnam saepe harum, facere fugit ipsum culpa. Ducimus
                    debitis suscipit optio, nemo dolorem adipisci totam possimus explicabo nobis iste ipsa natus
                    incidunt sapiente facere in pariatur! Corporis, iste? Consectetur nesciunt eos sit repellat dolorem,
                    nam quas et corrupti exercitationem culpa id odio nobis, omnis nostrum voluptatem atque laboriosam
                    vel modi asperiores? Laudantium optio saepe architecto dolorem modi sunt numquam, soluta esse
                    praesentium ipsum laboriosam quos! Eos error sunt at sed quo, illum aspernatur doloremque, quis
                    facere ut fugiat eveniet. Ab omnis perferendis optio necessitatibus culpa fuga, ipsa amet aut quas
                    voluptates, quam eveniet facere temporibus porro ipsam, aliquam vel delectus! Rerum nulla
                    consequatur quia nobis qui sit obcaecati nostrum, eius esse earum asperiores. Optio ex quae
                    laboriosam odio. Non autem ipsam totam voluptas vero! Dolore nemo fuga reprehenderit atque,
                    necessitatibus, optio molestiae non quod veritatis, in earum.
                </div>
            </XContainer>
            <div className="border-y border-gray my-12">
                <XContainer className="lg:p-0!">
                    <div className="grid grid-cols-4 h-24">
                        <div className="h-full border-r border-gray"></div>
                        <div className="h-full"></div>
                        <div className="h-full"></div>
                        <div className="h-full border-l border-gray"></div>
                    </div>
                </XContainer>
            </div>
            <XContainer>
                <h1 className="lg:header-3 header-4 mb-8">Gallery</h1>
                <LightGallery
                    elementClassNames="grid md:grid-cols-4 grid-cols-2 gap-4 mb-20"
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    <a href="/images/footer-bg.webp">
                        <img className="aspect-square object-cover" alt="img1" src="/images/footer-bg.webp" />
                    </a>
                    <a href="/images/about/mission.webp">
                        <img className="aspect-square object-cover" alt="img2" src="/images/about/mission.webp" />
                    </a>

                    <a href="/images/footer-bg.webp">
                        <img className="aspect-square object-cover" alt="img3" src="/images/footer-bg.webp" />
                    </a>
                    <a href="/images/about/vision.webp">
                        <img className="aspect-square object-cover" alt="img4" src="/images/about/vision.webp" />
                    </a>
                    <a href="/images/contact/contact-form.webp">
                        <img
                            className="aspect-square object-cover"
                            alt="img5"
                            src="/images/contact/contact-form.webp"
                        />
                    </a>
                    <a href="/images/footer-bg.webp">
                        <img className="aspect-square object-cover" alt="img3" src="/images/footer-bg.webp" />
                    </a>
                    <a href="/images/about/vision.webp">
                        <img className="aspect-square object-cover" alt="img4" src="/images/about/vision.webp" />
                    </a>
                    <a href="/images/contact/contact-form.webp">
                        <img
                            className="aspect-square object-cover"
                            alt="img5"
                            src="/images/contact/contact-form.webp"
                        />
                    </a>
                </LightGallery>
            </XContainer>
        </>
    );
};

export default ProjectDetail;
