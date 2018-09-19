import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Post = ({id, title, post, dispatch }) => (
 <Fragment>
   <div>
     <h2>{title}</h2>
      <p>{post}</p>
    </div>
    <hr />
  </Fragment>
)

export default connect()(Post)