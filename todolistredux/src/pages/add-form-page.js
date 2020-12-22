import React, { useState } from 'react';
// import { useDispatch } from "react-redux";
import Header from '../components/header/header';
// import { connect } from 'react-redux';
// import { addTodo } from "../action/index";
import { Field, reduxForm } from 'redux-form';
// const Form = props => {
//     const [input, setInput] = useState(undefined);
//     const dispatch = useDispatch();
  
//     return ( 
//     <div  className="container">

//         <Header />
//         <input onBlur={e => setInput(e.target.value)} />
//         <input onBlur={e => setInput(e.target.value)} />
//         <button className="add-todo" onClick={() => dispatch(addTodo(input))}>
//         Add Todo
//       </button>


const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <label>Sex</label>
          <div>
            <label>
              <Field name="sex" component="input" type="radio" value="male" />{' '}
              Male
            </label>
            <label>
              <Field name="sex" component="input" type="radio" value="female" />{' '}
              Female
            </label>
            <label>
              <Field name="sex" component="input" type="radio" value="other" />{' '}
              Other
            </label>
          </div>
        </div>
        <div>
          <label>Favorite Color</label>
          <div>
            <Field name="favoriteColor" component="select">
              <option />
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </Field>
          </div>
        </div>
        <div>
          <label htmlFor="employed">Employed</label>
          <div>
            <Field
              name="employed"
              id="employed"
              component="input"
              type="checkbox"
            />
          </div>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <Field name="notes" component="textarea" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }
  
  export default SimpleForm({
    form: 'simple' // a unique identifier for this form
  })(SimpleForm)



{/* <label>First name</label>
<input type="text" id="fname"   placeholder="First name" value={this.state.firstname}   onChange={this.handleInputChangefirstname} />

<label >Last name</label>
<input type="text" id="lname"  placeholder="Last name" value={this.state.lastname}   onChange={this.handleInputChangelastname} />

<label>Email</label> 
<input type="email"  id="Email"  value={this.state.email}   onChange={this.handleInputChangeemail} placeholder="Email" />


<label>From:</label>
<input type="text"  id="from" placeholder="Date"  value={this.state.from} onChange={this.handleInputChangefrom} required/>


<label>To</label>
<input type="text"  id="to" placeholder="Date"    value={this.state.to} onChange={this.handleInputChangeto} required/>



<label>Type</label>
<select id="type" value={this.state.type} onChange={this.handleInputChangetype} className="custom-select custom-select-sm">
<option>Open this select menu</option>
<option value="1">Developing</option>
<option value="2">Testing</option>
<option value="3">Done</option>
</select>
<label className="label">
 Make report
</label>
<input className="check" id="check" checked={this.state.checkbox}  onChange={this.handleInputChangecheckbox} type="checkbox" required/>


<label>Comments</label>
<textarea  id="text" value={this.state.comments}  onChange={this.handleInputChangecomments} className="form-control"/>

<button className="button" type="submit">Add</button> */}


      
//       </div>
//     );
// };

// export default Form;
