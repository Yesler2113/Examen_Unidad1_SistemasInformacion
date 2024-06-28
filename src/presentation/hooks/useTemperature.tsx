//crear un estado temperature en 20, aumentar y disminuir temperatura, cambia de colo segun la temperatura

import { useState } from "react"

export const useTemperature = () => {
    const [Temperature, setTemperature] = useState('20')
    const increase = () => {
        setTemperature((prev) => {
            const newTemp = parseInt(prev) + 1
            return newTemp.toString()
        })
    }
    const decrease = () => {
        setTemperature((prev) => {
            const newTemp = parseInt(prev) - 1
            return newTemp.toString()
        })
    }
    const color = () => {
        if (parseInt(Temperature) < 15) {
            return 'blue'
        } else if (parseInt(Temperature) >= 15 && parseInt(Temperature) <= 25) {
            return 'green'
        } else if (parseInt(Temperature) > 25) {
            return 'red'
        }
    }

    return { Temperature, increase, decrease, color }
    
}