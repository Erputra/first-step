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

#   Controller
Sebuah kontroler memiliki tugas sebagai penerima permintaan spesifik untuk aplikasi. Untuk membuat controller dasar, NestJS menggunakan classes dan decorators.
Decorator akan mengasosiasikan class dengan metadata sehingga NestJS bisa membuat peta rute.

##  Routing
class dipilih karena memiliki karakter yang sejalan dengan doktrin NestJS yaitu modular dan teroganisir. Dengan class, kita bisa mendefinisikan metode yang mewakili endpoint HTTP tertentu sepert GET, POST dan lain sebagainya.

Decorator sendiri adalah fitur dari TypeScript yang memungkinkan kita untuk menambahkan metadata atau perilaku tambahan pada elemen seperti class, method, property atau parameter. Itulah kenapa di NestJS controller di buat menggunakan kombinasi class dan decorator.

```Typescript
    import { Controller, Get } from '@nestjs/common';

    @Controller('cats')
    export class CatsController {
        @Get()
        findAll(): string {
            return 'data cats';
        }
    }
```

@Controller('cats') ini akan menandai bahwa CatsController akan berperan sebagai controller dan mengatur path dasar untuk semua rute yang ada di class ini (/cats), Sementara @Get() menandai bahwa method findAll() akan menangani permintaan HTTP GET pada endpoint /cats.

Jadi ketika ada request dengan metode GET pada endpoint /cats, Nest akan mencocokan permintaan HTTP yang masuk dengan cara mengidentifikasi metode HTTP apa yang masuk kemudian mencari metode yang ada di dalam class CatsController yang memiliki metadata serupa. Sehingga method findAll() di eksekusi dan mengembalikan "data cats".

untuk membuat controller CRUD lengkap dengan validasi bisa menggunakan perintah `nest g resource [name]` jika hanya ingin membuat controller bisa dengan perintah `nest g controller [name]`.

route path atau jalur rute di tentukan oleh beberapa hal:
-   Controller Prefix, di definisikan oleh @Controller(). Contohnya @Controller('cats'), Maka semua yang ada di dalam memiliki prefix /cats
-   Path Decorator, di definisikan pada method decorator. Contoh @Get('breed'), Maka metode dibawahnya akan memiliki prefix /breed

Jika kedua hal tersebut di kombinasikan akan menghasilkan prefix /cats/breed

NestJS menggunakan dua opsi berbeda untuk memanipulasi respon
-   Standart
Jika request mengebalikan objek JavaScript atau array maka secara default akan di serialisasikan ke JSON. Namun jika request mengembalikan Primitive type seperti string, number, boolean maka NestJS tidak akan melakukan serialisai dan mengembalikan data tersebut apa adanya.

Default status code dari respon selalu 200, Kecuali untuk POST request akan mengembalikan 201. Namun kita dapat mengubah itu dengan cara menambahkan decorator @HttpCode() tepat dibawah decorator metode HTTP.

-   Library-specific
kita bisa menggunakan library seperti Express dengan cara menginjeksikan decorator @Res() ke method. Pendekatan ini akan memberikan kontrol lebih terhadap response, seperti setting header, cookies atau menggunakan methode tingkat langjut yang di sediakan oleh underlying HTTP library.

```Typescript
    @Get()
    findAll(@Res() response): void {
        response.status(200).send('This action returns all cats');
    }
``` 

Meskipun menawarkan kontrol yang lebih dari respon standar, ini memiliki kelemahan karena jika kamu menggunakan @Res() maka NestJS akan menonaktifkan built-in reposne handling pada route dan kita harus mengatur hal tersebut secara keseluruhan dan secara manual.

Catatan:
Ketika kamu menggunakan @Res() atau @Next(), NestJS akan mengangap kamu sudah memilih library-specifi option. Jika kedua pendekatan tersebut di pakai dalam waktu yang sama, Maka pendekatan standart akan secara otomatis di non aktifkan untuk satu rute yang menggunakannya. Ini menyebabkan kinerja tidak dapat di prediksi.

## Request Object
Dalam controller kita akan membutuhkan data dari request client untuk banyak hal, contohnya filtering agar data yang di minta sesuai. Nest menyediakan akses tersebut ke `request object` dari platform yang mendasarinya (secara default adalah express karena HTTP Server yang di pakai juga express). kita hanya perlu menginjeksikan dengan cara menambahkan dekorator @Req() kedalam method yang ada di bawah dekorator metode HTTP.

```Typescript
    import { Controller, Get, Req } from '@nestjs/common';
    import { Request } from 'express';

    @Controller('cats')
    export class CatsController {
        @Get()
        findAll(@Req() request: Request): string {
            console.log(request.query);
            return 'This action returns all cats';
        }
    }
```

Dalam kebanyakan kasus, jika hanya ingin mengambil beberapa properti seperti body, session, query, param, header maka gunakanlah decorator yang sudah di sediankan oleh NestJS. berikut decoratornya:

@Request(), @Req()	        req
@Response(), @Res()*	    res
@Next()	                    next
@Session()	                req.session
@Param(key?: string)	    req.params / req.params[key]
@Body(key?: string)	        req.body / req.body[key]
@Query(key?: string)	    req.query / req.query[key]
@Headers(name?: string)	    req.headers / req.headers[name]
@Ip()	                    req.ip
@HostParam()	            req.hosts

Selain @Request(), @Req() dan @Response(), @Res()* itu adalah decorator yang tidak terikat oleh platform seperti express atau fastify, ini sangat menguntungkan karena kode kita menjadi agnostic atau tidak bergantung secara langsung pada platform lain seperti express dan fastify.

Tetapi, ketika decorator @Req(), @Res(), or @Next() digunakan ini sama saja mengindikasikan kalau kamu telah menggunakan platform-specific object, dengan kata lain kode mu tidak lagi agnostic.

contoh kode agnostic

```Typescript
    import { Controller, Get, Query, Param, Headers, Body, Ip } from '@nestjs/common';
    import { AppService } from './app.service';

    @Controller('cats')
    export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get(':id')
    findOne(
        @Param('id') id: string,       // Route parameter
        @Query('search') search: string, // Query parameter
        @Headers('authorization') authHeader: string, // Specific header
        @Ip() ip: string,
    ): string {
        return `Cat ID: ${id}, Search: ${search}, Auth: ${authHeader}, IP: ${ip}`;
    }
}
```

Untuk keperluan kompabilitas di seluruh platform HTTP yang mendasarinya (express dan fastify), Nest menyediakan dekorator @Res() dan @Response(). @Res() adalah alias dari @Response() dan keduanya akan mengekspos interface response object berdasarkan platform native. Ketika ingin menggunakannya maka harus mengimport library tersebut contohnya @types/express agar dapat menggunakan semua fitur secara maksimal. 

Perlu di ingat, ketika kamu menginjeksikan @Res() atau @Response() di dalam method handler, Kamu saja mengatakan bahwa method handler tersebut telah menggunakan Library-specific yang akan menyebabkan kamu harus bertanggung jawab secara penuh untuk menage respon dari handler tersebut. Contoh : res.json(...) atau res.send(...). Jika tidak maka HTTP server akan crash.

#   Resources
Sebelumnya kita sudah mencoba untuk membuat endpoint untuk mengambil data kucing menggunakan metode HTTP GET, sekarang mari kita buat untuk metode lainnya.
Caranya sangatlah mudah, hanya perlu mengganti dekorator @Get() ke dekorator lain seperti @Post(), @Put(), @Delete(), @Patch(), @Options(), dan @Head(). Atau bahkan @All().

@Get()      Untuk mendapatkan data.
@Post()     Untuk membuat data.
@Put()      untuk mengubah data dalam object secara keseluruhan, semua properti harus di sertakan.
@Delete()   untuk mengahapus data.
@Patch()    untuk mengubah data dalam object secara partial, sertakan properti yang akan di rubah.
@Option()   untuk mengambil HPPT method yang di ijinkan dan informasi CORS
@Head()     untuk mengambil data hanya dari header, berguna untuk memeriksa eksistensi dari resouce atau metadata tanpa mengambil data yang sebenarnya.
@All()      semua request yang datang akan masuk ke handler atau method yang menggunakan dekorator ini.

#   Route Wildcards
Rute wildcard dapat di manfaatkan sebagai dynamic route karena kemampuannya dalam menangkap pola. Simbol asterisk ( * ) digunakan di Nest sebagai simbol wildcard. Sementara Hypen ( - ) dan dot ( . ) tidak adak di perlakukan secara spesial di dalam route wildcard.

```TypeScript
    @Get('abcd/*')
    findAll() {
        return 'This route uses a wildcard';
    }
```

rute abcd/* akan cocok dengan path abcd/ , abcd/123 , abcd/abc dan seterusnya selama di awali dengan abcd/
sementara jika semisal ada route seperti ini /ab{*splat}cd
itu adalah named route wildcard, nama di ambil dari splat, rute itu akan cocok selama di awali dengan ab dan di akhiri dengan cd.
fastify tidak bisa menangni named route wildcard.

#   Status Code
Status code itu penting dalam API karena status code mewakili sebuah informasi seperti 200 berati OK sementara 500 berarti internal server error.
Seperti yang aku katakan di awal, Secara default status code akan selalu 200 kecuali untuk POST adalah 201. 

Nest memberikan cara untuk merubah itu dengan menginjeksikan dekorator @HttpCode(...) pada level handler. Sebelum menggunakan dekorator ini kamu perlu mengimportnya dari @nestjs/common

```Typescript
    @Post()
    @HttpCode(204)
    create() {
        return 'This action adds a new cat';
    }
```
Tentu cara seperti ini adalah cara static dan hampir mendekati kata hardcode, sementara program harus fleksibel dalam mengembalikan status code. Untuk menghadapi hal itu kamu bisa gunakan library-specific respone dengan cara menginjeksikan @Res(). Ini juga memberi kotrol lebih untuk penanganan error atau throw an exception.

#   Header
untuk menggunakan Header, kamu bisa langsung memakai dekorator @Header() dari @nestjs/common atau dari platform spesifik dengan cara memanggil res.header() secara langsung.

Header berguna untuk memberi informasi pada header, seperti cache-control, pengaturan CORS, Content-Type. 

```Typescript
    @Post()
    @Header('Cache-Control', 'no-store')
    create() {
        return 'This action adds a new cat';
    }
```

dari kode di atas, Server memberi tahu client untuk tidak menyimpan data yang di dapat ke cache. key Cache-Control akan muncul di bagian Header respone.

#   Redirection
untuk mengalihkan halaman bisa menggunakan @Redirect() dari @nestjs/common atau dari platform lain dengan cara res.redirect().
@Redirect membutuhkan dua argument, url dan statusCode. Keduanya adalah opsional dan default dari statusCode adalah 302.

```Typescript
    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }
```

Perlu di ingat, jika getDocs mengembalikan sebuah object URL maka @Redirect tidak akan berfungsi karena sudah tergantikan oleh return dari method getDocs.

#   Route Parameter.
Untuk menangkap data dinamik dari request, Kita bisa menambahkan parameter token di path yang akan mengambil data dinamik. Kamu bisa menggunakan dekorator @Param() dari @nestjs/common. dekorator ini harus di tepatkan pada method signature. Contoh:

```Typescript
    @Get(':id')
    findOne(@Param() params: any): string {
      console.log(params.id);
      return `This action returns a #${params.id} cat`;
    }
```

Jika ada lebih dari satu parameter yang dibutuhkan bisa menggunakan metode destrukturisasi object. Contoh:

```Typescript
    @Get('breed/:id/:name')
    findBreed(@Param() {id, name}: any): string {
      return `kucing dengan id ${id} dan nama ${name}`
    }
```

Coba test dengan url http://localhost:3000/cats/breed/1/ciko, maka hasilnya adalah kucing dengan id 1 dan nama ciko

#   Sub-Domain Routing
dekorator @Controller dapat menerima opsi host untuk keperluan memeriksa apakah request host cocok dengan nilai yang di tentukan.

```Typescript
    @Controller({ host: 'admin.example.com' })
    export class AdminController {
        @Get()
        index(): string {
            return 'Admin page';
        }
    }
```

metode index hanya akan di eksekusi jika permintaan datang dari admin.example.com, admin.example.com adalah sub domain dari domain example.com.
Sama seperti rute pada umumnya, host dapa menggunakan token untuk mendapatkan data dinamis dengan dekorator @HostParam() yang harus di inject ke method signatur.

```Typescript
    @Controller({ host: ':account.example.com' })
    export class AccountController {
        @Get()
        getInfo(@HostParam('account') account: string) {
            return account;
        }
    }
```
#   Asyncronous
Dalam bahasa Indonesia, asycronous memiliki arti "tidak sinkron". Sementara dalam pemrograman, asycncronous berarti bahawa ketika ada task yang membutuhkan waktu cukup lama untuk di proses, task tersebut tidak akan menghalangi task lain yang datang (non-blocking). Task yang berat akan di kirim atau di tangani di background task queue (event-loop) lalu di push kembali ke antrian utama setelah task selesai di proses.

Jadi dengan proses seperti itu server tidak diam menunggu task yang berat di selesaikan terlebih dahulu untuk dapat memproses antrian lain, server akan tetap memproses task yang lain sembari menyelesaikan task yang berat.

Sekarang kita tau bahwa proses yang di anggap berat seperti operasi setTimeout, HTTP Request, Database call, Promises, Async/Await akan di tangani di background task queue melalu event-loop. Lalu apa itu event-loop?

event loop adalah mekanisme dalam JavaScript yang menghandle asyncronous operations dalam single-tread environment. Ini memastikan perilaku non-blocking dengan mendelegasikan task yang aku sebutkan tadi ke background dan akan memproses kembali ketika hasil dari task tersebut sudah tersedia.

Itulah kenapa Asyncronous outputnya tidak selalu FIFO,

Contoh:

```Typescript
    console.log('Start');
    setTimeout(() => console.log('Async task done'), 2000); // Runs in the background
    console.log('End');
```

hasil proses di atas adalah "start", "End" baru kemudian "Async task done", Jadi proses kedua tidak memblokade proses lain yang datang karena di proses di background baru kemudian setelah proses tersebut selesai akan di masukan kembali.

Asycronous akan selalu terikat erat dengan Promises dan async/await, itu adalah sebuah fitur yang lahir karena munculnya beberapa masalah dengan callback function yang menyebabkan callback hell. lalu apa itu callback?

callback adalah function yang dikirim sebagai argumen ke function lain dan akan dieksekusi setelah fungsi tersebut di jalankan, Jadi seperti function di dalam function. Konsep ini memungkinkan untuk menangani operasi yang bersifat asinkron seperti membaca file, mengambil data dari API atau menjalankan kode setelah proses lain.

Callback ada karena JavaScript berjalan dalam lingkungan single-threaded, yang berarti hanya dapat mengeksekusi satu tugas dalam satu waktu. Jika ada proses yang memakan waktu lama, seperti membaca file atau mengambil data dari API, kita tidak ingin eksekusi program terhenti hingga proses tersebut selesai. Oleh karena itu, callback digunakan untuk menangani tugas-tugas asinkron tanpa memblokir jalannya program.

Dengan callback, kita bisa:
1. Menjalankan kode setelah proses lain selesai tanpa memblokir eksekusi program.
2. Membuat kode lebih fleksibel dan modular untuk memisahkan fungsi utama dan tindakan yang akan di lakukan setelahnya.

Contoh dasar:

    ```Javascript
        function greet(name, callback){
            console.log(`Hai ${name}`);
            callback();
        }

        function sayGoodbye(){
            console.log("Sampai Jumpa!");
        }

        greet("Rika", sayGoodbye);
    ```
Hasil Output:
Hai Rika
Sampai Jumpa!

📌 Penjelasan:
Ketika kita memanggil greet("Rika", sayGoodbye), fungsi greet akan dieksekusi.
1. Pertama, "Hai Rika" dicetak ke konsol.
2. Lalu, callback() dipanggil, yang sebenarnya merujuk ke fungsi sayGoodbye().
3. Karena sayGoodbye() mencetak "Sampai Jumpa!", outputnya muncul setelah "Hai Rika".

💡 Mengapa sayGoodbye() bisa tereksekusi?
Karena fungsi greet menerima sebuah fungsi sebagai parameter kedua (callback). Dalam pemanggilan greet("Rika", sayGoodbye), parameter kedua adalah sayGoodbye, sehingga ketika callback() dipanggil dalam greet(), yang sebenarnya dijalankan adalah sayGoodbye().

👉 Catatan: Kata callback bisa diganti dengan nama apa pun. Yang penting, jika sebuah fungsi menerima fungsi lain sebagai argumen dan memanggilnya nanti, itulah yang disebut sebagai callback function.

Shorthand Callback
Ada beberapa cara untuk menuliskan callback dengan lebih ringkas. 

Contoh 1: Menggunakan Arrow Function

    ```Javascript
        function greet(name, call){
            console.log(`Hai ${name}`);
            call();
        }

        greet("Rika", () => console.log("Sampai Jumpa!"));
    ```

📌 Apa yang Berubah?
sayGoodbye() diubah menjadi arrow function langsung dalam pemanggilan greet().
Fungsi satu baris lebih cocok menggunakan arrow function, membuat kode lebih ringkas.

🔹 Contoh 2: Callback dengan Nilai Default

    ```Javascript
        function greet(name, callback = () => console.log("Sampai Jumpa!")){
            console.log(`Hai ${name}`);
            callback();
        }

        greet("Rika");
    ```

📌 Apa yang Terjadi di Sini?
Callback dibuat opsional dengan memberikan nilai default pada parameter callback.
Jika greet dipanggil tanpa parameter kedua, maka default callback akan dijalankan secara otomatis.
Jika ada callback yang diberikan, callback tersebut akan menggantikan default-nya.

📌 Callback Sinkron vs. Asinkron.
    Callback Sinkron adalah callback yang langsung dipanggil dalam eksekusi function utama, Tampa adanya operasi asingkron di ataranya.
Contoh:

    ```Javascript
        function doSomething(callback) {
            console.log("Before callback");
            callback();
            console.log("After callback");
        }

        doSomething(() => {
            console.log("Inside callback");
        });
    ```
Output:
Before callback
Inside callback
After callback

💡 Penjelasan:
callback() langsung di eksekusi dalam doSomething() tanpa menunggu proses lain sehingga urutan ekeskusi mudah di prediksi dan tidak bergantung pada waktu.

Sementara Callback Asinkron akan memanggil function nanti setelah operasi asinkron selesai, bukan langsung dalam eksekusi function utama.

Contoh:

    ```Javascript
        function doSomething(callback){
            console.log("Before setTimeout");
            setTimeout(() => {
                console.log("Inside callback");
                callback();
            }, 2000);
            console.log("After setTImeout");
        }

        doSomething(() => {
            console.log("Callback executed");
        });
    ```

Output:
Before setTimeout
After setTImeout
(2 detik kemudian...)
Inside callback
Callback executed

💡 Penjelasan:
-   setTimeout adalah fungsi asinkron sehingga callback tidak langsung dipanggil.
-   console.log("After setTimeout") di eksekusi lebih dulu sebelum callback.
-   Callback hanya berjalan setelah menunggu 2 detik sehingga ada jead eksekusi.

❌ Callback Hell
Callback Hell terjadi ketika kita membuat kode dengan nested callback yang menyebabkan kode sulit di baca dan sulit untuk penanganan error.

Contoh: 
```Javascript
    function getUser(id, callback) {
        setTimeout(() => {
            console.log("User retrieved");
            callback({ id: id, name: "John Doe", email: "john@example.com" });
        }, 1000);
    }

    function getTransactions(userId, callback) {
        setTimeout(() => {
            console.log("Transactions retrieved");
            callback([{ id: 101, amount: 5000 }, { id: 102, amount: 3000 }]);
        }, 1000);
    }

    function getTransactionDetails(transactionId, callback) {
        setTimeout(() => {
            console.log("Transaction details retrieved");
            callback({ id: transactionId, amount: 5000, date: "2025-02-10" });
        }, 1000);
    }

    function sendEmail(email, details, callback) {
        setTimeout(() => {
            console.log(`Email sent to ${email} with details:`, details);
            callback();
        }, 1000);
    }

    // Callback Hell terjadi di sini
    getUser(1, (user) => {
        getTransactions(user.id, (transactions) => {
            getTransactionDetails(transactions[0].id, (details) => {
                sendEmail(user.email, details, () => {
                    console.log("All processes completed!");
                });
            });
        });
    });
```

Contoh di atas menunjukan callback hell dalam operasi asynchronous ketika menjalankan beberapa operasi berurutan:
1. Mengambil data pengguna dari database.
2. Mengambil daftar transaksi pengguna.
3. Mengambail detail transaksi tertentu.
4. Mengirim email konfirmasi.

Kode di atas sangat sulit di baca, bahkan jika ada sedikit saja perubahan alur itu akan membuat kode semakin berantakan. Salah satu alasan lahirnya fitur Promises, Async/Await adalah masalah ini.

```Javascript
    function getUser(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("User retrieved");
                resolve({ id: id, name: "John Doe", email: "john@example.com" });
            }, 1000);
        });
    }

    function getTransactions(userId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Transactions retrieved");
                resolve([{ id: 101, amount: 5000 }, { id: 102, amount: 3000 }]);
            }, 1000);
        });
    }

    function getTransactionDetails(transactionId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Transaction details retrieved");
                resolve({ id: transactionId, amount: 5000, date: "2025-02-10" });
            }, 1000);
        });
    }

    function sendEmail(email, details) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Email sent to ${email} with details:`, details);
                resolve();
            }, 1000);
        });
    }

    async function processTransaction() {
        try {
            let user = await getUser(1);
            let transactions = await getTransactions(user.id);
            let details = await getTransactionDetails(transactions[0].id);
            await sendEmail(user.email, details);
            console.log("All processes completed!");
        } catch (error) {
            console.error("Error:", error);
        }
    }

    processTransaction();
```

Dengan Async/Await mengatur hal semacam ini lebih mudah dan kode jadi lebih di baca.

🔥Promises
Promise adalah object di JavaScript yang merepresentasikan penyelesaian (berhasil atau gagal) dari suatau operasi asynchronous, serta nilai hasil dari operasi tersebut di masa depan. Dengan kata lain, ketika kita menjalankan operasi asinkron seperti mengambil data dari API atau membaca file, kita tidak bisa langsung mendapatkan hasilnya. Sebagai gantinya kita akan mendapatkan sebuah promise yang akan memberikan hasil nanti setelah operasi selesai.

Promise bertindak sebagai proxy untuk suatu nilai uyang mungkin belum di ketahui saat promise di buat. Inin memungkinkan kita untuk menangani hasil dari operasi asinkron tanpa harus langsung memiliki hasilnya.

Promises memiliki 3 status:
1. Pending -> Awal status dari promise, belum selesai atau gagal.
2. fulfilled -> Promise berhasil di selesaikan dengan suatu nilai.
3. rejected -> Promise gagal dan mengembalikan alasan kegagalannya.

Setelah Promise masuk ke status fulfilled atau rejected, maka disebut settled(telah selesai).

Cara kerja Promise cukup simpel yaitu ketika proses telah fulfilled maka kode di dalam .then() akan di jalankan, sementara jika proses telah rejected maka kode dalam .catch() akan di jalankan.

⚠️ Jika kode di dalam promise tidak memiliki .then() maka proses akan stuck di status pending.

Kita bisa membuat Promise menggunakan new Promise((resolve, reject) => { ... }).
```Javascript
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data berhasil diambil!");
            } else {
                reject("Terjadi kesalahan saat mengambil data.");
            }
        }, 2000);
    });
```

Kita bisa menangani hasil Promise dengan .then() untuk hasil sukses dan .catch() untuk kegagalan.
```Javascript
    myPromise
        .then((result) => {
            console.log("Berhasil:", result);
        })
        .catch((error) => {
            console.error("Gagal:", error);
        });
```

Menggunakan Promise dalam operasi asinkron untuk mengambil data pengguna berdasarkan userId.
```Javascript
    function getUser(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userId === 1) {
                    resolve({ id: 1, name: "John Doe" });
                } else {
                    reject("User tidak ditemukan");
                }
            }, 1500);
        });
    }

    // Menggunakan promise
    getUser(1)
        .then((user) => console.log("User ditemukan:", user))
        .catch((error) => console.error(error));
```

Menggunakan Promise Chaining untuk menghindari callback Hell.
```Javascript
    getUser(1)
        .then((user) => {
            console.log("User ditemukan:", user);
            return getUser(user.id); // Mengembalikan promise lain
        })
        .then((newUser) => console.log("User baru ditemukan:", newUser))
        .catch((error) => console.error("Error:", error));
```
dengan menggunakan kode seperti ini, kita dapat menjalankan beberapa operasi berurutan dengan lebih rapi dibandingkan callback hell.

Selain menggunakan .then() dan .catch(), kita bisa menggunakan async/await untuk menangani promise lebih sederhana.
```Javascript
    async function fetchUser() {
        try {
            let user = await getUser(1);
            console.log("User ditemukan:", user);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    fetchUser();
```

Nah, di Nest sendiri juga bisa menggunakan async/await atau RxJS(Reactive Extensions for JavaScript), Kita coba dulu cara penggunaan async/await di nest.

🔥 async/await

```TypeScript
    @Get()
    async findAll(): Promise<any[]> {
        return [];
    }
```

Kode diatas menggunakan dekorasi Get sebagai penanda jika findAll harus di akses menggunakan HTTP Method Get, Kemudian fungsi findAll akan sebuah Promise yang berisi array dengan elemen bebas.
Di TypeScript, any adalah tipe data fleksibel yang bisa digunakan untuk menyimpan nilai dari tipe apapun. Artinya, variabel atau fungsi dengan tipe any bisa berisi string, number, array, object atau tipe lainnya.

Lalu kenapa kode diatas di tuliskan dengan Promise<any[]>?, Mari kita bedah!
✅ Promise<T> ini artinya fungsi mengembalikan sebuah promise yang akan menghasilkan tipe T di masa depan. T adalah Tipe Generic dalam TypeScript yang berarti tipe data yang akan di kembalikan oleh Promise setelah operasi asinkron selesai.

Contoh umum
Promise<number>  // Akan mengembalikan angka di masa depan
Promise<string>  // Akan mengembalikan string di masa depan
Promise<boolean> // Akan mengembalikan boolean di masa depan
Promise<User[]>  // Akan mengembalikan array berisi User di masa depan

✅ any[] ini berarti Promise akan mengembalikan sebuah array berisi elemen dengan tipe bebas

lalu kenapa harus return [] ?, ini terjadi karena fungsi findAll di deklarasikan bahwa akan mengembalikan sebuah array.

Contoh yang lebih realistis:

```TypeScript
    @Get()
    async findAllUser(): Promise<User[]> {
        return this.userService.findAll(); // Tidak perlu await
    }
```
Kenapa tidak perlu await?
karena this.userService.findAll() sudah mengembalikan Promise, NestJS akan menunggu penyelesaian Promise secara otomatis sebelum mengirimkan respons.

Lalu kapan await di perlukan?
Biasanya dia diperlukan jika kita ingin melakukan manipulasi data sebelum di teruskan ke response, Contoh:

```TypeScript
    @Get()
    async findAll(): Promise<string[]> {
        const users = await this.userService.findAll();
        return users.map(user => user.name); // Modifikasi hasil sebelum dikembalikan
    }
```

🔥 RxJS(Reactive Extensions for JavaScript)

Ini adalah salah satu fitur dari NestJS, RxJS ini lebih ditujukan untuk keperluan stream atau dalam situasi yang dimana data harus terus mengalir secara terus-menerus dan bahkan untuk mengelola operasi asinkron yang kompleks, Contoh:
✅ Websocket / Real-time Data => Mengelola koneksi yang terus menerus menerima data.
✅ Event-based System => Menerima event dari kafka, RabbitMQ atau Pub/Sub.
✅ HTTP Request Chaining => Jika beberapa request harus di jalankan secara berurutan atau paralel.
✅ Debounce & Throttle => Menunda atau membatasi eksekusi event (seperti pencarian live di frontend).
✅ Polling Data => Jika perlu mengambil data secara periodik dari API external.

Lalu apa arti dari stream itu sendiri?
Stream adalah aliran data yang bisa diterima secara bertahap atau berkelanjutan, bukan hanya sekali.

💡 Perbedaan dengan Promise
    📌  Promise hanya menangani satu nilai sekali saja.
    📌  Stream (Observable) bisa menangani banyak nilai seiring waktu.

Contoh:

```TypeScript
import { Controller, Get } from '@nestjs/common';
import { Observable, interval, map } from 'rxjs';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): Observable<string> {
    return interval(1000).pipe( // Emit data setiap 1 detik
      map((i) => `User ${i}`)   // Ubah angka menjadi string user
    );
  }
}
```

mari kita bedah.
✅ Observable adalah aliran data yang bisa di pantai (subscribe).
✅ Observable<string> berarti setiap data yang di kirim adalah string.
✅ interval(1000) → Menghasilkan angka setiap detik.
✅ .pipe(map(...)) → Mengubah angka menjadi "User X".


#   Request Payload
Cara menangani data yang dikirim oleh kilen (request body) dengan menggunakan DTO (Data Transfer Object) dan decorator @Body().
Penggunaan DTO menawarkan beberapa keuntungan yaitu: Struktur data sesuai dengan yang di harapkan, Tidak ada properti tambahan yang dikirim oleh klien yang bisa berpotensi bahaya, Dan data bisa di validasi sebelum di gunakan.

Contoh DTO

```TypeScript
    export class CreateCatDto {
        name: string;
        age: number;
        breed: string;
    }
```
Kode diatas adalah contoh dasar DTO, NestJS sendiri lebih menyarankan penggunakan class daripada interafce karena:
✅ Class tetap ada saat runtime, sedangkan interface hanya ada di TypeScript dan hilang setelah transpile ke JavaScript.
✅ Beberapa fitur Pipes hanya bisa bekerja dengan class.

Cara menerima data dengan DTO:

```TypeScript
    import { Controller, Post, Body } from '@nestjs/common';
    import { CreateCatDto } from './create-cat.dto';

    @Controller('cats')
    export class CatsController {
        @Post()
        async create(@Body() createCatDto: CreateCatDto) {
            return `Received cat data: ${createCatDto.name}, ${createCatDto.age}, ${createCatDto.breed}`;
        }
    }
```
Jadi data dari @Body() akan di transform ke CreateCatDto, kemudian kita bisa menggunakan melalui propertinya.

Lalu bagaimana jika data yang dikirim lebih banyak misal ada tambahan properti color dari klien?
Untuk menangani hal tersebut, kita bisa mengaktifkan ValidationPipe secara global sehingga hanya properti yang sesuai dengan DTO yang akan di proses, sementara yang lain akan di abaikan.

untuk mengaktifkannya bisa menggunakan ValidationPipe dari @nestjs/common. Setelah itu gunakan pada instance app

```TypeScript
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);
}
bootstrap();
```

Jika ingin lebih aman lagi, bisa menambahkan validasi dengan class-validator. `npm install class-validator class-transformer` jalankan perintah tersebut kemudian perbarui DTO.

```TypeScript
import { IsString, IsInt, Min, Max, IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @Min(0)
  @Max(30)
  age: number;

  @IsString()
  @IsNotEmpty()
  breed: string;
}
```

Dengan tambahan dekorator tiap properti, ini secara otomatis akan memvalidasi data sesuai dengan dekorator sebelum di proses. Misal ada request datang, namun properti name tidak di sertakan maka program akan merespon:
```TypeScript
    {
    "statusCode": 400,
    "message": ["breed should not be empty"],
    "error": "Bad Request"
    }
```
