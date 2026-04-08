import mainImage from "../../assets/images/dina_slika.webp"
import { useNavigate } from "react-router"
import { useLocation } from "react-router";
import fbIcon from "../../assets/icons/fb_icon.svg";
import igIcon from "../../assets/icons/ig_icon.svg";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg"

const navItems = [
    {
        label: "Moja kulinarika",
        navigateTo: "/kulinarika",
    },
    {
        label: "O meni",
        navigateTo: "/omeni",
    },
    {
        label: "Izkušnje in izobraževanja",
        navigateTo: "/izkusnje",
    },
    {
        label: "Kontakt",
        navigateTo: "/kontakt",
    }
]


export default function Navigation(){
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        setMobileNavOpen(false);
    }, [location.pathname]);

    function handleNavigate(navigateTo: string){
        navigate(navigateTo, { replace: true });
    }

    const navIsVisible = location.pathname.includes("kulinarika");


    return (
        <>
            <section className="border-r border-gray-100 shrink-0 grow-0 basis-auto sm:basis-[330px] px-3 sm:px-8 py-4 sm:flex flex-col sm:h-full">
                <div className="w-full justify-end flex sm:hidden mb-10">
                    <button
                        type="button"
                        className="flex items-center justify-center text-black"
                        onClick={() => setMobileNavOpen(true)}
                        aria-label="Open navigation menu"
                    >
                        <Menu size={30}/>
                    </button>
                </div>
                <img src={mainImage} alt="" className={`rounded-full w-full h-auto shadow-xl sm:inline ${navIsVisible ? "" : "hidden"} `} />
                <div className={`font-raleway sm:flex ${navIsVisible ? "" : "hidden"} flex-col text-2xl tracking-widest mt-5 text-center sm:text-left`}>
                    <div className="font-raleway font-medium">
                        Dina Peterca
                    </div>
                    <div className="font-extralight text-sm mt-2">
                        Kuharica, športnica & prehranska svetovalka
                    </div>
                    <ul className="font-extralight text-sm mt-10 hidden sm:flex flex-col gap-4">
                        {
                            navItems.map((i) => (
                                <li className={`cursor-pointer w-fit border-b ${location.pathname == i.navigateTo ? "border-[#E79D3F]" : "hover:border-[#E79D3F] border-white"} transition-all duration-200`}
                                    onClick={() => handleNavigate(i.navigateTo)}
                                    key={i.label}
                                    >
                                    {i.label}
                                </li>
                            ))
                        }
                    </ul>
                    <div className="sm:flex hidden flex-row mt-6 gap-3 items-start justify-start">
                        <a href="https://www.facebook.com/dina.peterca/" target="_blank">
                            <img src={fbIcon} className="w-6 cursor-pointer hover:-translate-y-0.5 transition-all duration-150 " alt="" />
                        </a>
                        <a href="https://www.instagram.com/petercadina/" target="_blank">
                            <img src={igIcon} className="w-6 cursor-pointer hover:-translate-y-0.5 transition-all duration-150" alt="" />
                        </a>

                    </div>
                </div>
            </section>

            <div
                className={`fixed inset-0 z-40 bg-black/20 transition-opacity duration-300 sm:hidden ${
                    mobileNavOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                }`}
                onClick={() => setMobileNavOpen(false)}
                aria-hidden="true"
            />

            <aside
                className={`fixed top-0 right-0 z-50 flex h-full w-[min(82vw,320px)] flex-col bg-[#fffdf8] px-6 py-6 shadow-2xl transition-transform duration-300 ease-out sm:hidden ${
                    mobileNavOpen ? "translate-x-0" : "translate-x-full"
                }`}
                aria-hidden={!mobileNavOpen}
            >
                <div className="mb-10 flex items-center justify-end">
                    <button
                        type="button"
                        className="flex items-center justify-center text-black"
                        onClick={() => setMobileNavOpen(false)}
                        aria-label="Close navigation menu"
                    >
                        <X size={28} />
                    </button>
                </div>

                <ul className="font-roboto flex flex-col gap-5 text-lg tracking-wide">
                    {navItems.map((item) => (
                        <li
                            className={`cursor-pointer border-b pb-2 ${
                                location.pathname == item.navigateTo ? "border-[#E79D3F]" : "border-transparent"
                            }`}
                            onClick={() => handleNavigate(item.navigateTo)}
                            key={item.label}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto flex flex-row gap-4 pt-10">
                    <a
                        href="https://www.facebook.com/dina.peterca/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook profile"
                    >
                        <img src={fbIcon} className="w-6 cursor-pointer" alt="" />
                    </a>
                    <a
                        href="https://www.instagram.com/petercadina/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram profile"
                    >
                        <img src={igIcon} className="w-6 cursor-pointer" alt="" />
                    </a>
                </div>
            </aside>
        </>
    )
}
