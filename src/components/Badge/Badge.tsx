import classnames from "classnames"
import Button from "../Button/Button"
import "./badge.css"

type BadgeProps = React.ComponentPropsWithoutRef<"button"> & {
    children: React.ReactNode,
    className?: string,
    color?: "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink",
    variant?: "square" | "pill",
}

export default function Badge({children, className, color="gray", variant="square", ...rest}: BadgeProps) {
    const allClasses = classnames("badge", className, color, variant)

    return (
        <Button className={allClasses} {...rest}>
            {children}
        </Button>
    )
}