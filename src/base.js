import firebase from 'firebase';
import { config } from './apiKey';

firebase.initializeApp(config)
export const userDb = firebase.database().ref('users/');
export const workoutsDb = firebase.database().ref('workouts/');
export const auth = firebase.auth();