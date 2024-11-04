import CustomSafeArea from 'components/CustomSafearea';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ProfileStyles} from './Styles';

const ProfilePage = () => {
  return (
    <CustomSafeArea>
      <Text style={ProfileStyles.title}>Settings</Text>
      <View style={ProfileStyles.container}>
        <View style={ProfileStyles.profileContainer}>
          <Image
            source={require('assets/Profile_DP.png')}
            style={ProfileStyles.profileImage}
          />
          <View style={ProfileStyles.profileInfo}>
            <Text style={ProfileStyles.profileName}>Worlder</Text>
            <Text style={ProfileStyles.profileEmail}>worlder@wolonote.com</Text>
          </View>
        </View>

        {/* Settings Options */}
        <TouchableOpacity style={ProfileStyles.optionContainer}>
          <View style={ProfileStyles.iconContainer}>
            <Image source={require('assets/Profile_icon.png')} />
          </View>
          <Text style={ProfileStyles.optionText}>Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ProfileStyles.optionContainer}>
          <View style={ProfileStyles.iconContainer}>
            <Image source={require('assets/Appearence_icon.png')} />
          </View>
          <Text style={ProfileStyles.optionText}>Appearance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ProfileStyles.optionContainer}>
          <View style={ProfileStyles.iconContainer}>
            <Image source={require('assets/Help_icon.png')} />
          </View>
          <Text style={ProfileStyles.optionText}>Help</Text>
        </TouchableOpacity>
      </View>
    </CustomSafeArea>
  );
};

export default ProfilePage;
