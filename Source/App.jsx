// import React from "react"
// import padsData from "./pads"

// export default function App() {
//     const [pads, setPads] = React.useState(padsData)
    
//     const buttonElements = pads.map(pad => (
//         <button key={pad.id}></button>
//     ))
    
//     return (
//         <main>
//             <div className="pad-container">
//                 {buttonElements}
//             </div>
//         </main>
//     )
// }
// ............................................................

// Dynamic styles

// import React from "react"
// import padsData from "./pads"

// export default function App({ darkMode }) {
//     const [pads, setPads] = React.useState(padsData)

//     const styles = {
//         backgroundColor: darkMode ? "#222222" : "#cccccc"
//     }

//     const buttonElements = pads.map(pad => (
//         <button style={styles} key={pad.id}></button>
//     ))

//     return (
//         <main>
//             <div className="pad-container">
//                 {buttonElements}
//             </div>
//         </main>
//     )
// }
// .................................................................

// Sound pads challenge, part 2

// import React from "react"
// import padsData from "./pads"
// import Pad from "./Pad"

// export default function App() {
//     const [pads, setPads] = React.useState(padsData)

//     const buttonElements = pads.map(pad => (
//         <Pad key={pad.id} color={pad.color} />
//     ))
//         /**
//      * Challenge part 2:
//      * 1. Create a separate component called "Pad" and
//      *    replace the `button` above with our <Pad /> component
//      * 2. Pass the Pad component a prop called `color` with the
//      *    value of the same name from the `padsData` objects
//      * 3. In the Pad component, apply an inline style to the <button>
//      *    to set the backgroundColor of the button.
//      * 
//      * (We'll deal with the "on" property soon)
//      */

//     return (
//         <main>
//             <div className="pad-container">
//                 {buttonElements}
//             </div>
//         </main>
//     )
// }
// ........................................................................
// // Sound pads challenge, part 3

// import React from "react"
// import padsData from "./pads"
// import Pad from "./Pad"

// export default function App() {
//     const [pads, setPads] = React.useState(padsData)

//     const buttonElements = pads.map(pad => (
//         <Pad key={pad.id} color={pad.color} on={pad.on}/>
//     ))
    
//     return (
//         <main>
//             <div className="pad-container">
//                 {buttonElements}
//             </div>
//         </main>
//     )
// }
// ......................................................................


// // Sound pads challenge part 4.2 - shared state

// import React from "react"
// import padsData from "./pads"
// import Pad from "./Pad"

// export default function App() {
//     const [pads, setPads] = React.useState(padsData)
    
//     /**
//      * Challenge: Create a toggle() function that logs
//      * "clicked!" to the console
//      * 
//      * Pass that function down to each of the Pad components
//      * and set it up so when they get clicked, the function runs
//      */
    
//     function toggle() {
//         console.log("Clicked!")
//     }
    
//     const buttonElements = pads.map(pad => (
//         <Pad toggle={toggle} key={pad.id} color={pad.color} on={pad.on}/>
//     ))
    
//     return (
//         <main>
//             <div className="pad-container">
//                 {buttonElements}
//             </div>
//         </main>
//     )
// }
// ...............................................................................

// Sound pads challenge part 4.3 - updating item in array


import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)
    
    function toggle(id) {
        setPads(prevPads => prevPads.map(item => {
            return item.id === id ? {...item, on: !item.on} : item
        }))
    }
    
    const buttonElements = pads.map(pad => (
        <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on}/>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
