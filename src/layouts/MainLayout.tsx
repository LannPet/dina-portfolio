import type { ReactNode } from "react";

export default function MainLayout({children} : {children : ReactNode}){


    return (
        <div className="w-full min-h-full flex flex-col items-center sm:h-full">
            <div className="max-w-[1900px] flex sm:flex-row flex-col w-full min-h-full sm:h-full">
                {children}
            </div>
        </div>
    )

}
