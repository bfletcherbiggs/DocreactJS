import React from 'react';
import PropTypes from 'prop-types';
import Editor from '../Editor';
import Preview from '../Preview';
import style from './style.styl';

class Playground extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      code: this.parseCodeToTxt(this.props.example)
    }
  }

  static propTypes = {
    className: PropTypes.string,
    example: PropTypes.object,
    componentName: PropTypes.string,
    noRender: PropTypes.bool,
    context: PropTypes.object
  };

  static defaultProps = {
    className: '',
    example: {},
    componentName: '',
    noRender: true,
    context: {}
  }

  parseCodeToTxt(exampleObj) {
    return (
      `${/\/\*{2}[^]+(?=export default)/.exec(exampleObj.code)[0].trim()}
  return <${exampleObj.name} />`
    )
  }

  handleCodeChange = (code) => {
    this.setState({ code });
  };

  render () {
    const { className } = this.props;
    const { code } = this.state;
    return (
      <aside className={className}>
        <Editor
          ref='editor'
          className={style.editor}
          codeText={code}
          onChange={this.handleCodeChange}
        />
        <Preview
          className={style.preview}
          code={code}
        />
      </aside>
    );
  }
}

export default Playground;
