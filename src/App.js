import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Email: "",
      confirmEmail: "",
      Password: "",
      confirmPassword: ""
    };

    this.handleonchange = this.handleonchange.bind(this);
  }
  handleonchange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  onsubmit = () => {

    console.log("Email", this.state.Email);
    console.log("confirmEmail", this.state.confirmEmail);
    console.log(" Password", this.state.Password);
    console.log("confirmPassword", this.state.confirmPassword);

  }

  onClear = () => {
    this.setState(
      {

        Email: "",
        confirmEmail: "",
        Password: "",
        confirmPassword: "",

      }
    );
  }

  render() {
    return (
      <div>
        <label> Email</label>
        <input type="text" name="Email" value={this.state.Email} onChange={this.handleonchange} ></input>
        <label>confirmEmail</label>
        <input type="text" name="confirmEmail" value={this.state.confirmEmail} onChange={this.handleonchange} ></input>
        <label>Password</label>
        <input type="text" name="Password" value={this.state.Password} onChange={this.handleonchange} ></input>
        <label>confirmPassword</label>
        <input type="text" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleonchange}></input>
        <button onClick={this.onsubmit}>Submit</button>
        <button onClick={this.onClear} >Clear</button>
      </div>
    );
  }
}
export default App;