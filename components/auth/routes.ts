import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { SignIn } from "./signIn";
//import { SignUp } from "./signUp";
import { PasswordRecovery } from "./passwordRecovery";

const stack = {
  SignIn: {
    screen: SignIn,
  },
  //   SignUp: {
  //     screen: SignUp,
  //   },
  PasswordRecovery: {
    screen: PasswordRecovery,
  },
};
const AuthStack = createStackNavigator(stack);

export default createAppContainer(AuthStack);
