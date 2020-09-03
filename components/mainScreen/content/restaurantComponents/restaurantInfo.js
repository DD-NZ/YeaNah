import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import InfoBox from './restaurantInfoBox';
import Button from '../sharedComponents/button';

const getPrice = price => {
  let stringPrice = '';
  for( let i = 0; i < price; i++) {
    stringPrice = stringPrice.concat('$');
  }
  return stringPrice;
}

const RestaurantInfo = ({ theme, info }) => (
  <View style={styles.infoContainer}>
    <View style={styles.topContainer}>
        <View style={styles.title}>
          <Text style={styles.name}>{info.name}</Text>
          <Text style={{color: theme.primary, ...styles.rating}}>{info.rating}</Text>
        </View>
        <View style={styles.tagsContainer}>
          {
            info.tags.map((tag, index) => (
              <Text
                key={index}
                style={{color: theme.tagsText, ...styles.tags}}
              >
                {
                  tag + (index !== info.tags.length - 1 ? ', ' : '')
                }
              </Text>
            ))
          }
        </View>
        <View style={styles.collectionContainer}>
            { info.delivery &&
                <View style={styles.collectionOptionContainer}>
                  <Text
                    style={{color: theme.primary, ...styles.collectionOptionText}}
                  >
                    Delivery
                  </Text>
                  <Icon name='check' color={theme.primary} size={15} />
                </View>
            }

            { info.pickup &&
              <View style={styles.collectionOptionContainer}>
                <Text
                  style={{color: theme.primary, ...styles.collectionOptionText}}
                >
                  Pickup
                </Text>
                <Icon name='check' color={theme.primary} size={15} />
              </View>
            }
        </View>
    </View>
    <View style={styles.bottomContainer}>
        <InfoBox theme={theme} mainText={getPrice(info.price)} secondryText={'Price'}/>
        <InfoBox theme={theme} mainText={info.distance+"km"} secondryText={'Away'}/>
        <Button
          text='Menu'
          onPressHandler={()=>{}}
          containerStyle={styles.menuButton}
          textStyle={styles.menuButtonTextStyle}
          color={theme.secondryBackground}
          backgroundColor={theme.primary}
        />
        <Button
          text='Zomato'
          icon='external-link'
          onPressHandler={()=>{}}
          containerStyle={styles.zomatoButton}
          textStyle={styles.zomatoButtonText}
          color={theme.primary}
          backgroundColor={theme.secondryBackground}
          iconSize={22}
        />
    </View>
  </View>
);

export default RestaurantInfo;

const styles = StyleSheet.create({
  infoContainer:{
    height: '32%',
    backgroundColor: 'white',
    marginLeft: '3%',
    marginRight: '3%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    position: 'relative',
    zIndex: 1000,
    top: '-14%',
    paddingTop: '2%',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '3%',
    justifyContent: 'space-between'
  },
  topContainer:{

  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name:{
    fontSize: 30,
    fontWeight: "bold",
  },
  rating: {
    fontSize: 30,
    fontWeight: "bold",
  },
  tagsContainer: {
    flexDirection: 'row',
  },
  tags: {
    fontSize: 15,
  },
  collectionContainer: {
    flexDirection: 'row',
  },
  collectionOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  collectionOptionText: {
    fontSize: 15,
    fontWeight: "600",
    marginRight: 2,
  },
  bottomContainer: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  menuButton:{
    flexGrow: 0.4,
    borderRadius: 5,
  },
  menuButtonTextStyle:{
    fontSize: 20,
  },
  zomatoButton:{
    borderRadius: 15,
    flexDirection: 'column',
    padding: 5,
  },
  zomatoButtonText:{
    fontSize: 10,
  }
});
