import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, RadioButton, Title, Subheading } from 'react-native-paper';

const NurseForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');

  const handleSave = () => {
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Weight:', weight);
    console.log('Gender:', gender);
    // You can perform any further processing or data submission here
  };

  return (
    <View style={styles.container}>
      <Title style={styles.centeredTitle}>Fill up this form</Title>

      <Subheading style={styles.subheading}>Nurse Details</Subheading>
      <TextInput label="Name" value={name} onChangeText={(text) => setName(text)} />
      <TextInput label="Age" value={age} onChangeText={(text) => setAge(text)} keyboardType="numeric" />
      <TextInput
        label="Weight"
        value={weight}
        onChangeText={(text) => setWeight(text)}
        keyboardType="numeric"
      />
      <RadioButton.Group onValueChange={(value) => setGender(value)} value={gender}>
        <View style={styles.radioButtonContainer}>
          <RadioButton.Item label="Male" value="male" />
          <RadioButton.Item label="Female" value="female" />
        </View>
      </RadioButton.Group>

      <Subheading style={styles.subheading}>Report Details</Subheading>
      {/* Add additional fields for the report details (e.g., date of report, etc.) here */}

      <Button mode="contained" onPress={handleSave}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'black',
  },
  centeredTitle: {
    color:'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  subheading: {
    color:'black',
    marginTop: 16,
    marginBottom: 8,
    fontSize: 18,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
});

export default NurseForm;
