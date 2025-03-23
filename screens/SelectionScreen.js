// PharmacistSelectionScreen.js

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Button, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Oncologist from './Oncologists';
import Pharmacist from './Pharmacists';

const PharmacistSelectionScreen = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelection = () => {
    console.log("Selected Option:", selectedOption);
  
    if (selectedOption === 'Pharmacist') {
      console.log("Navigating to Pharmacists");
      navigation.navigate('Pharmacist');
    } else if (selectedOption === 'Oncologist') {
      console.log("Navigating to Oncologists");
      navigation.navigate('Oncologist');
    }
    // Add more console logs for other conditions if needed
  };
  

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Select Your Role</Title>

      <RadioButton.Group onValueChange={(value) => setSelectedOption(value)} value={selectedOption}>
        <View style={styles.radioButtonContainer}>
          <RadioButton.Item label="Pharmacist" value="Pharmacist" color="white" labelStyle={styles.radioButtonLabel} />
          <RadioButton.Item label="Oncologist" value="Oncologist" color="white" labelStyle={styles.radioButtonLabel} />
          <RadioButton.Item label="Doctor" value="Doctor" color="white" labelStyle={styles.radioButtonLabel} />
          <RadioButton.Item label="Others" value="Others" color="white" labelStyle={styles.radioButtonLabel} />
        </View>
      </RadioButton.Group>

      <Button mode="contained" onPress={handleSelection} style={styles.submitButton}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginBottom: 16,
  },
  radioButtonContainer: {
    marginTop: 16,
  },
  radioButtonLabel: {
    color: 'white',
  },
  submitButton: {
    marginTop: 20,
  },
});

export default PharmacistSelectionScreen;
