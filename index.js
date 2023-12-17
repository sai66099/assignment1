const listContainer = document.getElementById("collectionContainer")
const gridButton  = document.getElementById("gridView")
const listButton = document.getElementById("listView")
const mainCont = document.getElementById("main")
console.log(this)

const collectionList = (collection)=>{
const listElement  = document.createElement("li")
const imageContainerElement = document.createElement("div")
const imageElement = document.createElement("img")
const infoContainerElement = document.createElement("div")
const nameElement = document.createElement("h1")
const sizeContainer = document.createElement("ul")


console.log(listContainer)

listElement.classList.add("list-container")
listContainer.appendChild(listElement)


listElement.appendChild(imageContainerElement)


imageElement.classList.add("image-class")
imageElement.src = collection.productImage
imageContainerElement.classList.add("image-container")
imageContainerElement.appendChild(imageElement)

listElement.appendChild(infoContainerElement)


nameElement.textContent = collection.productTitle
nameElement.classList.add("title-class")
infoContainerElement.appendChild(nameElement)
infoContainerElement.appendChild(sizeContainer)

infoContainerElement.classList.add("info-container")
for (let a in collection.productVariants){
    const element = document.createElement("li")
    element.classList.add("size-element")
    element.textContent = collection.productVariants[a]
    sizeContainer.appendChild(element)
}  
}


function convertObjectToCamelCase(value){
    const collections = {
        productImage:value.product_image,
        productBadge:value.product_badge,
        productTitle:value.product_title,
        productVariants:value.product_variants,
    }
    console.log(collections)
        collectionList(collections)
    
}

const responseData = async ()=>{
    const response = await fetch("https://products-api-2ttf.onrender.com/api/products")
    const {data} = await response.json()
    for (let value of data){
        convertObjectToCamelCase(value)
    }
}

responseData()


