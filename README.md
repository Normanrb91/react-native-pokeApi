# Flipeat

## Prueba técnica

La prueba consiste en la realización de una pequeña aplicación en `React Native`

El objetivo de la prueba es poder comprobar como te desenvuelves, como estructuras el proyecto y como resuelves los posibles problemas que vayan aparenciendo.

El código deberás de subirlo a este repositorio. Te recomiendo que vayas commiteando tus cambios poco a poco.

Una vez demos por finalizada la prueba, revisaré tu código y tendremos una pequeña charla donde te haré preguntas acerca de él.

Tómate el tiempo que necesites y si tienes cualquier problema no dudes en consultarme. Mi correo es: carlosrivero@flipeatapp.com

¡Comenzamos!

## Flipoke

Vas a crear una pequeña aplicación con un listado de Pokémon y una vista detalle para cada Pokémon. Para ello usarás la [PokéApi](https://pokeapi.co/) (una API pública y gratuita sobre Pokémon)

La app constará con dos vistas, la principal al abrir la app será un listado de Pokémon, los 151 de la primera edición. Tendrás que hacer una llamada a esta URL `https://pokeapi.co/api/v2/pokemon?limit=151`. Esta te devolverá una lista, con el nombre y el link de los primeros 151 Pokémon.

Muestra un listado con los nombres de cada uno de ellos y que al pulsar sobre el nombre te lleve a la siguiente pantalla.

Esta pantalla será una vista detalle de los datos del Pokémon seleccionado. Por ello tendrás que hacer una llamada al API con la url del listado anterior para poder obtener los datos de dicho Pokémon.

La respuesta que vas a obtener es grandísima, ni mucho menos tienes que mostrar todos los datos que ahí aparecen ni tienes que realizar más llamadas. Con mostrar el nombre, su número, su imagen (las url de las imágenes se encuentran dentro `sprites.other.dream_world`) y poco más.

El estilo es totalmente libre. Aquí también quiero ver tu parte de creatividad. Por ejemplo puedes buscar una especie de `Card` por Pinterest para guiarte. Simplemente intenta que sea ordenado y limpio, puedes buscar ideas en cualquier sitio, no importa.

### Puntos a valorar (de mayor a menor)

No es necesario que los apliques todos, puedes incluirlos o no.

- No utilices `Expo`
- Testing. No vale con un test que comprueba que renderiza y punto, pero tampoco hagas más test de los necesarios.
- Typescript
- Uso de custom hooks. **Pista** puedes crear un hook `usePokemon` que dentro tenga un `useEffect` que haga la llamada al API
- Gestión de errores

### Recomendaciones

- Puedes hacer uso de cualquier librería que necesites sin ningún problema
- Para hacer las llamadas puedes usar el API fetch de JavaScript, Axios, o cualquier otra que conozcas y te sientas cómodo con ella, me da igual cual uses
- Puedes usar cualquier librería de componentes que te guste o te sientas cómodo con ella, así como no usarla.

_Pero sobre todo no dudes en preguntarme si tienes cualquier duda, tanto como si no has entendido algo como si no sabes como hacer una cosa y me pides consejo. Somos conscientes de tu experiencia y de que te pueden surgir muchas dudas_
