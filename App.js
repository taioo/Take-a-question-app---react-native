import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import StartScreen from "./src/screens/Start/Start";
import CreateQuestionScreen from "./src/screens/CreateQuestion/CreateQuestion";
import RemoveQuestionScreen from "./src/screens/QuestionListsPages/RemoveQuestion";
import QuestionViewScreen from "./src/screens/QuestionListsPages/QuestionView";
import QuestionDetailScreen from "./src/screens/QuestionDetail/QuestionDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import configureStore from "./src/store/configureStore";

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "StartScreen",
  () => StartScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "CreateQuestionScreen",
  () => CreateQuestionScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "RemoveQuestionScreen",
  () => RemoveQuestionScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "QuestionViewScreen",
  () => QuestionViewScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "QuestionDetailScreen",
  () => QuestionDetailScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "SideDrawer",
  () => SideDrawer
);

// Start a App
export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: "StartScreen",
    title: "Start"
  }
});
