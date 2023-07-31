import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const updatedTasks = [...tasks, { id: Date.now().toString(), text: newTask }];
    setTasks(updatedTasks);
    setNewTask('');
  };

  const handleUpdateTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editTaskId ? { ...task, text: newTask } : task
    );
    setTasks(updatedTasks);
    setEditTaskId(null);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      {tasks.map((task) => (
        <View style={styles.task} key={task.id}>
          {editTaskId === task.id ? (
            <>
              <TextInput
                style={styles.taskText}
                value={newTask}
                onChangeText={setNewTask}
                autoFocus
              />
              <Button title="Update" onPress={handleUpdateTask} />
            </>
          ) : (
            <>
              <Text style={styles.taskText} onPress={() => setEditTaskId(task.id)}>
                {task.text}
              </Text>
              <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      ))}
      <TextInput
        style={styles.input}
        value={newTask}
        onChangeText={(text) => setNewTask(text)}
        placeholder="Enter a new task"
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    color: 'red',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});

export default TodoApp;
