"use client";

import XButton from "@atoms/XButton";
import XContainer from "@atoms/XContainer";
import { Checkbox, NumberInput, TextInput, Textarea } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import Image from "next/image";

const Form = () => {
    const form = useForm({
        mode: "uncontrolled",
        validateInputOnBlur: true,
        validate: {
            first_name: isNotEmpty("First name is required"),
            last_name: isNotEmpty("Last name is required"),
            phone: isNotEmpty("Phone number is required"),
            message: isNotEmpty("Message is required"),
            terms: isNotEmpty("You must agree to our friendly privacy policy"),
            email: (value: string) => {
                if (!value || value.trim() === "") {
                    return "Email is required";
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return "Please enter a valid email address";
                }
                return null;
            },
        },
    });

    return (
        <div className="lg:border-b border-gray relative">
            <XContainer className="flex max-lg:flex-col px-0!">
                <div className="lg:w-1/2 lg:p-12 lg:py-24 p-6 py-12">
                    <h2 className="lg:header-3 header-4 mb-4">Get in touch</h2>
                    <div className="lg:paragraph-2 paragraph-4 lg:mb-20 mb-10">
                        Our friendly team would love to hear from you.
                    </div>
                    <form
                        onSubmit={form.onSubmit((values) => console.log(values))}
                        className="grid grid-cols-2 gap-x-8 gap-y-6"
                    >
                        <TextInput
                            size="lg"
                            classNames={{
                                input: "placeholder:paragraph-4! paragraph-4! placeholder:text-[#717680]!",
                                label: "paragraph-5! mb-1.5! text-[#414651]",
                            }}
                            className=""
                            label="First name"
                            placeholder="First name"
                            key={form.key("first_name")}
                            {...form.getInputProps("first_name")}
                        />
                        <TextInput
                            size="lg"
                            classNames={{
                                input: "placeholder:paragraph-4! paragraph-4! placeholder:text-[#717680]!",
                                label: "paragraph-5! mb-1.5! text-[#414651]",
                            }}
                            className=""
                            label="Last name"
                            placeholder="Last name"
                            key={form.key("last_name")}
                            {...form.getInputProps("last_name")}
                        />
                        <TextInput
                            size="lg"
                            classNames={{
                                root: "col-span-full",
                                input: "placeholder:paragraph-4! paragraph-4! placeholder:text-[#717680]!",
                                label: "paragraph-5! mb-1.5! text-[#414651]",
                            }}
                            className=""
                            label="Email"
                            placeholder="you@company.com"
                            key={form.key("email")}
                            {...form.getInputProps("email")}
                        />
                        <NumberInput
                            size="lg"
                            classNames={{
                                root: "col-span-full",
                                input: "placeholder:paragraph-4! paragraph-4! placeholder:text-[#717680]!",
                                label: "paragraph-5! mb-1.5! text-[#414651]",
                            }}
                            className=""
                            label="Phone number"
                            placeholder="+1 (555) 000-0000"
                            hideControls
                            key={form.key("phone")}
                            {...form.getInputProps("phone")}
                        />
                        <Textarea
                            size="lg"
                            classNames={{
                                root: "col-span-full",
                                input: "placeholder:paragraph-4! paragraph-4! placeholder:text-[#717680]!",
                                label: "paragraph-5! mb-1.5! text-[#414651]",
                            }}
                            label="Message"
                            rows={8}
                            key={form.key("message")}
                            {...form.getInputProps("message")}
                        />
                        <Checkbox
                            size="lg"
                            classNames={{
                                body: "items-center",
                                root: "col-span-full",
                                input: "placeholder:paragraph-4! paragraph-4! placeholder:text-[#717680]!",
                                label: "paragraph-4! text-[#414651]",
                            }}
                            label="You agree to our friendly privacy policy."
                            key={form.key("terms")}
                            {...form.getInputProps("terms", { type: "checkbox" })}
                        />
                        <XButton
                            type="submit"
                            classNames={{
                                root: "flex",
                            }}
                            mode="dark"
                        >
                            Send message
                        </XButton>
                    </form>
                </div>
                <div className="lg:w-1/2 w-full h-auto">
                    <Image
                        src="/images/contact/contact-form.webp"
                        width={1775}
                        height={2445}
                        alt="contact"
                        className="h-full object-cover lg:absolute lg:right-0 lg:left-1/2 lg:w-1/2 w-full"
                    />
                </div>
            </XContainer>
        </div>
    );
};

export default Form;
