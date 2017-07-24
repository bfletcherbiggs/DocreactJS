import React from 'react';
import PropTypes from 'prop-types';
import Summary from './Summary';
import Playground from './Playground';
import style from './style.styl';

const ComponentPage = ({component}) => {
  const {name, examples} = component;

  return (
    <div className={`componentpage`}>
      <Summary component={component} />
      <Playground className={style.playground} componentName={name} example={examples[0]}/>
    </div>
  )
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;
