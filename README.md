# Burger Queen

## Resumen del proyecto

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Esta es la información que tenemos del cliente:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

## Objetivos de aprendizaje

1. El objetivo principal de es aprender a construir una _interfaz web_ usando
   el _framework_ elegido ([React](https://reactjs.org/), [Vue](https://es.vuejs.org/index.html) o [Angular](https://angular.io/)) o vanilla JS. Todos estos frameworks de
   Front-end atacan el mismo problema: **cómo mantener la interfaz y el estado
   sincronizados**. Así que esta experiencia espera familiarizarte con el concepto
   de _estado de pantalla_, y cómo cada cambio sobre el estado se va a
   ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un _producto_
   a un _pedido_, la interfaz debe actualizar la lista del pedido y el total).

2. Como objetivo secundario, deberás seguir las recomendaciones para PWAs
   (_Progressive Web Apps_), lo cual incluye conceptos como **offline**. Para
   guiarte con respecto a este tema te recomendamos usar [Lighthouse](https://developers.google.com/web/tools/lighthouse/?hl=es),
   que es una herramienta de Google que nos ayuda a asegurar que nuestras web apps
   sigan "buenas prácticas". De hecho, usaremos Lighthouse a la hora de evaluar el
   proyecto.

Recuerda colocar en esta seccion los objetivos de aprendizaje que quedaron
pendientes de tu proyecto anterior.

### HTML y CSS

- [ ] HTML semántico
- [ ] CSS flexbox
- [ ] Sass
- [ ] Maquetación

### Frontend Development

- [ ] Componentes
- [ ] Manejo del estado

### PWA

- [ ] Concepto
- [ ] Utilidad
- [ ] Que es [Workbox](https://developers.google.com/web/tools/workbox)
- [ ] Qué es un `serviceWorker`

### React

- [ ] [`JSX`](https://es.reactjs.org/docs/introducing-jsx.html)
- [ ] [Componentes `class` y componentes `function`](https://es.reactjs.org/docs/components-and-props.html#function-and-class-components)
- [ ] `props`
- [ ] [Manejo de eventos](https://es.reactjs.org/docs/handling-events.html)
- [ ] [Listas y keys](https://es.reactjs.org/docs/lists-and-keys.html)
- [ ] [Renderizado condicional](https://es.reactjs.org/docs/conditional-rendering.html)
- [ ] [Levantamiento de estados](https://es.reactjs.org/docs/lifting-state-up.html)
- [ ] [`hooks`](https://es.reactjs.org/docs/hooks-intro.html)
- [ ] [`CSS` modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
- [ ] [React Router](https://reacttraining.com/react-router/web)

### Firebase

- [ ] Firestore
- [ ] Firebase security rules
- [ ] Observables

### Testing

- [ ] Testeo de tus interfaces
- [ ] Testeo de componentes
- [ ] Testeo asíncrono
- [ ] Mocking

### Colaboración en Github

- [ ] Branches
- [ ] Pull Requests
- [ ] Tags

### Organización en Github

- [ ] Projects
- [ ] Issues
- [ ] Labels
- [ ] Milestones

### Buenas prácticas de desarrollo

- [ ] Modularización
- [ ] Nomenclatura / Semántica
- [ ] Linting

---

## Criterios de aceptación del proyecto

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s) nos presenta este _backlog_ que es el resultado de su trabajo con el cliente hasta hoy.

---

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

- Anotar nombre de cliente.
- Agregar productos al pedido.
- Eliminar productos.
- Ver resumen y el total de la compra.
- Enviar pedido a cocina (guardar en alguna base de datos).
- Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

---

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un cliente.

##### Criterios de aceptación

- Ver los pedidos ordenados según se van haciendo.
- Marcar los pedidos que se han preparado y están listos para servirse.
- Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

---

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

##### Criterios de aceptación

- Ver listado de pedido listos para servir.
- Marcar pedidos que han sido entregados.

##### Definición de terminado

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).
- Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

---
