const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      characteristics: [],
      characters: [],
      planetCharacteristics: [],
      planetCharacters: [],
      vehicleCharacteristics: [],
      vehicleCharacters: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      login: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const resp = await fetch(
            "https://3001-4geeksacade-reactflaskh-k7w75gdxxcs.ws-us75.gitpod.io/api/token",
            opts
          );
          if (resp.status !== 200) {
            const mensaje = await resp.json();
            alert(mensaje.msg);
            return false;
          }

          const data = await resp.json();
          console.log("Esto vino del backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("Hubo un error al hacer login in");
        }
      },
      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        console.log(
          "La aplicacion acaba de cargar, sincronizando el token de session storage"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },
      signup: async (name, email, password) => {
        const store = getStore();
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: name,
            email: email,
            password: password,
          }),
        };

        try {
          const response = await fetch(
            "https://3001-4geeksacade-reactflaskh-k7w75gdxxcs.ws-us75.gitpod.io/api/users",
            options
          );

          if (!response.ok) {
            let danger = await response.json();
            alert(danger);
            return false;
          }

          const data = await response.json();
          console.log("This came from the backend", data);
          return true;
        } catch (error) {
          console.error("There has been an error login in");
        }
      },
      logout: () => {
        const token = sessionStorage.removeItem("token");
        console.log("Se han borrado todos los tokens");
        setStore({ token: null });
      },
      getCharacters: () => {
        const apiURL = `https://3001-4geeksacade-reactflaskh-k7w75gdxxcs.ws-us75.gitpod.io/api/people`;
        fetch(apiURL)
          .then((Response) => {
            if (Response.ok) {
              return Response.json();
            }
            throw new Error("Ha ocurrido un error");
          })
          .then((body) => setStore({ characters: body }))
          .catch((error) => console.log(error));
      },
      getPlanetCharacters: () => {
        const apiURL = `https://3001-4geeksacade-reactflaskh-k7w75gdxxcs.ws-us75.gitpod.io/api/planets`;
        fetch(apiURL)
          .then((Response) => {
            if (Response.ok) {
              return Response.json();
            }
            throw new Error("Ha ocurrido un error");
          })
          .then((body) => setStore({ planetCharacters: body }))
          .catch((error) => console.log(error));
      },
      getVehicleCharacters: () => {
        const apiURL = `https://3001-4geeksacade-reactflaskh-k7w75gdxxcs.ws-us75.gitpod.io/api/vehicles`;
        fetch(apiURL)
          .then((Response) => {
            if (Response.ok) {
              return Response.json();
            }
            throw new Error("Ha ocurrido un error");
          })
          .then((body) => setStore({ vehicleCharacters: body }))
          .catch((error) => console.log(error));
      },
      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },

      toggleFavorite: (item) => {
        const store = getStore();
        const actions = getActions();
        if (actions.isFavorite(item.name)) {
          const newFavorites = store.favorites.filter((fav) => {
            return fav.name !== item.name;
          });
          setStore({
            favorites: newFavorites,
          });
        } else {
          setStore({
            favorites: [...store.favorites, item],
          });
        }
      },
      isFavorite: (name) => {
        const store = getStore();
        return store.favorites.find((favorite) => {
          return favorite.name == name;
        });
      },
    },
  };
};

export default getState;
