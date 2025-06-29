// Fungsi untuk tombol "Mulai Sekarang"
function showAlert() {
  alert("Selamat datang di Skincare Kita! Yuk mulai perjalanan kulit sehatmu.");
}
//Event listener untuk form pendaftaran
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const skinType = document.getElementById("skinType").value;

  // Tampilkan respon
  document.getElementById("formResponse").textContent = `Terima kasih, ${name}! Kamu telah terdaftar.`;

  // Rekomendasi produk berdasarkan jenis kulit
  let recommendationHTML = "";

  if (skinType === "normal") {
    recommendationHTML = `
      <div style="text-align:left; margin-top:15px; color:#a75d5d;">
        <h3 style="color:#a75d5d;">Rekomendasi Perawatan untuk Kulit Normal</h3>
        <p><strong>Facial Wash:</strong> Membersihkan wajah tanpa mengganggu keseimbangan kulit.</p>
        <p><strong>Moisturizer:</strong> Menjaga kelembapan dan elastisitas kulit.</p>
        <p><strong>Sunscreen:</strong> Perlindungan harian dari sinar UV.</p>
        <p><em>Rutin membersihkan, melembapkan, dan melindungi kulit adalah kunci!</em></p>
      </div>
    `;
  } else if (skinType === "kering") {
    recommendationHTML = `
      <div style="text-align:left; margin-top:15px; color:#a75d5d;">
        <h3 style="color:#a75d5d;">Rekomendasi untuk Kulit Kering</h3>
        <p><strong>Toner:</strong> Memberikan hidrasi ekstra setelah cuci muka.</p>
        <p><strong>Moisturizer:</strong> Pelembap dengan formula intensif untuk kulit kering.</p>
        <p><strong>Serum:</strong> Bantu perbaiki skin barrier yang rusak akibat dehidrasi.</p>
      </div>
    `;
  } else if (skinType === "berminyak") {
    recommendationHTML = `
      <div style="text-align:left; margin-top:15px; color:#a75d5d;">
        <h3 style="color:#a75d5d;">Rekomendasi untuk Kulit Berminyak</h3>
        <p><strong>Facial Wash:</strong> Mengontrol minyak berlebih secara lembut.</p>
        <p><strong>Peeling:</strong> Eksfoliasi mingguan untuk pori-pori lebih halus.</p>
        <p><strong>Sunscreen:</strong> Formula non-comedogenic agar tidak menyumbat pori.</p>
      </div>
    `;
  } else if (skinType === "sensitif") {
    recommendationHTML = `
      <div style="text-align:left; margin-top:15px; color:#a75d5d;">
        <h3 style="color:#a75d5d;">Rekomendasi untuk Kulit Sensitif</h3>
        <p><strong>Serum:</strong> Memperkuat skin barrier dan menenangkan iritasi.</p>
        <p><strong>Sunscreen:</strong> Tabir surya bebas alkohol dan parfum.</p>
        <p><strong>Moisturizer:</strong> Melembapkan tanpa rasa lengket atau panas di kulit.</p>
      </div>
    `;
  }

  // Masukkan konten HTML ke dalam elemen
  document.getElementById("skincareRecommendation").innerHTML = recommendationHTML;
});
