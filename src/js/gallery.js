const portraits = ["portrait01.jpg","portrait02.jpg","portrait03.jpg"];
const couples = ["couple01.jpg","couple02.jpg"];
const marriages = ["mariage01.jpg","mariage02.jpg","mariage03.jpg", "mariage04.jpg", "mariage05.jpg"];
const pregnancies = ["grossesse01.jpg","grossesse02.jpg","grossesse03.jpg"];
const babies = ["bebe01.jpg","bebe02.jpg","bebe03.jpg"];
const baptismes = ["bapteme01.jpg"];
const families = ["famille01.jpg","famille02.jpg","famille03.jpg","famille04.jpg"];

function Category (array, frCategory, enCategory){
    this.array = array;
    this.frCategory = frCategory;
    this.enCategory = enCategory;
  }


const portrait = new Category(portraits, "Portrait", "portrait");
const couple = new Category(couples, "Couple", "couple");
const marriage = new Category(marriages, "Mariage", "marriage");
const pregnancy = new Category(pregnancies, "Grossesse", "pregnancy");
const baby = new Category(babies, "Bébé", "baby");
const baptism = new Category(baptismes, "Baptême", "baptism");
const family = new Category(families, "Famille", "family");


const all = [portrait, couple, marriage, pregnancy, baby, baptism, family]


const urlPhoto = "/assets/photos/";
const h2_title = "Catégorie "


const galleryPhotos = document.querySelector(".gallery-photos"); 

let i;


function dropdownitemSelection() {
  let dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach(element => {
    element.addEventListener('click', e => {
      i = 0;
      //remove all childs from GalleryPhotos
      removePhotos();

      switch (e.target.innerHTML) {
        case 'Toutes les catégories':
          ShowAllPhotos();
          break;
        case 'Portrait':
          ShowSelectedCategoryPhotos(portrait);
          break;
        case 'Couple':
          ShowSelectedCategoryPhotos(couple);
          break;
        case 'Mariage':
          ShowSelectedCategoryPhotos(marriage);
          break;
        case 'Grossesse':
          ShowSelectedCategoryPhotos(pregnancy);
          break;
        case 'Bébé':
          ShowSelectedCategoryPhotos(baby);
          break;
        case 'Baptême':
          ShowSelectedCategoryPhotos(baptism);
          break;
        case 'Famille':
          ShowSelectedCategoryPhotos(family);
          break;
      }
    });
  })
}

function removePhotos() {
  while (galleryPhotos.firstChild) {
    galleryPhotos.removeChild(galleryPhotos.firstChild);
  }
}

function ShowSelectedCategoryPhotos(category){
  //create a div 
  const div1 = document.createElement("div");
  div1.classList.add("p-4",category.enCategory);

  //create a title
  const title = document.createElement("h2");
  title.classList.add("py-4");
  title.innerText = h2_title + category.frCategory;

  div1.appendChild(title);

  //create a row
  const row = document.createElement("div");
  row.classList.add("row");

  //fill the gallery with the photos of the special catzgory
  for (const element of category.array){
    i++;
    //show the photo
    const div2 = document.createElement("div");
    div2.classList.add("col-12","col-sm-4","col-lg-3","pb-4");
    
    const img = document.createElement("img");
    img.classList.add("image");
    img.src = urlPhoto + element;
    img.alt = category.frCategory + i;
    img.dataset.bsToggle = "modal";
    img.dataset.bsTarget = "#" + i;
    
    div2.appendChild(img);

    row.appendChild(div2);

    //create the modal
    const modal = document.createElement("div");
    modal.classList.add("modal","fade");
    modal.id = i;
    modal.tabIndex = "-1";
    modal.role = "dialog";
    modal.ariaLabelledby = "exampleModalLabel";
    modal.ariaHidden = "true";

    const modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog","modal-dialog-centered");
    modalDialog.role = "document";

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");

    const fullImg = document.createElement("img");
    fullImg.src = urlPhoto + element;
    fullImg.alt = category.frCategory + i;

    modalBody.appendChild(fullImg);
    modalContent.appendChild(modalBody);
    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);

    row.appendChild(modal);
  }
  div1.appendChild(row);
  galleryPhotos.appendChild(div1);
}

function ShowAllPhotos(){
  for (const element of all) {
    ShowSelectedCategoryPhotos(element);
  }
  //Colorize in blue one category div on two
  const couplePhotos = document.querySelector(".couple");  
  couplePhotos.classList.add("blue-container");

  const pregnancyPhotos = document.querySelector(".pregnancy");  
  pregnancyPhotos.classList.add("blue-container");

  const baptismPhotos = document.querySelector(".baptism");  
  baptismPhotos.classList.add("blue-container");
}

function initialisation(){
  i = 0;
  ShowAllPhotos();
} 

//initialisation
initialisation();

//if dropdownitem menu has been selected
dropdownitemSelection();

