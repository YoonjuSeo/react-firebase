import React from 'react'
import Rainbow from '../hoc/Rainbow'

const Contact = (props) =>{
    // setTimeout(() =>{
    //     props.history.push('/about')
    // }, 2000);
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ipsa tenetur placeat. Excepturi rerum enim possimus ut, tempora at quas consequuntur a commodi, quo ex earum hic deserunt aliquam? Eaque!</p>
        </div>
    )
}
export default Rainbow(Contact)