import React from 'react';
import PropTypes from 'prop-types';
import Example from './Example';
import Props from './Props';
import Playground from './Playground';
import style from './style.styl';

const ComponentPage = ({component}) => {
  const {name, description, props, examples} = component;

let className = style.root + ` ${style['with-playground']}`
  return (
    <div className={`componentpage ${className}`}>
      <h2>{name}</h2>
      <p>{description}</p>

      <h3>Example{examples.length > 1 && "s"}</h3>
      {
        examples.length > 0 ?
        examples.map( example => <Example key={example.name} example={example} componentName={name} /> ) :
        "No examples exist."
      }

      <h3>Props</h3>
      {
        props ?
        <Props props={props} /> :
        "This component accepts no props."
      }
      <h3>Playground</h3>
      <Playground className={style.playground} componentName={name} example={examples[0]}/>
    </div>
  )
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;
