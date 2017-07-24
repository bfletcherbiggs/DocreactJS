import React from 'react';
import TextInput from 'component-library/TextInput';

/** Optional TextBox */
class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInput
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
       />
    )
  }
}

export default ExampleOptional;
