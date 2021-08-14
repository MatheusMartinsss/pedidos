import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ButtonBase, Card, CardContent } from '@material-ui/core';
import './produtos.css'





function Produtos(props) {

    const [value, setValue] = React.useState(0);
    const Categorias = props.Categorias;
    const Prods = props.Prods;
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

    return (
        <div className='Container'>
            {Categorias.map((i) => (
                <div >
                    <h1>{i.Nome}</h1>
                    <div className='GridContainer'>
                        {Prods.filter(item => item.Categoria === i.Cod).map(item => (
                            <div class='GridCard'>
                                <div class='itemInfo'>
                                    <h1>{item.Nome}</h1>
                                    <h2>{item.Descricao}</h2>
                                    <h3>{item.Preco}</h3>
                                </div>
                                <div class='CardImg'>
                                    <img class='img' src={'http://www.hummsorvetes.com.br/wp-content/uploads/2016/09/humm-sorvetes-acai-no-copo.jpg'}></img>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>

            ))}

        </div>

    );
}
export default Produtos;

/*{Prods.filter(item => item.Categoria === i.Cod).map(item => (

    <div class='GridCard'>
        <div class='itemInfo'>
            <h1>{item.Nome}</h1>
            <h2>{item.Descricao}</h2>
            <h3>{item.Preco}</h3>
        </div>
        <div class='CardImg'>
            <img class='img' src={'http://www.hummsorvetes.com.br/wp-content/uploads/2016/09/humm-sorvetes-acai-no-copo.jpg'}></img>
        </div>
    </div>

))} */