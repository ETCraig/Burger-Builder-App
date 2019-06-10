import React, {Component} from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/ErrorHandler';
import order from '../../components/Order/Order';

class Order extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('/orders').then(res => {
            const fetchedOrders = [];
            for(let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({loading: false, orders: fetchedOrders});
        }).catch(err => {
            this.setState({loading: false});
        });
    }
    render() {
        return(
            <div>
                {this.state.orders.map(order => {
                    <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
                })}
                <Order />
                <Order />
            </div>
        );
    }
}

export default withErrorHandler(Order, axios);