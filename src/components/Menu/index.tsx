import Menu, { MenuProps } from "./Menu"
import MenuButton, { MenuButtonProps } from "./MenuButton"
import MenuDropdown,  {MenuDropdownProps } from "./MenuDropdown"
import MenuItem, { MenuItemProps } from "./MenuItem"

// Define the type for the compound component
type CompoundMenu = React.FC<MenuProps> & {
    Button: React.FC<MenuButtonProps>
    Dropdown: React.FC<MenuDropdownProps>
    Item: React.FC<MenuItemProps>
}

// Extend the Menu component with the sub-components
const ExtendedMenu = Menu as CompoundMenu
ExtendedMenu.Button = MenuButton
ExtendedMenu.Dropdown = MenuDropdown
ExtendedMenu.Item = MenuItem

export default ExtendedMenu