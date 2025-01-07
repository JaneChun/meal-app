import { StyleSheet, FlatList, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

export default function CategoriesScreen() {
  function renderCategoryItem({ item }) {
    return <CategoryGridTile title={item.title} color={item.color} />;
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