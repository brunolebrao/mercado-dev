import React, {Component} from 'react'
import axios from 'axios'
import AnuncioHome from './AnuncioHome'

class Categoria extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anuncios: {}, 
      isLoading: false
    }
  }
  loadAnuncio = (urlCategoria) => {
    this.setState({
      isLoading: true, 
      anuncio: {}
    })
    const url = `https://mercadodev-12093.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22${urlCategoria}%22`
    axios
      .get(url)
      .then(data => {
        this.setState({anuncios: data.data, isLoading: false})
      })
  }

  componentWillReceiveProps(newProps) {
    const urlCategoria = newProps.match.params.urlCategoria
    this.loadAnuncio(urlCategoria)
  }

  render() {
    return (
      <div>
        <h1>Categoria: {this.props.match.params.urlCategoria}</h1>
        {
          this.state.isLoading && <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        }
        {
          !this.state.isLoading && Object.keys(this.state.anuncios).length === 0 && <p>Nenhum produto cadastrado</p>
        }
        <div className="row">
          {Object
            .keys(this.state.anuncios)
            .map(key => {
              const anuncio = this.state.anuncios[key]
              return <AnuncioHome key={key} id={key} anuncio={anuncio}/>
            })}
        </div>
      </div>
    )
  }
}

export default Categoria
