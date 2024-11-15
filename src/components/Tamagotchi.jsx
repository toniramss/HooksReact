import React from 'react';


import { useState, useEffect } from 'react';
export function Tamagotchi() {

    const hungerStorage = localStorage.getItem("hunger");
    const happinessStorage = localStorage.getItem("happiness");
    const healthStorage = localStorage.getItem("health");
    const hygieneStorage = localStorage.getItem("hygiene");
    const energyStorage = localStorage.getItem("energy");
    const levelStorage = localStorage.getItem("level");
    const coinsStorage = localStorage.getItem("coins");

    const cantidadHuesosStorage = localStorage.getItem("cantidadHuesos");
    const cantidadPelotasStorage = localStorage.getItem("cantidadPelotas");
    const cantidadCepillosStorage = localStorage.getItem("cantidadCepillos");
    const cantidadEnergiasStorage = localStorage.getItem("cantidadEnergias");

    // Definimos los estados iniciales de hambre, felicidad y salud
    const [hunger, setHunger] = useState(100);
    const [happiness, setHappiness] = useState(100);
    const [health, setHealth] = useState(100);
    const [hygiene, setHygiene] = useState(100);
    const [energy, setEnergy] = useState(100);

    const [cantidadHuesos, setHuesos] = useState(1);
    const [cantidadPelotas, setPelotas] = useState(1);
    const [cantidadCepillos, setCepillos] = useState(1);
    const [cantidadEnergias, setEnergias] = useState(1);

    const [cantidadCoins, setCoins] = useState(1);
    const [level, setLevel] = useState(1);

    const [vivo, setVivo] = useState(true);


    useState(() => {
        console.log("hungerStorage: " + hungerStorage);
        if (hungerStorage != null) {
            setHunger(Number(hungerStorage))
        };
        if (happinessStorage != null) {setHappiness(Number(happinessStorage))};
        if (healthStorage != null) {setHealth(Number(healthStorage))};
        if (hygieneStorage != null) {setHygiene(Number(hygieneStorage))};
        if (energyStorage != null) {setEnergy(Number(energyStorage))};
        
        if (cantidadHuesosStorage != null) {setHuesos(Number(cantidadHuesosStorage))};
        if (cantidadPelotasStorage != null) {setPelotas(Number(cantidadPelotasStorage))};
        if (cantidadCepillosStorage != null) {setCepillos(Number(cantidadCepillosStorage))};
        if (cantidadEnergiasStorage != null) {setEnergias(Number(cantidadEnergiasStorage))};
        
        if (coinsStorage != null) {setCoins(Number(coinsStorage))};
        if (levelStorage != null) {setLevel(Number(levelStorage))};
    }, []);


    //let cantidadHuesos = 1;
    //let cantidadPelotas = 1;
    //let cantidadCepillos = 1;
    //let cantidadEnergias = 1;
    //let cantidadCoins = 0;

    // Función para alimentar al Tamagotchi
    const feed = () => {
        setHunger((prev) => Math.min(prev + 20, 100)); // Incrementa hambre hasta un máximo de 100
        setHealth((prev) => Math.min(prev + 5, 100)); // Incrementa salud hasta un máximo de 100
        setEnergy((prev) => Math.max(prev - 5, 0));
        setCoins(cantidadCoins + 1);

        comprobarVida();
        
    };
    // Función para jugar con el Tamagotchi
    const play = () => {
        setHappiness((prev) => Math.min(prev + 20, 100)); // Incrementa felicidad hasta un máximo de 100
        setHunger((prev) => Math.max(prev - 5, 0)); // Reduce hambre hasta un mínimo de 0
        setHealth((prev) => Math.max(prev - 5, 0)); // Reduce salud hasta un mínimo de 0
        setEnergy((prev) => Math.max(prev - 10, 0));
        setCoins(cantidadCoins + 1);

        comprobarVida();
    };
    // Función para hacer dormir al Tamagotchi
    const sleep = () => {
        setHealth((prev) => Math.min(prev + 10, 100)); // Incrementa salud hasta un máximo de 100
        setHappiness((prev) => Math.max(prev - 5, 0)); // Reduce felicidad hasta un mínimo de 0
        setEnergy((prev) => Math.min(prev + 10, 100));
        setCoins(cantidadCoins + 1);

        comprobarVida();
    };
    // Función para hacer dormir al Tamagotchi
    const clean = () => {
        setHygiene((prev) => Math.min(prev + 10, 100)); // Incrementa hygiene hasta un máximo de 100
        //setHappiness((prev) => Math.max(prev - 5, 0)); // Reduce felicidad hasta un mínimo de 0
        setCoins(cantidadCoins + 1);

        comprobarVida();
    };
    const hambreATope = () => {
        if (cantidadHuesos > 0) {
            setHunger(100); // Establece hunger al 100%
            setHuesos(cantidadHuesos - 1);
            //cantidadHuesos = cantidadHuesos - 1;
            //alert("Cantidad huesos: " + cantidadHuesos);
        } else {
            alert("No hay disponible");
        }

    };
    const felicidadATope = () => {

        if (cantidadPelotas > 0) {
            setHappiness(100);
            setPelotas(cantidadPelotas - 1);
            //cantidadPelotas = cantidadPelotas - 1;
            //alert("Cantidad pelotas: " + cantidadPelotas);
        } else {
            alert("No hay disponible");
        }

    };
    const higieneATope = () => {

        if (cantidadCepillos > 0) {
            setHygiene(100);
            setCepillos(cantidadCepillos - 1);
            //cantidadCepillos = cantidadCepillos - 1;
            //alert("Cantidad cepillos: " + cantidadCepillos);
        } else {
            alert("No hay disponible");
        }

    };
    const energiaATope = () => {

        if (cantidadEnergias > 0) {
            setEnergy(100);
            setEnergias(cantidadEnergias - 1);
            //cantidadEnergias = cantidadEnergias  - 1;
            //alert("Cantidad energias: " + cantidadEnergias);
        } else {
            alert("No hay disponible");
        }

    };
    const comprarHuesos = () => {
        if (cantidadCoins >= 10) {
            setHuesos(cantidadHuesos + 1);
            //cantidadHuesos = cantidadHuesos + 1;
            //alert("Cantidad huesos: " + cantidadHuesos);

            setCoins(cantidadCoins - 10);
        } else {
            alert("No hay dinero disponible");
        }


    };
    const comprarPelotas = () => {

        if (cantidadCoins >= 10) {

            setPelotas(cantidadPelotas + 1);
            //cantidadPelotas = cantidadPelotas + 1;
            //alert("Cantidad pelotas: " + cantidadPelotas);

            setCoins(cantidadCoins - 10);

        } else {
            alert("No hay dinero disponible");
        }


    };
    const comprarCepillos = () => {

        if (cantidadCoins >= 10) {

            setCepillos(cantidadCepillos + 1);
            //cantidadCepillos = cantidadCepillos + 1;
            //alert("Cantidad cepillos: " + cantidadCepillos);

            setCoins(cantidadCoins - 10);

        } else {
            alert("No hay dinero disponible");
        }




    };
    const comprarEnergias = () => {

        if (cantidadCoins >= 10) {

            setEnergias(cantidadEnergias + 1);
            //cantidadEnergias = cantidadCepillos + 1;
           // alert("Cantidad energias: " + cantidadEnergias);

            setCoins(cantidadCoins - 10);

        } else {
            alert("No hay dinero disponible");
        }



    };


    useEffect(() => {
        // Suma 1 nivel cada minuto si ninguna barra esta en 0
        const timer1 = setInterval(() => {

            

            if (vivo == true){
                setLevel(level + 1);
            }

        }, 60000); // Intervalo de 1 minuto
        return () => clearInterval(timer1);
    }, [level]);

    // Guardar en localStorage cada vez que cambian los valores
    useEffect(() => {
        console.log(hunger);
        localStorage.setItem("hunger", hunger);
        localStorage.setItem("happiness", happiness);
        localStorage.setItem("health", health);
        localStorage.setItem("hygiene", hygiene);
        localStorage.setItem("energy", energy);
        localStorage.setItem("level", level);
        localStorage.setItem("coins", cantidadCoins);

        localStorage.setItem("cantidadHuesos", cantidadHuesos);
        localStorage.setItem("cantidadPelotas", cantidadPelotas);
        localStorage.setItem("cantidadCepillos", cantidadCepillos);
        localStorage.setItem("cantidadEnergias", cantidadEnergias);
        comprobarVida();
    }, [
        hunger, happiness, health, hygiene, energy, level, cantidadCoins,
        cantidadHuesos, cantidadPelotas, cantidadCepillos, cantidadEnergias
    ]);

    // useEffect para el temporizador que reduce los niveles automáticamente
    useEffect(() => {
        // Creamos un intervalo que reduce los niveles cada 3 segundos
        const timer = setInterval(() => {
            setHunger((prev) => Math.max(prev - 1, 0));
            setHappiness((prev) => Math.max(prev - 1, 0));
            setHealth((prev) => Math.max(prev - 1, 0));
            setHygiene((prev) => Math.max(prev - 1, 0));
            setEnergy((prev) => Math.max(prev - 1, 0));

           // comprobarVida();


        }, (3000/(level*2))); // Intervalo de 3 segundos
        // Cleanup: Limpia el temporizador cuando el componente se desmonta
        return () => clearInterval(timer);
    }, []); // [] asegura que el efecto solo se ejecute una vez al montar el componente

    // Función para determinar el color de las barras de progreso
    const getProgressColor = (value) => {
        if (value > 60) return "bg-green-500"; // Verde si el valor es alto

        if (value > 20) return "bg-yellow-500"; //Amarill si el valor es medio
        return "bg-red-500"; // Rojo si el valor es bajo
    };

    // Función para mostrar el mensaje de estado del Tamagotchi
    const getStatusMessage = () => {
        if (hunger < 20) return "¡Tengo hambre! 😟😟";
        if (happiness < 20) return "Estoy triste 😢😢";
        if (health < 20) return "No me siento bien 😷😷";
        if (hygiene < 20) return "Me siento sucio 🚿🚿";
        if (energy < 20) return "Tengo poca energía 🪫🪫";
        return "¡Estoy feliz! 😊😊";
    };
    //function (comprobar)
    function gameOver () {
        alert("Game Over");

        setHunger(100);
        setHappiness(100);
        setHealth(100);
        setHygiene(100);
        setEnergy(100);
        setHuesos(1);
        setPelotas(1);
        setCepillos(1);
        setEnergias(1);
        setCoins(0);
        setVivo(true);
        setLevel(1);

        

    }

    function comprobarVida() {
        console.log("Entra en la funcion comprobarVida()");
        console.log(hunger, happiness, health, hygiene, energy)
        if (hunger == 0 || happiness == 0 || health == 0 || hygiene == 0 || energy == 0){
            console.log("Entra en el if");
            setVivo(false);
            gameOver();
        }
    }

    return (

        <div className="p-4 bg-white rounded-lg shadow-md w-100">
            <h1 className="text-2xl font-bold text-center mb-4">🐶🐶Tamagotchi</h1>

            <div className="flex items-center justify-center space-x-4">
                <h1 className="text-2xl font-bold text-center mb-4">🏆Level:</h1>
                <h1 className="text-2xl font-bold text-center mb-4">{level}</h1>

                <h1 className="text-2xl font-bold text-center mb-4">🪙 Coins:</h1>
                <h1 className="text-2xl font-bold text-center mb-4">{cantidadCoins}</h1>
            </div>

            <div class="divImagen">
                <img className="flex justify-center items-center h-auto" src='../../public/perro.gif'></img>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-md w-80">

                {/* Mensaje de estado */}
                <p className="text-center text-lg font-semibold mb4">{getStatusMessage()}</p>

                {/* Barra de Progreso para Hambre */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Hambre: {hunger}</label>
                    <div className="bg-gray-300 h-4 rounded overflow-hidden">
                        <div
                            className={`${getProgressColor(hunger)} h-full`}
                            style={{ width: `${hunger}%` }}
                        />
                    </div>
                </div>
                {/* Barra de Progreso para Felicidad */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Felicidad: {happiness}</label>
                    <div className="bg-gray-300 h-4 rounded overflow-hidden">
                        <div
                            className={`${getProgressColor(happiness)} h-full`}
                            style={{ width: `${happiness}%` }}
                        />
                    </div>
                </div>
                {/* Barra de Progreso para Salud */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Salud: {health}</label>
                    <div className="bg-gray-300 h-4 rounded overflow-hidden">
                        <div
                            className={`${getProgressColor(health)} h-full`}
                            style={{ width: `${health}%` }}
                        />
                    </div>
                </div>
                {/* Barra de Progreso para Hygiene */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Higiene: {hygiene} </label>
                    <div className="bg-gray-300 h-4 rounded overflow-hidden">
                        <div
                            className={`${getProgressColor(hygiene)} h-full`}
                            style={{ width: `${hygiene}%` }}
                        />
                    </div>
                </div>
                {/* Barra de Progreso para Energia */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Energía: {energy}</label>
                    <div className="bg-gray-300 h-4 rounded overflow-hidden">
                        <div
                            className={`${getProgressColor(energy)} h-full`}
                            style={{ width: `${energy}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Botones de interacción */}
            <div className="flex space-x-2 mt-4">
                {/* Botón para alimentar al Tamagotchi */}
                <button
                    onClick={feed}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bgblue-600 transition">
                    Feed
                </button>
                {/* Botón para jugar con el Tamagotchi */}
                <button
                    onClick={play}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bggreen-600 transition">
                    Play
                </button>
                {/* Botón para hacer dormir al Tamagotchi */}
                <button
                    onClick={sleep}
                    className="px-4 py-2 bg-pink-500 text-white rounded hover:bgpurple-600 transition">
                    Sleep
                </button>
                <button
                    onClick={clean}
                    className="px-4 py-2 bg-orange-500 text-white rounded hover:bgpurple-600 transition">
                    Shower
                </button>



            </div>

            <br></br>

            <div>
                <h1 className="text-2xl font-bold text-center mb-4">✨Objetos✨</h1>


                <div className="flex items-center justify-center space-x-4">
                    <h1 className="text-2xl font-bold text-center mb-4">🦴</h1>
                    <h1 className="text-2xl font-bold text-center mb-4">{cantidadHuesos}</h1>
                    <button
                        onClick={hambreATope}
                        className="px-4 py-2 bg-purple-500 text-white rounded hover:bgpurple-600 transition">
                        Usar
                    </button>
                    <button
                        onClick={comprarHuesos}
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bgpurple-600 transition">
                        Comprar
                    </button>
                </div>

                <div className="flex items-center justify-center space-x-4">
                    <h1 className="text-2xl font-bold text-center mb-4">🥎</h1>
                    <h1 className="text-2xl font-bold text-center mb-4">{cantidadPelotas}</h1>
                    <button
                        onClick={felicidadATope}
                        className="px-4 py-2 bg-purple-500 text-white rounded hover:bgpurple-600 transition">
                        Usar
                    </button>
                    <button
                        onClick={comprarPelotas}
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bgpurple-600 transition">
                        Comprar
                    </button>
                </div>

                <div className="flex items-center justify-center space-x-4">
                    <h1 className="text-2xl font-bold text-center mb-4">🪥</h1>
                    <h1 className="text-2xl font-bold text-center mb-4">{cantidadCepillos}</h1>
                    <button
                        onClick={higieneATope}
                        className="px-4 py-2 bg-purple-500 text-white rounded hover:bgpurple-600 transition">
                        Usar
                    </button>
                    <button
                        onClick={comprarCepillos}
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bgpurple-600 transition">
                        Comprar
                    </button>
                </div>

                <div className="flex items-center justify-center space-x-4">
                    <h1 className="text-2xl font-bold text-center mb-4">⚡</h1>
                    <h1 className="text-2xl font-bold text-center mb-4">{cantidadEnergias}</h1>
                    <button
                        onClick={energiaATope}
                        className="px-4 py-2 bg-purple-500 text-white rounded hover:bgpurple-600 transition">
                        Usar
                    </button>
                    <button
                        onClick={comprarEnergias}
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bgpurple-600 transition">
                        Comprar
                    </button>
                </div>
            </div>

            <div>

            </div>

        </div>



    );
}