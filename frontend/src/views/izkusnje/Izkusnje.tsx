import sputnikLogo from "../../assets/images/experience/sputnik.png"
import barbarellaLogo from "../../assets/images/experience/barbarella.png"
import gurmamaLogo from "../../assets/images/experience/gurmama.png"
import tiglioLogo from "../../assets/images/experience/tiglio.png"
import laganocheLogo from "../../assets/images/experience/laganoche.png"
import bekarajLogo from "../../assets/images/experience/bekaraj.png"

const logoRows = [
    [
        { src: sputnikLogo, alt: "Sputnik logo" },
        { src: barbarellaLogo, alt: "Barbarella logo" },
        { src: gurmamaLogo, alt: "Gurmama logo" },
    ],
    [
        { src: tiglioLogo, alt: "Tiglio logo" },
        { src: laganocheLogo, alt: "La Ganache logo" },
    ],
    [
        { src: bekarajLogo, alt: "Bekeraj logo" },
    ],
]

export default function Izkusnje(){


    return (
        <section className="w-full shrink grow basis-auto px-4 sm:h-full sm:overflow-y-auto sm:px-6 md:px-8 sm:py-6">
            <div className="w-full sm:hidden font-extralight tracking-widest font-raleway text-3xl mb-4 sm:mt-10 flex justify-center items-center">
                Moje izkušnje
            </div>
            <div className="font-raleway hidden sm:block text-[3rem] leading-none text-[#525252] tracking-[0.18em] sm:text-[3em] md:text-[3rem] sm:mt-10 mt-10 text-center sm:text-left">
                Izkušnje
            </div>
            <div className="text-center sm:text-left font-roboto font-extralight max-w-[900px] pt-5 text-[0.98rem] leading-7 sm:pt-6 sm:text-base sm:leading-8 space-y-5">
                <p>
                    Skozi leta sem se veliko učila – tako v praksi kot na različnih kulinaričnih delavnicah in tečajih z odličnimi mentorji, kot so Barbarella, Gurmama, Al Tiglio (Italija), Naser Gashi – La Ganache ter Pola Bekeraj (Droživetje). Še vedno rada raziskujem, preizkušam nove ideje in se razvijam. Sem oseba, ki verjame v delo, natančnost in iskren pristop. Rada ustvarjam, imam občutek za estetiko in detajle, hkrati pa mi veliko pomeni tudi stik z ljudmi in dobra energija.
                </p>
            </div>

            <div className="mt-10 flex flex-col items-center gap-6 sm:mt-12  max-w-[900px]">
                {logoRows.map((row, rowIndex) => (
                    <div
                        className="flex w-full flex-wrap items-center justify-center gap-4 sm:gap-6"
                        key={`logo-row-${rowIndex}`}
                    >
                        {row.map((logo) => (
                            <div
                                className="flex h-[92px] w-[160px] items-center justify-center px-5 py-4 sm:h-auto sm:w-[280px]"
                                key={logo.alt}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-h-full w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </section>
    )
}
