const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planets: []
		},
		actions: {
			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			loadPersons: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => {
						return res.json();
					})
					.then(data => {
						let preparando = data.results.map(item => {
							return { ...item, favorite: false };
						});
						setStore({ personajes: preparando });
					})
					.catch(error => console.log("Error loading message from backend", error));
			},
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(res => {
						return res.json();
					})
					.then(data => {
						let preparando = data.results.map(item => {
							return { ...item, favorite: false };
						});
						setStore({ planets: preparando });
					})
					.catch(error => console.log("Error loading message from backend", error));
			},
			addfavs: uid => {
				console.log(uid);
				let preparando = getStore().personajes.map(item => {
					if (item.uid == uid) {
						return { ...item, favorite: true };
					} else {
						return item;
					}
				});
				console.log(preparando);
				setStore({ personajes: preparando });
			},
			addfavs2: uid => {
				console.log(uid);
				let preparando = getStore().planets.map(item => {
					if (item.uid == uid) {
						return { ...item, favorite: true };
					} else {
						return item;
					}
				});
				console.log(preparando);
				setStore({ planets: preparando });
			},
			removefavs: uid => {
				console.log(uid);
				let preparando = getStore().personajes.map(item => {
					if (item.uid == uid) {
						return { ...item, favorite: false };
					} else {
						return item;
					}
				});
				console.log(preparando);
				setStore({ personajes: preparando });
			},
			removefavs1: uid => {
				console.log(uid);
				let preparando = getStore().planets.map(item => {
					if (item.uid == uid) {
						return { ...item, favorite: false };
					} else {
						return item;
					}
				});
				console.log(preparando);
				setStore({ planets: preparando });
			}
		}
	};
};

export default getState;
