import React from 'react';
import SideBar from './layout/Sidebar';
import ComponentMain from './layout/ComponentMain';
import componentData from '../../config/componentData';
import style from './style.styl';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({route: window.location.hash.substr(1)})
    })
  }

  render() {
    const {route} = this.state;
    const component = route ? componentData.filter( component => component.name === route)[0] : componentData[0];

    return (
      <div>
        <SideBar components={componentData.map(component => component.name)} />
        <ComponentMain component={component} />
      </div>
    )
  }
}
