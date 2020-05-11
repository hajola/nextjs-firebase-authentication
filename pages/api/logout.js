import withSession from "../../lib/session";
import initFirebase from "../../lib/initFirebase";
import firebase from "firebase/app";
import "firebase/auth";

export default withSession(async (req, res) => {
  initFirebase();
  await firebase.auth().signOut();
  req.session.destroy();
  res.json({ isLoggedIn: false });
});
