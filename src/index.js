import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import './App.css'
const calc = (x, y) => [x - window.innerWidth / 3 , y - window.innerHeight / 3 ]
const trans2 = (x, y) => `translate3d(${x / 7 }px,${y / 8 }px,0)`
const trans3 = (x, y) => `translate3d(${x / 7 }px,${y / 8 }px,0)`

function Card() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
        <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <div className="eye">
            <animated.div className="leftEye" style={{ transform: props.xy.interpolate(trans2) }} />
            </div>
            <div className="eye">
            <animated.div className="rightEye" style={{ transform: props.xy.interpolate(trans3) }} />
            </div>
        </div>
    )
}

ReactDOM.render(<Card />, document.getElementById('eyes'))
