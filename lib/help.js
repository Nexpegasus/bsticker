function help() {
    return `
‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   
‎   ‎   ‎   ‎   ‎   ‎        SELAMAT DATANG
‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎   ‎
Hubungi aku di instagram: https://www.instagram.com/fandy_skuyy

#info = Informasi tentang owner bot
#snk = Syarat dan Ketentuan Bot
#donasi = Inforamsi kalo ente mau donasi
=============================
#menuadmin = Tools management grup
=============================

1. *!join* = Untuk mengundang bot ke dalam grupmu
    Contoh: !join https://chat.whatsapp.com/xnxx

2. *!quotes* = Menampilkan quotes secara random
 
3. *!ytmp3* = Untuk mengunduh musik dari YouTube
    Contoh: !ytmp3 https://www.youtube.com/xnxx

4. *!ytmp4* = Untuk mengunduh vdeo dari 
    Contoh: !ytmp3 https://www.youtube.com/xnxx

5. *!ig* = Untuk mengunduh postingan yang ada di instagram
    Contoh: !ig https://www.instagram.com/xnxx
 
6. *!fb* = Untuk mengunduh video dari Facebook
    Contoh: !ig https://www.facebook.com/xnxx
 
7. *!stiker* = Merubah gambar menjadi stiker

8. *!sgif* = Merubah Gif menjadi Gifstiker [beta]

9. *!igStalk* = Stalking akun instagram mantan kamu
    Contoh: #igStalk @fandy_skuyy

10. *!meme* = Random meme (english )

11. *!quotemaker* |teks|author|theme =
    Contoh: !quotemaker |owner bot jomblo|bot|random

12. *!quotesnime* = Menampilkan quotes yang dimuat di anime

13. *!chord lagu* = Untuk mencari kunci gitar sebuah lagu
    Contoh: !chord butiran debu

14. *!lirik* judul lagu = Menampilkan lirik lagu yang di cari
    Contoh: !lirik cinta luar biasa 

15. *!wiki* = mencari artikel di wikipedia
    Contoh: !wiki covid-19 

16. *!asu* = Menampilkan gambar anjing secara acak

17. *!jadwalShalat* = Menampilkan waktu solat sesuai daerah
    Ketik : !listdaerah

18. *!jadwalTv* = Menampilkan list jadwal penayangan untk hari ini
    Ketik : !listchannel

19. *!cuaca* = Menampilkani info cuaca terkini di daerahmu
    Contoh: !cuaca kopang

20. *!tts* = Bot voice note google
    Contoh: !tts id kapan owner bot bisa punya pacar

21. *!ss* = Screenshot website
    Contoh: !ss https://fandy-pedia.xyz

22. *!pokemon* = Menampilkan gambar pokermon secara acak

23. *!brainly* pertanyaan .jumlah = Untuk melihat jawaban dari server brainly [perbaikan]
    Contoh: !brainly kenapa lelaki selalu salah 

24. *!kucing* = Menampilkan gambar kucing secara acak

25. *!infoGempa* = Info tentang gempa terkini


 *MENU WIBU*


26. *!wait* = What is this. untuk mencari judul anime berdasakan foto yang di kirim

27. *!loli* = Menampilkan gambar acak loli

28. *!waifu* = Menampilkan gambar acak wafu

29. *!husbu* = Menampilkan gambar acak husbu

30. *!randomNekoNime* = Menampilkan gambar acak NekoNime

31. *!randomTrapNime* = Menampilkan gambar acak TrapNime

32. *!randomAnime* Menampilkan gambar anime secara acak

33. *!anime* judul anime = Info tentang anime yang ente cari

 
Kirim perintah *#readme* untuk mengetahui fungsi dan cara penggunaan perintah di atas, WAJIB BACA!!.`
}
exports.help = help()
function menuadmin() {
    return `
*!add 62858xxxxx*
*!kick @tagmember*
*!promote @tagmember*
*!demote @tagadmin*
*!mentionAll*
*!adminList*
*!ownerGroup*
*!linkGroup*
*!del [ReplyChatBot]*
*!kickall [KickAll Member]*
*!welcome [enable|disable]*`
}
exports.menuadmin = menuadmin()
function readme() {
    return `
*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *!ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *!ytmp4 https://youtu.be/Bskehapzke8*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *!ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *!fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *!jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *!jadwalTv Indosiar*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *!cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *!tts id Test*
Note : Max 250 huruf

*[@username]* Diisi dengan username Instagram yang valid, tanpa tanda “[” dan “]”
Contoh : *!igStalk @duar_amjay*

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *!quotemaker |Odading|Mang Oleh|Shark*

*[linkGroup]* Diisi dengan link group whatsapp yang valid, tanpa tanda “[” dan “]”.
Contoh : *!join https://chat.whatsapp.com/Bhhw77d5t2gjao8*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *!lirik aku bukan boneka*`
}
exports.readme = readme()
function info() {
    return `Bot ini di buat dengan bahasa pemrograman Node.js / JavaScript
Source kode bot : https://github.com/NexPegasus/bsticker
Owner Bot : wa.me/6281293178351
Author? : Ada pokoknya om, malas pasang nama doang`
}
exports.info = info()
function snk() {
    return `Syarat dan Ketentuan Bot *Fandy BOT*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !`
}
exports.snk = snk()
function donate() {
    return `Ya halo om.. Mau donate?
    
Kalo mau donate langsung ae ke :
OVO/PULSA/GOPAY : 083890028404
SAWERIA : https://saweria.co/donate/fandystore

Thanks !`
}
exports.donate = donate()
function listChannel() {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
