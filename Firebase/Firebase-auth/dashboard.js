import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js"

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
if (!authUser) {
  window.location.href = "./signup.html"
}
if (authUser.email !== "hamza@gmail.com") {
  addProductBtn.style.display = 'none';
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
  const id = document.getElementById('productId').value;
  const product = {
    title: document.getElementById('title').value.trim(),
    description: document.getElementById('description').value.trim(),
    price: parseFloat(document.getElementById('price').value),
    imageUrl: document.getElementById('imageUrl').value.trim()
  };

  if (id) {
    try {
      const productRef = doc(db, "products", id);
      await updateDoc(productRef, product);
      console.log("Product updated:", id);
      renderProductCards()
    } catch (e) {
      console.error("Error updating product: ", e);
    }
  } else {
    // Add new
    try {
      const docRef = await addDoc(collection(db, "products"), product);
      console.log("New product added:", docRef.id);
      renderProductCards()
    } catch (e) {
      console.error("Error adding product: ", e);
    }
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
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();

      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${data.imageUrl}" alt="${data.title}" />
        <h3>${data.title}</h3>
        <p>${data.description || 'No description'}</p>
        <p><strong>$${data.price}</strong></p>
        ${authUser.email === "hamza@gmail.com" ? `
          <button class="btn btn-sm btn-outline-primary mt-2 edit-btn" data-id="${docSnap.id}">Edit</button>
          <button class="btn btn-sm btn-outline-danger mt-2 delete-btn" data-id="${docSnap.id}">Delete</button>
          ` : `<button class="btn btn-sm btn-outline-danger mt-2 Cart-btn" data-id="${docSnap.id}">Add to Cart</button>`}`;
      container.appendChild(card);
    });

    document.querySelectorAll('.edit-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        editProduct(id);
      });
    });

    document.querySelectorAll('.delete-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        deleteProduct(id);
      });
    });

    document.querySelectorAll('.Cart-btn').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-id');
        const productRef = doc(db, "products", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          const product = productSnap.data();

          // Add to cartItems collection
          await addDoc(collection(db, "cartItems"), {
            userEmail: authUser.email,
            title: product.title,
            price: product.price,
            imageUrl: product.imageUrl,
            description: product.description
          });

          btn.textContent = "✓ Added";
          btn.classList.add("added");
          setTimeout(() => {
            btn.textContent = "Add to Cart";
            btn.classList.remove("added");
          }, 1500);
          window.location.href = "./cart.html"
        } else {
          console.error("Product not found");
        }
      });
    });

  } catch (err) {
    console.error("Error fetching products:", err);
    container.innerHTML = `<p style="color:red;">Failed to load products.</p>`;
  }
}


async function editProduct(id) {
  try {
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      const data = productSnap.data();
      document.getElementById('title').value = data.title;
      document.getElementById('description').value = data.description;
      document.getElementById('price').value = data.price;
      document.getElementById('imageUrl').value = data.imageUrl;
      document.getElementById('productId').value = id;

      document.getElementById('productModalLabel').innerText = 'Edit Product';
      productModal.show();
      renderProductCards();
    } else {
      console.error("No such document!");
    }
  } catch (e) {
    console.error("Error editing product: ", e);
  }
}

async function deleteProduct(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    try {
      await deleteDoc(doc(db, "products", id));
      console.log("Product deleted:", id);
      renderProductCards();
    } catch (e) {
      console.error("Error deleting product: ", e);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderProductCards();
});
