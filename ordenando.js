const swap = (vetor, pos1, pos2) => {
    const temp = vetor[pos1];
    vetor[pos1] = vetor[pos2];
    vetor[pos2] = temp;
    return vetor;
};

const shuffle = (vetor, qnt) => {
    for (let i = 0; i < qnt; i++) {
        let limite = vetor.length;

        let pos1, pos2;

        //evitando que as posições sejam iguais
        do {
            pos1 = Math.floor(Math.random() * limite);
            console.log("index n1:", pos1);
            pos2 = Math.floor(Math.random() * limite);
            console.log("index n2:", pos2);
        } while (pos1 == pos2);

        vetor = swap(vetor, pos1, pos2);
        console.log("Swap ", vetor);

    }
    return vetor;
};

const bubble_sort = (vetor) => {
    let len = vetor.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (vetor[j] > vetor[j + 1]) {
                let tmp = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = tmp;
            }
        }
    }
    return vetor;
};

const selection_sort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let lowest = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowest]) {
                lowest = j
            }
        }
        if (lowest !== i) {
           
            ;[array[i], array[lowest]] = [array[lowest], array[i]]
        }
    }
    return array
};

const particionamento = (items, left, right) => {
    var pivot = items[Math.floor((right + left) / 2)], 
        i = left, 
        j = right; 
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); 
            i++;
            j--;
        }
    }
    return i;
};

const quick_sort = (items, left, right) => {
    var index;
    if (items.length > 1) {
        index = particionamento(items, left, right); 
        if (left < index - 1) {
            quick_sort(items, left, index - 1);
        }
        if (index < right) { 
            quick_sort(items, index, right);
        }
    }
    return items;
};


const Adicionar = () => {
    if(document.getElementById("valor").value != "")
    {
        valor = document.getElementById("valor").value
        document.getElementById("valor").value = ""
    
        var elementoPai = document.body
    
        var node = document.createElement("li");
    
        var texto = document.createTextNode(valor);
    
        node.appendChild(texto)
    
        elementoPai.appendChild(node)
    }
    
    
}

const Ordenar = () => {
    lstValores = []

    for(i = 27; i < document.body.childNodes.length; i++)
    {
        let txt = document.body.childNodes[i].textContent
        lstValores.push(txt)
        if(document.getElementById("functionselect").value == "Bubble Sort")
        {
            lstValores = bubble_sort(lstValores)
            console.log("Bubble")

        }
        if(document.getElementById("functionselect").value == "Selection Sort")
        {
            lstValores = selection_sort(lstValores)
            console.log("Selection")

        }
        if(document.getElementById("functionselect").value == "Quick Sort")
        {
            lstValores = quick_sort(lstValores, 0, lstValores.length - 1)
            console.log("Quick")
        }

    }
    console.log(lstValores)
    let iValor = -1
    for(i = 27; i < document.body.childNodes.length; i++)
    {
        
        iValor ++
        document.body.childNodes[i].textContent = lstValores[iValor]

    }
}

const Misturar = () => {

    lstValores = []
    for(i = 27; i < document.body.childNodes.length; i++)
    {
        let txt = document.body.childNodes[i].textContent
        lstValores.push(txt)
        

    }
    lstValores = shuffle(lstValores, lstValores.length - 1)

    console.log(lstValores)

    let iValor = -1
    for(i = 27; i < document.body.childNodes.length; i++)
    {
        
        iValor ++
        document.body.childNodes[i].textContent = lstValores[iValor]

    }



}

