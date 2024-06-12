import { View, TextInput, Button, FlatList, StyleSheet } from "react-native";
import Task from "./components/Task";
import useTask from "./hooks/useTask";

export default function App() {
  const { tasks, text, setText, deleteTask, editTask, handleAddTask } =
    useTask();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nueva tarea"
        value={text}
        onChangeText={setText}
      />
      <Button title="Agregar" onPress={handleAddTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task todo={item} deleteTask={deleteTask} editTask={editTask} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  input: {
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
  },
});
