import React from 'react';
import { Modal } from '@material-ui/core'

import './produto.css'

function Produto (props) {

    return <div>
        <Modal
            open={props.Open}
            onClose={props.handleClick}
            onEscapeKeyDown = {props.handleClick}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className = 'modal-container'>
                
            </div>
        </Modal>
    </div>
}

export default Produto;