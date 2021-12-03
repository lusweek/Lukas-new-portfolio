function onSubmit () {
    alert("You'r massage has bin sent");
}

let menuOpen = false
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile-menu");
const links = document.getElementsByClassName("mobile-link");
const documentBody = document.body;

function sendFormInfo() {
    try {
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        console.log(`email: ${email}, subject: ${subject}, message: ${message}`)
        document.getElementById("message-confirmation").style.display = "flex"
        setTimeout(() => {
            document.getElementById("message-confirmation").innerHTML = '<h2>Thank you for your message</h2><button onclick="closeMessageConfirmation()">Close</button>'
        }, 2000)
    } catch (error) {
        document.getElementById("message-confirmation").style.display="flex"
        document.getElementById("message-confirmation").innerHTML = 
        '<h2>An error ocured!</h2><button onclick="closeMessageConfirmation()">Close</button>'
    }
}


const closeMessageConfirmation = () => {
    document.getElementById("message-confirmation").style.display = "none"
    document.getElementById("message-confirmation").innerHTML = '<span class="loader"></span>'

    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

}
 

function toggleMenu() {
    if(!menuOpen){
        menuBtn.classList.add("open");
        menuOpen = true;
        menu.style.right = "0%"
        documentBody.style.overflow = "hidden";
    }else{
        menuBtn.classList.remove("open");
        menuOpen = false;
        menu.style.right = "-100%";
        documentBody.style.overflow = "auto";

    }
}

window.addEventListener("load", function() {
menuBtn.addEventListener("click", function(){
    toggleMenu();
})
for(let i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        toggleMenu();
    })
}
});


//Service-modal-code
const services = [
    {
        name: "Frontend development",
        content: "Wohoo",
        picture: "imgOne.JPG"
    },
    {
        name: "coaching",
        content: "Wohoo4",
        picture: "imgTwo.jpg"
    },
]; 

const closeServiceModal = () => {
    document.querySelector("#service-modal-wrapper").style.display="none";
}

const openServiceModal = () => {
    const cards = document.querySelectorAll(".servise-card");  
    for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
        document.getElementById("service-modal-wrapper").style.display="flex"
        for(let j = 0; j < services.length; j++){ ``
            if (i === j){
            document.getElementById("service-modal-content").
                innerHTML = `<h2>${services[j].name}</h2><p>${services[j].content}</p>
            <img src="./media/img/${services[j].picture}">`;

        }
    }
    });
   }
};


window.addEventListener("load", openServiceModal)

//Image-slider code

const images = [
    {
        name: "image00001.jpeg"
    }, 
    {
        name: "image00002.jpeg"
    }, 
    {
        name: "image00003.jpeg"
    }, 
    {
        name: "image00004.jpeg"
    }, 
    {
        name: "image00005.jpeg"
    }, 
    {
        name: "image00006.jpg"
    }, 
]; 

const setMainImage = (src) => {
document.getElementById("main-img").setAttribute("src", src)
setActiveThumbnail();
}

const setActiveThumbnail = () => {
  const thumbs = document.getElementsByClassName("thumbnail")
  for (let i = 0; i < thumbs.length; i++){
    if (thumbs[i].src === document.getElementById("main-img").src) {
        thumbs[i].style.border = "2px solid red"
    } else {
        thumbs[i].style.border = "0px solid red"
    }
  }
}

const prevImage = () => {
const thumbs = document.getElementsByClassName("thumbnail");
for (let i = 0; i < thumbs.length; i++){
    if (thumbs[i].src === document.getElementById("main-img").src && i !== 0) {
        document.getElementById("main-img").setAttribute("src", thumbs[i -= 1].src)
        setActiveThumbnail();
        console.log(i)
    } 
}
};

const nextImage = () => {
const thumbs = document.getElementsByClassName("thumbnail");
for (let i = 0; i < thumbs.length; i++){
    if (thumbs[i].src === document.getElementById("main-img").src && i !== thumbs.length-1) {
        document.getElementById("main-img").setAttribute("src", thumbs[i +=1 ].src) 
        setActiveThumbnail(); 
    }
}
};

window.addEventListener("load", () => {
    document.getElementById("main-img")
    .setAttribute("src", `./media/img/${images[0].name}`);
    document.getElementById("thumbnails-wrapper").innerHTML = images
    .map(
        (img)=> 
        `<img src="./media/img/${img.name}" class="thumbnail" onclick="setMainImage(this.src)">`)
     .join("")

    setActiveThumbnail();

    document.getElementById("prev-btn").addEventListener("click", prevImage);
    document.getElementById("next-btn").addEventListener("click", nextImage);

})



// Lightbox-code

const  imgLightbox = document.getElementById("image-lightbox")
const lbThumbsWrap = document.querySelector("#lb-thumbnails-wrapper")
const lbMainImg = document.querySelector("#lb-main-image")
const lbThumbs = document.querySelectorAll(".lb-thumbnail")

const openLightBox = (src) => {
    lbThumbsWrap.innerHTML = images.map((img) => `<img class="lb-thumbnail" onclick="setMainLbImage(this.src)" src="./media/img/${img.name}">`).join("")
    imgLightbox.style.display="flex"
    setMainLbImage(src)

}

// map tar en array och gör om det till en NY array och
// ger varje objekt i den nya arrayen ett värde man anger.
// såsom jag ger ovanför

// Join gör om till en sträng och byter ut täcken



const closeLightBox = () => {
    imgLightbox.style.display="none"
}

const setMainLbImage = (tjohoppsan) => {
    lbMainImg.setAttribute("src", tjohoppsan)
    setActivelbThumbnail()

};

// Function that shows the active thumbnail by comparing
//  the thumbnail src attribute to the main image's src.
// if it is the same - set red border.

// FEL: här är det något fel
const setActivelbThumbnail = () => {
const lbThumbs = document.querySelectorAll(".lb-thumbnail")
    lbThumbs.forEach(thumbnail => {
        if(thumbnail.src === lbMainImg.src) {
            thumbnail.style.border ="solid 2px red"
        } else {
            thumbnail.style.border ="0px"
        }
    });
}




const prevLbImage = () => {
    const thumbsList = document.querySelectorAll(".lb-thumbnail")
    for (let i = 0; i < thumbsList.length; i++) {
        if (thumbsList[i].src === lbMainImg.src && i !== 0) {
            lbMainImg.setAttribute("src", thumbsList[i -= 1].src);
            setActivelbThumbnail()
        } else if (thumbsList[i].src === lbMainImg.src && i === 0) {
            lbMainImg.setAttribute("src", thumbsList[(i += thumbsList.length - 1)].src);
             setActivelbThumbnail()
        }
    }
    
}

/*
const  imgLightbox = document.getElementById("image-lightbox")
const lbThumbsWrap = document.querySelector("#lb-thumbnails-wrapper")
const lbMainImg = document.querySelector("#lb-main-image")
const lbThumbs = document.querySelectorAll(".lb-thumbnail")

*/

const nextLbImage = () => {
    const thumbsList = document.querySelectorAll(".lb-thumbnail")
    for (let i = 0; i < thumbsList.length; i++) {
        if (thumbsList[i].src === lbMainImg.src && i !== thumbsList.length - 1) {
            lbMainImg.setAttribute("src", thumbsList[i += 1].src);
            setActivelbThumbnail()

            
        } else if (thumbsList[i].src === lbMainImg.src && i === thumbsList.length - 1) {
            lbMainImg.setAttribute("src", thumbsList[0].src)
            setActivelbThumbnail()
        }
    }
    
}