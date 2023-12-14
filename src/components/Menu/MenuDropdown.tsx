import React from "react"
import { MenuContext, MenuContextType } from "./Menu"

export type MenuDropdownProps = {
    children: React.ReactNode
}

export default function MenuDropdown({ children }: MenuDropdownProps) {
    const { open } = React.useContext(MenuContext)  as MenuContextType

    return (
        <>
            {open ? (
                <div className="menu-dropdown">
                    {children}
                </div>
            ) : null
            }
        </>
    )
}