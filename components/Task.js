import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TodoItem = ({ todo, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  return (
    <View style={styles.item}>
      {isEditing ? (
        <>
          <TextInput
            style={styles.input}
            value={newText}
            onChangeText={setNewText}
          />
          <Button title="Guardar" onPress={() => {
            editTask(todo.id, newText);
            setIsEditing(false);
          }} />
        </>
      ) : (
        <>
          <Text style={styles.text}>{todo.text}</Text>
          <Button title="Editar" onPress={() => setIsEditing(true)} />
        </>
      )}
      <Button title="Eliminar" onPress={() => deleteTask(todo.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TodoItem;
