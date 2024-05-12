import Link from "next/link"

export const AsideItem = ({title,items}) => {
    return (
        <div>
            <h3 className="font-bold">{title}</h3>
            <ul className="font-light mt-3 flex flex-col gap-2">
                {items && (
                    items.map(item => (
                        <li className="hover:translate-x-2 transition-transform" key={item.name}>
                            <Link href={item.url} className="hover:text-violet-400 transition-colors">{item.name}</Link>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}