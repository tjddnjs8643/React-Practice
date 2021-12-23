import React, { Component } from 'react'
import { ThemeContext,theme } from './ThemeContext';
import ThemedButton from './ThemedButton';

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: theme.light,
        }
        this.toggleTheme = () =>{
            this.setState((prev) => ({
                theme: prev.theme === theme.dark ? theme.light : theme.dark
            }) )
        }
    }
    render() {
        return (
        <div>
            <ThemeContext.Provider value = {this.state.theme}>
                <ThemedButton changeTheme = {this.toggleTheme}/>
                <ThemeContext.Consumer>
                    {(theme) => (
                        <div 
                            style= {{
                                height: 300,
                                width : 300,
                                backgroundColor: theme.background
                    }}
                    ></div>
                    )}
                </ThemeContext.Consumer>
            </ThemeContext.Provider>
            <ThemedButton/>
        </div>
        )
        
        
    }
}
