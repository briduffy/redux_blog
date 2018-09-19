import React from 'react'
import { connect } from 'react-redux'

class PostForm extends React.Component {
  state = { title: '', post: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { post, title } = this.state
    dispatch({ type: 'ADD_POST', title, post })
    this.setState({ title: '', post: ''})
  }

  handleChange = (e) => {
   const { name, value } = e.target
   this.setState({ [name]: value }) 
  }

  render(){
    const { title, post } = this.state
    return(
      <div className='container'>
        <h3>Write a Post</h3>
        <form onSubmit={this.handleSubmit}>
        <input
            value={title}
            name="title"
            onChange={this.handleChange}
            placeholder="Post title..."
            required
          />
          <br />
          <textarea
            value={post}
            name="post"
            onChange={this.handleChange}
            required
            placeholder="...start your post."
          />
          <br />
          <button className="btn">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(PostForm)