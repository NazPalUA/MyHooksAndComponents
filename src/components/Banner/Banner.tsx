import classnames from "classnames"
import "./banner.css"

export type BannerProps = {
    children: React.ReactNode,
    className?: string,
    variant: "success" | "warning" | "error" | "neutral",
}

export default function Banner({ children, className, variant }: BannerProps) {

    const allClasses = classnames("banner", className, variant)
    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}