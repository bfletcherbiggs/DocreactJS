import React from 'react';
import TextInputBEM from 'component-library/TextInputBEM';

/** Required TextBox with error */
class ExampleError extends React.Component {
  render() {
    return (
      <TextInputBEM
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required."
       />
    )
  }
}

export default ExampleError;
