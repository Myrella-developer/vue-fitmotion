import { defineStore } from 'pinia'

export const useExercisesStore = defineStore('exercises', {
    state: () => ({
        exercises: []
    }),
    actions: {
        fetchExercises() {
            let ejs = []
            try {
                fetch('https://json-app-1d643-default-rtdb.europe-west1.firebasedatabase.app/gym-app/juan' + '.json')
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('data: ', data);
                        for (let obj in data) {
                            //Inicializar jsonId
                            ejs.push(data[obj])
                        }
                        this.exercises = ejs
                        
                        console.log('Ejs en Pinia: ', this.exercises);
                    });
            } catch (error) {
                console.log(error);
            }
        }
    }
})