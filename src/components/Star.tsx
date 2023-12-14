import { BsStar, BsStarFill } from "react-icons/bs"
import useToggle, { UseToggleReturnType } from "../hooks/useToggle"

export default function Star() {
    const [on, toggle] : UseToggleReturnType = useToggle({})
    return (
        <>
            {
                on ?
                    <BsStarFill onClick={toggle} className="star filled" /> :
                    <BsStar onClick={toggle} className="star" />
            }
        </>
    )
}