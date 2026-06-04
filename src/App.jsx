import { useState } from 'react'
import './App.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import FormikForm from './component/fromikForm'
import YupForm from './component/YupForm';


function App() {

  return (
    <div>
      <FormikForm />
      <YupForm />
    </div>
  );
};

export default App
