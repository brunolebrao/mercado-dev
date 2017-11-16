import React, {Component} from 'react'
import axios from 'axios'

class Anuncio extends Component {
    constructor(props){
        super(props)
        this.state = {
            anuncio: {},
            isLoading: true
        }
        const id = this.props.match.params.id
        const url = `https://mercadodev-12093.firebaseio.com/anuncios/${id}.json`
        console.log(url)
        axios
            .get(url)
            .then(data => {
                this.setState({anuncio: data.data, isLoading: false})
            })
    }
    render() {
        const {anuncio, isLoading} = this.state
        if(isLoading){
            return <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        }
        return (
            <div>
                <h3>{anuncio.nome}</h3>
                <p><img src={anuncio.foto} alt="Anuncio"/></p>
                <h6>{JSON.stringify(anuncio)}</h6>
            </div>
        )
    }
}
export default Anuncio