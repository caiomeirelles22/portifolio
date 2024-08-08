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
        <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <div className="flex gap-4 items-start justify-center flex-wrap">
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
                <div className="space-y-4">
                    <p>
                        {description}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Link
                            href={linkPage}
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            Página
                        </Link>
                        <Link
                            href={linkCode}
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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