import React, {Component} from 'react';
import './ContactData.css';

import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }
    render() {
        return(
            <div className="ContactData">
                <h4>Enter Your Contact Data</h4>
                <form>
                    <input className="Input" type="text" name="name" placeholder="Your Name" />
                    <input className="Input" type="email" name="email" placeholder="Your Email" />
                    <input className="Input" type="text" name="Street" placeholder="Your Street" />
                    <input className="Input" type="text" name="postalCode" placeholder="Your Postal Code" />
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;