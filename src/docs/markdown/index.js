import 'highlight.js/styles/github-gist';
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.styl';

const Markdown = (props) => {
  let className = style.markdown;
  if (props.className) className += ` ${props.className}`;

  const html = {
    __html: props.markdown
  };

  return <article className={className} dangerouslySetInnerHTML={html} />;
};

Markdown.propTypes = {
  className: PropTypes.string,
  markdown: PropTypes.string.isRequired
};

Markdown.defaultProps = {
  className: ''
};


export default Markdown;
