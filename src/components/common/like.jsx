import React from 'react';

const Like = (props) => {
    let classes = 'fa fa-heart';
    if (!props.isLiked)
        classes += '-o';

    return ( <span><i onClick={props.onClick} style={{cursor: 'pointer'}} className={classes} aria-hidden="true"></i></span> );
}
 
export default Like;