import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Homepage from "./app/screens/Homepage";
import newAPI from "./app/apis/rates";

const App = ({ navigation }) => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    getRatesFromAPI();
  }, []);

  function getRatesFromAPI() {
    newAPI
      .get(
        "latest?access_key=76d6acb0420f7522a14a1700bb00123b&symbols=USD,AUD,CAD,PLN,MXN&format=1"
      )
      .then(function (response) {
        setRates(response.data.rates);
        console.log(rates);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (!rates) {
    return null;
  }
};

export default function App() {
  return {
    <View>
    <FlatList data={rates.rates}
    keyExtractor={(item, index) => 'key' + index}
    renderItem={(item) => {
      return  <Homepage />;
    }}
    />
  </View>
  }
  
}
