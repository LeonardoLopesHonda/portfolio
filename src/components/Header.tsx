import type { ReactNode } from "react"

interface HeaderProps {
    children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
    return <header className="w-full mt-8 lg:w-4/5 lg:flex lg:justify-end">
        { children }
    </header>
}