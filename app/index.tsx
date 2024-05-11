import { useState } from "react";
import { Pressable, Text, View, TextInput, StyleSheet } from "react-native";
import NumberFormat from "react-number-format"

export default function Index() {

  let [rate, setRate] = useState(0.0)
  let [moneyMade, setMoneyMade] = useState(0.0)

  let [dailyHours, setDailyHours] = useState(7.5)
  let [payPerHour, setPayPerHour] = useState(12.0)

  const addMoney = () => {
    setMoneyMade(moneyMade + rate)
  }
  const Calculate = () => {
    setRate(dailyHours * payPerHour)
  }


  return (
    <View style={Styles.View}>
      
      <Text style={[Styles.Text, {marginTop: '25%'}]}>Welcome to the Paycheck Clicker! </Text>
      <Text style={{color: '#EDED89', fontWeight: 'bold', opacity: 0.3}}>- helping you stay motivated :)</Text>

      <Pressable style={Styles.Pressable} onPress={addMoney}>
        <Text style={Styles.PressableText}>{rate}</Text>
      </Pressable>

      <Text style={Styles.Text}>Calculate your daily rate:</Text>
      <Text style={Styles.InfoText}>(Daily paid hours multiplied by your pay per hour)</Text>
      <View style={Styles.Calculator}>
      <TextInput 
  style={Styles.CalculatorInput}
  value={dailyHours === 0 ? '' : dailyHours.toString()}
  onChangeText={(text) => {
    const parsedValue = parseInt(text);
    if (!isNaN(parsedValue) || text === '') { // Check if the input is a valid number or empty
      setDailyHours(text === '' ? 0 : parsedValue); // If empty, set to 0, otherwise set to parsed value
    }
  }}
/>
        
        <Text style={{color: '#EDEDCA'}}>  X </Text>
        <TextInput 
  style={Styles.CalculatorInput}
  value={payPerHour === 0 ? '' : payPerHour.toString()}
  onChangeText={(text) => {
    const parsedValue = parseFloat(text);
    if (!isNaN(parsedValue) || text === '') { // Check if the input is a valid number or empty
      setPayPerHour(text === '' ? 0 : parsedValue); // If empty, set to 0, otherwise set to parsed value
    }
  }}
/>
        </View>
        <Pressable style={Styles.CalculatorPress} onPress={Calculate}>
          <Text style={Styles.Calculate}>Calculate</Text>
        </Pressable>

      <Text style={Styles.Text}>TOTAL MONEY MADE SO FAR:</Text>
      <Text style={Styles.Text}>{moneyMade} €</Text>

    </View>

  );
}

const Styles = StyleSheet.create({
  View: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#001C1A'  
  },
  Text: {
    fontSize: 20,
    color: '#EDED89',
    fontWeight: 'bold',
    
  },
  PressableText: {
    textAlign: 'center',
    fontSize: 34,
    color: '#EDED89'
  },
  Pressable: {
    borderWidth: 1,
    borderColor: '#EDED89',
    width: 99,
    height: 99,
    borderRadius: 99/2,
    padding: 20,
    margin: 20,
    justifyContent: 'center',
    backgroundColor: '#00251A'
    
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
    textAlign: 'center',
    color: '#EDEDCA',
    fontSize: 24
  },
  CalculatorPress: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginBottom: 40,
    backgroundColor: '#EDED89'

  },
  Calculate: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#003D39'
  },
  InfoText: {
    color: '#EDEDCA',
    opacity: 0.3,
    marginTop: 5
  }
})
