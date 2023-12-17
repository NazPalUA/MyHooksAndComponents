export type TestimonialNameProps = {
    children: React.ReactNode
}

export default function TestimonialName({ children }: TestimonialNameProps) {
    return (
        <div className="testimonial-name">
            {children}
        </div>
    )
}