import React from "react";
import { View, Text, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function App() {

  const navigation = useNavigation();

  return (
    <View>
      <Text>Pagina Home</Text>
      <Button title="Detalhes" onPress={() => navigation.navigate("Detail")} />
    </View>
  )
}