let items = JSON.parse(localStorage.getItem('items')) || [];

window.onload = function () {
    if (!localStorage.getItem('items')) {
        const defaultItems = [
            {
                name: "Bruschetta",
                price: "30.00",
                img: "https://blog.biglar.com.br/wp-content/uploads/2023/04/iStock-532128106.jpeg",
                desc: "Pão italiano crocante tostado, coberto com uma mistura fresca de tomates picados, manjericão e alho, regado com azeite de oliva extra virgem.",
                select: "o1"
            },
            {
                name: "Antipasti",
                price: "90.00",
                img: "https://cdn.ohmydish.com/https://ohmydish.com/uploads/2023/Italian-antipasti-platter.jpg?format=webp&width=2400&height=1600&quality=60",
                desc: "Uma seleção de frios italianos: presunto de Parma, salame, mortadela, queijos variados, azeitonas, tomates secos e vegetais marinados. Porção de 600g.",
                select: "o1"
            },
            {
                name: "Carpaccio",
                price: "40.00",
                img: "https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/carpaccio-1920w.jpg",
                desc: "Fatias finas de carne bovina, delicadamente temperadas com azeite de oliva, limão, alcaparras e parmesão ralado. Porção de 250g.",
                select: "o1"
            },
        
        
            {
                name: "Napoletana",
                price: "80.00",
                img: "https://italica.com.br/wp-content/uploads/2023/12/Pizza-napoletana.jpg",
                desc: "Uma pizza com sabor marcante, que traz a combinação salina das anchovas e alcaparras, equilibrada pelo queijo mozzarella e molho de tomate.",
                select: "o2"
            },
            {
                name: "Pepperoni",
                price: "80.00",
                img: "https://receitasdepesos.com.br/wp-content/uploads/2023/07/pizza.jpg",
                desc: "Para os amantes de sabores intensos, esta pizza traz o molho de tomate, mussarela derretida e generosas rodelas de pepperoni.",
                select: "o2"
            },
            {
                name: "Quattro Formaggi",
                price: "80.00",
                img: "https://redefoodservice.com.br/wp-content/uploads/2023/07/Pizza-Quatro-Queijos.jpg",
                desc: "Uma deliciosa combinação de queijos que derretem na boca: mussarela cremosa, cheddar suave, parmesão de sabor marcante e provolone defumado.",
                select: "o2"
            },
            {
                name: "Margheritta",
                price: "80.00",
                img: "https://irp.cdn-website.com/33406c6e/dms3rep/multi/margherita-7d163fb8.jpg",
                desc: "Uma pizza clássica e sempre adorada, feita com molho de tomate fresco, muçarela cremosa e folhas de manjericão, finalizada com um toque de azeite extravirgem. Simplicidade e sabor em cada fatia.",
                select: "o2"
            },
            {
                name: "Vegetariana",
                price: "80.00",
                img: "https://joysushi.com.br/wp-content/uploads/2013/06/pizza-vegetariana.jpg",
                desc: "Para quem busca uma opção vegetariana, esta pizza traz uma variedade de ingredientes frescos: pimentões, cogumelos, cebola roxa e azeitonas, tudo sobre uma base de molho de tomate e mussarela derretida.",
                select: "o2"
            },
            {
                name: "Pesto",
                price: "90.00",
                img: "https://images.immediate.co.uk/production/volatile/sites/30/2021/04/Super-green-pizza-ef9644e.jpg?quality=90&resize=556,505",
                desc: " Uma pizza diferente e cheia de sabor, com molho pesto verde, mussarela cremosa, tomates secos e azeitonas, criando um equilíbrio perfeito entre frescor e intensidade.",
                select: "o2"
            },
        
            {
                name: "Tartufo Nero",
                price: "100.00",
                img: "https://www.villaggiodeltartufo.com.br/wp-content/uploads/2020/01/blog-04.jpg",
                desc: "Uma pizza requintada que combina o sabor intenso da trufa negra com a cremosidade da mussarela e o toque terroso dos cogumelos porcini.",
                select: "o3"
            }, 
            {
                name: "Frutti Rossi",
                price: "100.00",
                img: "https://s2.glbimg.com/pAPtdtOfpC3mqRz1d--ZjY6CPM0=/620x455/e.glbimg.com/og/ed/f/original/2022/03/03/receita-pizza-doce-chocolate-branco-lindt-frutas-vermelhas-delizia-rossa-la-braciera.jpg",
                desc: "Uma pizza doce e salgada ao mesmo tempo, com queijo brie cremoso, molho pesto e a frescura da rúcula, finalizada com a suavidade da geleia de frutas vermelhas.",
                select: "o3"
            }, 
            {
                name: "Funghi & Ricotta",
                price: "100.00",
                img: "https://cdn.xl.pt/bs/uploads/sites/40/2021/07/viajar-3-2048x1024.jpg",
                desc: "Uma pizza leve e refrescante, onde os camarões grelhados são realçados por um molho de alho e limão siciliano, complementados por rúcula fresca e lascas de parmesão.",
                select: "o3"
            },    {
                name: "Funghi & Ricotta",
                price: "100.00",
                img: "https://i0.wp.com/comidadebebe.pt/wp-content/uploads/2021/01/Blog-2-3.png?resize=1080%2C675&ssl=1",
                desc: " Uma pizza rústica e delicada, com cogumelos selvagens variados, molho branco cremoso e o toque suave da ricota fresca. As nozes tostadas e o parmesão dão um sabor marcante.",
                select: "o3"
            }, 
            {
                name: "Gamberetti",
                price: "100.00",
                img: "https://media-cdn.tripadvisor.com/media/photo-s/1c/a9/28/52/maravilhosa-pizza-de.jpg",
                desc: "Uma pizza leve e refrescante, onde os camarões grelhados são realçados por um molho de alho e limão siciliano, complementados por rúcula fresca e lascas de parmesão.",
                select: "o3"
            },
            {
                name: "Burrata",
                price: "100.00",
                img: "https://s2.glbimg.com/Kg8hBy9dux6E0xlOgBlAjRIyTVs=/620x480/smart/e.glbimg.com/og/ed/f/original/2021/07/29/image00005.jpeg",
                desc: "Uma pizza fresca e cremosa com burrata desfeita por cima, acompanhada de tomates secos e pesto de manjericão. A rúcula e o parmesão trazem um toque final de frescor e sabor.",
                select: "o3"
            }, 
            {
                name: "Fico & Parma",
                price: "100.00",
                img: "https://img.freepik.com/fotos-premium/pizza-com-presunto-de-parma-figos-rucula-e-mel_538646-310.jpg",
                desc: "Uma combinação divina de figos doces, presunto de Parma salgado e queijos cremosos, como gorgonzola, queijo de cabra, finalizada com fio mel. ",
                select: "o3"
            }, 
            {
                name: "Portuguesa",
                price: "70.00",
                img: "https://www.comidaereceitas.com.br/wp-content/uploads/2020/06/Pizza-portuguesa-de-frigideira-freeepik-780x519.jpg",
                desc: "Uma combinação clássica e farta, com molho de tomate, mussarela, presunto, ovos cozidos, cebola e azeitonas, criando uma pizza saborosa e com um toque caseiro.",
                select: "o4"
            }, 
            {
                name: "Havaiana",
                price: "70.00",
                img: "https://minhasreceitinhas.com.br/wp-content/uploads/2017/06/1296_Pizza_havaiana-1200x800.jpeg",
                desc: " Uma mistura doce e salgada que conquista corações: molho de tomate, mussarela, presunto e fatias de abacaxi.",
                select: "o4"
            }, 
            {
                name: "Frango com Catupiry",
                price: "70.00",
                img: "https://www.sabornamesa.com.br/media/k2/items/cache/ada34cd2101afafaba465aad112ee3c1_XL.jpg",
                desc: "Uma pizza deliciosa e cremosa, com pedaços suculentos de frango desfiado, cobertos com o tradicional Catupiry, um requeijão cremoso que derrete na boca.",
                select: "o4"
            }, 
            {
                name: "Salada Caprese",
                price: "50.00",
                img: "https://cozinhandodiferente.com.br/wp-content/uploads/2024/05/Salada-Caprese.jpg",
                desc: "Fatias de tomate fresco, queijo mozzarella de búfala, manjericão e azeite de oliva. Porção de 300g.",
                select: "o5"
            }, 
            {
                name: "Vinagrete",
                price: "30.00",
                img: "https://www.comidaereceitas.com.br/wp-content/uploads/2024/07/beef-steak-tartare-wooden-table-780x520.jpg",
                desc: "Um vinagrete simples com tomate, cebola, pimentão, azeite e vinagre, servido frio. Porção de 250g.",
                select: "o5"
            }, 
            {
                name: "Soda Italiana",
                price: "28.00",
                img: "https://i.pinimg.com/736x/3e/a8/c9/3ea8c9ce3911dff7a88cb8539cd8408c.jpg",
                desc: "Uma bebida refrescante e leve, feita com xarope de frutas frescas e água com gás. A Soda Italiana combina o doce do xarope com a leveza da água com gás.",
                select: "o6"
            },
        
            {
                name: "Smoothie",
                price: "24.00",
                img: "https://images.mrcook.app/recipe-image/01911a59-8216-745c-916e-6b928dcac683",
                desc: "Uma explosão de sabores frescos e naturais! O Smoothie é uma batida de frutas finalizada com mel refrescante e cheio de nutrientes.",
                select: "o6"
            },
            
            {
                name: "Limonada",
                price: "20.00",
                img: "https://www.greenme.com.br/wp-content/uploads/2017/03/suco-limao-gengibre-hortela.jpg",
                desc: "Refrescante e aromática, nossa Limonada Siciliana combina o sabor suave e cítrico do limão siciliano com a leveza da água com gás e o frescor da hortelã.",
                select: "o6"
            },
            {
                name: "Suco Natural",
                price: "12.00",
                img: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia19920/beneficios-dos-sucos-naturais-1-alfa-hotel.jpg",
                desc: "",
                select: "o6"
            },
            {
                name: "Refrigerante",
                price: "12.00",
                img: "https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2021/12/06093057/refrigerante-1.jpg",
                desc: "",
                select: "o6"
            },
            {
                name: "Água Mineral",
                price: "10.00",
                img: "https://www.delgo.com.br/imagens/como-e-feito-o-envase-de-agua-mineral.jpg",
                desc: "",
                select: "o6"
            },
        
            
            {
                name: "Negroni",
                price: "35.00",
                img: "https://bartenderstore.com.br/wp-content/uploads/2023/01/negroni-popular-alcoholic-cocktail-with-dry-gin-r-2023-01-25-12-47-35-utc-scaled.jpg",
                desc: "Clássico coquetel italiano, com um equilíbrio perfeito entre o amargo do Campari, o aroma do gin e a suavidade do vermute rosso. Para maiores de 18 anos.",
                select: "o6"
            }, 
            {
                name: "Aperol Spritz",
                price: "30.00",
                img: "https://gresgastronomia.com.br/wp-content/uploads/2022/12/DSC_4012-edited.jpg",
                desc: "Com a combinação do Aperol, espumante e um toque de água com gás, ele oferece uma explosão de sabores cítricos e levemente amargos. Para maiores de 18 anos.",
                select: "o6"
            }, 
            {
                name: "Cosmopolitan",
                price: "35.00",
                img: "https://www.acasaencantada.com.br/wp-content/uploads/2023/08/cosmopolitan_drink_05.jpg",
                desc: "O Cosmopolitan é um drink elegante e sofisticado, com uma mistura de vodka, licor de laranja e o sabor levemente doce e ácido do suco de cranberry e limão. Para maiores de 18 anos.",
                select: "o6"
            },
        ];

        localStorage.setItem('items', JSON.stringify(defaultItems));
    }

    items = JSON.parse(localStorage.getItem('items')) || [];
    items.forEach(item => addItemToCategory(item));
};


function addItemToCategory(item) { //decide a categoria do item de acordo com a categoria selecionada pelo admin
    switch (item.select) {
        case 'o1':
            displayItem(item, 'entrsection');
            break;
        case 'o2':
            displayItem(item, 'tradsection');
            break;
        case 'o3':
            displayItem(item, 'goursection');
            break;
        case 'o4':
            displayItem(item, 'sabsection');
            break;
        case 'o5':
            displayItem(item, 'acomsections');
            break;
        case 'o6':
            displayItem(item, 'bebsections');
            break;
        default:
            console.error("Categoria inválida");
    }
}




let editingItem = null;

function newItem() {
    const name = document.getElementById("name").value.trim();
    const img = document.getElementById("img").value.trim();
    const desc = document.getElementById("desc").value.trim();
    const select = document.getElementById("select").value.trim();
    const price = document.getElementById("price").value.trim();

    const item = {
        name,
        price,
        img,
        desc,
        select
    };

    if (!name || !img || !desc || !select || !price) { //se algum dos campos não foram preenchidos, retorne a função e exibe o modal
        openItemInputModal();
        return;
    }

    let items = JSON.parse(localStorage.getItem('items')) || [];
    if (editingItem !== null) {
        items[editingItem] = item;
    }
    else {
        items.push(item);
    }
    localStorage.setItem('items', JSON.stringify(items));
    location.reload(); //adiciona um novo item e recarrega a pagina
}


function displayItem(item, listId) {
    const list = document.querySelector(`.${listId}`);
    if (!list) {
        console.error(`Seção não encontrada`);
        return;
    }

    const li = document.createElement("li");

    const img = document.createElement("img");
    img.classList.add("imagem");
    img.src = item.img;

    const name = document.createElement("div");
    name.classList.add("namel");
    name.textContent = item.name;

    const price = document.createElement("div");
    price.classList.add("pricel");
    price.textContent = `R$ ${parseFloat(item.price).toFixed(2)}`;

    const desc = document.createElement("p");
    desc.classList.add("descl");
    desc.textContent = item.desc.slice(0, 65) + (item.desc.length > 65 ? "..." : "");

    const contcrud = document.createElement("div");
    contcrud.classList.add("contcrud");
    contcrud.innerHTML = `
        <div class="edit" onclick="editItem('${item.name}')">Editar</div>
        <div class="del" onclick="deleteItem('${item.name}')">Excluir</div>
    `;

    const h1 = document.createElement("h1");
    h1.onclick = (e) => {
        e.stopPropagation();
        openOptions(contcrud);
    };
    h1.textContent = "...";

    li.appendChild(img);
    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(desc);
    li.appendChild(contcrud);
    li.appendChild(h1);
    list.appendChild(li);
}



function editItem(itemName) {
    let contcrud = document.querySelector(".contcrud");
    closeOptions(contcrud);
    let items = JSON.parse(localStorage.getItem("items")) || [];
    const itemIndex = items.findIndex(item => item.name === itemName);
    if (itemIndex === -1) {
        console.error("Item não encontrado para edição");
        return;
    }
    const item = items[itemIndex];
    document.getElementById("name").value = item.name;
    document.getElementById("price").value = item.price;
    document.getElementById("desc").value = item.desc;
    document.getElementById("img").value = item.img;
    document.getElementById("select").value = item.select;
    editingItem = itemIndex; 
    openModal(); 

}




function deleteItem(itemName) {
    let items = JSON.parse(localStorage.getItem("items")) || [];
    items = items.filter(item => item.name !== itemName);
    localStorage.setItem("items", JSON.stringify(items));
    location.reload();
}



function openOptions(contcrud) {
    contcrud.style.display = "flex";
    
}




function closeOptions(contcrud) {
    contcrud.style.display = "none";
}




function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("img").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("select").value = "";
    document.getElementById("price").value = "";
}




function openModal() { //abre o cadastro de produto
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    modal.style.display = "flex";
    overlay.style.display = "flex";
}




function closeModal() {
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    modal.style.display = "none";
    overlay.style.display = "none";
}




function openItemInputModal() {
    const modalInput = document.getElementById("modalInput");
    modalInput.style.display = "flex";
}
function closeItemInputModal() {
    const modalInput = document.getElementById("modalInput");
    modalInput.style.display = "none";
}



document.addEventListener("click", function (event) {
    const contcrud = event.target.closest(".contcrud");
    if (!contcrud) {
        const openContcrud = document.querySelector('.contcrud[style="display: flex;"]');
        if (openContcrud) {
            closeOptions(openContcrud);
        }
    }
});
