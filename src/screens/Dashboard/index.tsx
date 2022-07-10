import React from "react";

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreetings,
  UserName,
  Icon
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

export function Dashboard(){
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ uri: 'https://avatars.githubusercontent.com/u/33676470?v=4'}}
            />
            <User>
              <UserGreetings>Olá, </UserGreetings>
              <UserName>Celso</UserName>
            </User>
          </UserInfo>
        <Icon name='power'/>
        </UserWrapper>
      </Header>
    </Container>
  );
}
