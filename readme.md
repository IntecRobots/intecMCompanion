# Intec Mobile Companion

Aplicación móvil para supervisar y manejar el comportamiento de un Minibot.

## Instalar dependencias

Usa npm para instalar las dependencias necesarias.

```bash
cd intecMCompanion
npm install
```

## Uso local
Crear .env y poner las variables de entorno

```bash
cd intecMCompanion
npx expo run
```

## Construir apk
```bash
eas build -p android --profile preview --local
```
