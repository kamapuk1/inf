// Obiekt przechowujący dane o produktach
const products = {
    electronics: [
        { name: 'Smartfon', description: 'Potężny smartfon z świetną kamerą', price: '2000 zł', img: 'https://via.placeholder.com/100' },
        { name: 'Słuchawki', description: 'Bezprzewodowe słuchawki z redukcją hałasu', price: '700 zł', img: 'https://via.placeholder.com/100' },
    ],
    clothing: [
        { name: 'Koszulka', description: 'Stylowa koszulka z bawełny', price: '150 zł', img: 'https://via.placeholder.com/100' },
        { name: 'Jeansy', description: 'Wygodne jeansy na co dzień', price: '300 zł', img: 'https://via.placeholder.com/100' },
    ],
    accessories: [
        { name: 'Pasek', description: 'Skórzany pasek do formalnego stroju', price: '100 zł', img: 'https://via.placeholder.com/100' },
        { name: 'Zegarek', description: 'Elegancki zegarek z metalową bransoletą', price: '500 zł', img: 'https://via.placeholder.com/100' },
    ],
    home: [
        { name: 'Dywan do łazienki', description: 'Miły i wygodny dywan do łazienki', price: '70 zł', img: 'https://via.placeholder.com/100' },
        { name: 'Lampka', description: 'Lampka LED do przytulnego wnętrza', price: '150 zł', img: 'https://via.placeholder.com/100' },
    ],
    beauty: [
        { name: 'Kosmetyki', description: 'Zestaw kosmetyków do pielęgnacji skóry', price: '250 zł', img: 'https://via.placeholder.com/100' },
        { name: 'Perfumy', description: 'Elegancki zapach z kwiatowymi nutami', price: '300 zł', img: 'https://via.placeholder.com/100' },
    ]
};

// Funkcja do wyświetlania produktów w wybranej kategorii
function showCategory(category) {
    const categoryContent = document.getElementById('category-content');
    if (!categoryContent) {
        console.error("Nie znaleziono elementu o id 'category-content'");
        return;
    }
    categoryContent.innerHTML = `<h3>kategoria: ${capitalizeFirstLetter(category)}</h3>`;

    if (products[category]) {
        const productList = products[category].map(product => {
            return `
                <div class="product-item">
                    <img src="${product.img}" alt="${product.name}">
                    <div class="details">
                        <h4>${product.name}</h4>
                        <p>${product.description}</p>
                        <p><strong>${product.price}</strong></p>
                        <button>Kup</button>
                    </div>
                </div>
            `;
        }).join('');
        categoryContent.innerHTML += productList;
    } else {
        categoryContent.innerHTML += '<p>Brak produktów w tej kategorii.</p>';
    }
}

// Funkcja do kapitalizowania pierwszej litery kategorii
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Funkcja do przełączania widoczności menu
function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('active');
}
