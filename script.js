
document.addEventListener("DOMContentLoaded", (event) => {
    const btnCamisetaJugador = document.getElementById('btn-camiseta-jugador');
    const btnCamisetaArquero = document.getElementById('btn-camiseta-arquero');
    const btnShortJugador = document.getElementById('btn-short-jugador');
    const btnShortArquero = document.getElementById('btn-short-arquero');
    const designContainer = document.querySelector('.design-container')
    const designButtonIconContainer = document.querySelectorAll('.design-buttons-container > button');
    const btnTabModel = document.getElementById('btn_tab_models')
    const btnTabColor = document.getElementById('btn_tab_colors')
    const btnTabNumber = document.getElementById('btn_tab_numbers')
    const tabModels = document.querySelector('.tab-models');
    const tabColors = document.querySelector('.tab-colors');
    const tabNumbers = document.querySelector('.tab-numbers');
    let nameDesign = document.getElementById('name-design')
    let selectedCategory = null;
    let modelsCart = []
    console.log(modelsCart)

    // Definir los modelos específicos para cada botón
    const modelos = {
        camisetaJugador: [
            {
                id: '1',
                categoria:'Camiseta Jugador',
                // frente: 'assets/images/camisetas/camiseta-modelo1-frente.png',  
                 frente: 'assets/images/camisetas/camiseta-jugador/modelo-uno/camisetaJugador-frenteydorso-1-18-3.png',              
                // dorso: 'assets/images/camisetas/camiseta-modelo1-dorso.png'
            },
            {
                id: '2',
                categoria:'Camiseta Jugador',
                frente: 'assets/images/camisetas/camiseta-jugador/modelo-dos/camisetaJugador-frenteydorso-2-18-3.png',
                // dorso: 'assets/images/camisetas/camiseta-modelo1-dorso.png'
            },
            {
                id: '3',
                categoria:'Camiseta Jugador',
                frente: 'assets/images/camisetas/camiseta-jugador/modelo-dos/camisetaJugador-frenteydorso-2-18-3.png',
                // dorso: 'assets/images/camisetas/camiseta-modelo3-dorso.png'
            },
            {
                id: '4',
                categoria:'Camiseta Jugador',
                frente: 'assets/images/camisetas/camiseta-jugador/modelo-dos/camisetaJugador-frenteydorso-2-18-3.png',
                // dorso: 'assets/images/camisetas/camiseta-modelo1-dorso.png'
            },
            {
                id: '5',
                categoria:'Camiseta Jugador',
                frente: 'assets/images/camisetas/camiseta-jugador/modelo-dos/camisetaJugador-frenteydorso-2-18-3.png',
                // dorso: 'assets/images/camisetas/camiseta-modelo1-dorso.png'
            },
            {
                id: '6',
                categoria:'Camiseta Jugador',
                frente: 'assets/images/camisetas/camiseta-jugador/modelo-dos/camisetaJugador-frenteydorso-2-18-3.png',
                // dorso: 'assets/images/camisetas/camiseta-modelo1-dorso.png'
            },
            {
                id: '7',
                categoria:'Camiseta Jugador',
                frente: 'assets/images/camisetas/camiseta-jugador/modelo-dos/camisetaJugador-frenteydorso-2-18-3.png',
                // dorso: 'assets/images/camisetas/camiseta-modelo1-dorso.png'
            },
            {
                id: '8',
                categoria:'Camiseta Jugador',
                frente: 'assets/images/camisetas/camiseta-jugador/modelo-dos/camisetaJugador-frenteydorso-2-18-3.png',
                // dorso: 'assets/images/camisetas/camiseta-modelo1-dorso.png'
            },
            {
                id: '9',
                categoria:'Camiseta Jugador',
                frente: 'assets/images/camisetas/camiseta-jugador/modelo-dos/camisetaJugador-frenteydorso-2-18-3.png',
                // dorso: 'assets/images/camisetas/camiseta-modelo1-dorso.png'
            },
            {
                id: '10',
                categoria:'Camiseta Jugador',
                frente: 'assets/images/camisetas/camiseta-jugador/modelo-dos/camisetaJugador-frenteydorso-2-18-3.png',
                // dorso: 'assets/images/camisetas/camiseta-modelo1-dorso.png'
            },
            {
                id: '11',
                categoria:'Camiseta Jugador',
                frente: 'assets/images/camisetas/camiseta-jugador/modelo-dos/camisetaJugador-frenteydorso-2-18-3.png',
                // dorso: 'assets/images/camisetas/camiseta-modelo1-dorso.png'
            },
            {
                id: '12',
                categoria:'Camiseta Jugador',
                frente: 'assets/images/camisetas/camiseta-jugador/modelo-dos/camisetaJugador-frenteydorso-2-18-3.png',
                // dorso: 'assets/images/camisetas/camiseta-modelo1-dorso.png'
            }
        ],
        camisetaArquero: [
            {
                id: '1',
                categoria:'Camiseta Arquero',
                 frente: 'assets/images/camisetas/camiseta-jugador/modelo-uno/camisetaJugador-frenteydorso-1-18-3.png',
                // dorso: 'assets/images/camisetas/camiseta-modelo1-dorso.png'
            },
            {
                id: '2',
                categoria:'Camiseta Arquero',
                frente: 'assets/images/camisetas/camiseta-arquero/modelo-dos/camisetaArquero-frenteydorso-2-18-3.png',
                // dorso: 'assets/images/camisetas/camiseta-modelo1-dorso.png'
            },
            {
                id: '3',
                categoria:'Camiseta Arquero',
                frente: 'assets/images/camisetas/camiseta-arquero/modelo-dos/camisetaArquero-frenteydorso-2-18-3.png',
                // dorso: 'assets/images/camisetas/camiseta-modelo3-dorso.png'
            }
        ],
        shortJugador: [
            {
                id: '1',
                categoria:'Short Jugador',
                frente: 'assets/images/shorts/short-modelo1.png'
            },
            {
                id: '2',
                categoria:'Short Jugador',
                frente: 'assets/images/shorts/short-modelo2.png'
            },
            {
                id: '3',
                categoria:'Short Jugador',
                frente: 'assets/images/shorts/short-modelo3.png'
            }
        ],
        shortArquero: [
            {
                id: '1',
                categoria:'Short Arquero',
                frente: 'assets/images/shorts/short-modelo1.png'
            },
            {
                id: '2',
                categoria:'Short Arquero',
                frente: 'assets/images/shorts/short-modelo2.png'
            },
            {
                id: '3',
                categoria:'Short Arquero',
                frente: 'assets/images/shorts/short-modelo3.png'
            }
        ]
    };

    const modelNumbers = [
        {
            id: 1,
            image: 'assets/images/numeros/modelo-numero-1.png'
        },
        {
            id: 2,
            image: 'assets/images/numeros/modelo-numero-2.png'
        },
        {
            id: 3,
            image: 'assets/images/numeros/modelo-numero-3.png'
        }
    ]
    //OBJETO PARA LOGICA DE BTN ADD DESIGN
    let selectedDesigns = {
        camisetaJugador: null,
        camisetaArquero: null,
        shortJugador: null,
        shortArquero: null,
    };
    
    // Variables para el modelo y colores seleccionados
    let currentPage = 1;
    const itemsPerPage = 6;
    let selectedModel = null;
    let selectedMainColor = null;
    let selectedSecondaryColor = null;
    let selectedFinalModel = null;
    let selectedButtonIcon = designButtonIconContainer[0];
    selectedButtonIcon.classList.add('selected-design-buttons-container')
    nameDesign.textContent = `${modelos.camisetaJugador[0].categoria}`

    designButtonIconContainer.forEach((buttonsDesign) => {
        // console.log(buttonsDesign)
        buttonsDesign.addEventListener('click', (e) => {
            if (selectedButtonIcon !== buttonsDesign) {
                // Remover la clase 'selected-design-buttons-container' del botón previamente seleccionado
                selectedButtonIcon.classList.remove('selected-design-buttons-container');
                
                // Agregar la clase 'selected-design-buttons-container' al botón actual
                buttonsDesign.classList.add('selected-design-buttons-container');
                
                // Actualizar la referencia al botón actualmente seleccionado
                selectedButtonIcon = buttonsDesign;
            }
        })
    })
    // Lógica en la botonera de iconos
    btnCamisetaJugador.addEventListener('click', () => {
        document.querySelector('.main-image-number').style.display = 'block'
        nameDesign.textContent = `${modelos.camisetaJugador[0].categoria}`
        loadCamisetaJugador();
        updateAddDesignButton('camisetaJugador');
    });

    btnCamisetaArquero.addEventListener('click', () => {
        document.querySelector('.main-image-number').style.display = 'block'
        nameDesign.textContent = `${modelos.camisetaArquero[0].categoria}`
        selectedCategory = 'camisetaArquero';
        selectedModel = modelos.camisetaArquero[0].id;
        updateMainImage(
            modelos.camisetaArquero[0].frente,
            modelos.camisetaArquero[0].dorso
        );
        updateModels(modelos.camisetaArquero, currentPage);
        updateAddDesignButton('camisetaArquero');
    });

    btnShortJugador.addEventListener('click', () => {
        document.querySelector('.main-image-number').style.display = 'none'
        nameDesign.textContent = `${modelos.shortJugador[0].categoria}`
        selectedCategory = 'shortJugador';
        selectedModel = modelos.shortJugador[0].id;
        updateMainImage(
            modelos.shortJugador[0].frente
        );
        updateModels(modelos.shortJugador, currentPage);
        updateAddDesignButton('shortJugador');
    });

    btnShortArquero.addEventListener('click', () => {
        document.querySelector('.main-image-number').style.display = 'none'
        nameDesign.textContent = `${modelos.shortArquero[0].categoria}`
        selectedCategory = 'shortArquero';
        selectedModel = modelos.shortArquero[0].id;
        updateMainImage(
            modelos.shortArquero[0].frente
        );
        updateModels(modelos.shortArquero, currentPage);
        updateAddDesignButton('shortArquero');
    });

    // Función para actualizar la imagen principal
    const updateMainImage = (frontImage, backImage) => {
        // console.log(frontImage)
        const mainImageContainer = document.querySelector('.design-main-image-container');
        let imagesHTML = `<img src="${frontImage}" alt="Imagen de frente">`;
        // if (backImage) {
        //     imagesHTML += `<img class="front-image" src="${backImage}" alt="Imagen de dorso">`;
        // }
        mainImageContainer.innerHTML = imagesHTML;
    };

    // Función para actualizar los modelos
    let selectedDesignButton = null;
    let selectedProduct;
    const updateModels = (modelArray, page = 1) => {
        // console.log(modelArray)
        const modelsContainer = document.querySelector('.models');
        // console.log(modelsContainer)
        modelsContainer.innerHTML = ''; // Limpiar el contenido actual

         // Calcular el índice de los elementos a mostrar
         const start = (page - 1) * itemsPerPage;
         const end = start + itemsPerPage;
         const paginatedModels = modelArray.slice(start, end);
        //Mostrar Modelos
         paginatedModels.forEach((model) => {
             const button = document.createElement('button');
             const img = document.createElement('img');
             img.src = model.frente;
             img.alt = "Modelo de prenda";
             button.appendChild(img);

            button.addEventListener('click', () => {
                // console.log(selectedDesignButton)
                if (selectedDesignButton) {
                    selectedDesignButton.classList.remove('selected-design');
                }
                console.log(button)
                // Agregar la clase 'selected' al botón clicado
                button.classList.add('selected-design');

                // Actualizar la referencia al botón previamente seleccionado
                selectedDesignButton = button;
                // console.log(button)
                selectedModel = model.id;
                selectedProduct = model
                // console.log(model)
                updateMainImage(model.frente);
                // updateMainImage(model.frente, model.dorso);
            });
            modelsContainer.appendChild(button);
        });
          // Actualizar el estado de los botones de paginación
          updatePaginationButtons(modelArray);
    };

    //FUNCION PARA LA PAGINACIÓN DE LOS MODELOS

    const updatePaginationButtons = (modelArray) => {
        const btnPrev = document.querySelector('.btn-prev');
        const btnNext = document.querySelector('.btn-next');
        const totalPages = Math.ceil(modelArray.length / itemsPerPage);

        btnPrev.disabled = currentPage === 1;
        btnNext.disabled = currentPage === totalPages;

        btnPrev.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                updateModels(modelArray, currentPage);
            }
        });

        btnNext.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                updateModels(modelArray, currentPage);
            }
        });
    };

    // Función para actualizar la imagen con los colores seleccionados
    const updateMainImageWithColors = () => {
        if (selectedModel && selectedMainColor && selectedSecondaryColor ) {
            let basePath, modelFolder, imagePathFront, imagePathBack;
            // Determinar el tipo de prenda basado en el botón seleccionado
            if (selectedCategory === 'camisetaJugador') {
                basePath = 'assets/images/camisetas/camiseta-jugador';
            } else if (selectedCategory === 'camisetaArquero') {
                basePath = 'assets/images/camisetas/camiseta-arquero';
            } else if (selectedCategory === 'shortJugador') {
                basePath = 'assets/images/shorts/short-jugador';
            } else if (selectedCategory === 'shortArquero') {
                basePath = 'assets/images/shorts/short-arquero';
            }
            // console.log(selectedCategory)
            // Determinar el modelo de la prenda según el modelo seleccionado
            if (selectedModel === '1') {
                modelFolder = 'modelo-uno';
            } else if (selectedModel === '2') {
                modelFolder = 'modelo-dos';
            } else if (selectedModel === '3') {
                modelFolder = 'modelo-tres';
            }

            // Rutas   
            imagePathFront = `${basePath}/${modelFolder}/${selectedCategory}-frenteydorso-${selectedModel}-${selectedMainColor}-${selectedSecondaryColor}.png`;
            // imagePathBack = `${basePath}/${modelFolder}/${selectedCategory}-dorso-${selectedModel}${selectedMainColor}${selectedSecondaryColor}.png`;
            // console.log(imagePathFront)
            const newProduct = {
                id: Date.now().toString(36) + Math.random().toString(36).substring(2, 10),
                model: selectedModel,
                categoria: selectedCategory,
                path : imagePathFront
            }
            // console.log(newProduct)
            selectedFinalModel = newProduct
            // newProduct.push(modelsCart)

           
            // Crear una nueva imagen para verificar si el dorso existe
            const backImage = new Image();
            backImage.src = imagePathBack;
            backImage.onload = () => {
                // Si la imagen del dorso se carga correctamente, actualizar ambas imágenes
                updateMainImage(imagePathFront, imagePathBack);
            };
            backImage.onerror = () => {
                // Si la imagen del dorso no existe, actualizar solo la imagen frontal
                updateMainImage(imagePathFront, null);
            };

            //  if (selectedProduct) {
            //     // Crear un nuevo producto con los detalles actuales
            //     const newProduct = {
            //         id: Math.random().toString(36).substring(2, 9),  // Crear un ID único para este producto
            //         model: selectedProduct.model,  // Modelo seleccionado (camiseta, short, etc.)
            //         imagePathFront: imagePathFront,  // Ruta de la imagen personalizada
            //         mainColor: mainColor,  // Color principal seleccionado
            //         secondaryColor: secondaryColor,  // Color secundario seleccionado
            //         description: selectedProduct.description // Otra información del producto, si aplica
            //     };
        
            //     
            //     // newProduct.push(modelsCart);
            //     console.log('Producto agregado al carrito:', newProduct);
            // } else {
            //     console.log('No se ha seleccionado ningún modelo.');
            // }
        }
    };

    // Eventos para la selección de colores
    const colorSelectors = document.querySelectorAll('.main-colors-list li');
    let selectedMainColorElement = null;
    let selectedSecondaryColorElement = null;
    colorSelectors.forEach(colorSelector => {
        // console.log(colorSelector)
        colorSelector.addEventListener('click', (e) => {
            // console.log(colorSelector)
            const colorClass = e.target.classList[0];
            // console.log( 'clase del color',colorClass)
            // Determinar si es un color principal o secundario
            if (colorClass.includes('main-color')) {
                selectedMainColor = colorClass.split('-')[2]; // Obtener el número de color principal
                // console.log(selectedMainColor)
                if (selectedMainColorElement) {
                    selectedMainColorElement.classList.remove('selected-main-color');
                }
                selectedMainColorElement = e.target;
                selectedMainColorElement.classList.add('selected-main-color');
            } else if (colorClass.includes('secondary-color')) {
                
                if (selectedSecondaryColorElement) {
                    selectedSecondaryColorElement.classList.remove('selected-secondary-color');
                }
                selectedSecondaryColorElement = e.target;
                selectedSecondaryColorElement.classList.add('selected-secondary-color');
                selectedSecondaryColor = colorClass.split('-')[2]; // Obtener el número de color secundario
                // console.log(selectedSecondaryColor)
            }

            // No permitir seleccionar el mismo color para ambos
            // if (selectedMainColor && selectedSecondaryColor && selectedMainColor === selectedSecondaryColor) {
            //     alert('El color principal y el color secundario no pueden ser iguales.');
            //     return;
            // }
            updateMainImageWithColors();
        });
    });


    //MOSTRAR MODELOS DE LOS NUMEROS 

    const showNumbers = () => {
        const modelNumbersContainer = document.querySelector('.numbers')
        
        modelNumbers.map((modelNumber) => {
            const buttonNumbers = document.createElement('button');
            const imgNumbers = document.createElement('img');
            // console.log(modelNumber)
            imgNumbers.src = modelNumber.image;
            imgNumbers.alt = "Modelo numero";
            buttonNumbers.appendChild(imgNumbers); 
            // console.log(modelNumbers)

            buttonNumbers.addEventListener('click', () => {
                console.log(modelNumber)
                updateMainImageWithNumbers(modelNumber.image);
            });
    
            modelNumbersContainer.appendChild(buttonNumbers)
        })        
    }


    const updateMainImageWithNumbers = (newImageSrc) => {
        const mainImageNumber = document.querySelector('.main-image-number')
        // Si ya hay una imagen dentro del contenedor, la eliminamos
        mainImageNumber.innerHTML = '';
    
        // Crear una nueva imagen y asignarle el source correspondiente
        const mainImage = document.createElement('img');
        mainImage.src = newImageSrc;
        mainImage.alt = "Imagen principal";
    
        // Agregar la imagen al contenedor principal
        mainImageNumber.appendChild(mainImage);
    };
    

    //Carga camiseta y modelos del jugador al iniciar web
    const loadCamisetaJugador = () => {
        selectedCategory = 'camisetaJugador';
        selectedModel = modelos.camisetaJugador[0].id;
        updateMainImage(
            modelos.camisetaJugador[0].frente,
            modelos.camisetaJugador[0].dorso
        );
        updateModels(modelos.camisetaJugador, currentPage);
    };


    loadCamisetaJugador()
    showNumbers()
    updateMainImageWithNumbers(modelNumbers[0].image);

    //FUNCIONES Y EVENTOS PARA LOS TABS
    // Función para ocultar todas las pestañas
    const hideAllTabs = () => {
        tabModels.style.display = 'none';
        tabColors.style.display = 'none';
        tabNumbers.style.display = 'none';
    }

    // Mostrar el tab-models al iniciar la página
    hideAllTabs(); // Primero ocultamos todo
    // tabModels.style.display = 'block'; // Mostramos solo el de modelos

    // Mostrar los tab modles al iniciar la página
    hideAllTabs(); // Primero ocultamos todo
    tabModels.style.display = 'block'; // Mostramos solo el de modelos

    btnTabModel.addEventListener('click', () => {
        hideAllTabs()
        tabModels.style.display = 'block'; // Mostramos solo el de modelos

    })
    btnTabNumber.addEventListener('click', () => {
        hideAllTabs()
        tabNumbers.style.display = 'block'; // Mostramos solo el de modelos
        
    })
    btnTabColor.addEventListener('click', () => {
        hideAllTabs()
        tabColors.style.display = 'block'; // Mostramos solo el de modelos
    })




    //FUNCION PARA EL BOTON DE "AGREGAR DISEÑO"

    const btnAddDesign = document.getElementById('btn_add_design')
    const btnRemoveDesign = document.getElementById('btn_remove_design')
    let isDesignAdded  = false

    const buttonStates = {
        camisetaJugador: { addDisabled: false, removeDisabled: true, addDisplay: 'block', removeDisplay: 'none' },
        camisetaArquero: { addDisabled: false, removeDisabled: true, addDisplay: 'block', removeDisplay: 'none' },
        shortJugador: { addDisabled: false, removeDisabled: true, addDisplay: 'block', removeDisplay: 'none' },
        shortArquero: { addDisabled: false, removeDisabled: true, addDisplay: 'block', removeDisplay: 'none' }
    };

    const addModelToCart = () => {
        if (selectedFinalModel) {
            const category = selectedCategory;
            selectedDesigns[category] = selectedFinalModel.id; // Guarda el ID del modelo seleccionado
            modelsCart.push(selectedFinalModel); // Agrega el modelo al carrito
            // console.log(`Modelo agregado:`, selectedFinalModel);
            alert(`Modelo ${selectedFinalModel.categoria} agregado al carrito`);
        } else {
            alert("Por favor selecciona un modelo antes de agregar.");
        }
        // console.log("Carrito actual:", modelsCart);
        // console.log("Diseños seleccionados:", selectedDesigns);
        console.log(modelsCart)
    };
    // console.log(modelsCart)

    const removeFromCart = () => {
        const category = selectedCategory;
    
        if (!selectedDesigns[category]) {
            alert(`No hay ningún diseño seleccionado para la categoría ${category}.`);
            return;
        }
    
        const selectedId = selectedDesigns[category]; // ID del modelo para la categoría actual
        const index = modelsCart.findIndex(model => model.id === selectedId); // Encuentra el índice del modelo en el carrito
    
        if (index !== -1) {
            const removedModel = modelsCart.splice(index, 1)[0]; // Elimina el modelo del carrito
            alert(`Modelo ${removedModel.categoria} eliminado del carrito`);
            selectedDesigns[category] = null; // Restablece el diseño seleccionado para esta categoría
        } else {
            alert(`No se encontró un modelo con ID ${selectedId} en el carrito.`);
        }
    
        // console.log("Carrito después de eliminar:", modelsCart);
        // console.log("Diseños seleccionados después de eliminar:", selectedDesigns);
    };
    

    btnAddDesign.addEventListener('click', () => {
        const category = selectedCategory;
    
        if (!selectedDesigns[category]) {
            selectedDesigns[category] = selectedModel; // Guarda el modelo seleccionado
            buttonStates[category].addDisabled = true;
            buttonStates[category].removeDisabled = false;
            buttonStates[category].addDisplay = 'none';
            buttonStates[category].removeDisplay = 'block';
            addModelToCart();
        }
    
        updateAddDesignButton(category);
    });
    
    btnRemoveDesign.addEventListener('click', () => {
        const category = selectedCategory;
    
        if (selectedDesigns[category]) {
            removeFromCart();
            buttonStates[category].addDisabled = false;
            buttonStates[category].removeDisabled = true;
            buttonStates[category].addDisplay = 'block';
            buttonStates[category].removeDisplay = 'none';
        }
    
        updateAddDesignButton(category);
    });
    const updateAddDesignButton = (category) => {
        btnAddDesign.disabled = buttonStates[category].addDisabled;
        btnRemoveDesign.disabled = buttonStates[category].removeDisabled;
        btnAddDesign.style.display = buttonStates[category].addDisplay;
        btnRemoveDesign.style.display = buttonStates[category].removeDisplay;
    };



const btnContinue = document.getElementById('btn-continue');
const btnBack = document.getElementById('btn-back')
const formContainer = document.getElementById('form-container');
const teamFields = document.getElementById('team-fields');
const addPlayerBtn = document.getElementById('add-player-btn');
const removePlayerBtn = document.getElementById('remove-player-btn');
const btnSendForm = document.getElementById('btn_send_form')

let playerCount = 0; // Contador de jugadores

// Mostrar el formulario con una fila inicial al hacer clic
btnContinue.addEventListener('click', () => {
    designContainer.style.display = 'none';
    btnContinue.style.display = 'none';
    btnBack.style.display = 'block';
    formContainer.style.display = 'block';
    if (playerCount === 0) {
        generatePlayerFields(5); // Genera 11 filas inicialmente,
    }
});

btnBack.addEventListener('click', () => {
    designContainer.style.display = 'flex';
    btnBack.style.display = 'none';
    btnContinue.style.display = 'inline';
    formContainer.style.display = 'none';
})

// Función para generar las filas dinámicamente
function generatePlayerFields(initialCount) {
    for (let i = 0; i < initialCount; i++) {
        addPlayerField(modelsCart);
    }
}
function addPlayerField(modelsCart) {
    console.log(modelsCart);
    
    // Determinar si las categorías específicas están presentes en modelsCart
    const hasShortJugador = modelsCart.some((item) => item.categoria === 'shortJugador');
    const hasCamisetaJugador = modelsCart.some((item) => item.categoria === 'camisetaJugador');
    const hasCamisetaArquero = modelsCart.some((item) => item.categoria === 'camisetaArquero');
    const hasShortArquero = modelsCart.some((item) => item.categoria === 'shortArquero');

    playerCount++; // Incrementa el contador

    const playerRow = document.createElement('div');
    playerRow.classList.add('player-row');
    playerRow.setAttribute('id', `player-row-${playerCount}`); // ID único para cada fila

    // Crear etiqueta y campo de Nombre
    const nameLabel = document.createElement('label');
    nameLabel.textContent = `Nombre (Jugador ${playerCount}):`;
    nameLabel.setAttribute('for', `player-name-${playerCount}`);
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = `player-name-${playerCount}`;
    nameInput.name = `player-name-${playerCount}`;

    // Crear etiqueta y campo de Número de camiseta
    const numberLabel = document.createElement('label');
    numberLabel.textContent = 'Número de camiseta:';
    numberLabel.setAttribute('for', `player-number-${playerCount}`);
    const numberInput = document.createElement('input');
    numberInput.type = 'number';
    numberInput.id = `player-number-${playerCount}`;
    numberInput.name = `player-number-${playerCount}`;

    playerRow.appendChild(nameLabel);
    playerRow.appendChild(nameInput);
    playerRow.appendChild(numberLabel);
    playerRow.appendChild(numberInput);
    
    // Agregar campos de talla si corresponden
    if (hasCamisetaJugador || hasCamisetaArquero) {
        const sizeLabel = document.createElement('label');
        sizeLabel.textContent = 'Talle camiseta:';
        sizeLabel.setAttribute('for', `player-size-${playerCount}`);

        const sizeSelect = document.createElement('select');
        sizeSelect.id = `player-size-${playerCount}`;
        sizeSelect.name = `player-size-${playerCount}`;

        ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            sizeSelect.appendChild(option);
        });

        playerRow.appendChild(sizeLabel);
        playerRow.appendChild(sizeSelect);
    }

    if (hasShortJugador || hasShortArquero) {
        const shortLabel = document.createElement('label');
        shortLabel.textContent = 'Talle short:';
        shortLabel.setAttribute('for', `short-size-${playerCount}`);
        const shortSelect = document.createElement('select');
        shortSelect.id = `short-size-${playerCount}`;
        shortSelect.name = `short-size-${playerCount}`;

        ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            shortSelect.appendChild(option);
        });

        playerRow.appendChild(shortLabel);
        playerRow.appendChild(shortSelect);
    }

    // Agregar campos comunes
   
    console.log(nameLabel)
    console.log(nameInput)
    console.log(numberLabel)
    console.log(numberInput)

    // Agregar la fila al contenedor
    teamFields.appendChild(playerRow);
}



// Función para eliminar la última fila
function removePlayerField() {
    if (playerCount > 0) {
        const playerRow = document.getElementById(`player-row-${playerCount}`);
        if (playerRow) {
            teamFields.removeChild(playerRow); // Elimina la última fila
        }
        playerCount--; // Decrementa el contador
    } else {
        alert('No hay más filas para eliminar.');
    }
}

function getPlayerFormData() {
    const playersData = [];
    
    // Recorremos cada fila de jugador para obtener los valores
    const playerRows = document.querySelectorAll('.player-row');
    
    playerRows.forEach(playerRow => {
        const playerData = {};

        // Capturamos los valores de los campos por su id
        const nameInput = playerRow.querySelector('input[type="text"]');
        const numberInput = playerRow.querySelector('input[type="number"]');
        const sizeSelect = playerRow.querySelector('select[id^="player-size-"]');
        const shortSelect = playerRow.querySelector('select[id^="short-size-"]');

        // Guardamos los valores en el objeto playerData
        playerData.name = nameInput ? nameInput.value : '';
        playerData.number = numberInput ? numberInput.value : '';
        playerData.size = sizeSelect ? sizeSelect.value : '';
        playerData.shortSize = shortSelect ? shortSelect.value : '';

        // Añadimos el objeto playerData al array playersData
        playersData.push(playerData);
    });
    console.log(playersData);
    // Retornamos los datos de los jugadores
    return playersData;
}

// Eventos para agregar o eliminar filas
addPlayerBtn.addEventListener('click', () => addPlayerField(modelsCart));
removePlayerBtn.addEventListener('click', removePlayerField);
btnSendForm.addEventListener('click', (e) => {
    e.preventDefault();
    getPlayerFormData();
  })    
});






// function addPlayerField(modelsCart) {
//     console.log(modelsCart);
    
//     modelsCart.forEach((model) => {
//         // Si el modelo pertenece a la categoría shortJugador, no agregar los campos de short
//         const hasShortJugador = modelsCart.some((item) => item.categoria === 'shortJugador');
//         const hasCamisetaJugador = modelsCart.some((item) => item.categoria === 'camisetaJugador');
//         const hasCamisetaArquero = modelsCart.some((item) => item.categoria === 'camisetaArquero');
//         const hasShortArquero = modelsCart.some((item) => item.categoria === 'shortArquero');
        
//         playerCount++; // Incrementa el contador

//         const playerRow = document.createElement('div');
//         playerRow.classList.add('player-row');
//         playerRow.setAttribute('id', `player-row-${playerCount}`); // ID único para cada fila

//         // Crear etiqueta y campo de Nombre
//         const nameLabel = document.createElement('label');
//         nameLabel.textContent = `Nombre (Jugador ${playerCount}):`;
//         nameLabel.setAttribute('for', `player-name-${playerCount}`);
//         const nameInput = document.createElement('input');
//         nameInput.type = 'text';
//         nameInput.id = `player-name-${playerCount}`;
//         nameInput.name = `player-name-${playerCount}`;

//         // Crear etiqueta y campo de Número de camiseta
//         const numberLabel = document.createElement('label');
//         numberLabel.textContent = 'Número de camiseta:';
//         numberLabel.setAttribute('for', `player-number-${playerCount}`);
//         const numberInput = document.createElement('input');
//         numberInput.type = 'number';
//         numberInput.id = `player-number-${playerCount}`;
//         numberInput.name = `player-number-${playerCount}`;

//         // Crear etiqueta y campo de Talle de camiseta (solo si camisetaJugador o camisetaArquero está presente)
//         const sizeSelect = document.createElement('select');
//         sizeSelect.id = `player-size-${playerCount}`;
//         sizeSelect.name = `player-size-${playerCount}`;

//         playerRow.appendChild(nameLabel);
//         playerRow.appendChild(nameInput);
//         playerRow.appendChild(numberLabel);
//         playerRow.appendChild(numberInput);

//        if (hasCamisetaJugador || hasCamisetaArquero) {
//     const sizeLabel = document.createElement('label');
//     sizeLabel.textContent = 'Talle camiseta:';
//     sizeLabel.setAttribute('for', `player-size-${playerCount}`);
    
//     const sizeSelect = document.createElement('select');
//     sizeSelect.id = `player-size-${playerCount}`;
//     sizeSelect.name = `player-size-${playerCount}`;

//     ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].forEach(size => {
//         const option = document.createElement('option');
//         option.value = size;
//         option.textContent = size;
//         sizeSelect.appendChild(option);
//         console.log(sizeSelect)
//         console.log(option)
//     });

//     // Agregar etiqueta y selección consecutivamente
//     playerRow.appendChild(sizeLabel);
//     playerRow.appendChild(sizeSelect);
// }

//         // Crear etiqueta y campo de Talle de short (solo si shortJugador o shortArquero está presente)
//         if (hasShortJugador || hasShortArquero) {
//             const shortLabel = document.createElement('label');
//             shortLabel.textContent = 'Talle short:';
//             shortLabel.setAttribute('for', `short-size-${playerCount}`);
//             const shortSelect = document.createElement('select');
//             shortSelect.id = `short-size-${playerCount}`;
//             shortSelect.name = `short-size-${playerCount}`;

//             ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].forEach(size => {
//                 const option = document.createElement('option');
//                 option.value = size;
//                 option.textContent = size;
//                 shortSelect.appendChild(option);
//                 console.log(shortSelect)
//             });

//             playerRow.appendChild(shortLabel); // Solo si short está seleccionado
//             playerRow.appendChild(shortSelect);
//         }

//         // Agregar todos los elementos al contenedor

//         teamFields.appendChild(playerRow);
//         // playerRow.appendChild(sizeSelect);
        
//     });
// }
