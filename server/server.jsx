// server/server.jsx
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MyComponent from '../client/src/components/MyComponent';

const renderComponent = () => {
    return ReactDOMServer.renderToString(<MyComponent />);
};

export default renderComponent;
