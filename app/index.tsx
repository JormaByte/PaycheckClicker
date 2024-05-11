import { useState } from "react";
import { Pressable, Text, View, TextInput, StyleSheet } from "react-native";
import NumberFormat from "react-number-format"

export default function Index() {

  let [rate, setRate] = useState(0)
  let [moneyMade, setMoneyMade] = useState(0)

  let [dailyHours, setDailyHours] = useState(8)
  let [payPerHour, setPayPerHour] = useState(10)

  const addMoney = () => {
    setMoneyMade(moneyMade + rate)
  }
  const Calculate = () => {
    setRate(dailyHours * payPerHour)
  }

  return (
    <View
      style={Styles.View}
    >
      <Text>Welcome to the Paycheck Clicker! </Text>
      <Text>- helping you stay motivated :)</Text>

      <Pressable style={Styles.Pressable} onPress={addMoney}>
        <Text style={Styles.PressableText}>{rate}</Text>
      </Pressable>

      <Text>Calculate your daily rate:</Text>
      <View style={Styles.Calculator}>
        <TextInput 
        style={Styles.CalculatorInput}
        value={dailyHours.toString()}
        placeholder="Your daily paid hours" 
        onChangeText={(text) => setDailyHours(parseInt(text))}/>
        
        <Text> X </Text>
        <TextInput 
          style={Styles.CalculatorInput}
          value={payPerHour.toString()}
          placeholder="Your daily paid hours" 
          
          onChangeText={(text) => setPayPerHour(parseInt(text))}/>
        </View>
        <Pressable style={Styles.CalculatorPress} onPress={Calculate}>
          <Text style={Styles.Calculate}>Calculate</Text>
        </Pressable>

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
  PressableText: {
    textAlign: 'center',
    fontSize: 34
  },
  Pressable: {
    borderWidth: 1,
    width: 99,
    height: 99,
    borderRadius: 99/2,
    padding: 20,
    margin: 20,
    justifyContent: 'center'
  },
  Calculator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '34%',
    paddingTop: 10,
    paddingBottom: 10
  },
  CalculatorInput: {
    width: '20%',
    textAlign: 'center'
  },
  CalculatorPress: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginBottom: 40,

  },
  Calculate: {
    fontSize: 17,
    fontWeight: 'bold',
  }
})
