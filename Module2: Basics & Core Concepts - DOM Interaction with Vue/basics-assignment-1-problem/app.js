const app = Vue.createApp({
	data() {
		return {
			name: 'Vue',
			age: '3',
			imageURL: 'https://positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png',
		};
	},
	methods: {
		calculateRandom() {
			const randomNumber = Math.random();
            return randomNumber;
        },
        calculateAge() {
            let age = this.age;
            return age + 5;
        }
	},
});

app.mount('#assignment');
