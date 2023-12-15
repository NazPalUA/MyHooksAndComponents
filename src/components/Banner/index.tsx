import Banner, { BannerProps } from "./Banner"
import BannerTitle, { BannerTitleProps } from "./BannerTitle"
import BannerText, { BannerTextProps } from "./BannerText"

// Define the type for the compound component
type CompoundBanner = React.FC<BannerProps> & {
    Title: React.FC<BannerTitleProps>
    Text: React.FC<BannerTextProps>
}

// Extend the Menu component with the sub-components
const ExtendedBanner = Banner as CompoundBanner
ExtendedBanner.Title = BannerTitle
ExtendedBanner.Text = BannerText

export default ExtendedBanner