import React from 'react'
import { connect } from 'react-redux'

//Props come into the function as an object.
const PostFeed = ({ posts }) => (
  <div>
    <h3>Blog Feed</h3>
      <div>
        { posts.map( ( post, id )  => {
            return (
              <p key={id}>
                {post}
                <hr />
              </p>
            )
          })
        }
      </div>
  </div>
)    

//Redux Store State - turn it into a React Prop
const mapStateToProps = (state) => {
  return { posts: state.posts }
}

//Pass the function as the first parameter to connect, gets the state from the store.
export default connect(mapStateToProps)(PostFeed)