// A simple JavaScript utility for conditionally joining classNames together
import classnames from "classnames"

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
    children: React.ReactNode,
    className?: string, 
    size?: "s" | "m" | "l" | "xl", 
    variant?: "sharp edges" | "rounded edges",
}

export default function Button({ children, className, size, variant, ...rest }: ButtonProps) {
    let sizeClass = size ? `button-${size}` : ''
    let variantClass = variant ? `button-${variant}` : ''
    const allClasses = classnames(sizeClass, variantClass, className)

    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}