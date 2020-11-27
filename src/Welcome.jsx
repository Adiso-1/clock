import React from 'react';

function Welcome(props) {
    // console.log(props);
    const { prefix, name, } = props.user;
    // console.log(props.user);
    return (
        <span>Hello, {prefix} {name}!</span>// Component will be here
    );
}
export default Welcome;