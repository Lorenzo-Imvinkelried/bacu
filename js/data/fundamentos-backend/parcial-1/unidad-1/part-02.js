/**
 * Banco de Preguntas - UNIDAD 1 (Fundamentos Backend - Parcial 1)
 * Parte 02 (Preguntas 8 a 14)
 * Temas: Spring Boot Arquitectura (Repository en Service Layer, Application Context),
 * Inversión de Control / Inyección de Dependencias, Protocolo HTTP (Elementos de request,
 * Modelo Cliente-Servidor, Estructura de URLs: Scheme, Host, Path, Query).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart02 = [
  {
    id: "fb-p1-u1-q08",
    num: 8,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Spring Boot - Arquitectura",
    type: "single",
    prompt: "De acuerdo con las flechas de inyección y comunicación del diagrama arquitectónico, ¿en qué componente se inyecta la «Repository Class Extending CRUD Services» mediante Dependency Injection?",
    options: [
      { id: "a", text: "En el Client" },
      { id: "b", text: "En el Model" },
      { id: "c", text: "En el Service Layer" },
      { id: "d", text: "En el Controller" }
    ],
    correctAnswers: ["c"],
    explanation: "La flecha de «Dependency Injection» vincula a la clase repositorio que extiende servicios CRUD directamente con la capa Service Layer, permitiendo a los servicios ejecutar operaciones de negocio y persistencia. (Diapositiva 5)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q09",
    num: 9,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Spring Boot - Application Context",
    type: "single",
    prompt: "Según la definición del material, ¿qué es el «Application Context» en Spring Boot?",
    options: [
      { id: "a", text: "Una base de datos relacional integrada en memoria para almacenar información transitoria de las sesiones activas." },
      { id: "b", text: "El contenedor central que almacena y gestiona los objetos requeridos para el funcionamiento del sistema." },
      { id: "c", text: "Un protocolo de transporte y comunicación alternativo diseñado para reemplazar las conexiones HTTP convencionales." },
      { id: "d", text: "Una interfaz de monitoreo en tiempo real diseñada para supervisar el consumo de CPU y memoria de la aplicación." }
    ],
    correctAnswers: ["b"],
    explanation: `La diapositiva indica textualmente que el Application Context «contiene los objetos que se necesitan para llevar adelante el funcionamiento» del sistema backend. (Diapositiva 6)

El **ApplicationContext** en Spring Boot es el **contenedor de Inversión de Control (IoC)** central del framework. Se encarga de instanciar, configurar, ensamblar y gestionar el ciclo de vida completo de los objetos de la aplicación (conocidos como **Beans**).

En lugar de crear dependencias manualmente con \`new\`, el ApplicationContext las detecta (mediante anotaciones o configuración), crea las instancias (generalmente como *singletons* por defecto) y las inyecta donde se necesiten. Además, gestiona la carga de archivos de propiedades, publica eventos del sistema y resuelve mensajes de internacionalización.

---

### Ejemplo práctico

#### 1. Definir un Bean (servicio)

Marcamos la clase con \`@Service\` para que el ApplicationContext la detecte y la registre:

\`\`\`java
package com.ejemplo.demo.service;

import org.springframework.stereotype.Service;

@Service
public class MensajeService {
    public String obtenerSaludo() {
        return "¡Hola desde el bean gestionado por el ApplicationContext!";
    }
}
\`\`\`

#### 2. Inyección habitual (lo recomendado en el día a día)

Spring se apoya en el contexto para inyectar automáticamente \`MensajeService\` en un controlador o en otro componente:

\`\`\`java
package com.ejemplo.demo.controller;

import com.ejemplo.demo.service.MensajeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SaludoController {

    private final MensajeService mensajeService;

    // Spring inyecta la instancia que reside en el ApplicationContext
    public SaludoController(MensajeService mensajeService) {
        this.mensajeService = mensajeService;
    }

    @GetMapping("/saludo")
    public String saludar() {
        return mensajeService.obtenerSaludo();
    }
}
\`\`\`

#### 3. Acceso directo al ApplicationContext (en el arranque)

\`SpringApplication.run()\` devuelve directamente la instancia del \`ApplicationContext\` (\`ConfigurableApplicationContext\`), lo que permite interactuar con él de forma explícita:

\`\`\`java
package com.ejemplo.demo;

import com.ejemplo.demo.service.MensajeService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        // Obtenemos el ApplicationContext al iniciar la aplicación
        ApplicationContext context = SpringApplication.run(DemoApplication.class, args);

        // Recuperar un bean manualmente por su clase
        MensajeService servicio = context.getBean(MensajeService.class);
        System.out.println(servicio.obtenerSaludo());

        // Consultar metadatos del contexto (por ejemplo, cuántos beans contiene)
        System.out.println("Total de beans registrados: " + context.getBeanDefinitionCount());
    }
}
\`\`\``,
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q10",
    num: 10,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Spring Boot - Inyección de Dependencias",
    type: "single",
    prompt: "¿Cómo se materializa el principio de Inversión de Control / Inyección de Dependencias en relación con el Application Context?",
    options: [
      { id: "a", text: "Los desarrolladores deben instanciar manualmente cada servicio mediante la palabra clave new en cada controlador." },
      { id: "b", text: "No se crean componentes manualmente, sino que se solicitan directamente al contexto de la aplicación." },
      { id: "c", text: "El motor de base de datos asume la instanciación de los controladores cada vez que ingresa una petición HTTP." },
      { id: "d", text: "Los clientes externos configuran e instancian directamente las clases de servicio previo a consumir sus métodos." }
    ],
    correctAnswers: ["b"],
    explanation: "El material explicita: «No creamos componentes, solo los pedimos al contexto -> Inyección de Dependencias», delegando el ciclo de vida e instanciación de los objetos en el contenedor de Spring. (Diapositiva 6)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q11",
    num: 11,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP",
    type: "multiple",
    prompt: "¿Cuáles son los cuatro elementos fundamentales que componen un request HTTP válido según la presentación? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "La URL" },
      { id: "b", text: "El método HTTP" },
      { id: "c", text: "Lista de encabezados (headers)" },
      { id: "d", text: "El cuerpo (body) del request" }
    ],
    correctAnswers: ["a", "b", "c", "d"],
    explanation: "La diapositiva especifica literalmente los cuatro componentes de una petición HTTP válida: «La URL», «El método HTTP», «Lista de encabezados (headers)» y «El cuerpo (body) del request». (Diapositiva 7)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q12",
    num: 12,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP",
    type: "single",
    prompt: "En el modelo de comunicación del protocolo HTTP mostrado, ¿cómo interactúan el cliente y el servidor?",
    options: [
      { id: "a", text: "El cliente envía un request HTTP al servidor y a partir de este obtiene una respuesta (response)." },
      { id: "b", text: "El servidor emite solicitudes sin requerimiento previo y el cliente decide si devuelve una confirmación." },
      { id: "c", text: "El cliente dialoga de forma directa con la base de datos omitiendo la participación del servidor web." },
      { id: "d", text: "La comunicación es puramente unidireccional por lo que el servidor nunca retorna respuestas al cliente." }
    ],
    correctAnswers: ["a"],
    explanation: "El protocolo opera bajo el patrón cliente-servidor basado en solicitud-respuesta: el cliente inicia la interacción mediante una request y el servidor procesa y retorna una response. (Diapositiva 7)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q13",
    num: 13,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - URLs",
    type: "single",
    prompt: "En la estructura de una URL, ¿qué función cumple el «Path» según la definición del material?",
    options: [
      { id: "a", text: "Especifica el protocolo y nivel de cifrado de seguridad aplicado a la transmisión web." },
      { id: "b", text: "Representa la ruta específica del recurso que se está solicitando al servidor." },
      { id: "c", text: "Define el conjunto de parámetros y variables opcionales añadidos al final de la petición." },
      { id: "d", text: "Identifica el nombre de host o dirección IP del servidor al que se dirige la solicitud." }
    ],
    correctAnswers: ["b"],
    explanation: "El material define «Path» como «la ruta del recurso que se está pidiendo al servidor». (Diapositiva 8)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q14",
    num: 14,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Protocolo HTTP - URLs",
    type: "single",
    prompt: "Dada la URL de ejemplo https://www.freecodecamp.org/news/search?query=svg, ¿cuál es la correspondencia exacta de sus partes según la diapositiva?",
    options: [
      { id: "a", text: "Scheme: https | Host: www.freecodecamp.org | Path: /news/search | Query: ?query=svg" },
      { id: "b", text: "Scheme: www.freecodecamp.org | Host: https | Path: ?query=svg | Query: /news/search" },
      { id: "c", text: "Scheme: https | Host: /news/search | Path: www.freecodecamp.org | Query: query=svg" },
      { id: "d", text: "Scheme: http | Host: freecodecamp.org | Path: /news | Query: search?query=svg" }
    ],
    correctAnswers: ["a"],
    explanation: "De acuerdo con la descomposición gráfica mostrada en la diapositiva: el scheme es el protocolo (https), el host es el destino (www.freecodecamp.org), el path es la ruta al recurso (/news/search) y la query corresponde a los parámetros (?query=svg). (Diapositiva 8)",
    diagram: null,
    points: 1
  }
];
