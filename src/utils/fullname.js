// @flow

type User = {
    firstName?: string,
    lastName?: string,
    login: string
};

export default (user: User) => {
    if (user.firstName && user.lastName) {
        return `${user.firstName} ${user.lastName}`;
    }
    return user.firstName || user.lastName || user.login;
};
