import CustomSafeArea from 'components/CustomSafearea';
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {ProfileStyles} from './Styles';
import {useTranslation} from 'react-i18next';
import {userDetails} from 'services/StoreProvider/Store';
import ProfileModal from './AccountModal';
import {SCREENS} from 'screens/root/RootScreens';
import {replace} from 'screens/root/NavigationService';
import {localStorage} from 'services/ServiceExports';

const ProfilePage = () => {
  const {t} = useTranslation();
  const {emailId, usernameId} = userDetails();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.ClearAllData();
    replace(SCREENS.LOGIN);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

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
            <Text style={ProfileStyles.profileName}>
              {usernameId ? usernameId : 'Wordler'}
            </Text>
            <Text style={ProfileStyles.profileEmail}>{emailId}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={ProfileStyles.optionContainer}
          onPress={toggleModal}>
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
      <ProfileModal
        isVisible={modalVisible}
        onClose={toggleModal}
        onLogout={handleLogout}
      />
    </CustomSafeArea>
  );
};

export default ProfilePage;
