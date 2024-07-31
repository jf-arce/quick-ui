import styles from "./HoverUnderline.module.css"

export const HoverUnderline = () => {
  return (
    <header className="flex items-center justify-center my-10">
        <nav className="bg-neutral-800 rounded-sm">
            <ul className="flex gap-9 items-center m-0 px-6 py-4">
                <li className={styles.underline}>Home</li>
                <li className={styles.underline}>About</li>
                <li className={styles.underline}>Blog</li>
                <li className={styles.underline}>Services</li>
            </ul>
        </nav>
    </header>
  )
}
