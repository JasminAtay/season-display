//1- Kullanilacak library import ederiz
import React from 'react'
import ReactDOM from 'react-dom'

//2- Component olusturuyoruz
const App = () =>{
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>this is season app</h1>
        </div>
    )
}

//3- Export edilecek
ReactDOM.render(<App/>, document.querySelector('#root'))
