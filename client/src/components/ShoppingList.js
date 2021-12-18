import React from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup  } from 'react-transition-group'
import { useState } from 'react'

const ShoppingList = () => {

    const [items, setItems] = useState([
        {id: 1, name: 'Eggs'},
        {id: 2, name: 'Milk'},
        {id: 3, name: 'Steak'},
        {id: 4, name: 'Water'},
        {id: 5, name: 'Coffee'}
    ])

    return(
        <Container>
            <Button
            color="dark"
            style={{marginBottom: '2rem'}}
            onClick={() => {
                const name = prompt('Enter Item')
                if(name) {
                    setItems([...items, {id: Math.Random, name}])
                }
            }}
            >Add Item</Button>
        </Container>
    )
}

export default ShoppingList