import classnames from "classnames"
import "./testimonial-style.css"

export type TestimonialProps = {
    children: React.ReactNode,
    imgSrc: string,
    className?: string,
}

export default function Testimonial({ children, className, imgSrc }: TestimonialProps) {

    const allClasses = classnames("testimonial", className)
    return (
        <div className={allClasses}>
            <div className="testimonial-wrapper" >
                <img className="testimonial-photo" src={imgSrc} />
                <div className="testimonial-textarea" >
                    {children}
                </div>
            </div>
        </div>
    )
}``