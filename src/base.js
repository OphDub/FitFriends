import Rebase from 're-base';
import firebase from 'firebase';
import { config } from './apiKey';

firebase.initializeApp(config)
export const userDb = firebase.database().ref('users/');
export const workouts = firebase.database().ref('workouts/')