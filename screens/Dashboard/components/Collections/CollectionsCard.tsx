import React from "react";
import styled from "styled-components/native";
import { View, Text } from "../../../../components/Themed";

const Card = styled.View`
  flex: 1 0 45%;
  height: 100px;
  background-color: red;
  margin: 5px;
`;

export const CollectionsCard = () => {
  return (
    <Card>
      <Text>hi</Text>
    </Card>
  );
};
