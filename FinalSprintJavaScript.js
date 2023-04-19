// Code to fetch the data from the fitnessData.json file and print the exercise names in each object to the console
fetch('fitnessData.json')
  .then(response => response.json())
  .then(data => {
    Object.keys(data).forEach(key => {
      console.log(`${key}: ${data[key].exerciseName}`);
    });
  })
    .catch(error => {
        console.error(error);
});

// A function to iterate through all of the data in the fitnessData.json file and concatanate all of the names of each exercise on top of each other
function getExerciseNames(data) {
  let names = '';
  Object.values(data).forEach((exercise, index) => {
    names += `${exercise.exerciseName} <br>`;
  });
  return names;
}

// A function to iterate through all of the data in the fitnessData.json file and concatanate a sort of list (stacked on top of eachother) of all the different muscle groups and how many times they appear in the json object
function getMuscleGroupCounts(data) {
  let counts = {};
  Object.values(data).forEach((exercise) => {
      if (counts[exercise.muscleGroup]) {
      counts[exercise.muscleGroup]++;
      } else {
      counts[exercise.muscleGroup] = 1;
      }
  });
  let result = '';
  Object.entries(counts).forEach(([muscleGroup, count]) => {
      result += `${muscleGroup}: ${count}\n <br>`;
  });
  return result;
}

// A function to iterate through all of the data in the fitnessData.json file and creates a list of unique equipment names used in the exercises
function getEquipmentList(data) {
    let equipment = new Set();
    Object.values(data).forEach((exercise) => {
        equipment.add(exercise.equipment.name);
    });
    let result = '';
    equipment.forEach((item) => {
        result += `${item}\n <br>`;
    });
    return result;
    }

// console.log all information returned from the functions to the console!
fetch('fitnessData.json')
    .then(response => response.json())
    .then(data => {
      console.log(getExerciseNames(data));
      console.log(getMuscleGroupCounts(data));
      console.log(getEquipmentList(data));
    })
    .catch(error => {
      console.error(error);
    });

// Write all information returned from the functions to the html page
fetch('fitnessData.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the JSON data to the console
    document.write(`<h2>Exercise Names:</h2><p>${getExerciseNames(data)}</p>`);
    document.write(`<h2>Muscle Group Counts:</h2><p>${getMuscleGroupCounts(data)}</p>`);
    document.write(`<h2>Equipment List:</h2><p>${getEquipmentList(data)}</p>`);
  })
  .catch(error => {
    console.error(error);
  });