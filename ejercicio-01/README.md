# Ejercicio 01 - Ambiente de desarrollo local

## Servidor web seleccionado

Python HTTP Server.

## Puerto utilizado
8000

## URL

http://localhost:8000/

## Configuración

Para configurar el ambiente de desarrollo local, se abrió una terminal en la carpeta raíz del repositorio y se ejecutó el siguiente comando:

```bash
python3 -m http.server 8000
```

## Alternativa con Makefile

Como alternativa, se puede iniciar el servidor utilizando el `Makefile` con el siguiente comando:

```bash
make serve
```