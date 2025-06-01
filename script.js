function tampilkanData() {
  const form = document.getElementById('biodataForm');
  if (!form.checkValidity()) {
    alert('Harap isi semua field yang wajib dengan benar!');
    return;
  }

  const nama = document.getElementById('nama').value.trim();
  const prodi = document.getElementById('prodi').value;
  const tanggal = document.getElementById('tanggal').value;
  const alamat = document.getElementById('alamat').value.trim();
  const email = document.getElementById('email').value.trim();
  const telepon = document.getElementById('telepon').value.trim();

  const gender = document.querySelector('input[name="gender"]:checked');
  const jenisKelamin = gender ? gender.value : '-';

  const hobiNodes = document.querySelectorAll('input[name="hobi"]:checked');
  const hobiList = Array.from(hobiNodes).map(h => h.value);
  const hobi = hobiList.length > 0 ? hobiList.join(', ') : '-';

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const tanggalFormatted = new Date(tanggal).toLocaleDateString('id-ID', options);

  const pesan = `
Nama: ${nama}
Program Studi: ${prodi}
Tanggal Lahir: ${tanggalFormatted}
Alamat: ${alamat}
Jenis Kelamin: ${jenisKelamin}
Email: ${email}
Nomor Telepon: ${telepon}
Hobi: ${hobi}
  `;

  alert(pesan);
}
