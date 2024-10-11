import { PropsWithChildren } from "react"

export type BannerProps = PropsWithChildren & {
    imageFile: string;
    fixed?: boolean;
}

export default function Banner({imageFile, children} : BannerProps) {
    return (
        <>
            <div className={`relative -z-20 w-full h-screen bg-cover bg-center`} style={{backgroundImage: `url(${imageFile})`}}>
                {children}
            </div>
        </>
    )
}
