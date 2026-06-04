import { useFormik } from 'formik'
import { MdEmail } from "react-icons/md";
import { PiPassword } from "react-icons/pi";
import { FaUser } from "react-icons/fa";

export default function FormikForm(){
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },

        validate: (values) => {
            const errors = {};
            if(!values.name){
                errors.name = "Required";
            }
            if(!values.email){
                errors.email = "Required";
            }
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                errors.email = "Invalid email address";
            }
            if(!values.password){
                errors.password = "Required";
            }
            return errors;
        },

        onSubmit: (values) => {
            console.log(values);
        }

    });
    return(
        <form className="formik-form" onSubmit={formik.handleSubmit}>
            <h2 className="form-title">Formik Form</h2>
            <div style={{ display: "flex", alignItems: "left" }}>
                <FaUser />
                <label className="form-label" htmlFor="name">Your name</label>
            </div>
            <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? <div className="form-error">{formik.errors.name}</div> : null}
            <div style={{ display: "flex", alignItems: "left" }}>
                <MdEmail className="email-icon" />
                <label className="form-label" htmlFor="email">Your email</label>
            </div>
            <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <div className="form-error">{formik.errors.email}</div> : null}
            <div style={{ display: "flex", alignItems: "left" }}>
                <PiPassword />
                <label className="form-label" htmlFor="password">Your password</label>
            </div>
            <input
                className="form-input"
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? <div className="form-error">{formik.errors.password}</div> : null}

            <button className="form-button" type="submit">
                <svg className="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2L15 22l-4-9-9-4 18-7z"></path>
                </svg>
                Submit
            </button>

        </form>
    )
};