# PokeApp

Aplicación web de Pokémon desarrollada con **Next.js 14**, **Supabase** y **Tailwind CSS**.  
Permite registro/login de usuarios, roles (`user` y `admin`), CRUD completo de Pokémon y comentarios, y consumo de la API pública **PokeAPI**.

---

## 🚀 Demo en vivo

[URL de Vercel](https://tu-app.vercel.app)

---

Stack tecnológico

Next.js 14 (App Router, Server/Client Components)

TypeScript

Tailwind CSS

Supabase (Auth + PostgreSQL + RLS)

PokeAPI (API externa)

Roles de usuario

User: puede registrarse, iniciar sesión, explorar Pokémon, crear/editar/eliminar sus Pokémon y comentarios.

Admin: acceso al dashboard de administración.

Tablas principales
auth.users → usuarios de Supabase

profiles → extiende usuarios con rol y username

pokemons → registros de Pokémon con relación a profiles

comments → comentarios relacionados con usuarios y Pokémon

instalación local
git clone <repo-url>
cd pokeapp
npm install
npm run dev

Credenciales de prueba
User: user@test.com / 123456

Admin: admin@test.com / 123456

Autor

Edwin Rojas
