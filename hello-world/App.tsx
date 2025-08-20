import { StyleSheet, View } from "react-native";

export default function app() {
  return(
    <View style={styles.conteiner}>
     <View style={styles.circle}>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
     </View>
     
    </View>

  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex:1,
    backgroundColor: 'red',
  },
  circle: {
    width:400,
    height:400,
    backgroundColor: 'white',
    borderRadius:200,
    marginLeft:150,
    marginTop: 400,
   },
  box1: {
    width:250,
    height: 26,
    marginLeft: 75,
    marginTop: 187,
    backgroundColor: 'black'

  },
  box2: {
    width:26,
    height: 250,
    marginLeft: 187,
    marginTop: 75,
    backgroundColor: 'black'

  }
})