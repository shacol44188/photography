import React, {useState, useEffect} from 'react';
//import {Contact} from '../components/apirequest.js';
import axios from 'axios';

const ContactForm = () =>{

  const Contact = () => {
    let dets = {from:formFieldsState.email,subject:formFieldsState.subject,body:formFieldsState.message};

    console.log('MAKING REQUEST NOW');
    axios.post('http://dev.sultansbitches.com/photoContact',dets)
    .then(res => {
      console.log(res);
      const responseStatus = res.status == 200 ? "goodRStatus" : "badRStatus";
      resetForm();
      setFormFieldsState({
        response: res.data,
        responseStatus: responseStatus
      });
    });
  }

  const [formFieldsState, setFormFieldsState] = useState({
    formEnabled: true,
    email: '',
    subject: '',
    message: '',
    response: 'Please fill out the form below',
    responseStatus: 'goodRStatus',
    submitEnabled: <input type="submit" value="Submit" disabled />,
    defaultLength: 3
  });

  const resetForm = () => {
    setFormFieldsState({
      email: '',
      subject: '',
      message: '',
      response: 'Please fill out the form below',
      responseStatus: 'goodRStatus',
      submitEnabled: <input type="submit" value="Submit" disabled />,
      defaultLength: 3
    });
  }

  const submitHandler = (event) =>{
    event.preventDefault();

    setFormFieldsState({
      formEnabled: false,
      response: 'PREPPING YOUR MESSAGE',
      responseStatus: 'badRStatus'
    });
    Contact();
    event.target.style.visibility = "hidden";
  }

  const formDidChange = (event) =>{
    setFormFieldsState({
      email: event.target.name == "email" ? event.target.value : formFieldsState.email,
      subject: event.target.name == "subject" ? event.target.value : formFieldsState.subject,
      message: event.target.name == "message" ? event.target.value : formFieldsState.message,
      response: formFieldsState.response,
      responseStatus: formFieldsState.responseStatus,
      submitEnabled: (formFieldsState.email.length > formFieldsState.defaultLength
                      && formFieldsState.subject.length > formFieldsState.defaultLength
                      && formFieldsState.message.length > formFieldsState.defaultLength)
                      ?
                      <input type="submit" value="Submit" />:<input type="submit" value="Submit" disabled />,
      defaultLength: formFieldsState.defaultLength,
    });
  //  formFieldsState[event.target.name] = event.target.value;
  }

  useEffect(() => {

  },[]);

  return(
    <article>
      <p className={formFieldsState.responseStatus}>
        {formFieldsState.response.toUpperCase()}
      </p>
      <form name="contactForm1" onSubmit={submitHandler}>
        <div className="field">
          <div className="control">
            <input
              className="input border-blue"
              minlength={formFieldsState.defaultLength}
              type="text" name="subject"
              placeholder="SUBJECT"
              onChange={formDidChange}
              value={formFieldsState.subject}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input border-blue"
              minlength={formFieldsState.defaultLength}
              type="email"
              name="email"
              placeholder="EMAIL"
              onChange={formDidChange}
              value={formFieldsState.email}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <textarea
              className="textarea border-blue"
              minlength={formFieldsState.defaultLength}
              name="message"
              placeholder="MESSAGE"
              onChange={formDidChange}
              value={formFieldsState.message}>
            </textarea>
          </div>
        </div>
        {formFieldsState.submitEnabled}
      </form>
    </article>
  )

}

export default ContactForm
