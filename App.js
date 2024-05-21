import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

import CourseItem from './components/Course';

const courses = [
  {
    name: 'Development 1',
    code: 'YP0834'
  },
  {
    name: 'Development 2',
    code: 'YP1100'
  },
  {
    name: 'Development 4',
    code: 'YP9765'
  },
  {
    name: 'Development 3',
    code: 'YP5432'
  },
  {
    name: 'Ethics',
    code: 'YP9999'
  }
];
export default function App() {
  return (
    <ScrollView style={styles.container} >
      <Text style={styles.header1}>Courses</Text>
      <View style={styles.tilesContainer}>
        <FlatList data={courses} renderItem={(item) => <CourseItem title={item.item.name} subtitle={item.item.code} />} />
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 56,
  },
  header1: {
    fontSize: 32,
    fontWeight: '800',
    margin: 12,

  },
  tilesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'flex-start',
  }
});
