import { Task } from '../schemas/Task';

describe('Task', () => {
  it('should be defined', () => {
    expect(new Task()).toBeDefined();
  });
});
