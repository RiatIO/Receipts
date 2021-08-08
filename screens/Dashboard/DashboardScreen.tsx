import * as React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

import { Text } from "../../components/Themed";
import { getCollections } from "../../service/collections/Collections";
import { CollectionCreate } from "./components/Collections/CollectionCreate";
import { CollectionsCard } from "./components/Collections/CollectionsCard";

const Content = styled.View`
  height: 100vh;
  align-items: "center";
  flex: 1;
  overflow-y: "scroll";
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;

export default function DashboardScreen() {
  getCollections().then((items) => {
    items.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  });

  return (
    <Content>
      <ScrollView>
        <Title>Dashboard</Title>
        <Container>
          <CollectionsCard />
        </Container>
      </ScrollView>
      <CollectionCreate />
    </Content>
  );
}
