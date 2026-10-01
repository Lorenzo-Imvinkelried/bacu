/**
 * Banco de Preguntas - UNIDAD 1 (Fundamentos Backend - Parcial 1)
 * Parte 06 (Preguntas 36 a 43)
 * Temas: Arquitectura Monolítica (Ventajas y Desventajas),
 * Microservicios (Definición, Ventajas, Database-per-service, Desventajas y Desafíos),
 * Monolitos vs Microservicios (Testing), Arquitectura en Capas (Model, Repository, Service, Controller).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart06 = [
  {
    id: "fb-p1-u1-q36",
    num: 36,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Arquitectura Monolítica",
    type: "multiple",
    prompt: "¿Cuáles de las siguientes características se identifican como ventajas de la arquitectura monolítica en la diapositiva? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Más facilidad para sumar nuevas tecnologías." },
      { id: "b", text: "Mejor seguridad." },
      { id: "c", text: "Mejor rendimiento." },
      { id: "d", text: "Más fácil de testear/debuggear." }
    ],
    correctAnswers: ["b", "c", "d"],
    explanation: "La diapositiva 15 lista tres ventajas del monolito: «Mejor seguridad», «Mejor rendimiento» y «Más fácil de testear/debuggear». Facilitar la adopción de nuevas tecnologías es, por el contrario, una ventaja de los microservicios. (Diapositiva 15)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q37",
    num: 37,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Arquitectura Monolítica",
    type: "single",
    prompt: "¿Cuál de los siguientes puntos constituye una desventaja propia de la arquitectura monolítica?",
    options: [
      { id: "a", text: "Bajo acoplamiento que obliga a mantener contratos de red para cada llamada interna." },
      { id: "b", text: "Mayor superficie de ataque al exponer múltiples puertos y servicios independientes." },
      { id: "c", text: "Dificultad para adoptar nuevas tecnologías y necesidad de desplegar toda la aplicación ante cualquier cambio." },
      { id: "d", text: "Excesiva cantidad de repositorios de código y duplicación de bases de datos." }
    ],
    correctAnswers: ["c"],
    explanation: "Entre las desventajas del monolito figuran la rigidez tecnológica (dificultad para sumar nuevos stacks) y la necesidad de compilar y desplegar el artefacto completo ante cualquier modificación menor. (Diapositiva 15)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q38",
    num: 38,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Arquitectura de Microservicios",
    type: "single",
    prompt: "De acuerdo con la diapositiva, ¿en qué consiste la arquitectura de Microservicios?",
    options: [
      { id: "a", text: "En una única base de código que compila en un ejecutable monolítico multipropósito." },
      { id: "b", text: "En un servicio basado en múltiples aplicaciones independientes, donde cada una se encarga de una funcionalidad específica." },
      { id: "c", text: "En una arquitectura centrada exclusivamente en interfaces de usuario que prescinde de capas de persistencia." },
      { id: "d", text: "En un único proceso del sistema operativo que aloja todos los módulos sin límites de contexto." }
    ],
    correctAnswers: ["b"],
    explanation: "La diapositiva define textualmente: «Servicio basado en múltiples aplicaciones. Cada aplicación se encarga de una funcionalidad». (Diapositiva 16)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q39",
    num: 39,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Arquitectura de Microservicios",
    type: "multiple",
    prompt: "¿Cuáles de los siguientes puntos se destacan como ventajas de los microservicios en el material? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Permite usar distintas tecnologías (lenguajes, frameworks) según la conveniencia del servicio." },
      { id: "b", text: "Mayor facilidad para escalar individualmente las partes del sistema que lo requieran." },
      { id: "c", text: "Posibilidad de implementar despliegues independientes para cada componente." },
      { id: "d", text: "Eliminación total de los pipelines de CI/CD al no requerirse automatización de despliegues." }
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: "Las ventajas explícitas del material son: facilidad para sumar nuevas tecnologías por componente, escalabilidad granular y despliegue independiente. Requieren obligatoriamente soporte de CI/CD para ser viables. (Diapositiva 16)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q40",
    num: 40,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Arquitectura de Microservicios",
    type: "single",
    prompt: "En el diagrama conceptual de microservicios mostrado, ¿cómo se ilustra la gestión de persistencia de datos?",
    options: [
      { id: "a", text: "Todos los microservicios comparten de forma obligatoria una única base de datos centralizada." },
      { id: "b", text: "Cada microservicio (App 1, App 2, App 3) tiene asignada su propia base de datos independiente (Database-per-service)." },
      { id: "c", text: "Mayor facilidad de depuración al ejecutarse todo el código en un único proceso local." },
      { id: "d", text: "Los microservicios no persisten datos y delegan esa responsabilidad íntegramente en el cliente." }
    ],
    correctAnswers: ["b"],
    explanation: "El diagrama muestra a la App 1 con su DB 1, App 2 con su DB 2 y App 3 con su DB 3, reflejando el patrón Database-per-service donde cada microservicio encapsula su propio almacén de persistencia. (Diapositiva 16)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q41",
    num: 41,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Arquitectura de Microservicios",
    type: "multiple",
    prompt: "¿Cuáles de los siguientes aspectos son señalados en el material como desventajas o desafíos de los microservicios? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Mucho más difícil de testear (varios microservicios pueden estar involucrados)." },
      { id: "b", text: "Potencialmente es menos seguro." },
      { id: "c", text: "Muchas veces se requiere sincronización entre microservicios." },
      { id: "d", text: "Mayor complejidad al exigir pipelines de integración y entrega continua (CI/CD)." }
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: "Las tres desventajas enumeradas en la diapositiva son: dificultad de testing por involucrar múltiples componentes distribuidos, potencial menor seguridad (mayor superficie de ataque e interfaces expuestas) y necesidad frecuente de sincronización entre servicios. CI/CD figura más bien como una ventaja. (Diapositiva 16)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q42",
    num: 42,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Monolitos vs Microservicios",
    type: "single",
    prompt: "Al contrastar la arquitectura Monolítica frente a la de Microservicios respecto a las pruebas de software (testing), ¿cuál es la conclusión técnica del material?",
    options: [
      { id: "a", text: "Los microservicios resultan más sencillos de testear y depurar de forma aislada, mientras que el monolito requiere coordinar múltiples dependencias externas complejas." },
      { id: "b", text: "El monolito es más fácil de testear/debuggear, mientras que en microservicios el testeo es mucho más difícil al involucrar múltiples servicios interconectados." },
      { id: "c", text: "Ambas arquitecturas presentan exactamente los mismos retos y niveles de complejidad al momento de diseñar, coordinar y ejecutar pruebas de integración end-to-end." },
      { id: "d", text: "El monolito impide la automatización de pruebas debido a su alto acoplamiento, obligando a realizar verificaciones y auditorías de forma enteramente manual." }
    ],
    correctAnswers: ["b"],
    explanation: "En la diapositiva 15 se resalta como ventaja del monolito ser «Más fácil de testear/debuggear», mientras que en la diapositiva 16 se lista como desventaja de los microservicios que es «Mucho más difícil de testear (varios microservicios pueden estar involucrados)». (Diapositiva 15 y 16)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q43",
    num: 43,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Spring Boot - Arquitectura en Capas",
    type: "single",
    prompt: `En la arquitectura en capas estándar de una aplicación Spring Boot (presentada en el diagrama arquitectónico de la cátedra), cada componente asume una responsabilidad específica dentro del flujo de la solución.

Relacione cada componente arquitectónico con su definición y responsabilidad técnica principal:

Componentes:
1. MODEL
2. REPOSITORY
3. SERVICE
4. CONTROLLER

Definiciones:
I. Expone los endpoints HTTP/REST, procesa las solicitudes entrantes del cliente, valida datos iniciales y retorna las respuestas (ResponseEntity/DTOs).
II. Encapsula las reglas del negocio, validaciones complejas, transacciones (@Transactional) y orquesta la interacción entre capas.
III. Abstrae el acceso y la persistencia hacia la base de datos, proveyendo métodos CRUD y consultas especializadas mediante JPA / Spring Data.
IV. Representa las entidades del dominio y el esquema de datos que se mapea directamente con las tablas de la base de datos relacional.

¿Cuál es la combinación que relaciona correctamente cada componente con su definición?`,
    options: [
      { id: "a", text: "1-II, 2-III, 3-IV, 4-I (Model: Lógica de negocio | Repository: Persistencia | Service: Entidades | Controller: Endpoints HTTP)" },
      { id: "b", text: "1-III, 2-IV, 3-I, 4-II (Model: Persistencia | Repository: Entidades | Service: Endpoints HTTP | Controller: Lógica de negocio)" },
      { id: "c", text: "1-IV, 2-III, 3-II, 4-I (Model: Entidades de dominio | Repository: Persistencia CRUD | Service: Lógica de negocio | Controller: Endpoints HTTP)" },
      { id: "d", text: "1-IV, 2-I, 3-II, 4-III (Model: Entidades de dominio | Repository: Endpoints HTTP | Service: Lógica de negocio | Controller: Persistencia CRUD)" }
    ],
    correctAnswers: ["c"],
    explanation: `La arquitectura en capas de Spring Boot sigue una estricta separación de responsabilidades:

* **1. MODEL -> IV (Entidades del dominio):** Representa las clases del dominio del negocio y los datos que se persisten. Mediante JPA (\`@Entity\`, \`@Table\`, \`@Id\`) mapea directamente con las tablas de la base de datos relacional.
* **2. REPOSITORY -> III (Persistencia y CRUD):** Capa de acceso a datos (\`@Repository\`). Extiende interfaces como \`JpaRepository\` o \`CrudRepository\` para ejecutar operaciones de persistencia sin requerir consultas SQL manuales. Se inyecta en el Service mediante Inyección de Dependencias.
* **3. SERVICE -> II (Lógica de negocio y transacciones):** Capa intermedia (\`@Service\`). Centraliza las reglas de negocio, validaciones de dominio, orquestación de llamadas a repositorios y control transaccional (\`@Transactional\`).
* **4. CONTROLLER -> I (Punto de entrada y endpoints HTTP):** Capa de presentación/API (\`@RestController\`). Es el punto de contacto directo con el cliente externo; intercepta los requests HTTP, extrae parámetros/cuerpos y delega el procesamiento a la capa Service para responder al cliente.

---

### Ejemplo de flujo de responsabilidades en código:

\`\`\`java
// 1. MODEL: Estructura de la entidad persistente
@Entity
public class Producto {
    @Id @GeneratedValue
    private Long id;
    private String nombre;
    private Double precio;
}

// 2. REPOSITORY: Abstracción de acceso a datos (CRUD)
@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
}

// 3. SERVICE: Reglas de negocio y orquestación
@Service
public class ProductoService {
    private final ProductoRepository repository;

    public ProductoService(ProductoRepository repository) {
        this.repository = repository;
    }

    public Producto registrarProducto(Producto nuevo) {
        if (nuevo.getPrecio() <= 0) throw new IllegalArgumentException("Precio inválido");
        return repository.save(nuevo);
    }
}

// 4. CONTROLLER: Recepción de peticiones HTTP
@RestController
@RequestMapping("/productos")
public class ProductoController {
    private final ProductoService service;

    public ProductoController(ProductoService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Producto> crear(@RequestBody Producto prod) {
        return ResponseEntity.ok(service.registrarProducto(prod));
    }
}
\`\`\`
(Diapositiva 5: Diagrama Arquitectónico de Spring Boot)`,
    diagram: null,
    points: 1
  }
];
