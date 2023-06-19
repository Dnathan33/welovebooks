import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {
  addBookAction,
  handleFavoriteAction,
  reorderBooksAction,
} from '../redux/actions';
import {selectAllBooks} from '../redux/selectors';
import tw from 'tailwind-react-native-classnames';
import BookShelf from './BookShelf';
import BookItem from './BookItem';
import {generateUUID} from '../utils/uuid';
import {BookState} from '../model/BookState';

const BookLibrary = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);

  useEffect(() => {}, [books]);

  const onFavorite = (id: string) => {
    dispatch(handleFavoriteAction(id));
  };

  const onAddNewBook = () => {
    const newBook = {
      id: generateUUID(),
      title: 'New Book',
      image: 'https://images.penguinrandomhouse.com/cover/9780345339683',
      author: 'James Bonf',
      starred: false,
      avgRating: 4.7,
      genres: ['fiction', 'fantasy'],
    };
    dispatch(addBookAction(newBook));
  };

  const onDragEnd = ({
    data,
    from,
    to,
  }: {
    data: BookState[];
    from: number;
    to: number;
  }) => {
    const numberOfStarred = books.filter(item => item.starred === true).length;
    const draggingBook = books.find((_, index) => index === from);
    if (draggingBook?.starred) {
      if (to < numberOfStarred) {
        dispatch(reorderBooksAction(data));
      }
    } else {
      if (to < numberOfStarred) {
        return;
      }
      dispatch(reorderBooksAction(data));
    }
  };

  const renderBookItem = ({item, drag, isActive}: any) => {
    return (
      <BookItem
        book={item}
        drag={drag}
        isActive={isActive}
        onFavorite={onFavorite}
      />
    );
  };

  return (
    <View style={tw`bg-white`}>
      <BookShelf books={books.slice(0, 3)} />
      <DraggableFlatList
        scrollEnabled={true}
        data={books}
        onDragEnd={onDragEnd}
        keyExtractor={item => item.id}
        renderItem={renderBookItem}
        style={{height: '71%'}}
        ListFooterComponent={
          <Pressable
            onPress={onAddNewBook}
            style={tw`flex-row bg-yellow-700 p-1 items-center justify-center rounded-lg mx-2 py-2`}>
            <Text style={tw`text-white font-bold text-xl`}>Add Book</Text>
          </Pressable>
        }
      />
    </View>
  );
};

export default BookLibrary;
