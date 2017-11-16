import React from 'react';
import {Link, Route} from 'react-router-dom'

import HeaderInterno from './HeaderInterno'
import Categoria from './Categoria'
import Anuncio from './Anuncio'

const Categorias = ({categorias}) => {
    return (
        <div>
            <HeaderInterno/>
            <div
                className="container"
                style={{
                paddingTop: '120px'
            }}>
                <h1>Categorias</h1>
                <div className="row">

                    <div className="col-lg-4">
                        <ul>
                        {categorias.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/categorias/${item.url}`}>{item.categoria}</Link>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        <Route path='/categorias/:urlCategoria' component={Categoria} exact/>
                        <Route path='/categorias/:urlCategoria/:id' render={(props) => <Anuncio {...props}/>}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Categorias