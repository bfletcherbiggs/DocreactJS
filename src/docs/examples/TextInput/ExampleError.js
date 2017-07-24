import React from 'react';
import TextInput from 'component-library/TextInput';

/** Required TextBox with error */
class ExampleError extends React.Component {
  render() {
    return (
      <TextInput
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
