import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import ShareQuestionScreen from "./src/screens/ShareQuestion/ShareQuestion";
import FindQuestionScreen from "./src/screens/FindQuestion/FindQuestion";
import QuestionDetailScreen from "./src/screens/QuestionDetail/QuestionDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import configureStore from "./src/store/configureStore";

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "awesome-questions.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-questions.ShareQuestionScreen",
  () => ShareQuestionScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-questions.FindQuestionScreen",
  () => FindQuestionScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-questions.QuestionDetailScreen",
  () => QuestionDetailScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-questions.SideDrawer",
  () => SideDrawer
);

// Start a App
export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-questions.AuthScreen",
    title: "Login"
  }
});
