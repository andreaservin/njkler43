import React, { Component } from 'react'
import posts from './posts'

// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor() {
    super()
    this.state = {
      word: '',
      list: posts,
    }
  }

  handleChangeWord = (e) => {
    this.setState({ word: e.target.value })
  }

  render() {
    return (
      <div>
        <div className='filter'>
          <input type='text' placeholder='Ingresa el término de búsqueda' value={this.state.word} onChange={this.handleChangeWord.bind(this)} />
        </div>
        <ul>
          {this.state.list.map(({ url, title, image }, key) => {
            if (title.toLocaleLowerCase().includes(this.state.word.toLocaleLowerCase())) {
              return (
                <li key={key}>
                  <a href={url}>
                    <img src={image} alt={title} />
                  </a>
                  <p>{title}</p>
                </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}

export default App
