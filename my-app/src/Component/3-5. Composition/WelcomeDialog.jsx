import React from 'react'
import CustomDialog from './CustomDialog'


export default function WelcomeDialog() {
//     return (
//         <Dialog>
//             <h1>Welcome</h1> <br/>
//             <h3>Thank you!</h3>
//         </Dialog>
//     )
return (
    <CustomDialog title ={<button>Welcome</button>} discription = "thanks" />
)
}
