import React from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup  } from 'react-transition-group'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { getItems } from '../actions/itemActions'
import PropTypes from 'prop-types'

const ShoppingList = () => {

    const { items } = useSelector((state) => state.item)

    return(
        <Container>
            <Button
            color="dark"
            style={{marginBottom: '2rem'}}
            onClick={() => {}}
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
                                onClick={() => {}}
                                >&times;</Button>
                                {name}</ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems })(ShoppingList)