document.getElementById('productForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const price = parseFloat(document.getElementById('price').value);
  
  await fetch('/add-product', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, price })
  });

  document.getElementById('name').value = '';
  document.getElementById('price').value = '';
  loadProducts();
});

async function loadProducts() {
  const res = await fetch('/products');
  const products = await res.json();
  const container = document.getElementById('products');
  container.innerHTML = '';
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<h3>${p.name}</h3><p>${p.price} ريال</p>`;
    container.appendChild(div);
  });
}

loadProducts();