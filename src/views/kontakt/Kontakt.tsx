export default function Kontakt(){
    return (
        <section className="w-full shrink grow basis-auto px-4 py-6 sm:h-full sm:overflow-y-auto sm:px-6 md:px-8">
            <div className="w-full sm:hidden font-extralight tracking-widest font-raleway text-3xl mb-4 sm:mt-10 flex justify-center items-center">
                Kontakt
            </div>
            <div className="font-raleway hidden sm:block text-[3rem] leading-none text-[#525252] tracking-[0.18em] sm:text-[3em] md:text-[3rem] sm:mt-10 mt-10 text-center sm:text-left">
                KONTAKT
            </div>
            <div className="mt-8 max-w-[760px] rounded-[28px] sm:mt-10">
                <div className="font-roboto text-center sm:text-left">
                    <p className="mt-3 max-w-[560px] text-[0.98rem] font-extralight leading-7 text-[#525252] sm:text-base sm:leading-8">
                        Za sodelovanja, vprašanja ali povpraševanja mi lahko pošljete sporočilo preko spodnjega obrazca.
                    </p>
                </div>

                <form className="mt-8 font-roboto font-extralight">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm tracking-wide text-[#525252]">
                                Ime
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                placeholder="Vaše ime"
                                className="rounded-xl border border-[#d8d0c4] bg-white px-4 py-3 text-[#2f2f2f] outline-none transition-colors duration-200 placeholder:text-[#b2aa9f] focus:border-[#c89a55]"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm tracking-wide text-[#525252]">
                                E-mail
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="ime@email.com"
                                className="rounded-xl border border-[#d8d0c4] bg-white px-4 py-3 text-[#2f2f2f] outline-none transition-colors duration-200 placeholder:text-[#b2aa9f] focus:border-[#c89a55]"
                            />
                        </div>

                        <div className="flex flex-col gap-2 sm:col-span-2">
                            <label htmlFor="subject" className="text-sm tracking-wide text-[#525252]">
                                Zadeva
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="Namen sporočila"
                                className="rounded-xl border border-[#d8d0c4] bg-white px-4 py-3 text-[#2f2f2f] outline-none transition-colors duration-200 placeholder:text-[#b2aa9f] focus:border-[#c89a55]"
                            />
                        </div>

                        <div className="flex flex-col gap-2 sm:col-span-2">
                            <label htmlFor="message" className="text-sm tracking-wide text-[#525252]">
                                Vaše sporočilo
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={7}
                                placeholder="Vaše sporočilo..."
                                className="min-h-[200px] rounded-xl border border-[#d8d0c4] bg-white px-4 py-3 text-[#2f2f2f] outline-none transition-colors duration-200 placeholder:text-[#b2aa9f] focus:border-[#c89a55] resize-y"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-end">
                        <button
                            type="submit"
                            className="rounded-full cursor-pointer border border-[#c89a55] bg-[#c89a55] px-6 py-3 text-sm font-normal tracking-[0.18em] text-white uppercase transition-colors duration-200 hover:bg-[#b98943]"
                        >
                            Pošlji
                        </button>
                    </div>
                </form>
            </div>

        </section>
    )
}
