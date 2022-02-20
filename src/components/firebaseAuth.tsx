import { FunctionComponent, useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";

const firebaseAuthConfig = {
  signInFlow: "popup",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
  signInSuccessUrl: "/",
};

const FirebaseAuth: FunctionComponent = () => {
  const [renderAuth, setRenderAuth] = useState(false);

  //Уже существует асинхронный импорт для компонентов, которые нужны лишь на фронте
  //Надо будет переписать и убрать этот костыль
  useEffect(() => {
    setRenderAuth(true);
  }, []);

  return (
    <div className="mt-16">
      {renderAuth ? (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : null}
    </div>
  );
};

export default FirebaseAuth;
