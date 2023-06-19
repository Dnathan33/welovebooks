import React from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {ScaleDecorator} from 'react-native-draggable-flatlist';
import {BookState} from '../model/BookState';
import RatingWithText from './Rating';

interface BookItemProps {
  book: BookState;
  isActive: boolean;
  drag: () => void;
  onFavorite: (id: string) => void;
}

const BookItem = ({book, drag, onFavorite}: BookItemProps) => {
  const starIcon = book.starred
    ? require('../assets/starFilled.png')
    : require('../assets/star.png');

  return (
    <ScaleDecorator>
      <TouchableOpacity
        key={book.id}
        style={[styles.container]}
        onLongPress={drag}>
        <Pressable onPress={() => onFavorite(book.id)}>
          <Image source={starIcon} style={styles.image} />
        </Pressable>
        <View style={tw`flex-1`}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author}</Text>
        </View>
        <RatingWithText averageRating={book.avgRating} />
      </TouchableOpacity>
    </ScaleDecorator>
  );
};

export default BookItem;

const styles = {
  container: tw`flex-row items-center p-4 bg-white rounded-lg shadow-md my-2`,
  image: tw`w-10 h-10 mr-4`,
  title: tw`text-lg font-bold`,
  author: tw`text-gray-600 mb-2`,
};
