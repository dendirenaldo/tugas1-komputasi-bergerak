import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.gambarBG} source={require('./assets/wisata-01.jpg')}>
        <View style={styles.header}>
          <Text style={styles.headerTeks}>W I S A T A K U</Text>
        </View>
        <View style={styles.lokasi}>
          <Text style={styles.lokasiTeks}> Ciroyom, Bandung</Text>
          <View style={styles.rating}>
            <AntDesign name="heart" color="white" />
            <AntDesign name="heart" color="white" />
            <AntDesign name="heart" color="white" />
            <AntDesign name="heart" color="white" />
            <AntDesign name="hearto" color="white" />
          </View>
        </View>
        <View style={styles.separator}></View>
        <Text style={styles.keterangan}>Lorem Ipsum, Lorem Ipsum</Text>
        <Text style={styles.keterangan}>Lorem Ipsum, Lorem Ipsum</Text>
        <TouchableOpacity style={styles.tombol}>
          <Text style={styles.tombolTeks}>LEBIH BANYAK&gt;</Text>
        </TouchableOpacity>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  lokasi: {
    marginTop: 350,
    paddingLeft: 27,
    paddingRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lokasiTeks: {
    color: 'white',
  },
  keterangan: {
    color: 'white',
    marginLeft: 30,
  },
  separator: {
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    width: 340,
    marginTop: 8,
    marginLeft: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
  },
  headerTeks: {
    color: 'white',
  },
  gambarBG: {
    width: '100%',
    paddingBottom: 10,
  },
  tombol: {
    marginBottom: 10,
    marginLeft: 200,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignSelf: 'flex-end',
    borderRadius: 100
  },
  tombolTeks: {
    color: '#fff'
  },
  rating: {
    width: 80,
    paddingLeft: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly'
  }
});

