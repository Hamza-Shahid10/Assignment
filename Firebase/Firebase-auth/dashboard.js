import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, addDoc , getDocs  } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyBFp39U0vIOawr6s3vExdrkpWdFEbPFQ-0",
    authDomain: "authentication-64041.firebaseapp.com",
    projectId: "authentication-64041",
    storageBucket: "authentication-64041.firebasestorage.app",
    messagingSenderId: "1044388501818",
    appId: "1:1044388501818:web:2f87ea37b6ee71af241803",
    measurementId: "G-VG58W8N8G6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addProductBtn = document.getElementById('addProductBtn');
const logoutBtn = document.getElementById('logoutBtn');
const productForm = document.getElementById('productForm');
const welcomeMessage = document.getElementById('welcome-message');
const productModal = new bootstrap.Modal(document.getElementById('productModal'));


const authUser = JSON.parse(localStorage.getItem('authUser'));
if(!authUser){
  window.location.href = "./signup.html"
}
welcomeMessage.textContent = `Welcome, ${authUser.displayName}!`;

logoutBtn.addEventListener('click', () => {
    alert('Logged out!');
    localStorage.removeItem('authUser');
    window.location.href = "login.html";
});

addProductBtn.addEventListener('click', () => {
    productModal.show();
});

productForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const product = {
        title: document.getElementById('title').value.trim(),
        description: document.getElementById('description').value.trim(),
        price: parseFloat(document.getElementById('price').value),
        imageUrl: document.getElementById('imageUrl').value.trim()
    };
    console.log(product)
    try {
        const docRef = await addDoc(collection(db, "products"), {
            title : product.title,
            description : product.description,
            price : product.price,
            imageUrl : product.imageUrl,
        });
        console.log("Document written with ID: ", docRef.id);
        console.log("Product saved:", product);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    
    productForm.reset();
    productModal.hide();
    // alert('Product added successfully!');
});

async function renderProductCards() {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();

      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${data.imageUrl}" alt="${data.title}" />
        <h3>${data.title}</h3>
        <p>${data.description || 'No description'}</p>
        <p><strong>$${data.price}</strong></p>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Error fetching products:", err);
    container.innerHTML = `<p style="color:red;">Failed to load products.</p>`;
  }
}

renderProductCards();