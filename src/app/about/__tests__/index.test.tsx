import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import About from '../page';

describe(About.name, () => {
  it('renders a heading', () => {
    render(<About />);

    const element = screen.getByText('Hello Dashboard');

    expect(element).toBeInTheDocument();
  });
});
