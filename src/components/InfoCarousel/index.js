import * as React from 'react';
import {
  Text, 
  View,
  StyleSheet,
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

export default class InfoCarousel extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      activeIndex:0,
      carouselItems: [
        {
          title: '24 hours real time chat', 
          text: `Realtime messaging refers to the distribution 
            and delivery of messages that are designed to 
            be consumed or otherwise used in real time`,
        },
        {
          title:"Item 2",
          text: "Text 2",
        },
        {
          title:"Item 3",
          text: "Text 3",
        },
        {
          title:"Item 4",
          text: "Text 4",
        },
        {
          title:"Item 5",
          text: "Text 5",
        },
      ]
    }
  }

  _renderItem({item,index}){
    return (
      <View>
        <Text style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.text}>
            {item.text}
          </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={{ justifyContent: 'space-between' }}>
        <Carousel
          ref={ref => this.carousel = ref}
          data={this.state.carouselItems}
          renderItem={this._renderItem}
          onSnapToItem = { index => this.setState({activeIndex:index}) }
          itemWidth={300}
          sliderWidth={300}
        />
        <Pagination
          activeDotIndex={this.state.activeSlide}
          dotsLength={this.state.carouselItems.length}
          dotStyle={styles.pagination}
          containerStyle={styles.containerPagination}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    textAlign: 'center',
  },
  text: {
    color: '#a1a1a1',
    textAlign: 'center',
  },
  pagination: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  containerPagination: {
    paddingVertical: 0,
  }
});
