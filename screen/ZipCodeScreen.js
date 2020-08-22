import React from 'react'
import { FlatList, View , Text, StyleSheet, SafeAreaView, ImageBackground} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '../utils/animations';
import pic1 from '../img/thai.jpg'


const availableZipItems = [
  { place: 'Hatyai'       , code: '90110' },
  { place: 'Trang'        , code: '92000' },
  { place: 'Chiangmai'    , code: '50000' },
  { place: 'Khonkaen'     , code: '40000' },
  { place: 'Chonburi'     , code: '20000' }
 ]

const ZipItem = ({place, code, pic, navigation}) =>(
    <TouchableHighlight onPress ={() => {
        navigation.navigate('Weather' , {zipCode: code})
    }}>
      <View>
        <View>
            <ImageBackground source={pic1} style = {styles.imgs}/> 
            <Text style={styles.base}>{place}</Text>
            <Text style={styles.base2}>{code}</Text>
        </View> 
      </View>
      </TouchableHighlight>

)


export default function ZipCodeScreen(){
    const navigation = useNavigation()

    return(
     <SafeAreaView style={{flex: 1, 
                          backgroundColor:'#FF6666',
                          paddingTop: 150, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={'stack'} layoutCardOffset={`18`}
                  data = {availableZipItems}
                  keyExtractor = {item => item.code}
                  renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}

                  scrollInterpolator={scrollInterpolator}
                  slideInterpolatedStyle={animatedStyles}

                  hasParallaxImages={true}
                  useScrollView={true}

                  sliderWidth={200}
                  itemWidth={322}
                  />
            </View>
          </SafeAreaView>
  
    )
}



const styles = StyleSheet.create({
    base: { 
        backgroundColor:'floralwhite',
        height: 70,
        paddingTop: 15,
        paddingLeft: 25,
        marginLeft: 40,
        marginRight: 0, 
        fontSize: 40, 
        fontWeight: 'bold'
    },
    base2: { 
        backgroundColor:'floralwhite',
        height: -30,
        paddingTop: -30,
        paddingLeft: 25,
        paddingBottom: 20,
        marginLeft: 40,
        marginRight: 0, 
        fontSize: 25, 
    },

    imgs:{
        paddingTop: 130,
        paddingLeft: 25,
        marginLeft: 40,
        marginRight: 0, 
        width:290,
        height:200,
    },
    Text: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        height: '10%'
    },
    background: {
        backgroundColor: '#FF6666',
        marginLeft: 20,
        marginRight: 20,
        margin: 3,
        borderRadius: 50,
    },

    container: { 
        flex: 1, 
        alignItems: 'center', 
        width: '100%', 
        height: '100%'
    },

});