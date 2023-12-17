import Testimonial, { TestimonialProps } from "./Testimonial"
import TestimonialFeedback,  {TestimonialFeedbackProps } from "./TestimonialFeedback"
import TestimonialName, { TestimonialNameProps } from "./TestimonialName"
import TestimonialLocation, { TestimonialLocationProps } from "./TestimonialLocation"

// Define the type for the compound component
type CompoundTestimonial = React.FC<TestimonialProps> & {
    Feedback: React.FC<TestimonialFeedbackProps>
    Name: React.FC<TestimonialNameProps>
    Location: React.FC<TestimonialLocationProps>
}

// Extend the Testimonial component with the sub-components
const ExtendedTestimonial = Testimonial as CompoundTestimonial
ExtendedTestimonial.Feedback = TestimonialFeedback
ExtendedTestimonial.Name = TestimonialName
ExtendedTestimonial.Location = TestimonialLocation

export default ExtendedTestimonial