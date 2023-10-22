import React, { Component } from "react";
import { Form, Field } from 'react-final-form';

const required = val => (val ? undefined : 'Required');
// const isNumber = val => (isNaN(val) ? 'Must be a number' : undefined);
const minLength = len => val => (val) && val.length >= len ? undefined : `Should be greater than ${len}`;
const maxLength = len => val => (val) && val.length <= len ? undefined : `Should be less than ${len}`;

const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);

class Contact extends Component {
    constructor(props) {
        super(props);
        this.onSub = this.onSub.bind(this);
        // this.inpValidation = this.inpValidation.bind(this);
    }


    onSub(values) {
        alert(JSON.stringify(values));
    }
    // inpValidation(values) {

    //     const errors = {}
    //     if (!values.firstname) {
    //         errors.firstname = 'Required';
    //     }
    //     return errors;
    // }
    render() {


        return (
            <div className="Contact">
                <div className="container">
                    <div className="row row-content">
                        <h1>Contact</h1>
                        <h1>Send FeedBack</h1>

                        <Form onSubmit={this.onSub}  >
                            {props => (
                                <form className="contactForm" onSubmit={props.handleSubmit}>
                                    <div>
                                        <Field name="firstname" validate={required} >
                                            {
                                                ({ input, meta }) => (
                                                    <div>
                                                        <label htmlFor="firstname">First Name</label>
                                                        <input {...input} type="text" placeholder="First Name" />
                                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                                    </div>)
                                            }
                                        </Field>
                                    </div>

                                    <div>
                                        <Field name="lastname" validate={required}>
                                            {
                                                ({ input, meta }) => (
                                                    <div>
                                                        <label htmlFor="lastname">Last Name</label>
                                                        <input {...input} type="text" placeholder="Last Name" />
                                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                                    </div>)
                                            }
                                        </Field>
                                    </div>

                                    <div>
                                        <Field name="telnum" validate={composeValidators(minLength(2), maxLength(10))} >
                                            {
                                                ({ input, meta }) => (
                                                    <div>
                                                        <label htmlFor="telnum">Tel Num</label>
                                                        <input {...input} type="text" placeholder="Tel Num" />
                                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                                    </div>)
                                            }
                                        </Field>
                                    </div>

                                    <div>
                                        <Field name="email" validate={composeValidators(required, validEmail)} >
                                            {
                                                ({ input, meta }) => (
                                                    <div>
                                                        <label htmlFor="email">Email</label>
                                                        <input {...input} type="text" placeholder="Email" />
                                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                                    </div>)
                                            }
                                        </Field>
                                    </div>

                                    <div className="checkbox">

                                        <Field
                                            name="agree"
                                            component="input"
                                            type="checkbox"

                                        >

                                        </Field> <label htmlFor="agree">  May We Contact?</label>
                                    </div>


                                    <div>
                                        <Field
                                            name="contactType"
                                            component="select" 
                                        >
                                            <option value="Tel">Tel.</option>
                                            <option value="Email">Email.</option>
                                        </Field>
                                    </div>

                                    <div>
                                        <Field  name="message" component="textarea"  >
                                          <textarea></textarea>
                                        </Field>
                                    </div>

                                    <button type="submit"   >
                                        Submit
                                    </button>
                                </form>
                            )}
                        </Form>

                    </div>
                </div>
            </div >

        )
    }
}


export default Contact;