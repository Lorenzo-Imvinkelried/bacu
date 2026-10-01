/**
 * Banco de Preguntas - UNIDAD 1 (Fundamentos Backend - Parcial 1)
 * Parte 01 (Preguntas 1 a 7)
 * Temas: Spring Boot (Tipos de aplicaciones, Cloud-Native, Servidor Embebido, Características,
 * Auto-Configuración, Diagrama Arquitectónico: Client, Controller, JPA/Spring Data y Database).
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Datos, < 300 líneas)
 */

export const questionsPart01 = [
  {
    id: "fb-p1-u1-q01",
    num: 1,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Spring Boot - Aplicaciones",
    type: "multiple",
    prompt: "De acuerdo con la clasificación presentada en el material, ¿cuáles de los siguientes tipos de aplicaciones pueden desarrollarse utilizando Spring Boot? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Enterprise Applications" },
      { id: "b", text: "Real-Time Applications" },
      { id: "c", text: "Kernel-Level Device Drivers" },
      { id: "d", text: "Batch Processing Applications" }
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: "La diapositiva indica de forma explícita cuatro tipos de aplicaciones para Spring Boot: Enterprise Applications, Cloud-Native Applications, Real-Time Applications y Batch Processing Applications. Los controladores o drivers a nivel de kernel no forman parte del alcance de Spring Boot ni de la máquina virtual de Java. (Diapositiva 3)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q02",
    num: 2,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Spring Boot - Aplicaciones",
    type: "single",
    prompt: "¿Cuál de las siguientes opciones describe una aplicación «Cloud-Native» desarrollada sobre Spring Boot según el contexto de arquitecturas modernas?",
    options: [
      { id: "a", text: "Una aplicación que prescinde de servidores web y se ejecuta exclusivamente como script local de consola." },
      { id: "b", text: "Una aplicación diseñada específicamente para ejecutarse, escalar y gestionarse de forma óptima en entornos de nube." },
      { id: "c", text: "Una aplicación monolítica tradicional ligada de forma rígida al hardware físico del centro de datos local." },
      { id: "d", text: "Un software de escritorio dependiente del sistema de archivos local para persistir configuraciones." }
    ],
    correctAnswers: ["b"],
    explanation: "Las aplicaciones Cloud-Native aprovechan las ventajas del modelo de computación en la nube (escalabilidad horizontal, contenedores y microservicios), siendo uno de los focos principales de Spring Boot en sistemas distribuidos. (Diapositiva 3)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q03",
    num: 3,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Spring Boot - Características",
    type: "single",
    prompt: "¿Qué ventaja directa proporciona la característica de «Embedded Server» (servidor embebido) en Spring Boot?",
    options: [
      { id: "a", text: "Exige la instalación y configuración manual de contenedores web externos como Tomcat o WildFly en el sistema operativo antes de desplegar." },
      { id: "b", text: "Permite ejecutar la aplicación de forma autónoma con un comando estándar de Java, sin requerir un servidor externo preinstalado." },
      { id: "c", text: "Suprime por completo la capa de procesamiento de peticiones HTTP tanto en entornos locales de desarrollo como en instancias de producción." },
      { id: "d", text: "Restringe la portabilidad del backend al forzar su ejecución en contenedores preconfigurados provistos por la plataforma en la nube." }
    ],
    correctAnswers: ["b"],
    explanation: "Al contar con un servidor embebido (como Tomcat, Jetty o Undertow integrado en el empaquetado), la aplicación puede iniciarse directamente (java -jar) sin necesidad de configurar previamente un contenedor de servlets externo. (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q04",
    num: 4,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Spring Boot - Características",
    type: "multiple",
    prompt: "¿Cuáles de los siguientes elementos corresponden a características distintivas de Spring Boot listadas en el material? (Seleccione todas las opciones correctas)",
    options: [
      { id: "a", text: "Auto-Configuración" },
      { id: "b", text: "Standalone Application" },
      { id: "c", text: "Compilación Nativa Manual" },
      { id: "d", text: "Easy Deployment" }
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: "La diapositiva enumera cinco características principales: Auto-Configuración, Embedded Server, Easy Deployment, Standalone Application y Microservice-Based Architecture. No se requiere compilación manual de binarios nativos. (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q05",
    num: 5,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Spring Boot - Características",
    type: "single",
    prompt: "En el contexto de Spring Boot, ¿en qué consiste la «Auto-Configuración»?",
    options: [
      { id: "a", text: "En la capacidad de deducir y establecer automáticamente configuraciones razonables según las dependencias presentes en el proyecto." },
      { id: "b", text: "En la generación automática de la lógica de negocio y reglas de dominio a partir de las entidades del modelo de datos." },
      { id: "c", text: "En el aprovisionamiento dinámico de infraestructura y creación de bases de datos relacionales en la nube durante el inicio." },
      { id: "d", text: "En la creación asistida de interfaces de usuario web responsivas y paneles de control para cada uno de los endpoints REST." }
    ],
    correctAnswers: ["a"],
    explanation: "La auto-configuración inspecciona el classpath y las dependencias declaradas para configurar de manera predeterminada los beans esenciales (por ejemplo, DataSource, DispatcherServlet), reduciendo la configuración explícita. (Diapositiva 4)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q06",
    num: 6,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Spring Boot - Arquitectura",
    type: "single",
    prompt: "Según el diagrama arquitectónico de Spring Boot presentado, ¿cuál es el componente que recibe directamente las peticiones del Cliente?",
    options: [
      { id: "a", text: "Model" },
      { id: "b", text: "Controller" },
      { id: "c", text: "Service Layer" },
      { id: "d", text: "Database" }
    ],
    correctAnswers: ["b"],
    explanation: "En el esquema mostrado, la interacción bidireccional con el Client se realiza a través de la capa Controller, la cual procesa la petición de entrada y la delega a la capa de servicios (Service Layer). (Diapositiva 5)",
    diagram: null,
    points: 1
  },
  {
    id: "fb-p1-u1-q07",
    num: 7,
    subject: "Fundamentos Backend",
    unit: "Parcial 1",
    quizId: "quiz-fb-p1-unidad-1",
    topic: "Spring Boot - Arquitectura",
    type: "single",
    prompt: "En el flujo arquitectónico de la aplicación, ¿cuál es el rol principal asignado a «JPA/Spring Data» respecto a la capa «Model» y la «Database»?",
    options: [
      { id: "a", text: "Proveer el mecanismo de persistencia y mapeo objeto-relacional entre las entidades del modelo y la base de datos." },
      { id: "b", text: "Servir como punto de entrada de las peticiones HTTP realizadas directamente por clientes web o aplicaciones móviles." },
      { id: "c", text: "Renderizar las vistas dinámicas de la interfaz gráfica para ser consumidas síncronamente por el navegador del cliente." },
      { id: "d", text: "Administrar el ciclo de vida de los componentes y coordinar la inyección de dependencias dentro de los controladores REST." }
    ],
    correctAnswers: ["a"],
    explanation: `En el diagrama, JPA/Spring Data actúa como el intermediario que conecta las entidades del Model con la persistencia en la Database. (Diapositiva 5)

La pregunta aborda el rol de **JPA / Spring Data** como puente de persistencia y **mapeo objeto-relacional (ORM)**: traduce los objetos Java en registros de tablas SQL (y viceversa) para no tener que escribir consultas JDBC manuales ni lidiar con \`ResultSet\`.

---

### 1. La capa «Model» (Entidad JPA)

Representa una tabla en la base de datos mediante una clase Java anotada con \`@Entity\`:

\`\`\`java
package com.ejemplo.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private Double precio;

    public Producto() {}

    public Producto(String nombre, Double precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    // Getters y setters...
    public Long getId() { return id; }
    public String getNombre() { return nombre; }
    public Double getPrecio() { return precio; }
}
\`\`\`

---

### 2. El rol de Spring Data JPA (Repositorio)

Spring Data genera automáticamente las operaciones SQL subyacentes (\`INSERT\`, \`SELECT\`, \`UPDATE\`, \`DELETE\`) con solo declarar una interfaz que extienda \`JpaRepository\`:

\`\`\`java
package com.ejemplo.demo.repository;

import com.ejemplo.demo.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
    // Spring Data infiere el SQL ("SELECT * FROM productos WHERE precio < ?") por el nombre del método
    List<Producto> findByPrecioLessThan(Double precioMaximo);
}
\`\`\`

---

### 3. Conexión con la «Database» en la capa de Servicio

El servicio interactúa con objetos del dominio sin escribir sentencias SQL:

\`\`\`java
package com.ejemplo.demo.service;

import com.ejemplo.demo.model.Producto;
import com.ejemplo.demo.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatalogoService {

    private final ProductoRepository productoRepo;

    public CatalogoService(ProductoRepository productoRepo) {
        this.productoRepo = productoRepo;
    }

    public void guardarProducto() {
        Producto nuevo = new Producto("Teclado Mecánico", 120.0);
        // JPA/Spring Data traduce esto internamente a un: INSERT INTO productos (nombre, precio) VALUES ('Teclado Mecánico', 120.0);
        productoRepo.save(nuevo);
    }

    public List<Producto> buscarBaratos() {
        // JPA/Spring Data ejecuta el SELECT y transforma cada fila devuelta en una instancia de Producto
        return productoRepo.findByPrecioLessThan(150.0);
    }
}
\`\`\``,
    diagram: null,
    points: 1
  }
];
