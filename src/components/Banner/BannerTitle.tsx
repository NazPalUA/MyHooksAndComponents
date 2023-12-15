export type BannerTitleProps = {
    children: React.ReactNode
}

export default function BannerTitle({ children }: BannerTitleProps) {
    return (
        <div className="banner-title">
            {children}
        </div>
    )
}