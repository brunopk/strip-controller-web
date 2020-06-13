import React from "react";
import {Redirect} from 'react-router-dom'

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
