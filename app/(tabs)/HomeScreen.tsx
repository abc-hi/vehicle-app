

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Services Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Services</Text>
        <View style={styles.iconContainer}>
          {/* Nearby Parking */}
          <TouchableOpacity style={styles.iconWrapper}>
            <Ionicons name="car-outline" size={40} color="#1E90FF" />
            <Text style={styles.iconText}>Nearby Parking</Text>
          </TouchableOpacity>

          {/* EV Parking */}
          <TouchableOpacity style={styles.iconWrapper}>
            <Ionicons name="battery-charging-outline" size={40} color="#1E90FF" />
            <Text style={styles.iconText}>EV Parking</Text>
          </TouchableOpacity>

          {/* Car Wash */}
          <TouchableOpacity style={styles.iconWrapper}>
            <Ionicons name="water-outline" size={40} color="#1E90FF" />
            <Text style={styles.iconText}>Car Wash</Text>
          </TouchableOpacity>

          {/* Vehicle Insurance */}
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="shield-car" size={40} color="#1E90FF" />
            <Text style={styles.iconText}>Vehicle Insurance</Text>
          </TouchableOpacity>

          {/* Road Assistance */}
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="road-variant" size={40} color="#1E90FF" />
            <Text style={styles.iconText}>Road Assistance</Text>
          </TouchableOpacity>

          {/* Pay Challan */}
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="file-document-outline" size={40} color="#1E90FF" />
            <Text style={styles.iconText}>Pay Challan</Text>
          </TouchableOpacity>

          {/* Toll Estimator */}
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="toll" size={40} color="#1E90FF" />
            <Text style={styles.iconText}>Toll Estimator</Text>
          </TouchableOpacity>

          {/* Valet Parking */}
          <TouchableOpacity style={styles.iconWrapper}>
            <FontAwesome5 name="parking" size={40} color="#1E90FF" />
            <Text style={styles.iconText}>Valet Parking</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* FASTag Recharge Section */}
      <View style={styles.fastagContainer}>
        <Text style={styles.title}>FASTag Recharge</Text>
        <TextInput
          style={styles.input}
          placeholder="Add vehicle or chassis number"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.rechargeButton}>
          <Text style={styles.buttonText}>Recharge</Text>
        </TouchableOpacity>

        {/* FASTag Options */}
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="credit-card-plus-outline" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>Buy FASTag</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="refresh" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>Replace FASTag</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="check-circle-outline" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>Activate FASTag</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="close-circle-outline" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>Close FASTag</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recharge and Bill Payments Section */}
      <View style={styles.paymentContainer}>
        <Text style={styles.title}>Recharge and Bill Payments</Text>

        <View style={styles.iconContainer}>
          {/* FASTag Recharge */}
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="toll" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>FASTag Recharge</Text>
          </TouchableOpacity>

          {/* Mobile Recharge */}
          <TouchableOpacity style={styles.iconWrapper}>
            <Ionicons name="phone-portrait-outline" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>Mobile Recharge</Text>
          </TouchableOpacity>

          {/* Electricity */}
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="flash" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>Electricity</Text>
          </TouchableOpacity>

          {/* Water */}
          <TouchableOpacity style={styles.iconWrapper}>
            <Ionicons name="water-outline" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>Water</Text>
          </TouchableOpacity>

          {/* Gas Cylinder */}
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="gas-cylinder" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>Gas Cylinder</Text>
          </TouchableOpacity>

          {/* Loan Payment */}
          <TouchableOpacity style={styles.iconWrapper}>
            <FontAwesome5 name="file-invoice-dollar" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>Loan Payment</Text>
          </TouchableOpacity>

          {/* DTH */}
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="satellite-variant" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>DTH</Text>
          </TouchableOpacity>

          {/* House Rent */}
          <TouchableOpacity style={styles.iconWrapper}>
            <Ionicons name="home-outline" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>House Rent</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Your Car's Center Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Your Car's Center</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="file-document-outline" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>Pay Challans</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="police-badge-outline" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>Crime Reporter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="office-building" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>RTO Center</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="certificate" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>PUCC Center</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Exclusive Offers Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Exclusive Offers</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="gift-outline" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>Rewards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="sale" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>Discounts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="account-group-outline" size={30} color="#1E90FF" />
            <Text style={styles.iconText}>Refer & Win</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  sectionContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    alignItems: 'center',
    marginVertical: 10,
    width: '22%', // Consistent size
  },
  iconText: {
    marginTop: 5,
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
  fastagContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  rechargeButton: {
    backgroundColor: '#1E90FF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  paymentContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    elevation: 3,
  },
});
