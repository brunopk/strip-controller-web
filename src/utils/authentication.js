const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        setTimeout(cb, 100);
    }
};

export {fakeAuth};
