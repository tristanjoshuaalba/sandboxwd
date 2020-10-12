import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
    // Set your states here:
    // Manages a Virtual DOM for you
    // Renders the component tree, then looks for changes in the virtual DOM
    // React just renders the parts that changes
    constructor() {
        super();
        this.state = { name: "Will" }

    }
    render() {
        // Changes in the State
        setTimeout(() => {
            this.setState({ name: 'Bob' })
        })

        return ( <
            div > { this.state.name } <
            Header / >
            <
            Footer / >
            <
            /div>
        )
    }
}

// ------------------------------------------------------

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {


    render() {
        // Changes in the State
        const title = "Welcome Will!"

        return ( <
            div >

            <
            Header title = { title }
            /> <
            Footer / >
            <
            /div>
        )
    }
}