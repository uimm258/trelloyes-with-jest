// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

import renderer from 'react-test-renderer';


// make the App component available
import App from './App';

// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<App lists={[]}/>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});


it('render the UI as expected', () => {
    const tree = renderer
        .create(<App lists={[]}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();  
});