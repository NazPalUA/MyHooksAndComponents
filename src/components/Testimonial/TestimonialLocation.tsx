export type TestimonialLocationProps = {
    children: React.ReactNode
}

export default function TestimonialLocation({ children }: TestimonialLocationProps) {
    return (
        <div className="testimonial-location">
            {children}
        </div>
    )
}