import Rebase from 're-base';
import firebase from 'firebase';
import { config } from './apiKey';

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export { base }