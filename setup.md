# AgroApp — Guía de instalación y arquitectura

## 1. Arquitectura recomendada

Pediste MVC, y está bien como base, pero el MVC clásico (Modelo-Vista-Controlador) se queda corto cuando el controlador empieza a acumular lógica de negocio. La recomendación es una variante con una capa extra:

```
Routes  →  Controller  →  Service  →  Repository (Modelo / ORM)  →  Postgres
```

- **Routes**: define los endpoints (`/api/campanas`, `/api/lotes`, etc.) y qué función atiende cada uno.
- **Controller**: recibe el request, valida lo básico, llama al service, devuelve la respuesta HTTP. No tiene lógica de negocio.
- **Service**: la lógica real (calcular márgenes, validar reglas de negocio, orquestar varias tablas). Acá vive el "cómo se calcula el margen por hectárea", por ejemplo.
- **Repository / Modelo**: el acceso a datos, vía ORM (SQLAlchemy).

Esto sigue siendo "MVC" en espíritu (el front es tu "Vista", separado en otro proyecto), pero te evita controladores gigantes y hace que la lógica de negocio sea testeable sin levantar un servidor HTTP.

**Backend**: Python + Flask + SQLAlchemy (ORM) + PostgreSQL.
**Frontend**: Next.js (React) + JavaScript (sin TypeScript).

Elijo **SQLAlchemy** como ORM porque es el estándar de Python para bases relacionales, tiene soporte excelente para PostgreSQL y se integra muy bien con Flask vía `Flask-SQLAlchemy`.

---

## 2. Software a instalar (una sola vez en tu máquina)

### Python
Necesitás Python 3.11 o superior.

- **Windows**: descargá el instalador desde https://www.python.org/downloads/ — durante la instalación tildá **"Add Python to PATH"**.

Verificá:
```bash
python --version
pip --version
```

### PostgreSQL
- **Windows**: instalador desde https://www.postgresql.org/download/

Verificá que el servicio esté corriendo y creá la base en pgAdmin:
- Click derecho en **Databases → Create → Database**
- Nombre: `agroapp`
- Click en **Save**

### Git
```bash
git --version
```
Si no está, instalalo desde https://git-scm.com.

---

## 3. Estructura del proyecto

Un monorepo simple con dos carpetas, backend y frontend separados pero en el mismo repositorio:

```
agroapp/
├── backend/
│   ├── venv/                  ← entorno virtual Python
│   ├── app/
│   │   ├── __init__.py
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   └── config.py
│   ├── .env
│   ├── .gitignore
│   └── requirements.txt
└── frontend/
    ├── src/
    │   ├── app/
    │   └── components/
    └── package.json
```

---

## 4. Levantar el backend

### Crear el entorno virtual
```bash
cd agroapp/backend
python -m venv venv
```

### Activar el entorno virtual
- **Windows**:
```bash
venv\Scripts\activate
```
- **Mac/Linux**:
```bash
source venv/bin/activate
```

Cuando el entorno esté activo vas a ver `(venv)` al inicio de la línea en la terminal.

### Instalar dependencias
```bash
pip install flask flask-sqlalchemy flask-cors psycopg2-binary python-dotenv flask-migrate
```

### Guardar las dependencias instaladas
```bash
pip freeze > requirements.txt
```

Así cualquier persona que clone el proyecto puede instalar todo con:
```bash
pip install -r requirements.txt
```

### Crear el .env
Creá un archivo `.env` dentro de `backend/` con esto:
```
DATABASE_URL=postgresql://postgres:TU_CONTRASEÑA@localhost:5432/agroapp
FLASK_ENV=development
PORT=4000
```

### Crear el .gitignore en backend/
```bash
echo venv/ > .gitignore
echo .env >> .gitignore
echo __pycache__/ >> .gitignore
echo *.pyc >> .gitignore
```

---

## 5. Levantar el frontend

Asegurate de estar en la carpeta raíz `agroapp/` y ejecutá:
```bash
cd ..
npx create-next-app@latest frontend
```

Cuando pregunte:
- TypeScript → **No**
- ESLint → **Yes**
- Tailwind CSS → **Yes**
- `src/` directory → **Yes**
- App Router → **Yes**
- Turbopack → **Yes**
- React Compiler → **No**
- Import alias → **No** (dejá el default)

Después:
```bash
cd frontend
npm run dev
```

Abrí `http://localhost:3000` — si ves la página default de Next.js, está todo bien.

---

## 6. Próximo paso

Una vez que tengas el entorno virtual activo, las dependencias instaladas y el frontend corriendo, seguimos con:

1. Los modelos de SQLAlchemy (Campaña, Lote, Gasto, Ingreso, Documento).
2. Las migraciones con Flask-Migrate.
3. Las rutas, controladores y services del backend.
4. La conexión del frontend Next.js a la API Flask.
