# QDAS Intervensi Pemerintah

Boilerplate REST API Node.js dengan Express dan pola MVC, repository, domain, serta service.

## Menjalankan project

Persyaratan: Node.js 20 atau lebih baru.

```powershell
npm install
Copy-Item .env.example .env
```

Isi `JWT_SECRET` di `.env` dengan secret acak minimal 32 karakter, lalu jalankan:

```powershell
npm run dev
```

API berjalan secara default di `http://localhost:3000/api/v1`.

## API

| Method | Endpoint | Keterangan |
| --- | --- | --- |
| GET | `/health` | Pemeriksaan status API |
| POST | `/auth/signup` | Kerangka endpoint pendaftaran |
| POST | `/auth/signin` | Kerangka endpoint login |
| GET | `/auth/me` | Contoh endpoint terproteksi JWT |

Endpoint sign up dan sign in saat ini mengembalikan `501 Not Implemented`. Repository database dan logic operasi autentikasi sengaja belum dibuat sesuai ruang lingkup awal; kontrak dan routing-nya sudah disiapkan untuk dilanjutkan nanti.

Endpoint terproteksi menerima header `Authorization: Bearer <token>`. Validasi JWT menggunakan `JWT_SECRET` dan masa berlaku `JWT_EXPIRES_IN`.

## Struktur

```text
src/
  config/        Konfigurasi environment
  controllers/   Handler HTTP
  domain/        Entitas domain dan error aplikasi
  middleware/    Authentication, async handler, error handler
  repositories/  Kontrak repository autentikasi
  routes/        Routing API
  services/      Service autentikasi dan JWT
  app.js         Konfigurasi Express
  server.js      Entry point server
```

Database, migrasi, implementasi repository, dan logic sign up/sign in belum termasuk.
