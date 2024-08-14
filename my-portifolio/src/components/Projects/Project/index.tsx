import Image from "next/image";
import Link from "next/link";

export interface projectProps {
    title: string
    previewImage: string
    description: string
    linkPage: string
    linkCode: string

}

export function Project({ title, previewImage, description, linkPage, linkCode }: projectProps) {
    return (
        <section className="flex flex-col items-center justify-center w-full border-b border-solid border-gray-500">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <div className="flex gap-4 items-start justify-center flex-wrap w-full ">
                <div className="w-80 h-96 flex items-center justify-center">
                    <Image
                        src={previewImage}
                        width="800"
                        height="960"
                        alt="Project 1 Screenshot"
                        className="rounded-lg object-cover"
                        style={{ aspectRatio: "800/960", objectFit: "contain" }}
                    />
                </div>
                <div className="flex flex-col gap-4 max-w-80 md:max-w-96 md:h-96 justify-around">
                    <p>
                        {description}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Link
                            target="_blank"
                            href={linkPage}
                            className="bg-slate-700 p-2 text-white rounded-sm w-32 flex items-center justify-center hover:bg-slate-600"
                            prefetch={false}
                        >
                            Página
                        </Link>
                        <Link
                            target="_blank"
                            href={linkCode}
                            className="bg-slate-700 p-2 text-white rounded-sm w-32 flex items-center justify-center hover:bg-slate-600"
                            prefetch={false}
                        >
                            Código
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}