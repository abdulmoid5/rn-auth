import {Button, GestureResponderEvent, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Header from './src/components/atoms /header/Header';
import Textinput from './src/components/atoms /textinput/Textinput';

const App = () => {
  const [text, setText] = useState<string>('');
  function handleButtonPress(_event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      <Header title={'Firebase Auth'} />
      <Textinput
        placeholder={''}
        value={text}
        onChangeText={(newText: string) => setText(newText)}
      />
      <Button
        title="Submit"
        onPress={handleButtonPress}
        style={styles.button}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: '20%'},
  button: {
    // You can apply custom styles to the button if needed
  },
});
