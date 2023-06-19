import React from 'react';
import {Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {Rating} from 'react-native-ratings';

const RatingWithText = ({averageRating}: {averageRating: number}) => {
  return (
    <View style={tw`items-center`}>
      <Rating
        readonly
        ratingCount={5}
        imageSize={17}
        startingValue={averageRating}
      />
      <Text>{averageRating.toFixed(1)}</Text>
    </View>
  );
};

export default RatingWithText;
