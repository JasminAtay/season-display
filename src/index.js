//1- Kullanilacak library import ederiz
import React, { Component } from 'react'
import ReactDOM from 'react-dom'


//2- Component olusturuyoruz
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { location: null, error: null }

        navigator.geolocation.getCurrentPosition(
            //success
            (location) => {
                this.setState({ location: location.coords.latitude })
                console.log(`location: `, this.state.location);
            },
            //error
            (error) => {
                this.setState({ error: error.message });
                console.log(`error Message: `, this.state.error);
            }
        )
    }

    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>this is season app</h1>
            </div>
        );
    }
}

//3- Export edilecek
ReactDOM.render(<App />, document.querySelector('#root'))
