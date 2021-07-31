import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import styled from "styled-components/native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { ReceiptCategoryCard } from "./components/ReceiptCategoryCard";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;

const Separate = styled(View)`
  margin-top: 30px;
  height: 100%;
  width: 80%;
`;

export default function DashboardScreen() {
  return (
    <ScrollView>
      <Container>
        {/* <Title>Dashboard</Title> */}
        <ReceiptCategoryCard />
        <ReceiptCategoryCard />
      </Container>
    </ScrollView>
  );
}
