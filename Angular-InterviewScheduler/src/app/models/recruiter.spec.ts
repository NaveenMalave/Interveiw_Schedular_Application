import { Recruiter } from './recruiter';

describe('Recruiter', () => {
  it('should create an instance', () => {
    expect(new Recruiter(0, new Date(), {hours:0, minutes:0}, 0, '', '', '', '', '', '', '', 0)).toBeTruthy();
  });
});
