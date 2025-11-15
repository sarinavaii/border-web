"use client";

import XContainer from "@atoms/XContainer";
import { useEffect, useRef } from "react";

const Portfolio = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const mousePos = useRef({ x: 0.5, y: 0.5 });
    const currentOffset = useRef({ x: 0, y: 0 });
    const targetOffset = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = {
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight,
            };

            targetOffset.current = {
                x: (mousePos.current.x - 0.5) * 100,
                y: (mousePos.current.y - 0.5) * 100,
            };
        };

        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            // Smooth interpolation
            currentOffset.current.x += (targetOffset.current.x - currentOffset.current.x) * 0.1;
            currentOffset.current.y += (targetOffset.current.y - currentOffset.current.y) * 0.1;

            if (svgRef.current) {
                const g = svgRef.current.querySelector("g");
                if (g) {
                    g.style.transform = `translate(${currentOffset.current.x}px, ${currentOffset.current.y}px)`;
                }
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="relative w-full bg-dark py-24">
            <svg
                className="absolute inset-0 z-0"
                ref={svgRef}
                width="100%"
                height="100%"
                viewBox="0 0 1440 600"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g opacity="0.32" style={{ transition: "transform 0.1s ease-out" }}>
                    <path d="M1440 -162.004H0V637.996H1440V-162.004Z" stroke="#CECECE" />
                    <path d="M1374.47 -125.599H65.5288V601.59H1374.47V-125.599Z" stroke="#CECECE" />
                    <path d="M1312.48 -91.1611H127.517V567.152H1312.48V-91.1611Z" stroke="#CECECE" />
                    <path d="M1254.04 -58.6912H185.962V534.683H1254.04V-58.6912Z" stroke="#CECECE" />
                    <path d="M1199.13 -28.1895H240.866V504.18H1199.13V-28.1895Z" stroke="#CECECE" />
                    <path d="M1147.77 0.344727H292.227V475.647H1147.77V0.344727Z" stroke="#CECECE" />
                    <path d="M1099.95 26.9109H340.047V449.08H1099.95V26.9109Z" stroke="#CECECE" />
                    <path d="M1055.67 51.5088H384.324V424.481H1055.67V51.5088Z" stroke="#CECECE" />
                    <path d="M1014.94 74.1396H425.059V401.851H1014.94V74.1396Z" stroke="#CECECE" />
                    <path d="M977.748 94.8022H462.252V381.189H977.748V94.8022Z" stroke="#CECECE" />
                    <path d="M944.097 113.497H495.902V362.494H944.097V113.497Z" stroke="#CECECE" />
                    <path d="M913.988 130.224H526.01V345.768H913.988V130.224Z" stroke="#CECECE" />
                    <path d="M887.422 144.983H552.576V331.009H887.422V144.983Z" stroke="#CECECE" />
                    <path d="M864.397 157.774H575.6V318.217H864.397V157.774Z" stroke="#CECECE" />
                    <path d="M844.916 168.598H595.082V307.394H844.916V168.598Z" stroke="#CECECE" />
                    <path d="M828.976 177.453H611.022V298.539H828.976V177.453Z" stroke="#CECECE" />
                    <path d="M816.579 184.341H623.42V291.652H816.579V184.341Z" stroke="#CECECE" />
                    <path d="M807.723 189.26H632.274V286.731H807.723V189.26Z" stroke="#CECECE" />
                    <path d="M802.41 192.212H637.587V283.78H802.41V192.212Z" stroke="#CECECE" />
                    <path d="M800.64 193.196H639.36V282.796H800.64V193.196Z" stroke="#CECECE" />

                    <path d="M639.36 282.796L3.49355e-05 637.996" stroke="#CECECE" />
                    <path d="M647.849 282.796L106.339 637.996" stroke="#CECECE" />
                    <path d="M656.336 282.796L199.842 637.996" stroke="#CECECE" />
                    <path d="M664.825 282.796L283.849 637.996" stroke="#CECECE" />
                    <path d="M673.313 282.796L360.75 637.996" stroke="#CECECE" />
                    <path d="M681.801 282.796L432.322 637.996" stroke="#CECECE" />
                    <path d="M690.29 282.796L499.944 637.996" stroke="#CECECE" />
                    <path d="M698.779 282.796L564.719 637.996" stroke="#CECECE" />
                    <path d="M707.268 282.796L627.571 637.996" stroke="#CECECE" />
                    <path d="M715.755 282.796L689.311 637.996" stroke="#CECECE" />
                    <path d="M724.244 282.796L750.688 637.996" stroke="#CECECE" />
                    <path d="M732.732 282.796L812.429 637.996" stroke="#CECECE" />
                    <path d="M741.22 282.796L875.28 637.996" stroke="#CECECE" />
                    <path d="M749.709 282.796L940.055 637.996" stroke="#CECECE" />
                    <path d="M758.198 282.796L1007.68 637.996" stroke="#CECECE" />
                    <path d="M766.685 282.796L1079.25 637.996" stroke="#CECECE" />
                    <path d="M775.174 282.796L1156.15 637.996" stroke="#CECECE" />
                    <path d="M783.663 282.796L1240.16 637.996" stroke="#CECECE" />
                    <path d="M792.151 282.796L1333.66 637.996" stroke="#CECECE" />
                    <path d="M800.639 282.796L1440 637.996" stroke="#CECECE" />

                    <path d="M639.36 193.196L3.49355e-05 -162.004" stroke="#CECECE" />
                    <path d="M639.36 197.912L0.00022103 -102.927" stroke="#CECECE" />
                    <path d="M639.36 202.627L0.000202316 -50.9809" stroke="#CECECE" />
                    <path d="M639.36 207.343L8.85758e-05 -4.30993" stroke="#CECECE" />
                    <path d="M639.36 212.059L0.000153083 38.412" stroke="#CECECE" />
                    <path d="M639.36 216.775L0.000140047 78.1755" stroke="#CECECE" />
                    <path d="M639.36 221.491L0.000106675 115.743" stroke="#CECECE" />
                    <path d="M639.36 226.207L1.8785e-05 151.729" stroke="#CECECE" />
                    <path d="M639.36 230.922L7.87582e-05 186.646" stroke="#CECECE" />
                    <path d="M639.36 235.638L-7.04782e-06 220.947" stroke="#CECECE" />
                    <path d="M639.36 240.354L-7.04782e-06 255.045" stroke="#CECECE" />
                    <path d="M639.36 245.069L7.87582e-05 289.345" stroke="#CECECE" />
                    <path d="M639.36 249.786L1.8785e-05 324.263" stroke="#CECECE" />
                    <path d="M639.36 254.501L0.000106675 360.249" stroke="#CECECE" />
                    <path d="M639.36 259.217L0.000140047 397.816" stroke="#CECECE" />
                    <path d="M639.36 263.933L0.000153083 437.579" stroke="#CECECE" />
                    <path d="M639.36 268.648L8.85758e-05 480.302" stroke="#CECECE" />
                    <path d="M639.36 273.364L0.000202316 526.972" stroke="#CECECE" />
                    <path d="M639.36 278.08L0.00022103 578.919" stroke="#CECECE" />
                    <path d="M639.36 282.796L3.49355e-05 637.996" stroke="#CECECE" />

                    <path d="M800.64 193.196L1440 -162.004" stroke="#CECECE" />
                    <path d="M792.15 193.196L1333.66 -162.004" stroke="#CECECE" />
                    <path d="M783.663 193.196L1240.16 -162.004" stroke="#CECECE" />
                    <path d="M775.175 193.196L1156.15 -162.004" stroke="#CECECE" />
                    <path d="M766.685 193.196L1079.25 -162.004" stroke="#CECECE" />
                    <path d="M758.198 193.196L1007.68 -162.004" stroke="#CECECE" />
                    <path d="M749.709 193.196L940.055 -162.004" stroke="#CECECE" />
                    <path d="M741.22 193.196L875.28 -162.004" stroke="#CECECE" />
                    <path d="M732.731 193.196L812.428 -162.004" stroke="#CECECE" />
                    <path d="M724.244 193.196L750.688 -162.004" stroke="#CECECE" />
                    <path d="M715.755 193.196L689.311 -162.004" stroke="#CECECE" />
                    <path d="M707.266 193.196L627.57 -162.004" stroke="#CECECE" />
                    <path d="M698.779 193.196L564.719 -162.004" stroke="#CECECE" />
                    <path d="M690.29 193.196L499.944 -162.004" stroke="#CECECE" />
                    <path d="M681.801 193.196L432.322 -162.004" stroke="#CECECE" />
                    <path d="M673.313 193.196L360.75 -162.004" stroke="#CECECE" />
                    <path d="M664.825 193.196L283.849 -162.004" stroke="#CECECE" />
                    <path d="M656.336 193.196L199.842 -162.004" stroke="#CECECE" />
                    <path d="M647.848 193.196L106.338 -162.004" stroke="#CECECE" />
                    <path d="M639.36 193.196L3.49355e-05 -162.004" stroke="#CECECE" />

                    <path d="M800.639 282.804L1440 638.004" stroke="#CECECE" />
                    <path d="M800.639 278.088L1440 578.927" stroke="#CECECE" />
                    <path d="M800.639 273.372L1440 526.98" stroke="#CECECE" />
                    <path d="M800.639 268.657L1440 480.31" stroke="#CECECE" />
                    <path d="M800.639 263.94L1440 437.587" stroke="#CECECE" />
                    <path d="M800.639 259.225L1440 397.824" stroke="#CECECE" />
                    <path d="M800.639 254.509L1440 360.257" stroke="#CECECE" />
                    <path d="M800.639 249.793L1440 324.271" stroke="#CECECE" />
                    <path d="M800.639 245.078L1440 289.353" stroke="#CECECE" />
                    <path d="M800.639 240.362L1440 255.053" stroke="#CECECE" />
                    <path d="M800.639 235.646L1440 220.955" stroke="#CECECE" />
                    <path d="M800.639 230.93L1440 186.654" stroke="#CECECE" />
                    <path d="M800.639 226.215L1440 151.737" stroke="#CECECE" />
                    <path d="M800.639 221.499L1440 115.751" stroke="#CECECE" />
                    <path d="M800.639 216.783L1440 78.1833" stroke="#CECECE" />
                    <path d="M800.639 212.067L1440 38.4208" stroke="#CECECE" />
                    <path d="M800.639 207.351L1440 -4.30212" stroke="#CECECE" />
                    <path d="M800.639 202.635L1440 -50.9726" stroke="#CECECE" />
                    <path d="M800.639 197.92L1440 -102.919" stroke="#CECECE" />
                    <path d="M800.639 193.204L1440 -161.996" stroke="#CECECE" />
                </g>
            </svg>

            <XContainer>
                <div className="relative z-1 text-light text-center lg:px-12 lg:header-2 paragraph-2 lg:font-encode-sans-expanded">
                    <h2 className="lg:header-3 header-4 mb-8">Where Engineering Meets Innovation</h2>
                    <div className="lg:paragraph-2 paragraph-4 mb-20">
                        We are not only builders — we are innovators. To deliver projects with precision, transparency,
                        and efficiency, we have developed proprietary software solutions tailored to the unique
                        challenges of the construction industry. These tools empower our teams and clients with
                        real-time insights, smarter decision-making, and seamless collaboration.
                    </div>
                    <div className="grid xl:grid-cols-4 grid-cols-1 xl:divide-x divide-y divide-gray">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="flex flex-col justify-between items-center text-center bg-light text-dark px-8 py-12 xl:gap-20 gap-4"
                            >
                                <h4 className="header-4">ProjectX</h4>
                                <svg
                                    className="xl:size-24 size-16"
                                    width="96"
                                    height="96"
                                    viewBox="0 0 96 96"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M25.776 18V78H12V18H25.776ZM60.156 18C60.156 30.582 55.407 42.315 46.911 51.204L46.077 52.053L65.106 78H48.102L27.423 49.8L32.76 45.804C41.334 39.384 46.365 29.67 46.671 19.032L46.686 18H60.156ZM76.5 63C78.4891 63 80.3968 63.7902 81.8033 65.1967C83.2098 66.6032 84 68.5109 84 70.5C84 72.4891 83.2098 74.3968 81.8033 75.8033C80.3968 77.2098 78.4891 78 76.5 78C74.5109 78 72.6032 77.2098 71.1967 75.8033C69.7902 74.3968 69 72.4891 69 70.5C69 68.5109 69.7902 66.6032 71.1967 65.1967C72.6032 63.7902 74.5109 63 76.5 63Z"
                                        fill="black"
                                    />
                                </svg>

                                <div className="paragraph-4">
                                    A real-time project management dashboard designed to streamline complex construction
                                    workflows.
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </XContainer>
        </div>
    );
};

export default Portfolio;
