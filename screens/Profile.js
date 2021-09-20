import {VIEW_LINK} from 'react-native-dotenv';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Progress from 'react-native-progress';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {WebView} from 'react-native-webview';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Modal,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../constants';
import Btn from './Btn';
import Task from './Task';
import {getComplexity, getSkill} from '../helpers';
import TaskItem from './TaskItem';
import {selectIsUserAllow} from '../selectors/user';
import {
  ONLINE_PRACTICE_TEXT_BLACK,
  ONLINE_PRACTICE_TEXT_WHITE,
} from '../constants/text';
import {getUserIsAllow} from '../slice/user';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const layout = useWindowDimensions();
  const tasks = useSelector(state => state.tasks);
  const taskOnline = tasks.online[0];

  const [taskToDisplay, setTaskToDisplay] = useState(null);
  const [showPracticeTask, setShowPracticeTask] = useState(false);
  const [practiceMode, setPracticeMode] = useState(false);
  const openTask = task => {
    setTaskToDisplay(task);
  };
  const skills = useSelector(state => state.user.skills);
  const completedTasksIds = useSelector(state => state.user.completedTasksIds);
  const allow = useSelector(selectIsUserAllow);

  const closeTask = () => {
    setTaskToDisplay(null);
  };

  const completeTask = ({quizId, taskId}) => {
    closeTask();
    setTimeout(() => {
      navigation.navigate('Quiz', {quizId, taskId});
    }, 1000);
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'tasks', title: 'Задания'},
    {key: 'practice', title: 'Практика онлайн'},
  ]);

  useEffect(() => {
    if (allow === undefined || __DEV__) dispatch(getUserIsAllow());
  }, []);

  const sceneObject = {
    tasks: () => (
      <View style={{flex: 1}}>
        <ScrollView style={styles.scrollView}>
          {tasks.offline.map((data, index) => {
            const isTaskCompeted = completedTasksIds.includes(data.id);
            const isTaskLocked = index >= completedTasksIds.length + 2;
            return (
              <TaskItem
                key={data.title}
                isTaskCompeted={isTaskCompeted}
                isTaskLocked={isTaskLocked}
                title={data.title}
                description={data.description}
                complexity={data.complexity}
                openTask={() => openTask(data)}
              />
            );
          })}
          <Text style={styles.additionalText}>
            Выполни текущиие задания, что бы открыть новые!
          </Text>
        </ScrollView>
      </View>
    ),
  };

  if (allow) {
    sceneObject.practice = () => (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: 'space-evenly',
        }}>
        <Text style={{color: 'white', textAlign: 'center', lineHeight: 20}}>
          {ONLINE_PRACTICE_TEXT_BLACK}
        </Text>
        <Btn onPress={() => setPracticeMode(true)}>
          Перейти к онлайн практике
        </Btn>
      </View>
    );
  } else {
    sceneObject.practice = () => (
      <View style={{flex: 1}}>
        <ScrollView style={styles.scrollView}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              lineHeight: 20,
              marginTop: 50,
              marginBottom: 50,
            }}>
            {ONLINE_PRACTICE_TEXT_WHITE}
          </Text>
          {tasks.online.map((data, index) => {
            const isTaskCompeted = completedTasksIds.includes(data.id);
            const isTaskLocked = index >= completedTasksIds.length + 2;
            return (
              <TaskItem
                key={data.title}
                isTaskCompeted={isTaskCompeted}
                isTaskLocked={isTaskLocked}
                title={data.title}
                description={data.description}
                complexity={data.complexity}
                openTask={() => openTask(data)}
              />
            );
          })}
          <Text style={styles.additionalText}>
            Выполни текущиие задания, что бы открыть новые!
          </Text>
        </ScrollView>
      </View>
    );
  }

  const renderScene = SceneMap(sceneObject);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <View
        style={{
          flex: 1,
          position: 'relative',
        }}>
        <ImageBackground
          source={require('../assets/images/bg.jpg')}
          style={{
            position: 'relative',
            flex: 1,
            paddingTop: 20,
          }}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: '#00000050',
            }}
          />

          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '90%',
                backgroundColor: COLORS.white,
                borderRadius: 20,
                padding: 20,
                paddingTop: 0,
                alignSelf: 'center',
              }}>
              <Text style={styles.skillsTitle}>Профиль</Text>
              {skills.map(({id, level}) => (
                <View key={id}>
                  <Text style={styles.skillLabel}>{getSkill(id)}</Text>
                  <Progress.Bar
                    style={styles.skillBar}
                    color={COLORS.accent}
                    progress={level}
                    height={5}
                    borderRadius={20}
                    width={null}
                  />
                </View>
              ))}
            </View>
            <View style={styles.tasksBlock}>
              <TabView
                renderTabBar={props => (
                  <TabBar
                    {...props}
                    style={{backgroundColor: 'transparent'}}
                    indicatorStyle={{backgroundColor: COLORS.white}}
                  />
                )}
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width: layout.width}}
              />
            </View>
          </View>
        </ImageBackground>
        <Modal animationType="slide" visible={!!taskToDisplay}>
          <Task
            id={taskToDisplay?.id}
            title={taskToDisplay?.title}
            quizId={taskToDisplay?.quizId}
            text={taskToDisplay?.text}
            complexity={taskToDisplay?.complexity}
            onClose={closeTask}
            onComplete={completeTask}
            completed={
              taskToDisplay
                ? completedTasksIds.includes(taskToDisplay.id)
                : false
            }
          />
        </Modal>
        {allow && (
          <Modal
            animationType="slide"
            visible={practiceMode}
            style={{backgroundColor: COLORS.primary}}>
            <SafeAreaView
              style={{
                flex: 1,
                backgroundColor: '#322e55',
              }}>
              <WebView source={{uri: VIEW_LINK}} />
              <View
                style={{
                  padding: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  maxHeight: 120,
                }}>
                <View style={{width: 80, justifyContent: 'center'}}>
                  <MaterialCommunityIcons
                    onPress={() => setPracticeMode(false)}
                    name="chevron-left-circle-outline"
                    size={45}
                    color="#fff"
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setShowPracticeTask(true)}
                  style={{
                    backgroundColor: COLORS.primary,
                    margin: -15,
                    padding: 15,
                    marginBottom: -50,
                    paddingBottom: 50,
                    flex: 1,
                  }}>
                  <View>
                    <Text style={{color: 'white'}}>
                      <Text style={{fontWeight: 'bold'}}>Задание:</Text>{' '}
                      {taskOnline.title}
                    </Text>
                    <Text style={{color: 'white', marginTop: 3}}>
                      <Text style={{fontWeight: 'bold'}}>Сложность:</Text>{' '}
                      {getComplexity(taskOnline.complexity)}
                    </Text>
                    <Text style={{color: 'white', marginTop: 10}}>
                      {taskOnline.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={showPracticeTask}>
                <View style={{flex: 1, backgroundColor: '#00000099'}}>
                  <View style={{height: '100%', marginTop: 'auto'}}>
                    <Task
                      online={true}
                      id={taskOnline?.id}
                      title={taskOnline?.title}
                      quizId={taskOnline?.quizId}
                      text={taskOnline?.text}
                      complexity={taskOnline?.complexity}
                      onClose={() => setShowPracticeTask(false)}
                      onComplete={completeTask}
                      completed={
                        taskOnline
                          ? completedTasksIds.includes(taskOnline.id)
                          : false
                      }
                    />
                  </View>
                </View>
              </Modal>
            </SafeAreaView>
          </Modal>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  skillLabel: {
    color: 'black',
    fontSize: 12,
    marginTop: 10,
  },
  skillBar: {
    marginTop: 5,
  },
  taskTitle: {
    color: 'white',
    fontSize: 12,
  },
  taskTitleLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  taskLine: {
    marginTop: 5,
  },
  task: {
    backgroundColor: '#322e55',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderRadius: 20,
    marginHorizontal: 15,
  },
  taskBar: {
    marginTop: 10,
  },
  tasksBlock: {
    backgroundColor: '#24213e',
    flex: 1,
    maxHeight: 350,
    marginTop: 20,
  },
  tasksTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  scrollView: {
    marginTop: 15,
    paddingHorizontal: 15,
  },
  skillsTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  additionalText: {
    color: 'white',
    textAlign: 'center',
    width: 300,
    alignSelf: 'center',
    paddingVertical: 30,
  },
  completedTask: {
    borderColor: COLORS.success + '50',
    borderWidth: 1,
    backgroundColor: COLORS.success + '20',
  },
  lockedTask: {
    opacity: 0.3,
  },
});

export default Profile;
