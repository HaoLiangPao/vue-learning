const app = Vue.createApp({
	data() {
        return {
            inputValue: "",
            tasks: [],
            show_list: true
		};
	},
	computed: {
	},
	methods: {
        addTask() {
            console.log("Adding Task!");
            this.tasks.push(this.inputValue);
            this.inputValue = "";
        },
        removeTask(index) {
            this.tasks.splice(index);
        },
        toggleDisplay() {
            this.show_list = !this.show_list;
        }
	},
});

app.mount('#assignment');
