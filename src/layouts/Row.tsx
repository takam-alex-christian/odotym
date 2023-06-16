

import React from 'react'


interface RowProps {
    gap?: number,
    p?: number,
    children: React.ReactNode
}

export default function Row(Props: RowProps) {
    return (
        <div className={`flex flex-row gap-${Props.gap? `[${Props.gap}rem]`: `2` } p-${Props.p? `[${Props.p}rem]`: `2` }`}>
            {Props.children}
        </div>
    )
}
