
export default function DocLayout({children}) {
  return (
    <>
        <div className="grid grid-cols-[300px,1fr] gap-14 px-[76px]">          
            <aside className="bg-neutral-950">
                <div>
                    <p>All components</p>
                    <ul>
                        <li>Hover</li>
                        <li>transform</li>
                    </ul>
                </div>
            </aside>
            {children}
        </div>
    </>
  )
}
