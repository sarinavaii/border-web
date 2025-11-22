import XButton from "@atoms/XButton";
import XContainer from "@atoms/XContainer";
import { Select, TextInput } from "@mantine/core";

const Filters = () => {
    return (
        <div className="bg-smoke py-9">
            <XContainer>
                <div className="flex">
                    <TextInput
                        size="lg"
                        classNames={{
                            root: "grow",
                            input: "placeholder:paragraph-3! paragraph-3! placeholder:text-[#666]!",
                        }}
                        className=""
                        placeholder="Search For A Project"
                    />
                    <XButton
                        mode="book"
                        classNames={{
                            root: "border border-l-0 border-gray shrink-0",
                            inner: "border-none!",
                        }}
                    >
                        Find Project
                    </XButton>
                </div>
                <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-3">
                    <Select
                        checkIconPosition="right"
                        placeholder="Location"
                        rightSection={
                            <svg
                                width={18}
                                height={9}
                                viewBox="0 0 18 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.59 0.75L10.07 7.27C9.3 8.04 8.04 8.04 7.27 7.27L0.75 0.75"
                                    stroke="#292D32"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                        leftSection={
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                />
                                <path
                                    d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                />
                            </svg>
                        }
                        size="lg"
                        data={["New York", "London", "Berlin", "Tokyo", "Sydney", "Paris"]}
                        classNames={{
                            option: "paragraph-3! hover:bg-smoke!",
                            input: "placeholder:paragraph-3! paragraph-3! placeholder:text-[#666]!",
                        }}
                    />
                    <Select
                        checkIconPosition="right"
                        placeholder="Project Type"
                        rightSection={
                            <svg
                                width={18}
                                height={9}
                                viewBox="0 0 18 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.59 0.75L10.07 7.27C9.3 8.04 8.04 8.04 7.27 7.27L0.75 0.75"
                                    stroke="#292D32"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                        leftSection={
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13 22H5C3 22 2 21 2 19V11C2 9 3 8 5 8H10V19C10 21 11 22 13 22Z"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14 8V13"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18 8V13"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6 13V17"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                        size="lg"
                        data={[
                            "Commercial",
                            "Educational",
                            "Healthcare",
                            "Hospitality",
                            "Industrial",
                            "Cultural",
                            "Recreational",
                            "Mixed-use",
                        ]}
                        classNames={{
                            option: "paragraph-3! hover:bg-smoke!",
                            input: "placeholder:paragraph-3! paragraph-3! placeholder:text-[#666]!",
                        }}
                    />
                    <Select
                        checkIconPosition="right"
                        placeholder="Service Type"
                        rightSection={
                            <svg
                                width={18}
                                height={9}
                                viewBox="0 0 18 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.59 0.75L10.07 7.27C9.3 8.04 8.04 8.04 7.27 7.27L0.75 0.75"
                                    stroke="#292D32"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                        leftSection={
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                />
                                <path
                                    d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                />
                            </svg>
                        }
                        size="lg"
                        data={[
                            "Architectural Design",
                            "Interior Design",
                            "Landscape Design",
                            "Urban Planning",
                            "Renovation",
                            "Consulting",
                        ]}
                        classNames={{
                            option: "paragraph-3! hover:bg-smoke!",
                            input: "placeholder:paragraph-3! paragraph-3! placeholder:text-[#666]!",
                        }}
                    />
                    <Select
                        checkIconPosition="right"
                        placeholder="Scale Project"
                        rightSection={
                            <svg
                                width={18}
                                height={9}
                                viewBox="0 0 18 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.59 0.75L10.07 7.27C9.3 8.04 8.04 8.04 7.27 7.27L0.75 0.75"
                                    stroke="#292D32"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                        leftSection={
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.9999 21.4098H5.93993C2.46993 21.4098 1.01993 18.9298 2.69993 15.8998L5.81993 10.2798L8.75993 4.99979C10.5399 1.78979 13.4599 1.78979 15.2399 4.99979L18.1799 10.2898L21.2999 15.9098C22.9799 18.9398 21.5199 21.4198 18.0599 21.4198H11.9999V21.4098Z"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M21.4401 20.0001L12.0001 13.3901L2.56006 20.0001"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 3V13.39"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                        size="lg"
                        data={["Small Scale", "Medium Scale", "Large Scale", "Extra Large Scale"]}
                        classNames={{
                            option: "paragraph-3! hover:bg-smoke!",
                            input: "placeholder:paragraph-3! paragraph-3! placeholder:text-[#666]!",
                        }}
                    />
                    <Select
                        checkIconPosition="right"
                        placeholder="Completion year"
                        rightSection={
                            <svg
                                width={18}
                                height={9}
                                viewBox="0 0 18 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.59 0.75L10.07 7.27C9.3 8.04 8.04 8.04 7.27 7.27L0.75 0.75"
                                    stroke="#292D32"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                        leftSection={
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                />
                                <path
                                    d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                />
                            </svg>
                        }
                        size="lg"
                        data={[
                            "2025",
                            "2024",
                            "2023",
                            "2022",
                            "2021",
                            "2020",
                            "2019",
                            "2018",
                            "2017",
                            "2016",
                            "2015",
                            "2010-2014",
                            "2000-2009",
                            "Before 2000",
                        ]}
                        classNames={{
                            option: "paragraph-3! hover:bg-smoke!",
                            input: "placeholder:paragraph-3! paragraph-3! placeholder:text-[#666]!",
                        }}
                    />
                </div>
            </XContainer>
        </div>
    );
};

export default Filters;
