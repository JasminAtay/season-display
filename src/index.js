//1- Kullanilacak library import ederiz
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'



//2- Component olusturuyoruz
class App extends Component {
    state = { location: null, error: '' }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (location) => this.setState({ location: location.coords.latitude }),
            (error) => this.setState({ error: error.message })
        );
    }
    render() {

        if (this.state.error && !this.state.location) {
            return <div>Error : {this.state.error}</div>
        }
        if (!this.state.error && this.state.location) {
            return <SeasonDisplay enlem={this.state.location} />
        }
        return <SeasonDisplay text="please allow location"/>

    }
}

//3- Export edilecek
ReactDOM.render(<App />, document.querySelector('#root'))
