import { loadUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

test('user', () => {
  httpGet.mockReturnValue('{}');
  loadUser(1);

  expect(httpGet).toHaveBeenCalledTimes(1);
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});
