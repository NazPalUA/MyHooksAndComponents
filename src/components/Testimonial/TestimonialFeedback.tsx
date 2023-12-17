export type TestimonialFeedbackProps = {
    children: React.ReactNode
}

export default function TestimonialFeedback({ children }: TestimonialFeedbackProps) {
    return (
        <div className="testimonial-feedback">
            {children}
        </div>
    )
}