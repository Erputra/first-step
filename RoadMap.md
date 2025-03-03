1. Fundamental (Wajib)
    📖 Controllers: Dasar untuk menangani request & response.
    📖 Providers (Services): Untuk mengatur logika bisnis.
    📖 Modules: Untuk mengorganisir kode menjadi bagian-bagian terpisah.
2. Data Handling (Penting untuk API)
    📖 DTOs & Validation: Mencegah input tidak valid.
    📖 Database (TypeORM / Prisma / Mongoose): Pilih sesuai kebutuhan, TypeORM paling umum.
    📖 CRUD (Create, Read, Update, Delete): Harus bisa untuk membangun API dasar.
3. API dan Keamanan (Supaya bisa dipakai di dunia nyata)
    📖 Middleware & Interceptors: Untuk logging, autentikasi, dll.
    📖 Interceptors
    📖 Authentication (JWT, Passport): Untuk login & proteksi API.
    📖 Guards: Untuk membatasi akses berdasarkan role.
4. Optimasi & Deployment
    📖 Configuration (dotenv, environment variables)
    📖 Caching & Performance (Opsional, tapi bagus untuk production)
    📖 Deployment (Docker, PM2, dll.)


🔥 Analogi Biar Lebih Paham
Bayangkan kamu punya Restoran:

⚙️ Controller = Pelayan
    Hanya menerima pesanan dari pelanggan dan meneruskannya ke dapur.
⚙️ Service (Provider) = Koki
    Bertanggung jawab memasak makanan sesuai pesanan.
⚙️ Module = Dapur
    Semua alat dan bahan masakan disiapkan di sini.
⚙️ Dependency Injection = Pelayan.
    Pelayan otomatis tahu ke mana harus mengirim pesanan
    
Jadi, kalau ada pelanggan pesan makanan:
✅ Pelayan (Controller) tidak memasak sendiri, tapi mengandalkan koki (Service).
✅ Koki (Service) mengolah pesanan sesuai standar restoran.
✅ Pelayan hanya mengambil makanan yang sudah jadi dan menyajikannya.

Kalau controller langsung masak? Restoran bakal kacau! 🍳🚨


🎯 Fitur Minimal yang Harus Dibangun (Supaya Bisa Masuk Portofolio)
   # Fitur	               Teknologi	                   Keterangan
Autentikasi	            NextAuth.js / JWT	        Login & proteksi halaman
API Fetching	        Axios / Fetch	            Ambil data dari backend NestJS
State Management	    React Context / Zustand	    Simpan data user & auth
Tabel & Form	        Tailwind / shadcn/ui	    Tampilkan & kelola data
Routing	Next.js         Pages / App Router	        Pindah halaman dengan cepat

🔹 Alternatif untuk UI Tanpa CSS:
    shadcn/ui (komponen siap pakai yang bisa dikostumisasi pakai Tailwind).
    `npx shadcn-ui@latest init`
🔹 Mantine / Chakra UI (Library UI yang lebih simpel dari Tailwind).

🌟 Prioritas Belajar Frontend (Biar Bisa Cepat Bangun Aplikasi)
✅Dasar Next.js (Routing, API Fetching, Pages vs App Router)
✅Tailwind CSS (Hanya Dasar, Selebihnya Copy-Paste)
✅Integrasi dengan Backend (Ambil Data dari NestJS API)
✅Autentikasi (Login, Logout, Proteksi Halaman)
✅Deployment (Vercel untuk Frontend, VPS untuk Backend)
