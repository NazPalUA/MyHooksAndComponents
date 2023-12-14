import { useContext } from "react"
import Button from "../Button/Button"
import { MenuContext, MenuContextType } from "./Menu"

export type MenuButtonProps = {
    children: React.ReactNode
}

export default function MenuButton({ children }: MenuButtonProps) {
    const { toggleOpen } = useContext(MenuContext) as MenuContextType
    return (
        <Button onClick={toggleOpen}>{children}</Button>
    )
}