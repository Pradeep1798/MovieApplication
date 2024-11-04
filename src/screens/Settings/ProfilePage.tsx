import CustomSafeArea from 'components/CustomSafearea';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ProfileStyles} from './Styles';
import {useTranslation} from 'react-i18next';

const ProfilePage = () => {
  const {t} = useTranslation();
  return (
    <CustomSafeArea>
      <Text style={ProfileStyles.title}>{t('TAB.SETTINGS')}</Text>
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

        <TouchableOpacity style={ProfileStyles.optionContainer}>
          <View style={ProfileStyles.iconContainer}>
            <Image source={require('assets/Profile_icon.png')} />
          </View>
          <Text style={ProfileStyles.optionText}>{t('SETTINGS.ACCOUNT')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ProfileStyles.optionContainer}>
          <View style={ProfileStyles.iconContainer}>
            <Image source={require('assets/Appearence_icon.png')} />
          </View>
          <Text style={ProfileStyles.optionText}>
            {t('SETTINGS.APPEARANCE')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={ProfileStyles.optionContainer}>
          <View style={ProfileStyles.iconContainer}>
            <Image source={require('assets/Help_icon.png')} />
          </View>
          <Text style={ProfileStyles.optionText}>{t('SETTINGS.HELP')}</Text>
        </TouchableOpacity>
      </View>
    </CustomSafeArea>
  );
};

export default ProfilePage;
