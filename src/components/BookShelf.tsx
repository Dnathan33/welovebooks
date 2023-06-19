import React from 'react';
import {Image, View} from 'react-native';
import rw from 'tailwind-react-native-classnames';
import {BookState} from '../model/BookState';

interface BookShelfProps {
  books: BookState[];
}

const BookShelf = ({books}: BookShelfProps) => {
  return (
    <View
      style={rw`h-36 flex-row mt-8 border-yellow-700 border-solid mb-2 border-b-8 justify-center px-6 mx-4`}>
      {books.map((book: BookState) => (
        <Image key={book.id} source={{uri: book.image}} style={rw`w-1/4 m-3`} />
      ))}
    </View>
  );
};
export default BookShelf;
