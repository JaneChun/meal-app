import { StyleSheet, FlatList, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

export default function CategoriesScreen({navigation}) {
    function renderCategoryItem({ item }) {
      function pressHandler() {
        navigation.navigate('Meals Overview', {
          categoryId: item.id
        })
      }
    return <CategoryGridTile title={item.title} color={item.color} onPress={pressHandler}/>;
  }
  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={({ id }) => id}
        renderItem={renderCategoryItem}
        numColumns={2}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#021526',
  }
})