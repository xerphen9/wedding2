import { PropsWithChildren } from "react"

export type BannerProps = PropsWithChildren & {
    imageFile: string;
    fixed?: boolean;
}

export default function Banner({imageFile, fixed = false, children} : BannerProps) {
    return (
        <>
            <div className={`relative flex w-full ${fixed ? 'bg-fixed h-screen' : 'w-full h-[30rem]'} bg-cover bg-center`} style={{backgroundImage: `url(${imageFile})`}}>
                {children}
            </div>
        </>
    )
}
