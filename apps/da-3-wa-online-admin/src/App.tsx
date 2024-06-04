import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InvitationList } from "./invitation/InvitationList";
import { InvitationCreate } from "./invitation/InvitationCreate";
import { InvitationEdit } from "./invitation/InvitationEdit";
import { InvitationShow } from "./invitation/InvitationShow";
import { GuestList } from "./guest/GuestList";
import { GuestCreate } from "./guest/GuestCreate";
import { GuestEdit } from "./guest/GuestEdit";
import { GuestShow } from "./guest/GuestShow";
import { RsvpList } from "./rsvp/RsvpList";
import { RsvpCreate } from "./rsvp/RsvpCreate";
import { RsvpEdit } from "./rsvp/RsvpEdit";
import { RsvpShow } from "./rsvp/RsvpShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Da3wa Online"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Invitation"
          list={InvitationList}
          edit={InvitationEdit}
          create={InvitationCreate}
          show={InvitationShow}
        />
        <Resource
          name="Guest"
          list={GuestList}
          edit={GuestEdit}
          create={GuestCreate}
          show={GuestShow}
        />
        <Resource
          name="Rsvp"
          list={RsvpList}
          edit={RsvpEdit}
          create={RsvpCreate}
          show={RsvpShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
