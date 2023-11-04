import Button from "./ui/Button";

const Header = () => {
    return (
        <div className="flex flex-row py-[17px] px-[40px] border-b-gray2 border-[1px]">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex flex-row gap-[20px]">
                    <img src="/logo.svg" alt="logo" />
                    <Button variant="default" size="sm" className="gap-[8px]">
                        <img src="/burger.svg" alt="" /> <span>Каталог</span>
                    </Button>
                </div>

                <div className="flex flex-row justify-between text-h4 font-[500] lg:gap-[145px]">
                    <div className="hidden xl:flex flex-row gap-[35px]">
                        <span className="flex">Москва, Волгоградский пр-кт, 43, стр 1</span>
                        <span className="flex">+7 800 555 35 35</span>
                    </div>
                    <div className="flex gap-[12px] cursor-pointer">
                        <img className="w-[27px] h-[24px]" src="/hover-heart.svg" alt="hover-heart" />
                        Избранное
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
