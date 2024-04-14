// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, get } from 'firebase/database';


// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZ8I9nQkbM6X_YmMBH940c3BTeoobAzI4",
    authDomain: "mixermatch-eb4c7.firebaseapp.com",
    databaseURL: "https://mixermatch-eb4c7-default-rtdb.firebaseio.com",
    projectId: "mixermatch-eb4c7",
    storageBucket: "mixermatch-eb4c7.appspot.com",
    messagingSenderId: "918480895296",
    appId: "1:918480895296:web:ad463afb0d2634b3bc8ea5",
    measurementId: "G-Y52LS97N36"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const databaseRef = ref(db, 'users');


// Read data from the database
let inRelationshipMM = {};
let inRelationshipMW = {};
let inRelationshipWM = {};
let inRelationshipWW = {};
let noRelationshipMM = {};
let noRelationshipMW = {};
let noRelationshipWM = {};
let noRelationshipWW = {};
let inRelationshipAnyone = {};
let noRelationshipAnyone = {};

get(databaseRef)
    .then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            console.log("1", inRelationshipMM);


            for (const [stagthena, personData] in data) {
                console.log(personData);
                const name = personData.answers[0];
                const team = personData.answers[1];
                const relationship = personData.answers[2];
                const gender = personData.answers[3];
                const preference = personData.answers[4];

                if (relationship == 1 && gender == 1 && preference == 2) {
                    inRelationshipWM[stagthena] = personData;
                } else if (relationship == 1 && gender == 1 && preference == 1) {
                    inRelationshipWW[stagthena] = personData;
                } else if (relationship == 1 && gender == 2 && preference == 1) {
                    inRelationshipMW[stagthena] = personData;
                } else if (relationship == 1 && gender == 2 && preference == 2) {
                    inRelationshipMM[stagthena] = personData;
                } else if (relationship == 2 && gender == 1 && preference == 2) {
                    noRelationshipWM[stagthena] = personData;
                } else if (relationship == 2 && gender == 1 && preference == 1) {
                    noRelationshipWW[stagthena] = personData;
                } else if (relationship == 2 && gender == 2 && preference == 1) {
                    noRelationshipMW[stagthena] = personData;
                } else if (relationship == 2 && gender == 2 && preference == 2) {
                    noRelationshipMM[stagthena] = personData;
                } else if (relationship == 1 && preference == 3) {
                    inRelationshipAnyone[stagthena] = personData;
                } else if (relationship == 2 && preference == 3) {
                    noRelationshipAnyone[stagthena] = personData;
                }
                console.log(inRelationshipMM);
            }
            // console.log(data);
        } else {
            console.log("No data available");
        }
    })
    .catch((error) => {
        console.error("Error getting data:", error);
    });


    // Define sample data
const people = [
    { id: 1, relationshipStatus: 0, genderIdentity: 0, genderPreference: 1 },
    { id: 2, relationshipStatus: 1, genderIdentity: 1, genderPreference: 0 },
    { id: 3, relationshipStatus: 1, genderIdentity: 0, genderPreference: 2 },
    { id: 4, relationshipStatus: 0, genderIdentity: 1, genderPreference: 2 },
    // Add more people as needed
  ];
  
  // Function to matchmake people
  function matchmake(people) {
    const buckets = [[], [], []]; // Buckets for women, men, and non-binary people
  
    // Populate buckets based on gender identity
    people.forEach(person => {
      buckets[person.genderIdentity].push(person);
    });
  
    // Matchmaking logic
    const matches = [];
    while (buckets.some(bucket => bucket.length >= 2)) {
      for (let i = 0; i < 3; i++) {
        if (buckets[i].length < 2) continue; // Skip if not enough people in the bucket
        const person1 = buckets[i].pop();
        let matchIndex = -1;
        if (person1.relationshipStatus === 0) {
          matchIndex = buckets[i].findIndex(person => person.relationshipStatus === 0 && person.genderPreference === i);
        } else {
          matchIndex = buckets[i].findIndex(person => person.relationshipStatus === 1 && person.genderPreference === i);
        }
        if (matchIndex !== -1) {
          const person2 = buckets[i].splice(matchIndex, 1)[0];
          matches.push([person1, person2]);
        } else {
          // If no suitable match found in the same bucket, try other buckets
          for (let j = 0; j < 3; j++) {
            if (j !== i && buckets[j].length > 0) {
              const matchIndex = buckets[j].findIndex(person => person.genderPreference === i);
              if (matchIndex !== -1) {
                const person2 = buckets[j].splice(matchIndex, 1)[0];
                matches.push([person1, person2]);
                break;
              }
            }
          }
        }
      }
    }
  
    // If there are odd buckets, create a group of 3
    if (buckets.some(bucket => bucket.length === 1)) {
      const oddBucketIndex = buckets.findIndex(bucket => bucket.length === 1);
      const oddPerson = buckets[oddBucketIndex][0];
      for (let i = 0; i < 3; i++) {
        if (i !== oddBucketIndex && buckets[i].length >= 2) {
          const person1 = buckets[i].pop();
          const person2 = buckets[i].pop();
          matches.push([person1, person2, oddPerson]);
          break;
        }
      }
    }
  
    return matches;
  }
  
  // Run the matchmaking algorithm
  const result = matchmake(people);
  console.log(result);

