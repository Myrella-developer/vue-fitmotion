import { defineStore } from 'pinia'

export const useExercisesStore = defineStore('exercises', {
    state: () => ({
        exercises: [],
        loading: false,
        error: null,
        firebaseId: {},
        url: 'https://json-app-1d643-default-rtdb.europe-west1.firebasedatabase.app/gym-app/',
        usr: 'juan'
    }),
    actions: {
        async fetchExercises() {
            this.loading = true
            this.error = null
            try {
                const response = await fetch(this.url + this.usr + '.json')
                if (!response.ok) {
                    throw new Error(`Error status: ${response.status}`)
                }
                const data = await response.json()
                console.log('Data pura: ', data);

                if (data != null) {
                    for (let obj in data) {
                        this.firebaseId[data[obj].id] = obj
                    }
                    this.exercises = Object.values(data)
                }
                console.log('Ejercicios fetched: ', this.exercises);
            } catch (error) {
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        postExercise(newExercise) {
            //Guarda en Variable local
            this.exercises.push(newExercise);
            
            //Guarda en Firebase
            fetch(this.url + this.usr + '.json', {
                method: 'POST',
                body: JSON.stringify(newExercise)
            })
                .then((response) => response.json())
                .then((data) => {
                    // this.fetchExercises()
                    this.firebaseId[newExercise.id] = data.name
                });
        },
        editExercise(editedExercise) {
            //Se actualiza storage
            this.exercises = this.exercises.map(exercise => {
                if (exercise.id === editedExercise.id) {
                    return { ...exercise, ...editedExercise };
                }
                return exercise;
            });
            //Se modifica BBDD
            fetch(this.url + this.usr + `/${this.firebaseId[editedExercise.id]}.json`,
                {
                    method: 'PATCH',
                    body: JSON.stringify(editedExercise)
                }
            )
                .then(res => res.json())
                .then(res => {
                    // this.fetchExercises()
                    console.log('Respuesta API en Edit ', res)
                })
        },
        deleteExercise(exerciseId) {
            this.exercises = this.exercises.filter(exercise => exercise.id !== exerciseId); 

            fetch(this.url + this.usr + `/${this.firebaseId[exerciseId]}.json`,
                {
                    method: 'DELETE'
                }
            )
                .then(res => res.json())
                .then(res => {
                    // this.fetchExercises()
                    console.log(res)
                })
        }
    }
})