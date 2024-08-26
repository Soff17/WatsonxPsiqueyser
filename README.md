# Proyecto RAG con Watsonx.ai

Este proyecto se centra en la implementación de una aplicación de Generación Aumentada por Recuperación (RAG) utilizando Watsonx.ai Flows Engine. A continuación, se detallan los pasos para configurar y desplegar la aplicación.

## Requisitos Previos

- **Cuenta de IBM Cloud**: Necesitas una cuenta activa para acceder a Watsonx.ai Flows Engine.
- **Python 3.8 o superior**: Asegúrate de tener Python instalado en tu máquina.
- **Node.js 18 o superior**: Opcional para ejecutar la aplicación localmente.

## Pasos para Configurar el Proyecto

1. **Descargar y Configurar los Datos**
   - Crea un nuevo directorio para el proyecto y descárgate los datos necesarios:
     ```bash
     mkdir taller_RAG
     cd taller_RAG
     wget --recursive --no-clobber --page-requisites --html-extension --convert-links --restrict-file-names=windows --no-parent --directory-prefix=./psiqueyserorg https://psiqueyser.org/
     ```

2. **Instalación de la CLI de Watsonx.ai Flows Engine**
   - Descarga e instala la CLI:
     ```bash
     pip install wxflows_cli-1.0.0rc40-py3-none-any.whl --force-reinstall
     wxflows --version
     ```

3. **Autenticación en la CLI**
   - Inicia sesión en el panel de control de Watsonx.ai Flows Engine para obtener tus credenciales y luego autentícate en la CLI:
     ```bash
     wxflows login
     wxflows whoami
     ```

4. **Inicialización del Proyecto**
   - Configura un nuevo proyecto usando la CLI en modo interactivo:
     ```bash
     wxflows init --interactive
     ```
   - Proporciona la siguiente información:
     - **RAG**: yes
     - **Path to the data**: ./psiqueyserorg
     - **File types**: Markdown or HTML
     - **Chunk size**: 250
     - **Chunk overlap**: 25
     - **Collection name**: psiqueyserorg
     - **Endpoint name**: wxflows-genai/psiqueyserorg

5. **Subir Conjunto de Datos**
   - Sube el conjunto de datos a la base de datos vectorial:
     ```bash
     wxflows collection deploy
     ```

6. **Despliegue de Flujos**
   - Despliega los flujos configurados:
     ```bash
     wxflows flows deploy
     ```

7. **Configuración de la Aplicación**
   - Clona y ejecuta la aplicación:
     ```bash
     npm install
     npm start
     ```

8. **Variables de Entorno**
   - Configura las variables de entorno necesarias en el archivo `.env`:
     ```bash
     echo VITE_WXFLOWS_ENDPOINT=https://$(wxflows whoami --account).$(wxflows whoami --domain)/wxflows-genai/psiqueyserorg/graphql >> .env
     echo VITE_WXFLOWS_APIKEY=$(wxflows whoami --apikey) >> .env
     ```
---

**Sofía Donlucas Bañuelos**  
A01655565
