import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { createClient, Provider as UrqlProvider, defaultExchanges, subscriptionExchange } from 'urql'
import store from './store'

const subscriptionClient = new SubscriptionClient('ws://react.eogresources.com/graphql')

const client = createClient({
    url: 'https://react.eogresources.com/graphql',
    exchanges: [...defaultExchanges, subscriptionExchange({
        forwardSubscription: operation => subscriptionClient.request(operation)
    })]
})

ReactDOM.render(
    <UrqlProvider value={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </UrqlProvider>
    , document.getElementById('root'));
