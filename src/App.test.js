import { render, screen } from '@testing-library/react';
import App from './App';

describe('App',()=> {
  it('renders without crashing', () => {
    render(<App />);
    const logo = screen.getByAltText(/Логотип Лофт Такси/i);
    expect(logo).toBeInTheDocument();
  })
})

describe('App renders concurrent page depends on context', () => {

})