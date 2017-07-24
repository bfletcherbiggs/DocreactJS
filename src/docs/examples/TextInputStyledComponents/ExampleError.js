import React from 'react';
import TextInputStyledComponents from 'component-library/TextInputStyledComponents';

/** Required TextBox with error */
class ExampleError extends React.Component {
  render() {
    return (
      <TextInputStyledComponents
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
