import { queryByAttribute, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Detail } from '..';

const getById = queryByAttribute.bind(null, 'id');

// Teste de renzderizacão component modal
it('Test renders component modal', () => {
  const modal = document.createElement('modal');
  ReactDOM.render(
    <Router>
      <Detail />
    </Router>,

    modal,
  );
});

