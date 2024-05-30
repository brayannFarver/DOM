const container = document.getElementById("container_products")


products.forEach( product =>{
    console.log(product);
    const contenedor_item = document.createElement('div');

    contenedor_item.classList.add('container_item')

    contenedor_item.innerHTML = `
        <p>${product.title}</p> 
        <img src="${product.thumbnail}" alt="${product.title}" > 
        <p>${product.description}</p>  
        <div class="container_cart">
            <p>${product.price}</p>
            <button class="btn_cart">Añadir</button>
        </div>
    `
    container.appendChild(contenedor_item)
} )
