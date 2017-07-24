import React from 'react';
import TextInputCSSModules from 'component-library/TextInputCSSModules';

/** Required TextBox with error */
class ExampleError extends React.Component {
  render() {
    return (
      <TextInputCSSModules
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
