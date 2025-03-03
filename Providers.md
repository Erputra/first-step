#  🚀 PROVIDERS
Provider di NestJS adalah class yang bisa digunakan berulang dan bisa di injectkan ke dalam bagian lain dari aplikasi, seperti Controller atau Provider lain. Ini memungkinkan Dependency Injection (DI), yang memudahkan pengelolaan dependensi dan mengikuti prinsip SOLID.

💡 Singkatnya:

🔹  Controller: menangani request dari client.
🔹  Provider mengelola: logika bisnis seperti service, repo, factory, dan helper.
🔹  Dependency Injection: memungkinkan Provider saling terhubung tanpa harus membuat instance secara manual.


1️⃣ Lalu apa itu Provider?

NestJS menggunakan Provider untuk berbagai keperluan seperti:
✅ Service → Mengelola logika bisnis (mirip dengan service di Laravel).
✅ Repository → Berkomunikasi dengan database.
✅ Factory → Membantu membuat objek kompleks.
✅ Helper / Utility → Fungsi-fungsi kecil yang bisa digunakan ulang.


2️⃣ Cara Provider Bekerja (Gambar Dokumentasi)

📌 Penjelasan:
🔹  Value => Bisa merupakan konfigurasi atau data statis yang digunakan oleh Provider lain.
🔹  Factory => Digunakan untuk membuat instance dari suatu object yang kompleks.
🔹  Component => Bisa berupa Service atau Repository yang menerima dependensi lain.
🔹  Controller => Menggunakan Component (Service) untuk mengelola request dari client.

👉 Urutannya:
🔹  Value dan Factory menyediakan data atau instance ke Component.
🔹  Component (Service) bertindak sebagai Provider utama yang menangi logika bisnis.
🔹  Controller menggunakan Component (Service) untuk mendapatkan data dan memberikan response ke client.

📌 Analogi:
Bayangkan kamu punya restoran:
🔹  Controller => Pelayan yang menerima pesanan dari pelanggan.
🔹  Component (Service) => Koki yang memasak pesanan.
🔹  Factory => Supplier bahan makanan yang menyediakan bahan baku.
🔹  Value => Resep standart yang digunakan oleh koki.

Pelayan (Controller) idak perlu tahu bagaimana makanan dibuat, cukup memanggil koki (Service).


3️⃣ Implementasi Provider di NestJS

Langkah 1: Buat Service sebagai Provider

```TypeScript
    import { Injectable } from '@nestjs/common';

    @Injectable()
    export class CatsService {
        private cats = [{ name: 'Tom', age: 2, breed: 'Persian' }];

        findAll() {
            return this.cats;
        }

        create(cat) {
            this.cats.push(cat);
        }
    }
```
📌 @Injectable() → Menandakan bahwa ini adalah Provider dan bisa di-inject ke Controller.

Langkah 2: Tambahkan ke Module
Agar bisa digunakan, Provider harus didaftarkan di Module:

```TypeScript
    import { Module } from '@nestjs/common';
    import { CatsService } from './cats.service';
    import { CatsController } from './cats.controller';

    @Module({
        controllers: [CatsController],
        providers: [CatsService],
    })
    export class CatsModule {}
```
📌 providers: [CatsService] → Mendaftarkan CatsService agar bisa diinject.

Langkah 3: Inject Provider ke dalam Controller

```TypeScript
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Post()
  create(@Body() cat) {
    this.catsService.create(cat);
    return { message: 'Cat added successfully!' };
  }
}
```
📌 constructor(private readonly catsService: CatsService)
👉 Ini menginject CatsService ke CatsController, sehingga controller bisa memanggil fungsi di dalam service.


4️⃣ Apa Keuntungan Provider & Dependency Injection?
✅ Modular & Reusable → Logika bisnis terpisah dari controller.
✅ Testable → Mudah di-mock saat pengujian.
✅ Mudah dikelola → Tidak perlu membuat instance secara manual.
✅ Mengikuti SOLID → Kode lebih bersih & terstruktur.

🎯 Kesimpulan
Provider di NestJS adalah Service, Repository, Factory, atau Utility yang bisa digunakan ulang.
Controller hanya menangani request, tidak mengelola logika bisnis langsung.
Dependency Injection mempermudah pengelolaan dependensi, tidak perlu buat instance manual.
Provider harus didaftarkan di Module agar bisa digunakan.