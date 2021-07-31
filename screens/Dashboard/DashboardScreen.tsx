import * as React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

import { Text } from "../../components/Themed";
import { CollectionCreate } from "./components/Collections/CollectionCreate";
import { CollectionsCard } from "./components/Collections/CollectionsCard";

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
  return (
    <>
      <ScrollView>
        <Title>Dashboard</Title>
        <Container>
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
          <CollectionsCard />
        </Container>
      </ScrollView>
      <CollectionCreate />
    </>
  );
}
