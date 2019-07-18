import React from 'react';
import App from './App'
import HomePage from './Pages/HomePage';
import UsersListPage, { loadData } from './Pages/UsersListPage';
import AdminsListPage from './Pages/AdminsListPage';
import NotFoundPage from './Pages/NotFoundPage';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...AdminsListPage,
                path: '/admins'
            },
            {
                ...UsersListPage,
                path: '/users'
            },
            {
                ...NotFoundPage
            }
        ]
    }
];