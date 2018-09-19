import React from 'react'
import { connect } from 'react-redux'

class PostForm extends React.Component {
  state = { title: '', post: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { title, post } = this.state
    const name = { id, title, post }
    dispatch({ type: 'ADD_POST', post, title })
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
        <h2>Write a Post</h2>
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

const mapStateToProps = (state) => {
  return { id: state.postId }
}

export default connect(mapStateToProps)(PostForm)