// sidebar
const p=document.querySelector("p");



function konten1() {
    document.getElementById("demo").innerHTML = "default";
};
function konten2() {
    document.getElementById("demo").innerHTML = "ini konten 2";
};
function konten3() {
    document.getElementById("demo").innerHTML = "ini konten 3";
};
function konten4() {
    document.getElementById("demo").innerHTML = "ini konten 4";
};

// menu
function openNav() {
  document.getElementById("myMenu").style.width = "250px";
  document.getElementById("header").style.marginRight = "260px";
  document.getElementById("content").style.marginRight = "250px";

}

function closeNav() {
  document.getElementById("myMenu").style.width = "0";
  document.getElementById("header").style.marginRight = "10";
  document.getElementById("content").style.marginRight = "0";
}

// // Fungsi untuk memecah teks menjadi elemen span animasi
// function prepareTextForAnimation(element) {
//   if (!element) return;
//   const text = element.textContent;
//   element.innerHTML = '';
  
//   Array.from(text).forEach(char => {
//     const span = document.createElement('span');
//     span.className = 'bubble-text';
//     span.textContent = char;
//     element.appendChild(span);
//   });
// }

// // Fungsi untuk menambahkan animasi bubble ke teks
// function animateBubbleText(element, delay = 20) {
//   if (!element) return;
//   const bubbleElements = element.querySelectorAll('.bubble-text');
  
//   // Reset animasi dulu
//   bubbleElements.forEach(span => {
//     span.classList.remove('animated');
//   });
  
//   // Animasi meletup untuk setiap span
//   bubbleElements.forEach((span, index) => {
//     setTimeout(() => {
//       span.classList.add('animated');
//     }, delay * index);
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   const imageBlocks = document.querySelectorAll('.blok');
  
//   // Siapkan semua teks (judul dan konten) dengan span untuk animasi
//   document.querySelectorAll('.caption-text p, .caption-title').forEach(element => {
//     prepareTextForAnimation(element);
//   });
  
//   // Event handler untuk hover pada blok gambar (untuk judul)
//   imageBlocks.forEach(block => {
//     block.addEventListener('mouseenter', function() {
//       const captionTitle = this.querySelector('.caption-title');
//       animateBubbleText(captionTitle, 30);
//     });
    
//     // Event handler untuk klik pada blok gambar (untuk konten)
//     block.addEventListener('click', function() {
//       // Temukan teks caption di dalam blok ini
//       const captionText = this.querySelector('.caption-text');
      
//       // Toggle visibility
//       const isVisible = captionText.classList.toggle('visible');
      
//       // Jika caption menjadi terlihat, animasikan teks
//       if (isVisible) {
//         const paragraphs = captionText.querySelectorAll('p');
//         paragraphs.forEach((paragraph, paragraphIndex) => {
//           setTimeout(() => {
//             animateBubbleText(paragraph, 20);
//           }, paragraphIndex * 100);
//         });
//       }
      
//       // Menutup caption lain yang terbuka
//       imageBlocks.forEach(otherBlock => {
//         if (otherBlock !== block) {
//           const otherCaptionText = otherBlock.querySelector('.caption-text');
//           otherCaptionText.classList.remove('visible');
//         }
//       });
//     });
//   });
// });