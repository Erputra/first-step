#   Langkah Pertama
JavaScript dahulunya adalah bahasa pendukung karena hanya dapat berjalan di browser dan hanya digunakan untuk membuat interaktivitas pada halaman web. Hal ini berbeda dengan PHP karena memiliki server seperti Apache atau Nginx untuk menjalankan kode di sisi server. 

Semua itu berubah ketika Node.js muncul, Node.js adalah adalah JavaScript Runtime Environment yang dapat menjalankan kode JavaScript di luar browser. Hal ini membuat JavaScript dapat setara dengan PHP karena JavaScript bisa jalan di sisi server.

Meskipun begitu, menulis kode secara langsung di Node.JS lebih sulit karena semua hal harus di mulai dari 0. Hal ini memicu para pengembang untuk membuat framework yang berguna sebagai abstraksi dari Node.JS sehingga dapat lebih mudah di gunakan. Hasil dari proses ini salah satunya adalah Nest.JS

NestJS adalah framework yang dirancang untuk membuat aplikasi secara efisien, mudah di expansi, mudah di maintain. NestJS bukanlah Web Framework tapi bukan berarti NestJS dapat di pandang sebelah mata. NestJS di bangun untuk tujuan lebih dari itu. NestJS mampu mengahandel routing, controllers, services, Dependency Injection dan ketika berurusan dengan HTTP, Alih-alih membangun HTTP Servernya sendiri. NestJS justru menggunakan HTTP Server dari framework lain yang lebih stabil seperti Express dan Fastify.

NestJS di bangun berdasarkan atau tepat diatas Node.JS, Itulah kenapa NestJS kompatibel terhadap TypeScript dan JavaScript. Secara default Nest menggunakan TypeScript karena beberapa keuntungan yang di tawarkan oleh TypeScript:
-   Static Typing, mengurangi bugs dan membantu keterbacaan kode untuk keperluan maintenance.
-   Enchanced Tool Support, IntelliSense adalah salah satu toolsnya.
-   Advanced Language features seperti interface, decorator dan generic yang tidak ada di JavaScript.

Jika kamu ingin menggunakan JavaScript pada Nest, Maka kamu perlu Babel Compiller untuk mentransformasi modern syntax yang tidak didukung ke kode yang dapat bekerja dengan Node.JS.

Untuk membuat projek dengan Nest yang di perlukan adalah Node.JS dan npm. Setelah itu jalankan perintah ini:

    ```bash
        npm i -g @nestjs/cli
        nest new project-name
    ```

Setelah perintah itu di jalankan di terminal, Nest akan terinstal secara global dan folder bernama project-name akan di buat. Didalam folder tersebutlah Nest projek di buat.

Secara default akan ada beberapa file dasar yang akan di buat pada folder src/:
-   app.controller.spec.ts      :   file yang digunakan untuk testing controller.
-   app.controller.ts           :   file kontroler dasar yang berisi satu rute.
-   app.module.ts               :   file ini adalah root module dari aplikasi.
-   app.service.ts              :   file ini berisi service dasar dengan satu metode.
-   main.ts                     :   file ini adalah entry point dari aplikasi yang menggunakan inti fungsi dari NestFactory untuk membuat Instance Nest App.

    ```Typescript
        import { NestFactory } from '@nestjs/core';
        import { AppModule } from './app.module';

        async function bootstrap() {
            const app = await NestFactory.create(AppModule);
            await app.listen(process.env.PORT ?? 3000);
        }
        bootstrap();
    ```

Untuk membuat instance Nest app, kita menggunakan inti dari NestFactory yang berasal dari @nestjs/core. Setelah itu NestFactory akan mengekpos beberapa metode agar kita dapat membuat instance, metode create() adalah salah satunya. 

NestFactory.create() membutuhkan parameter module sebagai titik awal untuk mengetahui struktur dan komponen aplikasi seperti controller, service dan komponen lainnya.

metode create() akan objek memenuhi INestApplication interfaces.

INestApplication adalah interface yang menyediakan berbagai metode untuk mengelola aplikasi, seperti:
-   listen()                    : untuk memulai server dan mendengarkan request pada port terntentu.
-   use()                       : untuk menambahkan middleware.
-   setGlobalPrefix             : untuk menentukan prefix global pada semua rute.
metode diatas adalah yang paling umum di gunakan, untuk lebih detail bisa cek di sini https://nestjs-doc.exceptionfound.com/interfaces/inestapplication.html

Interface sendiri adalah konsep yang mendefiniskan sebuah kontrak atau blueprint untuk sebuah class atau object. Alasan interface digunakan adalah karena memiliki beberapa keuntungan yaitu:
-   Type Safety dan Compiler Checking.
-   Ensuring Consistency Across Different Implementations.
-   Flexibility dan Extensibility.
-   Polymorphism dan Reusability.

Nest sendiri memiliki tujuan sebagai framework yang tidak terikat oleh platform tertentu atau angnostic-platform, Sehingga hal ini memungkinkan Nest untuk menggunakan 2 HTTP Server framework yaitu express dan fastify. Kamu harus pilih salah satu yang cocok untuk keperluan mu.

Secara default NestJS akan menggunakan Express sebagai HTTP Server, Jika kamu ingin menggunkan Fastify maka kamu perlu melakukan setting manual.

## Running
Untuk menjalankan aplikasi dapat menggunakan perintah ini di terminal

    ```bash
        npm run start
    ```
perintah tersebut akan menjalankan mengeksekusi script dengan key start yang berada pada file package.json.

jika project mu besar, kamu juga bisa gunakan SWC untuk mempercepat proses build sampai 20 kali lebih cepat dengan menggunkan perintah ini

    ```bash
        npm run start -- -b swc
    ```

## Linting & Formating
Linting adalah proses menganalisa kode untuk mencari dan menampilkan potensi kode yang dapat menjadi masalah, Secara default NestJS menggunakan ESLint yang dapat membantu untuk menemukan kesalahan syntax, masalah gaya penulisan kode, potensi bug. Intinya ESLint akan memeriksa kode agar tetap berada dalam Best Practise.

Jalankan perintah ini untuk melakukan pemeriksaan kode dengan ESLint

```bash
    npm run lint
```

Formating berfokus pada kerapian kode agar mudah di baca tapi tanpa mengubah logika kode. NestJS secara default menggunakan Prettier dan untuk memformat semua file bisa menggunakan perintah ini

```bash
    npm run format
```