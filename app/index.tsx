import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import NumberFormat from "react-number-format"

export default function Index() {
  const [rate, setRate] = useState(0.0);
  const [moneyMade, setMoneyMade] = useState(0.0);
  const [dailyHours, setDailyHours] = useState(7.5);
  const [payPerHour, setPayPerHour] = useState(12.0);
  const [pressed, setPressed] = useState(false);
  const [infoPressed, setInfoPressed] = useState(true)

  const addMoney = () => {
    setMoneyMade(moneyMade + rate);
    setPressed(true);
  };

  const Calculate = () => {
    setRate(dailyHours * payPerHour);
  };

  const info = () => {
    if (infoPressed == true) 
    setInfoPressed(false)
    else (setInfoPressed(true))
  }

  return (
    <View style={Styles.View}>
      <Text style={[Styles.Text, {marginTop: '25%'}]}>Welcome to the Paycheck Clicker! </Text>
      <Text style={{color: '#EDED89', fontWeight: 'bold', opacity: 0.3}}>- helping you stay motivated :)</Text>

        <Text style={Styles.InfoText}> 
        {infoPressed? '➡️  Hold down on the button below to cash in' : '⚪'}</Text>

      <Pressable
        style={({ pressed }) => [
          Styles.Pressable,
          pressed && {
            borderColor: '#001C1A'
          },
        ]}
        onLongPress={addMoney}
        onPressOut={() => setPressed(false)}
      >
        {({ pressed }) => (
          <Text style={Styles.PressableText}>
            {pressed ? '€' : rate}
          </Text>
        )}
      </Pressable>

      <Text style={Styles.Text}>Calculate your daily rate:</Text>
      <Text style={Styles.InfoText}>
        {infoPressed ? '➡️  Daily paid hours multiplied by your pay per hour' : '⚪'}</Text>

      <View style={Styles.Calculator}>
        <TextInput 
          style={Styles.CalculatorInput}
          keyboardType="numeric"
          value={dailyHours === 0 ? '' : dailyHours.toString()}
          onChangeText={(text) => {
            const parsedValue = parseFloat(text);
            if (!isNaN(parsedValue) || text === '') {
              setDailyHours(text === '' ? 0 : parsedValue);
            }
          }}
        />
        <Text style={{color: '#EDEDCA', marginLeft: 9, marginRight: 9}}>X</Text>
        <TextInput 
          style={Styles.CalculatorInput}
          keyboardType="numeric"
          value={payPerHour === 0 ? '' : payPerHour.toString()}
          onChangeText={(text) => {
            const parsedValue = parseFloat(text);
            if (!isNaN(parsedValue) || text === '') {
              setPayPerHour(text === '' ? 0 : parsedValue);
            }
          }}
        />
      </View>
      <TouchableOpacity style={Styles.CalculatorPress} onPress={Calculate}>
        <Text style={Styles.Calculate}>Calculate</Text>
      </TouchableOpacity>

      <Text style={Styles.Text}>TOTAL MONEY MADE SO FAR:</Text>
      <Text style={Styles.Text}>{moneyMade} €</Text>

      <TouchableOpacity style={Styles.InfoPressable} onPress={info}>
        <Text style={Styles.InfoPressableText}>info</Text>
      </TouchableOpacity>
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
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -6, height: 1 },
    textShadowRadius: 5,
  },
  PressableText: {
    textAlign: 'center',
    fontSize: 33,
    color: '#EDED89',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -6, height: 1 },
    textShadowRadius: 5,
  },
  Pressable: {
    borderWidth: 2,
    borderColor: '#EDED89',
    width: 130,
    height: 130,
    borderRadius: 130/2,
    padding: 20,
    margin: 20,
    justifyContent: 'center',
    backgroundColor: '#00251A',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  Calculator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  CalculatorInput: {
    width: '15%',
    textAlign: 'center',
    color: '#EDEDCA',
    fontSize: 24
  },
  CalculatorPress: {
    borderWidth: 9,
    borderBlockColor: 'green',
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
    margin: 15
  },
  InfoPressable: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 26,
    borderRadius: 20,
    marginTop: 80,
    backgroundColor: '#00251A',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  InfoPressableText: {
    color: '#EDEDCA',
    fontSize: 28
  }
});
