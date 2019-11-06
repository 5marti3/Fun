function othername() {
    var input = document.getElementById("userInput").value;
    alert("Willkommen auf der Website, " + input + "!");
    console.log("Martin!");
}

function catWindow() {
    var img = "https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg"
    window.open(img)
}

function dogWindow() {
    var img = "https://www.welt.de/img/kmpkt/mobile194959255/6522506047-ci102l-w1024/Close-up-of-a-Shetland-Sheepdog-Sheltie-puppy.jpg";
    window.open(img)
}

function headWindow() {
    var img = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lateral_head_anatomy_detail.jpg/1200px-Lateral_head_anatomy_detail.jpg";
    window.open(img)
}

function bodyWindow() {
    var img = "https://images1.sw-cdn.net/product/picture/710x528_21808008_12256193_1515559690.jpg";
    window.open(img)
}

function leftarmWindow() {
    var img = "https://t4.ftcdn.net/jpg/00/41/13/35/240_F_41133576_MCZtOR0hKl0lCk2RdaDnwBAsle3qxqR9.jpg";
    window.open(img)
}

function rightarmWindow() {
    var img = "https://st4.depositphotos.com/16843704/20531/i/1600/depositphotos_205310032-stock-photo-right-arm-hand-closed-fist.jpg";
    window.open(img)
}

function leftlegWindow() {
    var img = "https://www.3bscientific.de/imagelibrary/1019746/1019746_01_Vollstaendiges-rechtes-Bein-fuer-KERiGERi.jpg";
    window.open(img)
}

function rightlegWindow() {
    var img = "https://www.3bscientific.de/imagelibrary/1019747/1019747_01_Vollstaendiges-linkes-Bein-fuer-KERiGERi.jpg";
    window.open(img)
}


var array = [1, 2, 3, 4];

console.log(Math.max(...array));

function largestNumber(arr) {

    var large = arr[0];

    for (var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
        if (large < arr[arrayIndex]) {
            large = arr[arrayIndex];
        }


    }
    return large
}

console.log(largestNumber([5, 2, 3, 4]));

function login(){
    var img = "http://localhost:63342/HTML/Login.html?_ijt=g5tq9touciavu86f9f2hfnr51r";
    window.open(img)
}



