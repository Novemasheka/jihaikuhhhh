let pesan = document.getElementById("pesan");
let notif = document.getElementsByClassName("masukan");
let btn = document.getElementById("submit");
let ucapan = document.getElementById("ucapan");
let send = document.getElementById("kirimkan")
let lagu = document.getElementById("lagu");
let musik= [document.getElementById("mati"),document.getElementById("hidup")]
let messsage = document.getElementsByClassName("message");

window.onscroll = function() {Headers()}

ucapan.addEventListener("click", function Headers() {
    
    alert('🎉 Selamat ulang tahun Jihaikuhh! \n Meskipun Hadiah yang ku berikan tidak seberapa :), \n Bisa jadi ini adalah hadiah terakhir dari aku \nSemoga suka yah ^^ ❤️❤️❤️\n\n Tekan "OK" untuk mengirim pesan buat Novell :D')
    lagu.play();
    musik[0].style.display = "block";
    musik[1].style.display = "none";
    notif[0].style.display = "block";
    notif[0].style.animation = "fadeIn 1s ease-in-out";
    confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.6 }
        });
    messsage[0].style.display = "block"
    document.documentElement.scrollTop = 1000
    document.body.scrollTop = 1000
})

function matikan() {
  lagu.pause();
  musik[0].style.display = "none"
  musik[1].style.display = "block"
}
function hidupkan() {
  lagu.play();
  musik[0].style.display = "block"
  musik[1].style.display = "none"
}

    
    


send.addEventListener("click", function Headers(){
   // Ambil elemen input pesan dan link
  const masukan = document.getElementById("pesan").value;
  const link = document.getElementById("kirimkan");

  // Encode teks supaya bisa dikirim di URL WhatsApp
  const teksEncoded = encodeURIComponent(masukan);

  // Ganti nomor sesuai nomor tujuanmu
  const nomor = "6289514433486";
  
  // Buat link WhatsApp dinamis
  link.href = `https://wa.me/${nomor}?text=Dari%20Jihai:%20"${teksEncoded}"`;
  if(masukan == "") {
    link.href = "#"
    alert("Ketik pesannya dulu ya sayang ^^");
  }
    document.documentElement.scrollTop = 1000
    document.body.scrollTop = 1000
  
}) 
   


    

