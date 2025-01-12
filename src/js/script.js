//humberger

const humburger = document.querySelector('#humburger');
const navMenu = document.querySelector('#nav-menu');
humburger.addEventListener('click', function() {
    humburger.classList.toggle('humburger-active');
    navMenu.classList.toggle('hidden');
})

//navbar fixed

let lastScrollY = window.scrollY;
const header = document.querySelector('header');
const fixedNav = header.offsetTop;

window.addEventListener('scroll', () => {
  // Tambahkan atau hapus kelas 'navbar-fixed' berdasarkan posisi scroll
  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }

  // Deteksi arah scroll (atas atau bawah)
  if (window.scrollY > lastScrollY) {
    // Scroll ke bawah, sembunyikan navbar dengan transisi ke atas
    header.classList.add('-translate-y-full');
    header.classList.remove('translate-y-0');
  } else {
    // Scroll ke atas, tampilkan navbar dengan transisi ke bawah
    header.classList.remove('-translate-y-full');
    header.classList.add('translate-y-0');
  }

  lastScrollY = window.scrollY; // Perbarui posisi scroll terakhir
});


    // Ambil elemen kontainer
    const scrollContainer = document.getElementById("scroll-container");

    let isDragging = false; // Status apakah mouse sedang menahan
    let startX; // Posisi awal mouse saat klik
    let scrollLeft; // Posisi scroll kontainer saat mouse ditekan

    // Saat mouse ditekan (drag dimulai)
    scrollContainer.addEventListener("mousedown", (e) => {
      isDragging = true; // Aktifkan status dragging
      scrollContainer.classList.add("active"); // Ubah kursor
      startX = e.pageX - scrollContainer.offsetLeft; // Posisi awal mouse
      scrollLeft = scrollContainer.scrollLeft; // Simpan posisi awal scroll
    });

    // Saat mouse dilepas (drag berakhir)
    scrollContainer.addEventListener("mouseup", () => {
      isDragging = false; // Nonaktifkan status dragging
      scrollContainer.classList.remove("active"); // Ubah kursor
    });

    // Saat mouse keluar dari kontainer (jika tidak sengaja keluar)
    scrollContainer.addEventListener("mouseleave", () => {
      isDragging = false; // Nonaktifkan status dragging
      scrollContainer.classList.remove("active"); // Ubah kursor
    });

    // Saat mouse digerakkan (drag aktif)
    scrollContainer.addEventListener("mousemove", (e) => {
      if (!isDragging) return; // Hanya bergerak jika status dragging aktif
      e.preventDefault(); // Cegah seleksi teks
      const x = e.pageX - scrollContainer.offsetLeft; // Hitung posisi mouse saat ini
      const walk = x - startX; // Jarak pergerakan mouse
      scrollContainer.scrollLeft = scrollLeft - walk; // Geser posisi scroll
    });

    // Gandakan isi kontainer untuk efek tanpa ujung
    const cloneContent = () => {
      const children = Array.from(scrollContainer.children);
      children.forEach((child) => {
        const cloneStart = child.cloneNode(true); // Clone untuk awal
        const cloneEnd = child.cloneNode(true);   // Clone untuk akhir
        scrollContainer.appendChild(cloneEnd);   // Tambahkan clone di akhir
        scrollContainer.insertBefore(cloneStart, scrollContainer.firstChild); // Tambahkan clone di awal
      });
    };

    // Inisialisasi kontainer dengan konten yang digandakan
    cloneContent();

    // Reset posisi saat scroll mencapai ujung kiri
    const resetScrollPosition = () => {
      const middlePosition = scrollContainer.scrollWidth / 2 - scrollContainer.clientWidth / 2;
      scrollContainer.scrollLeft = middlePosition;
    };

    // Memindahkan scroll untuk efek tanpa ujung
    scrollContainer.addEventListener('scroll', () => {
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      // Jika scroll mencapai ujung kiri, reset ke ujung kanan (untuk terus berputar)
      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = maxScrollLeft / 2;
      }

      // Jika scroll mencapai ujung kanan, reset ke ujung kiri (untuk terus berputar)
      if (scrollContainer.scrollLeft >= maxScrollLeft) {
        scrollContainer.scrollLeft = maxScrollLeft / 2;
      }
    });

    // Set posisi awal setelah halaman dimuat
    window.addEventListener("load", resetScrollPosition);

   

    

