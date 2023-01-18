import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function AnimCursor() {
    return (
        <div>
            <AnimatedCursor
                innerSize={10}
                outerSize={40}
                color='196, 255, 178'
                outerAlpha={0.2}
                innerScale={1}
                outerScale={2}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link',
                    'a'
                ]}
            />

        </div>
    )
}

export default AnimCursor