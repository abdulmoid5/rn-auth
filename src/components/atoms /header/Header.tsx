import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
