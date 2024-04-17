//Source code generated by AppGPT (www.appgpt.tech)
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { customDataProvider } from './dataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard } from './dashboard';
import { authProvider, apInitialize } from './authProvider';
import { i18nProvider } from './i18nProvider';
import LoginPage, { Login } from './Login';
import data from './data';
import { GamesList, GamesCreate, GamesEdit } from './resources/Games';
import { UsersList, UsersCreate, UsersEdit } from './resources/Users';
import { WalletsList, WalletsCreate, WalletsEdit } from './resources/Wallets';
import {
  TransactionsList,
  TransactionsCreate,
  TransactionsEdit,
} from './resources/Transactions';
import {
  ControllerList,
  ControllerCreate,
  ControllerEdit,
} from './resources/Controller';
import GamesIcon from '@mui/icons-material/Casino';
import UsersIcon from '@mui/icons-material/Person';
import WalletsIcon from '@mui/icons-material/AccountBalance';
import TransactionsIcon from '@mui/icons-material/MonetizationOn';
import ControllerIcon from '@mui/icons-material/Gamepad';
// SUPERTOKENS
import React from 'react';
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from 'supertokens-auth-react';
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + '/auth',
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === 'true') {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      '/proxy',
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/abc210378">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != 'DEV' ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="Games"
          options={{ label: 'Games' }}
          list={GamesList}
          create={GamesCreate}
          edit={GamesEdit}
          recordRepresentation="gameName"
          icon={GamesIcon}
        />
        <Resource
          name="Users"
          options={{ label: 'Users' }}
          list={UsersList}
          create={UsersCreate}
          edit={UsersEdit}
          recordRepresentation="username"
          icon={UsersIcon}
        />
        <Resource
          name="Wallets"
          options={{ label: 'Wallets' }}
          list={WalletsList}
          create={WalletsCreate}
          edit={WalletsEdit}
          recordRepresentation="userId"
          icon={WalletsIcon}
        />
        <Resource
          name="Transactions"
          options={{ label: 'Transactions' }}
          list={TransactionsList}
          create={TransactionsCreate}
          edit={TransactionsEdit}
          recordRepresentation="transactionId"
          icon={TransactionsIcon}
        />
        <Resource
          name="Controller"
          options={{ label: 'Controller' }}
          list={ControllerList}
          create={ControllerCreate}
          edit={ControllerEdit}
          recordRepresentation="controllerId"
          icon={ControllerIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
