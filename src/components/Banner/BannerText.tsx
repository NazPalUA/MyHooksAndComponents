export type BannerTextProps = {
    children: React.ReactNode
}

export default function BannerText({ children }: BannerTextProps) {
    return (
        <div className="banner-text">
            {children}
        </div>
    )
}