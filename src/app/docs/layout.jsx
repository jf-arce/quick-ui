import { AsideItem } from "@/components/AsideItem";

export default function DocLayout({children}) {
  return (
    <>
        <div className="grid grid-cols-[300px,1fr] gap-4 m-auto max-w-[1280px] px-6 pt-10">          
            <aside className="flex flex-col gap-7">
                <AsideItem
                    title={"Getting Started"}
                    items={[
                        {url: "/docs", name: "Introduction"},
                        {url: "/docs/installation", name: "Installation"}
                    ]}
                />
                <AsideItem
                    title={"CSS Effects"}
                    items={[
                        {url: "/docs/effects/fading-siblings", name: "Fading siblings"},
                        {url: "/docs", name: "Underline"},
                    ]}
                />
                <AsideItem
                    title={"Components"}
                    items={[
                        {url: "/docs", name: "Hover"},
                        {url: "/docs", name: "Installation"},
                    ]}
                />
            </aside>
            <main>
                {children}
            </main>
        </div>
    </>
  )
}

