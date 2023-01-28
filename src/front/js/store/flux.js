const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      token: "",
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
      listaPedidos: [
        {
          idPedido: "0001",
          nombre: "Trompo de Inception",
          img: "https://res.cloudinary.com/dzryoj9vr/image/upload/v1674765463/1_wa8aba.webp",
          fechaYhora: "23/01/2022 11:12 a.m.",
          comentario: "Se necesita con caracter de urgencia",
          estado: "ENTREGADO",
        },
        {
          idPedido: "0002",
          nombre: "Set de sables de luz de Star Wars",
          img: "https://res.cloudinary.com/dzryoj9vr/image/upload/v1674765463/2_eaolwo.webp",
          fechaYhora: "19/04/2022 09:21 a.m.",
          comentario: "Se necesitan los 9 lasers",
          estado: "ENTREGADO",
        },
        {
          idPedido: "0003",
          nombre: "Zapatillas rojas de EL Mago de Oz",
          img: "https://res.cloudinary.com/dzryoj9vr/image/upload/v1674765463/3_efipdc.webp",
          fechaYhora: "16/05/2022 04:59 p.m.",
          comentario: "Deben ser talla 35",
          estado: "ENTREGADO",
        },
        {
          idPedido: "0004",
          nombre: "Guante de Freddy Krueger",
          img: "https://res.cloudinary.com/dzryoj9vr/image/upload/v1674765463/4_mpazcr.webp",
          fechaYhora: "27/07/2022 01:53 p.m.",
          comentario: "Cada dedo debe tener un cuchillo",
          estado: "ENTREGADO",
        },
        {
          idPedido: "0005",
          nombre: "Máscara de Hockey de Jason",
          img: "https://res.cloudinary.com/dzryoj9vr/image/upload/v1674765463/5_wzubez.webp",
          fechaYhora: "13/09/2022 1:13 p.m.",
          comentario: "Debe llegar antes de Halloween",
          estado: "ENTREGADO",
        },
        {
          idPedido: "0006",
          nombre: "Cuchillo de Rambo",
          img: "https://res.cloudinary.com/dzryoj9vr/image/upload/v1674765463/6_vesluq.webp",
          fechaYhora: "16/01/2023 10:50 a.m.",
          comentario:
            "Debe tener filo normal de un lado y de serrucho del otro",
          estado: "EN CURSO",
        },
        {
          idPedido: "0007",
          nombre: "Corazón del Océano de Titanic",
          img: "https://res.cloudinary.com/dzryoj9vr/image/upload/v1674765463/7_v7v1nv.webp",
          fechaYhora: "17/01/2023 03:35 p.m.",
          comentario: "La piedra debe tener un diamante azul",
          estado: "EN CURSO",
        },
        {
          idPedido: "0008",
          nombre: "	Magnum 44 de Harry el Sucio",
          img: "https://res.cloudinary.com/dzryoj9vr/image/upload/v1674765463/8_cfgsqa.webp",
          fechaYhora: "18/01/2023 04:02 p.m.",
          comentario: "Debe ser de cañon largo",
          estado: "EN CURSO",
        },
        {
          idPedido: "0009",
          nombre: "Bozal de Hannibal Lecter",
          img: "https://res.cloudinary.com/dzryoj9vr/image/upload/v1674765463/9_fxwnag.webp",
          fechaYhora: "21/01/2023 10:54 a.m.",
          comentario: "Talla M",
          estado: "CONFIRMADO",
        },
        {
          idPedido: "0010",
          nombre: "Proton Pack de los Cazafantasmas",
          img: "https://res.cloudinary.com/dzryoj9vr/image/upload/v1674765463/10_iagzqj.webp",
          fechaYhora: "23/01/2023 07:12 p.m.",
          comentario: "Debe tener las medidas ya indicadas",
          estado: "RECIBIDO",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      logout: () => {
        const token = sessionStorage.removeItem("token");
        console.log("Se han borrado todos los tokens");
        setStore({ token: null });
      },
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
            "https://3001-frako23-authentications-yamci40wd1d.ws-us84.gitpod.io/api/token",
            opts
          );
          if (resp.status !== 200) {
            alert("Hubo un error en el fetch");
            return false;
          }
          const data = await resp.json();
          console.log("esto vino del backeend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
        } catch (error) {
          console.error("hubo un error en login");
        }
      },
      // getMessage: async () => {
      //   try {
      //     // fetching data from the backend
      //     const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
      //     const data = await resp.json();
      //     setStore({ message: data.message });
      //     // don't forget to return something, that is how the async resolves
      //     return data;
      //   } catch (error) {
      //     console.log("Error loading message from backend", error);
      //   }
      // },
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
    },
  };
};

export default getState;
