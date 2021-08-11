import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Admin from "./../pages/Admin/Admin";
import Signin from "./../pages/Signin/Signin";
import { signInToken } from "./../actions/actions";

function Routes() {
  useEffect(() => {
    async function checkToken() {
      await signInToken();
    }
    checkToken();
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Signin />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  );
}

export default Routes;
