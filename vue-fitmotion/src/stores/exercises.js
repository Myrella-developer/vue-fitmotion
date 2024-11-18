import { defineStore } from 'pinia'

export const useExercisesStore = defineStore('exercises', {
    state: () => ({
        exercises: [],
        loading: false,
        error: null,
        url: 'https://json-app-1d643-default-rtdb.europe-west1.firebasedatabase.app/gym-app/',
        usr: 'juan'
    }),
    actions: {
        async fetchExercises() {
            this.loading = true
            this.error = null
            try {
                const response = await fetch( this.url + this.usr + '.json')
                if (!response.ok) {
                    throw new Error(`Error status: ${response.status}`)
                }
                const data = await response.json()
                console.log('Data pura: ', data);
                if (data != null) {
                    this.exercises = Object.values(data)
                }
                console.log('Ejercicios fetched: ', this.exercises);
            } catch (error) {
                console.error(error);
            } finally {
                this.loading = false;
            }
        }
    }
})