import { useState } from "react"
import useEffectOnUpdate from "./useEffectOnUpdate"

type UseToggleParams = {
    initialValue?: boolean,
    onToggle?: () => void,
}

export type UseToggleReturnType = [boolean, () => void]

export default function useToggle({
    initialValue = false,
    onToggle = () => { }
}: UseToggleParams): UseToggleReturnType  {

    const [on, setOn] = useState(initialValue)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    useEffectOnUpdate(onToggle, [on])

    return [on, toggle]
}
