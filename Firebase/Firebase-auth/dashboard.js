import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js"

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

const sidebarH4 = document.getElementById('sidebar-h4');
const addProductBtn = document.getElementById('addProductBtn');
const viewCartBtn = document.getElementById('viewCartBtn');
const welcomePara1 = document.getElementById('welcome-para-2');
const welcomePara2 = document.getElementById('welcome-para-1');
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
  welcomePara2.style.display = 'none';
  sidebarH4.innerHTML = "Dashboard"
  welcomePara1.innerText = "Welcome to the Dashboard. 🎉 Glad to have you back — let’s make today awesome!"
}

const cartQuery = query(
  collection(db, "cartItems"),
  where("userEmail", "==", authUser.email)
);
onSnapshot(cartQuery, (snapshot) => {
  const cartCount = snapshot.size;
  if (viewCartBtn) {
    viewCartBtn.textContent = `View Cart (${cartCount})`;
  }
});
welcomeMessage.textContent = `Welcome, ${authUser.displayName}!`;

// Logout with SweetAlert
logoutBtn.addEventListener('click', () => {
  Swal.fire({
    title: 'Logged Out',
    text: 'You have been logged out successfully!',
    icon: 'success',
    confirmButtonText: 'OK'
  }).then(() => {
    localStorage.removeItem('authUser');
    window.location.href = "login.html";
  });
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

  try {
    if (id) {
      const productRef = doc(db, "products", id);
      await updateDoc(productRef, product);
      Swal.fire('Updated!', 'Product updated successfully.', 'success');
    } else {
      await addDoc(collection(db, "products"), product);
      Swal.fire('Added!', 'New product added successfully.', 'success');
    }
    renderProductCards();
  } catch (e) {
    Swal.fire('Error!', 'There was an issue saving the product.', 'error');
    console.error(e);
  }

  productForm.reset();
  productModal.hide();
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
      btn.addEventListener('click', () => editProduct(btn.getAttribute('data-id')));
    });

    document.querySelectorAll('.delete-btn').forEach((btn) => {
      btn.addEventListener('click', () => deleteProduct(btn.getAttribute('data-id')));
    });

    document.querySelectorAll('.Cart-btn').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-id');

        // Change button text while adding
        btn.disabled = true;
        const originalText = btn.textContent;
        btn.textContent = "Adding...";

        const productRef = doc(db, "products", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          const product = productSnap.data();

          await addDoc(collection(db, "cartItems"), {
            userEmail: authUser.email,
            title: product.title,
            price: product.price,
            imageUrl: product.imageUrl,
            description: product.description
          });

          Swal.fire({
            title: 'Procduct Added',
            text: `${product.title || 'item'} added to cart!`,
            icon: 'success',
            confirmButtonText: 'View Cart'
          }).then(() => {
            window.location.href = "./cart.html";
          });
          btn.textContent = "Added ✅";

          // Restore after 1.5s
          setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
          }, 1500);

        } else {
          Swal.fire('Error!', 'Product not found.', 'error');
          btn.textContent = originalText;
          btn.disabled = false;
        }
      });
    });


  } catch (err) {
    Swal.fire('Error!', 'Failed to load products.', 'error');
    console.error(err);
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
    } else {
      Swal.fire('Error!', 'No such document!', 'error');
    }
  } catch (e) {
    Swal.fire('Error!', 'There was an issue editing the product.', 'error');
    console.error(e);
  }
}

async function deleteProduct(id) {
  Swal.fire({
    title: 'Are you sure?',
    text: "This action will permanently delete the product.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await deleteDoc(doc(db, "products", id));
        Swal.fire('Deleted!', 'Product has been deleted.', 'success');
        renderProductCards();
      } catch (e) {
        Swal.fire('Error!', 'Failed to delete product.', 'error');
        console.error(e);
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', renderProductCards);
