const  mostrarReceta = async () => {
const API_URL = 'https://sazonapi.hymsoft.repl.co/api/v1/recipies';

try {
    const respuesta = await fetch (API_URL);

    const { data } = await respuesta.json();

    return data;
} catch (error) {
    console.log("Error al obtener las recetas", error);
    throw error;
}
};

mostrarReceta()

    .then((recetas) => {
    console.log(recetas[0]);
    
    })
    .catch((error) => {
        console.log(error);
    });

    const armarTarjetas = (receta) => {
        console.log(receta)
        const contenedorTarjetas = document.querySelector('.contenedor-tarjetas');

    const tarjetaHTML = `
        <div class="card">
            <img src="${receta.imagen}" class="card-img-top imagenCard" alt="..." widht:"100px">
            <div class="card-body tarjetas">
                <h5 class="card-title colorTexto">${receta.nombre}</h5>
                <p class="card-text colorTexto">${receta.descripcion_tipo}</p>
                <p class="card-text colorTexto">INSTRUCCIONES:${receta.instrucciones}</p>
                <p class="card-text colorTexto">TIEMPO DE COCCIÓN:${receta.tiempo_coccion}</p>
            </div>
            </div>
    `;

    contenedorTarjetas.innerHTML += tarjetaHTML;

    }

    mostrarReceta()
    .then((receta) =>{
        armarTarjetas(receta[1]);
    } )



/* 

    const  mostrarTabla = async () => {
        const API_URL = 'https://sazonapi.hymsoft.repl.co/api/v1/recipies';
        
        try {
            const respuesta = await fetch (API_URL);
        
            const { data } = await respuesta.json();
        
            return data;
        } catch (error) {
            console.log("Error al obtener las recetas", error);
            throw error;
        }
        };
    mostrarTabla()
        .then((ingredientes) =>{
            armarTarjetas(ingredientes[0]);
        } )

    mostrarTabla()

        .then((ingredientes) => {
        console.log(ingredientes[0]);
        
        })
        .catch((error) => {
            console.log(error);
        });
        const armarTabla = (ingredientes) => {
            console.log(ingredientes)
            const contenedorTabla = document.querySelector('.tablaIngredientes');
    
        const tarjetaHTML = `
        <tr>
        <th>NOMBRE</th>
        <th>CANTIDAD</th>
      </tr>
      <tr>
        <td>${ingredientes.nombre}</td>
        <td>${ingredientes.cantidad}</td>
      </tr>
    
        `;
    
        contenedorTarjetas.innerHTML += tarjetaHTML;
    
        }
    
        
        mostrarTabla()
            .then((ingredientes) =>{
                armarTabla(ingredientes[0]);
            } )
    
 */