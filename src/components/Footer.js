import React, { Component } from 'react'
import './footer.css';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="cont">
                    <div className="cr">
                        <p>©Coppyright by Me.</p>
                        <p>Ich habe diese supertolle Website programmiert! Ist das nicht Toll?</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer