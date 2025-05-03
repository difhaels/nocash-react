Nocash

use-color:
yellow: #FEB602
blue: #336AE9
gray: #F7F7F7
white: #FFFFFF
red:
green:

struktur data transaksi:
- id
- nama
- status
- jumlah


NOCASH - Sprint 1 Checklist
:rocket: Core Setup
 Inisialisasi project dengan Vite + React + Tailwind

 Setup folder structure (pages/, components/, redux/)

:books: Belajar Dasar
 Pelajari ulang React Components dan Props (React Docs)

 Pelajari Event Handling di React

 Pelajari FileReader API untuk load file

 Pelajari Blob API untuk save file

:hammer: Pembangunan Fitur
 Buat halaman Start.jsx (tombol Create dan Load)

 Buat halaman Home.jsx (CRUD transaksi)

 Buat komponen TransactionList.jsx

 Buat komponen TransactionItem.jsx

 Buat komponen TransactionForm.jsx

 Implementasi routing sederhana (react-router-dom)

:gear: Redux Management
 Install Redux Toolkit dan React Redux

 Setup store.js

 Setup transactionsSlice.js dengan action:

 addTransaction

 editTransaction

 deleteTransaction

 setTransactions (untuk load file)

 Connect Redux ke komponen Home.jsx

:art: Styling
 Fokus desain Mobile First (Tailwind responsive)

 Styling untuk:

 Halaman Start

 Halaman Home

 Form transaksi

 Daftar transaksi

 Filter

:floppy_disk: Data Persistence
 Load transaksi dari file .json

 Save transaksi ke file .json

 Implementasi LocalStorage backup otomatis

:mag_right: Testing Manual
 Test tambah transaksi

 Test edit transaksi

 Test hapus transaksi

 Test filter transaksi

 Test create file baru

 Test load file lama

 Test save file terbaru

