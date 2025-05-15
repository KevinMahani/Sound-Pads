// export default function Pad(props) {
    
//     return (
//         <button style={{backgroundColor: props.color}}></button>
//     )
// }
// ..........................................................

// // Sound pads challenge, part 3   ******************************


    /**
     * Challenge part 3:
     * Our buttons got turned off by default! Update the code
     * so if the button is "on", it has the className of "on".
     */

// export default function Pad(props) {
    
//     return (
//         <button 
//             style={{backgroundColor: props.color}}
//             className={props.on ? "on" : undefined}
//         ></button>
//     )
// }
// .........................................................

// Sound pads challenge part 4.1 - local state ***********************************************

// import React from "react"

// export default function Pad(props) {
//     const [on, setOn] = React.useState(props.on)
    
//     function toggle() {
//         setOn(prevOn => !prevOn)
//     }

//     return (
//         <button 
//             style={{backgroundColor: props.color}}
//             className={on ? "on" : undefined}
//             onClick={toggle}
//         ></button>
//     )
// }
// ..................................................................

// // Sound pads challenge part 4.2 - shared state

// import React from "react"

// export default function Pad(props) {
//     const [on, setOn] = React.useState(props.on)
    
//     return (
//         <button 
//             style={{backgroundColor: props.color}}
//             className={on ? "on" : undefined}
//             onClick={props.toggle}
//         ></button>
//     )
// }
// ...................................................................

// // Sound pads challenge part 4.3 - updating item in array

import React from "react"

export default function Pad(props) {
    return (
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on" : undefined}
            onClick={() => props.toggle(props.id)}
        ></button>
    )
}