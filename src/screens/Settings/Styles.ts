import {globalColor} from 'public/globalcolor';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

export const ProfileStyles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: '#888',
    fontSize: 14,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  iconContainer: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalHandle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    marginBottom: 10,
  },
  CloseImage: {
    width: 20,
    height: 20,
    marginBottom: 0,
    alignSelf: 'flex-end',
    right: 0,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 5,
  },
  closeButton: {
    position: 'absolute',
    right: 0,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOption: {
    width: width * 0.8,
    paddingVertical: 12,
    backgroundColor: globalColor.labelColor,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  modalOptionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
