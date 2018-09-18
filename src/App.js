import React, { Fragment } from 'react'
import Footer from './components/Footer'
import Post from './components/Post'
import PostFeed from './components/PostFeed'
import PostForm from './components/PostForm'

const App = () => (
  <Fragment>
    <PostForm />
    <PostFeed />
    <Footer />
  </Fragment>
)

export default App