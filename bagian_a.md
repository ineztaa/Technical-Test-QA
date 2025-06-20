# 📘 Bagian A - Pengetahuan Dasar QA

---

## 1. Perbedaan Bug, Defect, dan Error

- **Bug**: Kecacatan atau malfungsi yang ditemukan pada aplikasi **yang sudah masuk production** dan digunakan oleh user.
- **Defect**: Kecacatan atau malfungsi yang ditemukan **sebelum aplikasi dirilis**, biasanya pada environment **testing** atau **staging**.
- **Error**: Kesalahan yang terjadi akibat **human error** saat proses coding, seperti salah memasukkan formula perhitungan oleh engineer.

---

## 2. Regression Testing

**Regression testing** adalah pengujian yang dilakukan untuk memastikan bahwa **fungsionalitas sistem tetap berjalan normal** setelah ada:
- Bug fixing
- Penambahan fitur baru
- Perubahan lainnya

Regression testing biasanya dilakukan setelah **satu siklus development selesai** dan menjelang release ke production.

---

## 3. Bug Lifecycle

New → Assigned → Open (Akan dilakukan analisis apakah bug tersebut valid atau duplicate atau rejected atau deferred atau not a bug) → Fixed → Retest → Reopened (jika masih ditemukan bug) → Verified (jika bug sudah tidak ditemukan lagi) → Closed (jika bug sudah tidak muncul lagi).

---

## 4. Test Scenario vs Test Case

**Test Scenario** adalah gambaran atau deskripsi umum dari feature yang akan dilakukan pengujian. Sedangkan **test case** adalah sekumpulan langkah-langkah sistematis dan terstruktur untuk mendeskripsikan skenario yang akan diuji secara terperinci.

**Contoh:**

**Test Scenario**: Login use valid credential

**Test Case:**

- **Test Case ID**: TC-001  
- **Test Description**: User log in using valid username and valid password  
- **Precondition**: User is already open the website and show landing page  
- **Test Steps**:
  1 Open login page  
  2 Input valid username  
  3 Input valid password  
  4 Click login button  
- **Test Data**:
  - Username: `qwertyui`
  - Password: `Pass123`
- **Expected Result**: Success redirect to homepage

---

## 5. Severity vs Priority

**Severity dan priority** adalah acuan untuk menentukan tingkat keparahan dan urgensi dari suatu bug. Semakin tinggi tingkat severity dan priority dari suatu bug, maka menunjukan bahwa bug tersebut harus segera diperbaiki karena akan mengganggu operasional suatu sistem.

> 📌 Severity = Seberapa **parah dampaknya** terhadap sistem  
> 📌 Priority = Seberapa **mendesak perbaikannya** dilakukan

**Contoh:**

| Bug Deskripsi                                                                 | Severity   | Priority | Penjelasan                                                                                 |
|-------------------------------------------------------------------------------|------------|----------|--------------------------------------------------------------------------------------------|
| Sistem crash saat user melakukan pembayaran                                  | Critical   | High     | Fitur utama dan krusial, harus segera diperbaiki                                           |
| Logo perusahaan salah di landing page                                        | Low        | High     | Tidak memengaruhi sistem, tapi berdampak pada branding                                     |
| Sistem crash saat user membuka page contact us berulang-ulang               | High       | Low      | Dampak sistem tinggi, tapi kasus jarang terjadi                                            |
| Font size tidak konsisten pada judul halaman                                | Low        | Low      | Masalah estetika, tidak mendesak untuk diperbaiki                                          |

---

