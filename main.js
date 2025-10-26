let pesan = document.getElementById("pesan");
let notif = document.getElementsByClassName("masukan");
let btn = document.getElementById("submit");
let ucapan = document.getElementById("ucapan");
window.onscroll = function() {Headers()}

ucapan.addEventListener("click", function Headers() {
    
    alert('🎉 Selamat ulang tahun Jihaikuhh! \n Meskipun Hadiah yang ku berikan tidak seberapa :), \n Bisa jadi ini adalah hadiah terakhir dari aku \nSemoga suka yah ^^ ❤️❤️❤️\n\n Tekan "OK" untuk mengirim pesan buat Novell :D')
    notif[0].style.display = "block";
    notif[0].style.animation = "fadeIn 1s ease-in-out";
    document.documentElement.scrollTop = 1000
    document.body.scrollTop = 1000
})

    
    


function kirim() {
    // Ambil elemen input pesan dan link
  const masukan = document.getElementById("pesan").value;
  const link = document.getElementById("kirimkan");

  // Encode teks supaya bisa dikirim di URL WhatsApp
  const teksEncoded = encodeURIComponent(masukan);

  // Ganti nomor sesuai nomor tujuanmu
  const nomor = "6289514433486";
  
  // Buat link WhatsApp dinamis
  link.href = `https://wa.me/${nomor}?text=Pesan%20untuk%20Novell%20:%20${teksEncoded}`;
  if(masukan == "") {
    link.href = "#"
    alert("Ketik pesannya dulu ya sayang ^^");
  }
  
}

    

