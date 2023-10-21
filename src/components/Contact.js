import React, { Component } from "react";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lasname: false,
                telnum: false,
                email: false
            }
        }

        this.handleInputSubmit = this.handleInputSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }



    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {
                ...this.state.touched, [field]: true
            }
        });
    }
    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }

    handleInputSubmit(event) {
        console.log("Current State" + JSON.stringify(this.state));
        alert("Current State" + JSON.stringify(this.state));
        event.preventDefault();
    }
    render() {

        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

        return (
            <div className="Contact">
                <div className="container">
                    <div className="row row-content">
                        <h1>Contact</h1>
                        <h1>Send FeedBack</h1>
                        <form className="form-style" onSubmit={this.handleInputSubmit}>
                            <label htmlFor="firstname">First Name
                                <input type="text" name="firstname" id="firstname" placeholder="First Name"
                                    value={this.state.firstname}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleBlur('firstname')}
                                    valid={errors.firstname === ''}
                                    invalid={errors.firstname !== ''}
                                />
                                <span>{errors.firstname}</span>
                            </label>
                            <label htmlFor="lastname">Last Name
                                <input type="text" name="lastname" id="lastname" placeholder="Last Name"
                                    value={this.state.lastname}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleBlur('lastname')}
                                    valid={errors.lastname === ''}
                                    invalid={errors.lastname !== ''}
                                />
                                <span>{errors.lastname}</span>
                            </label>
                            <label htmlFor="telnum"> Tel Num
                                <input type="tel" name="telnum" id="telnum" placeholder="Tel Num"
                                    value={this.state.telnum}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleBlur('telnum')}
                                    valid={errors.telnum === ''}
                                    invalid={errors.telnum !== ''}
                                />
                                <span>{errors.telnum}</span>
                            </label>
                            <label htmlFor="email">Email
                                <input type="email" name="email" id="email" placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleBlur('email')}
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    />

                                <span>{errors.email}</span>
                            </label>
                            <label htmlFor="agree">
                                <input type="checkbox" name="agree" id="agree"
                                    checked={this.state.agree}
                                    onChange={this.handleInputChange} />
                                May we Contact you?
                            </label>

                            <label htmlFor="contactType">
                                <select type="select" name="contactType" id="contactType"
                                    value={this.state.contactType}
                                    onChange={this.handleInputChange} >
                                    <option >Tel.</option>
                                    <option >Email.</option>
                                </select>
                            </label>
                            <label htmlFor="message">
                                <textarea id="message" name="message"
                                    value={this.state.message}
                                    onChange={this.handleInputChange} ></textarea>
                            </label>

                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div >

        )
    }
}


export default Contact;