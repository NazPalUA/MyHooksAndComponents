import React from "react"

export default function useEffectOnUpdate(effectFunction: () => void, deps: React.DependencyList): void {
    const firstRender = React.useRef(true)
    
    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        return effectFunction()
        
    }, deps)
}