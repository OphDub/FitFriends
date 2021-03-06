/* eslint-disable */
export const mockTeam = [
  {
    UID: 'randomKey1',
    name: 'Felipe',
    workoutTally: 6,
    workoutsPosted: 2,
  },
  {
    UID: 'randomKey2',
    name: 'Fion',
    workoutTally: 5,
    workoutsPosted: 3,
  },
  {
    UID: 'randomKey3',
    name: 'Morgan',
    workoutTally: 3,
    workoutsPosted: 4,
  },
]

export const mockWorkout = {
  workoutName: 'The Grind',
  workoutDesc: 'Opposite movement workout with some running at the end!',
  exercises: [
    {reps: '10', exercise: 'Burpees'},
    {reps: '8-10', exercise: 'Overhead Press(Barbell)'},
    {reps: '8-10', exercise: 'Standing Bent Row(Barbell)'},
    {reps: '8-10', exercise: 'Standing Kettlebell Swings'},
  ],
}

export const mockUserProfile = {
  userImage: 'http://www.ixgetfit.com/wp-content/uploads/2017/10/Brooke-Wells-350x350-300x300.jpg',
  userName: 'Brooke'
}

export const mockWorkouts = {
  'someKey1':
  {
    workoutName: 'local sample workout name 1',
    workoutDesc: 'local sample workout desc',
    exercises: [
      { reps: 10, exercise: 'sample exercise1'},
      { reps: 10, exercise: 'sample exercise2'},
    ]
  },
  'someKey2':
  {
    workoutName: 'local sample workout name 2',
    workoutDesc: 'local sample workout desc',
    exercises: [
      { reps: 10, exercise: 'sample exercise1'},
      { reps: 10, exercise: 'sample exercise2'},
    ]
  },
}