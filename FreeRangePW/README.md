# 🎯 Playwright Automation Examples

Este repositorio contiene ejemplos prácticos desarrollados durante el curso **Automatización con Playwright**, donde se exploran distintos tipos de interacciones con elementos web, buenas prácticas de estructura y el manejo de pruebas basadas en datos.

---

## 🧩 Estructura del proyecto
playwright-automation-examples/
│
├── tests/
│ ├── locators.spec.ts # Ejemplos de interacción con locators
│ ├── dropdowns.spec.ts # Selección de opciones en dropdowns
│ ├── inputs.spec.ts # Escritura en campos de entrada
│
├── data/
│ ├── users.json # Datos para pruebas basadas en datos
│
├── utils/
│ ├── helpers.ts # Funciones auxiliares para los tests
│
├── playwright.config.ts # Configuración general de Playwright
└── README.md

---

## 🚀 Instalación y ejecución

1️⃣ **Clonar el repositorio**  
```bash
git clone https://github.com/<tu-usuario>/playwright-automation-examples.git
cd playwright-automation-examples
npm install
npx playwright test
npx playwright show-report

🧠 Ejemplos incluidos
🔹 Interacciones con locators

Completar campos, hacer clic en botones, y validar el título de la página.

🔹 Manejo de dropdowns

Seleccionar opciones mediante selectOption() y validar el resultado.

🔹 Inputs y listas

Llenado de campos de texto, presionar teclas y verificar elementos dinámicos.

⚙️ Reflexión técnica

Durante este módulo aprendí la importancia de:

Estructurar los tests de forma clara y modular.

Comprender cómo Playwright maneja la asincronía (async/await), lo que permite esperas inteligentes y evita flakiness.

Automatizar interacciones repetitivas para mejorar la eficiencia y confiabilidad de las pruebas.

🏷️ Curso

Este trabajo forma parte del curso Automatización con Playwright.
#PlaywrightAutomation

