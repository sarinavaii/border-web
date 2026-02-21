import XButton from "@atoms/XButton";
import XContainer from "@atoms/XContainer";
import { Routes } from "@core/routes/routes";
import { TextInput } from "@mantine/core";

type FiltersProps = {
    searchParams?: { q_name?: string; q_location?: string; q_year?: string };
};

const Filters = ({ searchParams }: FiltersProps) => {
    return (
        <div className="bg-smoke py-9">
            <XContainer>
                <form method="get" action={Routes.PROJECTS} className="contents">
                    <div className="grid mb-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-3">
                        <TextInput
                            key="q_name"
                            placeholder="Name"
                            name="q_name"
                            defaultValue={searchParams?.q_name}
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
                        classNames={{
                            input: "placeholder:paragraph-3! paragraph-3! placeholder:text-[#666]!",
                        }}
                    />

                        <TextInput
                            placeholder="Location"
                            name="q_location"
                            defaultValue={searchParams?.q_location}
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
                        classNames={{
                            input: "placeholder:paragraph-3! paragraph-3! placeholder:text-[#666]!",
                        }}
                    />

                        <TextInput
                            placeholder="Year"
                            name="q_year"
                            defaultValue={searchParams?.q_year}
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
                        classNames={{
                            input: "placeholder:paragraph-3! paragraph-3! placeholder:text-[#666]!",
                        }}
                    />
                </div>
                    <div className="flex justify-end">
                        <XButton
                            type="submit"
                            mode="book"
                            size="xl"
                            classNames={{
                                root: "border cursor-pointer border-l-0 border-gray shrink-0",
                                inner: "block text-center",
                            }}
                        >
                            Find Project
                        </XButton>
                    </div>
                </form>
            </XContainer>
        </div>
    );
};

export default Filters;
