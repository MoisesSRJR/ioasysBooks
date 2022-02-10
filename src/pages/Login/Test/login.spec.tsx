import { queryByAttribute, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Login from '..';

const getById = queryByAttribute.bind(null, 'id');

// Teste de renzderizacão page login
it('Test renders page login', () => {
  const login = document.createElement('login');
  ReactDOM.render(
    <Router>
      <Login />
    </Router>,

    login,
  );
});

// Teste de renzderizacão styled e informações login
it('Test renders elements login', () => {
    const dom = render(
      <Router>
        <Login />
      </Router>,
    );
    const Container = getById(dom.container, 'container');
    const ContainerMobile = getById(dom.container, 'containerMobile');
    
    expect(Container);
    expect(ContainerMobile);
   
  });