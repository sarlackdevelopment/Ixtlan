import { useLayoutEffect, useState } from 'react'

export const logoSize = () => {

    const [width, setWidth] = useState(0)

    useLayoutEffect(() => {

        const updateWidth = () => setWidth(window.innerWidth)
        window.addEventListener('resize', updateWidth)
        updateWidth()

        return () => window.removeEventListener('resize', updateWidth)

    }, [])

    return width >= 992 ? '75%': '100%'
}