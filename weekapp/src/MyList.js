import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  Modal,
  Alert,
  Pressable
} from 'react-native';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Physics',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Chemistry',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Biology',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d12',
    title: 'ICT',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d23',
    title: 'Math',
  },

];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MyList = () => {
  const navigation = useNavigation();

  const [myData, setMyData] = useState(DATA)

  const handleAddItem = (title, id) => {
    const newItem = {
      id: id, // You need to implement the logic to generate a unique ID.
      title: title,
    };

    setMyData((prevData) => [...prevData, newItem]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={myData}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <MyModal handleAddItem={handleAddItem} myData={myData} navigation={navigation} />
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
};

const MyModal = ({ handleAddItem }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newItemTitle, setNewItemTitle] = useState('');

  const handleAddNewItem = () => {
    handleAddItem(newItemTitle);
    setNewItemTitle();
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit is MyList</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleAddNewItem}>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide My Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Add a new item to My List</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    height: 40,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 20,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default MyList;