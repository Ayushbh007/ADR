import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, RadioButton, Title, Subheading } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';

const OncologistForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [selectedCancer, setSelectedCancer] = useState('');
  const [customCancer, setCustomCancer] = useState(''); // New state for custom cancer input
  const [cancerOptions] = useState([
    { key: 'Breast Cancer', value: 'Breast Cancer' },
    { key: 'Lung Cancer', value: 'Lung Cancer' },
    { key: 'Prostate Cancer', value: 'Prostate Cancer'},
    { key: 'Colon Cancer', value: 'Colon Cancer' },
    { key: 'Ovarian Cancer', value: 'Ovarian Cancer' },
    { key: 'Others', value: 'Others' },
  ]);

  const handleSave = () => {
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Weight:', weight);
    console.log('Gender:', gender);

    // Check if "Others" is selected
    if (selectedCancer === 'Others') {
      console.log('Custom Cancer Type:', customCancer);
    } else {
      console.log('Selected Cancer:', selectedCancer);
    }

    // You can perform any further processing or data submission here
  };

  return (
    <View style={styles.container}>
      <Title style={styles.centeredTitle}>Fill up this form</Title>

      <Subheading style={styles.subheading}>Patient Details</Subheading>
      <TextInput label="Patient Name" value={name} onChangeText={(text) => setName(text)} />
      <TextInput label="Age" value={age} onChangeText={(text) => setAge(text)} keyboardType="numeric" />
      <TextInput label="Weight" value={weight} onChangeText={(text) => setWeight(text)} keyboardType="numeric" />

      <Subheading style={styles.subheading1}>Gender</Subheading>
      <RadioButton.Group onValueChange={(value) => setGender(value)} value={gender}>
        <View style={styles.radioButtonContainer}>
          <RadioButton.Item label="Male" value="male" labelStyle={styles.radioButtonLabel} />
          <RadioButton.Item label="Female" value="female" labelStyle={styles.radioButtonLabel} />
        </View>
      </RadioButton.Group>

      <Subheading style={styles.subheading}>Health Information</Subheading>
      <Subheading style={styles.subheading1}>Types of Cancer</Subheading>
      <SelectList
        data={cancerOptions}
        setSelected={setSelectedCancer}
        onSelect={() => {
          setSelectedCancer;
          setCustomCancer('');
        }}
        placeholder="Select Cancer Type"
      />

      {/* Show additional input for custom cancer type if "Others" is selected */}
      {selectedCancer === 'Others' && (
        <TextInput
          label="Custom Cancer Type"
          value={customCancer}
          onChangeText={(text) => setCustomCancer(text)}
        />
      )}

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
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  subheading: {
    color: 'white',
    marginTop: 16,
    marginBottom: 8,
    fontSize: 18,
  },
  subheading1: {
    color: 'white',
    marginTop: 10,
    marginBottom: 6,
    fontSize: 13,
  },
  radioButtonLabel: {
    color: 'white',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  dropdown: {
    marginTop: 8,
    borderRadius: 4,
  },
});

export default OncologistForm;