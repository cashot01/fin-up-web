import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "carteira" | "investimentos"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const activeClass = "border-b-4 border-pink-600 pb-2"

    const links = [
        { text: "dashboard", href: "/dashboard" },
        { text: "carteira", href: "/carteira" },
        { text: "investimentos", href: "/investments" },
    ]

    return (
        <nav className="flex justify-between items-center bg-slate-900 p-6">
            <h1 className="text-3xl font-bold">FinUp</h1>
            <ul className="flex gap-4">
                {links.map(link =>
                    <li className={active === link.text ? activeClass : ""}>
                        <Link href={link.href}>{link.text}</Link>
                    </li>
                )}

            </ul>
            <img className="size-12 rounded-full" src="http://github.com/cashot01.png" alt="" />
        </nav>
    )
}