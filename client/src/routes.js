import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LinksPage } from './Components/LinksPage';
import { CreatePage } from './Components/CreatePage';
import { DetailPage } from './Components/DetailPage';
import { Auth } from './Components/Auth';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/links' exact>
                    <LinksPage />
                </Route>
                <Route path='/create' exact>
                    <CreatePage />
                </Route>
                <Route path='/detail/:id'>
                    <DetailPage />
                </Route>
                <Redirect to='/create' />
            </Switch>
        );
    }
    return (
        <Switch>
            <Route path='/' exact>
                <Auth />
            </Route>
            <Redirect to='/' />
        </Switch>
    );
}