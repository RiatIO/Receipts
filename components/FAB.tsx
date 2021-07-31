import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Button, Icon } from "@ui-kitten/components";

const CircleButton = styled(Button)`
  width: 50px;
  height: 50px;
  background-color: pink;
  position: fixed;
  bottom: 55px;
  right: 5px;
  border-radius: 25px;
`;

const Content = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const StarIcon = () => <Ionicons name="add" size={32} />;

export const FAB = () => {
  return (
    <CircleButton
      status="danger"
      accessoryLeft={StarIcon}
      onPress={() => console.log("hey")}
    />
  );
};
