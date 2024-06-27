import {formik,Form,Field,ErrorMessage} from "formik";
import React from "react";
import "./card.css";

const formikFormDemo=()=>{
    const initialValues={
        firstName:"",
        lastName:"",
        email:"",
    };

    const onSubmit=(values)=>{
        const errors={};
        if(!values.firstName){
            errors.firstName="First Name is Required"
        }
        if(!values.lastName){
            errors.lastName="Required"
        }
        if(!values.email){
            errors.email="Required";
        }else if(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/i.test(values.email)){
            errors.email="Invalid email Id";
        }
        return errors;
        return(
            <div>
                <h1> My Form</h1>
                <formik 
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
                >
                    <form>
                        <div></div>
                    </form>
                </formik>
            </div>
        )
       
    }
}
