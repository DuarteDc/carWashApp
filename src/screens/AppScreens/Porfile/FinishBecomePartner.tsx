import { StyleSheet,Text,View } from "react-native"
import { Layout } from "../../../compopnents/ui"
import Ionicons from 'react-native-vector-icons/Ionicons';


const FinishBecomePartner = () => {
  return (
    <Layout>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.text}>Subir INE</Text>
          <View style={styles.iconConatiner}>
          <View style={styles.iconConatinerChild}>
            <Ionicons name="md-arrow-up" size={30} />
          </View>
          </View>
        </View>
      </View>

    </Layout>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    backgroundColor: '#2B3567',
    paddingHorizontal: 20,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40
  },
  iconConatiner:{
    backgroundColor: '#171A33',
    padding: 30,
    borderRadius: 100,
    margin: 10
  },
  iconConatinerChild: {
    backgroundColor: '#F64A72',
    borderRadius: 100,
    paddingVertical: 15,
    paddingHorizontal: 17
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default FinishBecomePartner