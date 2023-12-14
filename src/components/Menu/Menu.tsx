import useToggle, { UseToggleReturnType } from "../../hooks/useToggle"
import { createContext } from 'react';

export type MenuProps = {
    children: React.ReactNode,
    onOpen?: () => any
}

export type MenuContextType = {
    open: UseToggleReturnType[0],
    toggleOpen: UseToggleReturnType[1]
}

const MenuContext = createContext<MenuContextType | null>(null)
export { MenuContext }

export default function Menu({ children, onOpen }: MenuProps) {
    const [open, toggleOpen] = useToggle({
        initialValue: true, 
        onToggle: onOpen
    })

    return (
        <MenuContext.Provider value={{ open, toggleOpen }}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}