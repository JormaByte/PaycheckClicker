import { useState } from "react";
import { Pressable, Text, View, TextInput, StyleSheet } from "react-native";

export default function Index() {

  let [rate, setRate] = useState(0)
  let [moneyMade, setMoneyMade] = useState(0)

  const addMoney = () => {
    setMoneyMade(moneyMade + rate)
  }

  return (
    <View
      style={Styles.View}
    >
      <Text>Welcome to the Paycheck Clicker! </Text>
      <Text>- helping you stay motivated :)</Text>

      <Pressable style={Styles.Pressable} onPress={addMoney}><Text>{rate}</Text></Pressable>

      <TextInput
        value={rate.toString()}
        placeholder="Change your daily rate"
        keyboardType="numeric"
        onChangeText={(text) => setRate(parseInt(text))}
      />

      <Text>TOTAL MONEY MADE SO FAR:</Text>
      <Text>{moneyMade} €</Text>
    </View>

  );
}

const Styles = StyleSheet.create({
  View: {
    flex: 1,
    alignItems: "center",
  },
  Pressable: {
    borderWidth: 1,
    borderRadius: 100,
    padding: 20,
    margin: 20
  }
})
