import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const MyMain: FC = () => {
  return (
    <div>This is root page</div>
  );
}

const MySecond: FC = () => {
  return (
    <div>This is second page</div>
  );
}

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={MyMain} />
      <Route exact path="/second" component={MySecond} />
      <Redirect to="/" />
    </Switch>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
