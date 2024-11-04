import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import {ProfileStyles} from './Styles';
import {useTranslation} from 'react-i18next';
import {userDetails} from 'services/StoreProvider/Store';

interface ProfileModalProps {
  isVisible?: boolean;
  onClose?: () => void;
  onLogout?: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  isVisible,
  onClose,
  onLogout,
}) => {
  const {t} = useTranslation();
  const {toggleTheme} = userDetails();

  return (
    <>
      <Modal
        transparent={true}
        visible={isVisible}
        animationType="fade"
        onRequestClose={onClose}>
        <View style={ProfileStyles.modalOverlay}>
          <TouchableOpacity
            style={ProfileStyles.modalOverlay}
            onPress={onClose}
          />
          <View style={ProfileStyles.modalContainer}>
            <View style={ProfileStyles.modalHandle} />
            <View style={ProfileStyles.headerContainer}>
              <Text style={ProfileStyles.header}>{t('OPTIONS')}</Text>
              <TouchableOpacity
                onPress={onClose}
                style={ProfileStyles.closeButton}>
                <Image
                  source={require('assets/ic_close.png')}
                  style={ProfileStyles.CloseImage}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={ProfileStyles.modalOption}
              onPress={onLogout}>
              <Text style={ProfileStyles.modalOptionText}>{t('LOGOUT')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={ProfileStyles.modalOption}
              onPress={toggleTheme}>
              <Text style={ProfileStyles.modalOptionText}>Change Theme</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ProfileModal;
