import React from 'react';
import Navbar from './componentes/navbar';
import Footer from './componentes/footers';
import Card from './componentes/card';
import empanada from './imagenes/empanada,png.jfif';  // Asegúrate de que la ruta y el nombre del archivo sean correctos
import rabioles from './imagenes/rabioles'; // Asegúrate de que la ruta y el nombre del archivo sean correctos
import fideos from './imagenes/fideos con salsa'; // Asegúrate de que la ruta y el nombre del archivo sean correctos
import choripan from './imagenes/choripan'; // Asegúrate de que la ruta y el nombre del archivo sean correctos
import mila from './imagenes/mila'; // Asegúrate de que la ruta y el nombre del archivo sean correctos
import './App.css';

function App() {
  const empanadaIngredientes = ['🧈1/2','💧1/2','🧅1', '🫑1', '🥚2', '🥩🔨300g', '🌶️🧂🫙 al gusto'];
  const RabiolesIngredientes = ['🧄3', '🧅1 o 2', '🥫1', '🧂🫙 al gusto', 'rabioles'];
  const fideosIngredientes = ['🥫1', '🧅1', '🌶️🧂🫙 al gusto', '🥩🔨300g', 'fideos'];
  const choripanIngredientes = ['🥖1', '🍖1', '🍅1/2', '🧅', '🧂🫙 al gusto'];
  const milaIngredientes = ['milanesa', '🧈', '🥔3', '🧂a gusto', '🥛1']; 
  return (
    <div>
      <Navbar />
      <Card
        title="Empanadas"
        image={empanada} 
        content=" Ingredientes:

        Masa:
        
        2 tazas de harina de trigo
        1/2 cucharadita de sal
        1/2 taza de manteca fría, en trozos
        Aproximadamente 1/2 taza de agua fría
        Relleno:
        
        1 cebolla y 1 pimiento, picados
        300 gramos de carne molida
        Especias (comino, pimentón, ají molido), sal y pimienta al gusto
        1/2 taza de aceitunas picadas
        2 huevos cocidos, picados
        Preparación:
        
        Sofríe cebolla y pimiento en aceite hasta dorar.
        
        Agrega carne, especias, sal y pimienta; cocina y mezcla bien.
        
        Añade aceitunas y huevos; reserva el relleno.
        
        Prepara la masa mezclando harina, sal y manteca.
        
        Agrega agua hasta formar masa suave.
        
        Divide en bolas, reposa 15-20 minutos.
        
        Precalienta horno a 180°C y calienta una bandeja en él.
        
        Estira bolas de masa en círculos.
        
        Coloca relleno en el centro de cada círculo.
        
        Doble y sella bordes con tenedor.
        
        Hornea 20-25 min hasta dorar.
        
        Sirve caliente y ¡disfruta!"
        ingredientes={empanadaIngredientes}
      />
      <Card
      title="Rabioles"
      image={rabioles} 
      content="Ingredientes:

      1 pack de ravioles de verdura
      3 dientes de ajo, picados
      1 cebolla grande o 2 pequeñas, picadas
      250 g de salchicha para tuco, desmenuzada
      1 lata de tomate perita en cubos
      Aceite de oliva
      Sal y pimienta al gusto
      Opcional: albahaca fresca y queso parmesano rallado
      Preparación:
      
      Sofríe ajo en aceite hasta fragante, agrega cebolla y cocina hasta dorar.
      
      Agrega salchicha, cocina hasta dorar y cocer.
      
      Agrega tomates, cocina 15-20 min hasta espesar. Sazona.
      
      Hierve ravioles en agua con sal según instrucciones.
      
      Escurre ravioles, sirve en platos.
      
      Vierte salsa sobre ravioles.
      
      Opcional: agrega albahaca y queso parmesano."
      ingredientes={RabiolesIngredientes}

    />
          <Card
      title="Fideos con salsa"
      image={fideos} 
      content="Ingredientes:

      1 paquete de espaguetis
      500 g de tomates
      400 g de carne molida
      1 cebolla mediana, picada en cubitos
      1 rama de apio, picada
      Aceite de oliva
      Sal, pimienta y especias al gusto (como orégano, albahaca, etc.)
      Preparación:
      
      Cocina los espaguetis en agua con sal según las instrucciones del paquete. Escúrrelos y resérvalos.
      
      En una sartén grande, calienta un poco de aceite de oliva a fuego medio.
      
      Agrega la cebolla picada y el apio picado. Sofríelos hasta que estén dorados y fragantes.
      
      Añade la carne molida y cocina hasta que esté bien cocida y dorada. Rompe los grumos con una cuchara de madera.
      
      Agrega los tomates picados. Cocina la salsa a fuego medio-bajo durante unos 15-20 minutos, removiendo ocasionalmente, hasta que los tomates se deshagan y la salsa espese.
      
      Condimenta la salsa con sal, pimienta y especias al gusto. Puedes añadir orégano, albahaca u otras hierbas secas según tus preferencias.
      
      Sirve los espaguetis cocidos en platos individuales.
      
      Vierte la salsa de carne y tomate sobre los espaguetis."
      ingredientes={fideosIngredientes}

    />
          <Card
      title="choripan"
      image={choripan} 
      content="Ingredientes:

      Chorizos
      Panes tipo baguette o panes para choripán
      Tomates
      Carne molida
      Cebolla
      Apio
      Aceite de oliva
      Sal, pimienta y especias
      Preparación:
      
      Prepara una salsa de carne y tomate cocinando cebolla, apio, carne molida y tomates. Condimenta al gusto.
      
      Asa los chorizos en una parrilla hasta dorar y cocer por dentro.
      
      Abre los panes, coloca los chorizos asados en ellos.
      
      Vierte la salsa sobre los choripanes o sírvela aparte."
      ingredientes={choripanIngredientes}

    />
          <Card
      title="Milanesa con Pure"
      image={mila} 
      content="Ingredientes:

      Milanesas de carne (ya preparadas)
      Puré de papas (puedes hacerlo siguiendo los pasos anteriores o usar puré prehecho)
      Mantequilla
      Sal y nuez moscada al gusto, 
      Calentar las milanesas:

Precalienta el horno a unos 180°C (350°F).
Coloca las milanesas en una bandeja apta para horno.
Calienta las milanesas en el horno durante unos 5-10 minutos, hasta que estén bien calientes.
      Preparación del puré:

Hierve las papas en agua con sal hasta que estén tiernas.
Escurre y pela las papas si lo prefieres.
Tritura las papas cocidas con un prensa-papas o un tenedor.
Calienta leche y mantequilla en una olla pequeña y añádelas al puré mientras lo mezclas hasta obtener la consistencia deseada.
Condimenta el puré con sal y nuez moscada al gusto. Mezcla bien."
      ingredientes={milaIngredientes}

    />
    <Footer />
    </div>
    
  );
}

export default App;
