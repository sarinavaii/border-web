"use client";

import XContainer from "@atoms/XContainer";
import { FullscreenControl, Map as LibreMap, Marker, NavigationControl } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
const Map = () => {
    return (
        <div className="bg-dark">
            <XContainer className="lg:py-24 py-16 text-light">
                <h3 className="lg:header-3 header-4 lg:mb-8 mb-4">
                    Caption: Visit our headquarters — we’d love to meet you in person.
                </h3>
            </XContainer>
            <LibreMap
                initialViewState={{
                    latitude: 35.744156,
                    longitude: 51.449181,
                    zoom: 4,
                }}
                RTLTextPlugin={
                    "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"
                }
                style={{ height: 750 }}
                mapStyle="/style.json"
            >
                <FullscreenControl position="top-right" />
                <NavigationControl position="top-right" />
                <Marker
                    longitude={51.449181}
                    latitude={35.744156}
                    anchor="bottom"
                    style={{
                        cursor: "pointer",
                    }}
                    onClick={() =>
                        window.open(
                            "http://google.com/maps/place/Tehran+Province,+Tehran,+Hafez+Alley,+Iran/@35.7443603,51.4419823,17z/data=!3m1!4b1!4m10!1m2!2m1!1sHafez+Alley+Tehran+Province+Tehran!3m6!1s0x3f8e03f41ce4059d:0xdc8aa62cdf408cde!8m2!3d35.744356!4d51.4468532!15sCiJIYWZleiBBbGxleSBUZWhyYW4gUHJvdmluY2UgVGVocmFukgEFcm91dGXgAQA!16s%2Fg%2F11bc8ys12l?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
                            "_blank",
                            "noopener,noreferrer",
                        )
                    }
                >
                    <svg
                        id="svg2816"
                        version="1.1"
                        height="36"
                        viewBox="0 0 94 128"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: "block" }}
                    >
                        <path
                            style={{ fill: "#c64242", fillOpacity: 0.98823529 }}
                            d="M 46.977003,126.64334 C 46.693972,125.95584 40.813862,120.20567 36.603071,114.98067 11.655836,81.858372 -16.158365,51.082905 16.319943,13.682837 30.700637,-0.21083367 48.43303,-1.0034227 66.662563,5.4726973 117.9922,35.174601 80.828906,83.627914 56.427079,115.48067 l -9.450076,11.16267 z M 62.417383,75.872046 C 96.654166,51.387445 70.185413,4.2391813 32.569429,19.913013 21.585178,25.769872 16.134954,35.960547 15.944071,47.980664 c -0.524495,11.693153 5.685418,21.471037 15.526227,27.460808 7.055481,3.840074 10.157178,4.533661 18.145697,4.057654 5.177622,-0.308516 8.161127,-1.153847 12.801388,-3.62708 z"
                            id="path4127"
                        />
                        <path
                            style={{
                                fill: "#c64242",
                                fillOpacity: 0.98823529,
                                fillRule: "nonzero",
                                stroke: "none",
                            }}
                            d="m 41.682107,89.891342 a 51.222816,41.754009 0 1 1 1.276617,0.208091"
                            id="path4129"
                            transform="matrix(0.87829487,0,0,1.0519028,0.55474126,-6.9952658)"
                        />
                        <path
                            style={{
                                opacity: 0.34016395,
                                fill: "#000000",
                                fillOpacity: 0,
                                fillRule: "nonzero",
                                stroke: "none",
                            }}
                            d="m 43.631232,69.128546 a 26.010695,20.991087 0 1 1 0.64826,0.104614"
                            id="path4131"
                            transform="translate(0.64534523,0)"
                        />
                        <path
                            style={{
                                fill: "#000080",
                                fillOpacity: 0,
                                fillRule: "nonzero",
                                stroke: "none",
                            }}
                            d="m 31.892136,114.28 a 16.655972,11.750445 0 1 1 0.415114,0.0586"
                            id="path4135"
                            transform="translate(0.64534523,0)"
                        />
                        <path
                            style={{
                                fill: "#b72c2c",
                                fillOpacity: 1,
                                fillRule: "nonzero",
                                stroke: "none",
                            }}
                            d="m 45.521425,84.824145 a 34.452763,33.540108 0 1 1 0.85866,0.167155"
                            id="path4149"
                            transform="matrix(0.97020484,0,0,1.0272058,-4.0587829,-5.7503824)"
                        />
                        <path
                            style={{
                                fill: "#000",
                                fillOpacity: 1,
                                fillRule: "nonzero",
                                stroke: "none",
                            }}
                            d="m 57.079416,104.60778 a 34.203297,36.623341 0 1 1 0.852443,0.18252"
                            id="path4184"
                            transform="matrix(0.64629924,0,0,0.61681122,5.1261236,4.9013803)"
                        />
                    </svg>
                </Marker>
            </LibreMap>
        </div>
    );
};

export default Map;
