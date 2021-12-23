import React, { Component, useContext } from 'react'
import { ThemeContext } from './ThemeContext';

// class ThemedButton extends Component {
//     render() {
//         let props = this.props
//         let theme = this.context;
//         return (
//             <button
//              {...props} 
//              onClick={props.changeTheme}
//              style={{backgroundColor: theme.background, color: theme.foreground}}>button</button>
//         )
//     }
// }

// ThemedButton.contextType = ThemeContext

// export default ThemedButton;


export default function ThemedButton(props) {
    const theme = useContext(ThemeContext)
    return (
        <button
            {...props} 
            onClick={props.changeTheme}
            style={{backgroundColor: theme.background, color: theme.foreground}}
        >
            button
        </button>
    )
}
