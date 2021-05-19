import { render } from '@testing-library/react';

import List from '../components/List';

describe('List component', () => {
  given('container', () => render((
    <List
      tasks={given.tasks}
      onClickDelete={jest.fn()}
    />
  )));

  context('without tasks', () => {
    it('renders message', () => {
      given('tasks', () => []);
      const { getByText } = given.container;

      expect(getByText('할 일이 없어요!')).toBeInTheDocument();
    });
  });

  context('with tasks', () => {
    it('renders tasks', () => {
      given('tasks', () => [{ id: 1 }, { id: 2 }, { id: 3 }]);
      const { getAllByRole } = given.container;

      expect(getAllByRole('listitem').length).toBe(3);
    });

    it('renders finish button for each task', () => {
      given('tasks', () => [{ id: 1 }, { id: 2 }, { id: 3 }]);
      const { getAllByRole } = given.container;

      expect(getAllByRole('button').length).toBe(3);
    });
  });
});
