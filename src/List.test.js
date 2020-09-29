// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';
// make the App component available
import List from './List';

import renderer from 'react-test-renderer';



// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<List cards={[]}/>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});



it('render the UI as expected', () => {
    const tree = renderer
        .create(<List cards={[]}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();  
});

