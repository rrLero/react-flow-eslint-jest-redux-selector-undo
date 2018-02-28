import fullName from '../fullname';

describe('fullName', () => {
    it('Should return "firstName lastName" if both exist', () => {
        const user = {
            firstName: 'Leonid',
            lastName: 'Baida',
            login: 'leonid.baida@gmail.com'
        };
        expect(fullName(user)).toEqual('Leonid Baida');
    });

    it('Should return "firstName" if lastName is missed', () => {
        const user = {
            firstName: 'Leonid',
            login: 'leonid.baida@gmail.com'
        };
        expect(fullName(user)).toEqual('Leonid');
    });

    it('Should return "lastName" if firstName is missed', () => {
        const user = {
            lastName: 'Baida',
            login: 'leonid.baida@gmail.com'
        };
        expect(fullName(user)).toEqual('Baida');
    });

    it('Should return "login" if both names (first and last) are missed', () => {
        const user = {
            login: 'leonid.baida@gmail.com'
        };
        expect(fullName(user)).toEqual('leonid.baida@gmail.com');
    });
});
