import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Auth } from "aws-amplify";
import Globe from "../Components/Globe";
import SignOut from "../Components/SignOutButton"
import { Redirect } from 'react-router-dom'
import SignOutButton from "../Components/SignOutButton";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  
  class Dashboard extends React.Component {
  //   const [titleState, setTitleState] = useState("")
  
  // const [bodyState, setBodyState] = useState("");
  state = {
    title: '',
    body: '',
    posts: []
  };

  componentDidMount = () => {
    this.getPost();
  }

  getPost = () => {
    axios.get('http://localhost/api')
    .then((response) => {
      const data = response.data;
      this.setState({ posts: data })
      console.log('Data has been received!');
    })
    .catch((error) =>
    console.log("Error:", error))
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value 
    });

  }

  submit = (event) => {
    event.preventDefault();
    const payload = {
      title: this.state.title,
      body: this.state.body
    }

    axios({
      url: 'http://localhost:8080/save',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('data has been sent to the server')
    })
    .catch(() => {
      console.log('server error')
    });

  };
  // const classes = useStyles();
  
  render() {
    console.log("state", this.state)
  return (
    // <div>
    //   <h1>Hello!</h1>
    //   <Globe />
    //   <Button
    //     type="sign out"
    //     fullWidth
    //     variant="contained"
    //     color="primary"
    //     className={classes.submit}
    //     onClick={() => {
    //       Auth.signOut();
    //     }}
    //   >
    //     Sign out
    //   </Button>
    // </div>
    <div>
      <h2>Dashboard</h2>
      <form onSubmit={this.submit}>
      <div className="form-input">
        <input 
        type="text"
        name="title"
        value={this.state.title}
        onChange={this.handleChange}
        />
      </div>
<div className="form-input">
  <textarea 
  name="body" 
  cols="30" 
  rows="10" 
  value={this.state.body}
  onChange={this.handleChange}>

  </textarea>
</div>
<button>Submit</button>
      </form>

      {/* <h1>Hello!</h1>
      <Globe />
      <SignOut/> */}
    </div>
  );
    }
}

export default Dashboard;
