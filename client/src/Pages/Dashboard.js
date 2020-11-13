import React from "react";
import axios from "axios";

class Dashboard extends React.Component {
  state = {
    title: '',
    body: '',
    posts: []
  };

  componentDidMount = () => {
    this.getPost();
  }

  getPost = () => {
    axios.get('http://localhost:8080/api')
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
      this.resetUserInputs();
      this.getPost();
    })
    .catch(() => {
      console.log('server error')
    });

  };

  resetUserInputs = () => {
    this.setState({
      title: '',
      body: ''
    })
  }

  displayPost = (posts) => {
    if(!posts.length) return null;

    return posts.map((post, index) => {
      <div key={index}>
        <h3>{posts.title}</h3>
    <p>{posts.body}</p>

      </div>
    })
  }
  render() {

  return (
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
      <div className="blog-post">
        {this.displayPost(this.state.posts)}
      </div>
      </div>
  );
   }}
   export default Dashboard;