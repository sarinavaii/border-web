import XContainer from "@atoms/XContainer";
import Image from "next/image";

const Header = () => {
    return (
        <div className="fixed top-0 h-20 backdrop-blur-md z-100 left-0 right-0 bg-black/50 text-light">
            <XContainer className="h-full lg:px-0!">
                <div className="grid lg:grid-cols-4 grid-cols-1 h-full">
                    <div className="h-full lg:border-r border-gray/50">
                        <div className="flex items-center h-full gap-2">
                            <Image src="/images/logo.jpg" width={28} height={28} alt="BordarPlus" />
                            <h2 className="paragraph-2">Bordar Plus.</h2>
                        </div>
                    </div>
                    <div className="h-full max-lg:hidden"></div>
                    <div className="h-full max-lg:hidden"></div>
                    <div className="h-full max-lg:hidden border-l border-gray/50"></div>
                </div>
            </XContainer>
        </div>
    );
};

export default Header;
