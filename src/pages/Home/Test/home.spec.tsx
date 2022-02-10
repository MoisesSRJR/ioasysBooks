import { queryByAttribute, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from '..';

const getById = queryByAttribute.bind(null, 'id');

// Teste de renzderizacão page Home
it('Test renders page Home', () => {
  const home = document.createElement('home');
  ReactDOM.render(
    <Router>
      <Home />
    </Router>,

    home,
  );
});

// Teste de renzderizacão styled e informações home
it('Test renders elements home', () => {
    const dom = render(
      <Router>
        <Home />
      </Router>,
    );
    const Container = getById(dom.container, 'container');
    const ContainerMobile = getById(dom.container, 'containerMobile');
    const ContainerTitle = getById(dom.container, 'containerTitle');
    const ContainerMobileTitle = getById(dom.container, 'containerMobileTitle');
    const ContainerBook = getById(dom.container, 'containerBook');
    expect(Container);
    expect(ContainerMobile);
    expect(ContainerTitle);
    expect(ContainerMobileTitle);
    expect(ContainerBook);
  });