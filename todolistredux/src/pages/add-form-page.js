import React from 'react';

const AddForm = () => {
  return <div  className="container">
      
      <form classnme="show" style={show} onSubmit={this.onSubmit}>

<label>First name</label>
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

<button className="button" type="submit">Add</button>

</form>
      
      </div>
};

export default CartPage;
