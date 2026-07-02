# CampoBalance — Guía de instalación y arquitectura

## 1. Arquitectura recomendada

Pediste MVC, y está bien como base, pero el MVC clásico (Modelo-Vista-Controlador) se queda corto cuando el controlador empieza a acumular lógica de negocio. La recomendación es una variante con una capa extra:

```
Routes  →  Controller  →  Service  →  Repository (Modelo / ORM)  →  Postgres
```

- **Routes**: define los endpoints (`/api/campanas`, `/api/lotes`, etc.) y qué controlador atiende cada uno.
- **Controller**: recibe el request, valida lo básico, llama al service, devuelve la respuesta HTTP. No tiene lógica de negocio.
- **Service**: la lógica real (calcular márgenes, validar reglas de negocio, orquestar varias tablas). Acá vive el "cómo se calcula el margen por hectárea", por ejemplo.
- **Repository / Modelo**: el acceso a datos, vía ORM (Prisma).

Esto sigue siendo "MVC" en espíritu (el front es tu "Vista", separado en otro proyecto), pero te evita controladores gigantes y hace que la lógica de negocio sea testeable sin levantar un servidor HTTP.

**Backend**: Node.js + Express + Prisma (ORM) + PostgreSQL.
**Frontend**: Next.js (React) + JavaScript (sin TypeScript, como pediste).

Elijo **Prisma** sobre Sequelize porque las migraciones son más simples de mantener y el cliente generado evita errores de tipeo en los nombres de campos, aunque el proyecto sea JS puro.

## 2. Software a instalar (una sola vez en tu máquina)

### Node.js
Necesitás Node.js 20 LTS o superior (incluye npm).

- **Windows/Mac**: descargá el instalador desde https://nodejs.org (elegí la versión "LTS").
- **Linux (Ubuntu/Debian)**:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

Verificá:
```bash
node -v
npm -v
```

### PostgreSQL
- **Windows/Mac**: instalador desde https://www.postgresql.org/download/ (o Postgres.app en Mac).
- **Linux (Ubuntu/Debian)**:
```bash
sudo apt install -y postgresql postgresql-contrib
```

Verificá que el servicio esté corriendo:
```bash
sudo service postgresql status
```

Creá la base de datos y un usuario para el proyecto:
```bash
sudo -u postgres psql
```
Dentro de la consola de psql:
```sql
CREATE DATABASE campobalance;
CREATE USER campobalance_user WITH ENCRYPTED PASSWORD 'elegiUnaClave';
GRANT ALL PRIVILEGES ON DATABASE campobalance TO campobalance_user;
\q
```

> Alternativa más simple si no querés instalar Postgres localmente: usar **Docker** con `docker run --name campobalance-db -e POSTGRES_PASSWORD=elegiUnaClave -e POSTGRES_DB=campobalance -p 5432:5432 -d postgres:16`. Solo necesitás tener Docker Desktop instalado.

### Git (si todavía no lo tenés)
```bash
git --version
```
Si no está, instalalo desde https://git-scm.com.

## 3. Estructura del proyecto

Un monorepo simple con dos carpetas, backend y frontend separados pero en el mismo repositorio:

```
campobalance/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── middlewares/
│   │   └── app.js
│   ├── .env
│   └── package.json
└── frontend/
    ├── app/  (o pages/)
    ├── components/
    └── package.json
```

## 4. Levantar el backend

```bash
mkdir campobalance && cd campobalance
mkdir backend && cd backend
npm init -y
npm install express cors dotenv
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
```

Esto crea `prisma/schema.prisma` y un `.env`. Editá el `.env`:
```
DATABASE_URL="postgresql://campobalance_user:elegiUnaClave@localhost:5432/campobalance"
PORT=4000
```

Para correr el servidor en desarrollo con reinicio automático:
```bash
npm install --save-dev nodemon
```
Y en `package.json` agregá:
```json
"scripts": {
  "dev": "nodemon src/app.js"
}
```

## 5. Levantar el frontend

```bash
cd ..
npx create-next-app@latest frontend
```

Cuando pregunte:
- TypeScript → **No**
- ESLint → Sí
- Tailwind CSS → Sí (para mantener el estilo del prototipo)
- App Router → Sí
- Import alias → dejá el default

Después:
```bash
cd frontend
npm run dev
```

## 6. Próximo paso

Una vez que tengas Node, Postgres (o el contenedor de Docker) y los dos proyectos creados con `npm install` corrido sin errores, avisame y seguimos con:

1. El `schema.prisma` con los modelos (Campaña, Lote, Gasto, Ingreso, Documento).
2. Las migraciones (`npx prisma migrate dev`).
3. Las rutas, controladores y services del backend.
4. La conexión del frontend Next.js a la API.
