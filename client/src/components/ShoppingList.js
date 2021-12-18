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
                    setItems([...items, {id: Math.random() * 10 , name}])
                }
            }}
            >Add Item</Button>

            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({ id, name }) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                className="remove-btn"
                                color="danger"
                                size="small"
                                onClick={() => {
                                    setItems(items.filter((item) => item.id !== id))
                                }}
                                >&times;</Button>
                                {name}</ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}

export default ShoppingList