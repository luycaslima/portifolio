interface SectionTitleProps{
    name: string;
}

export default function SectionTitle({name} : SectionTitleProps) {
    return (
        <div className="flex xl:flex-row flex-col justify-center items-center font-righteous text-4xl mb-12 xl:mb-20 w-full">
            <img src="line.svg" alt="line" />
            <h2 className="px-20 xl:py-0 py-2">{name}</h2>
            <img src="line.svg" alt="line"  />
        </div>
    )
}