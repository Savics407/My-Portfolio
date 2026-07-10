import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

function AnimCursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={32}
      color="74, 222, 128"      /* accent green — matches design system */
      outerAlpha={0.15}
      innerScale={0.8}
      outerScale={2.2}
      trailingSpeed={6}
      outerStyle={{
        border: '1.5px solid rgba(74, 222, 128, 0.6)',
        backgroundColor: 'transparent',
        mixBlendMode: 'normal',
        zIndex: 9999,
      }}
      innerStyle={{
        backgroundColor: 'rgba(74, 222, 128, 1)',
        zIndex: 9999,
      }}
      clickables={[
        'a',
        'button',
        'input',
        'select',
        'textarea',
        'label',
        '[role="button"]',
        '[role="link"]',
        '[role="tab"]',
        '[role="menuitem"]',
        '[tabindex]',
        '.link',
        '.btn-primary',
        '.btn-ghost',
        '.hover-lift',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
      ]}
    />
  )
}

export default AnimCursor