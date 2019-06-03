import React, { Component } from 'react';
import './ContactData.css';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'E.T.',
                address: {
                    street: '1234 State St.',
                    zipCode: '52148',
                    country: 'USA'
                },
                email: 'et@test.com'
            },
            deliveryMethod: 'Fastest'
        }
        axios.post('/orders.json', order).then(res => {
            this.setState({ loading: false });
            this.props.history.push('/');
        }).catch(err => {
            this.setState({ loading: false });
        });
    }
    render() {
        let form = (
            <form>
                <input className="Input" type="text" name="name" placeholder="Your Name" />
                <input className="Input" type="email" name="email" placeholder="Your Email" />
                <input className="Input" type="text" name="Street" placeholder="Your Street" />
                <input className="Input" type="text" name="postalCode" placeholder="Your Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className="ContactData">
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;