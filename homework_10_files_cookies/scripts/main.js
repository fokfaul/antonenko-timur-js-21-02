const input_f = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');
const loader = document.getElementById('loaderId');
const l_obj_one = loader.querySelectorAll('.loader-one')[0];
const l_obj_two = loader.querySelectorAll('.loader-two')[0];

uploadButton.addEventListener('click', () => {
    if(input_f.files[0]){
        uploadBase64UrlToImgBB(input_f.files[0]);
        input_f.value = "";
    }
});

function addImgToGallery(url) {
    const img = document.createElement('img');
    img.src = url
    document.querySelector('.gallery').append(img)
}

const imgArr = localStorage.getItem('imgArr') ? JSON.parse(localStorage.getItem('imgArr')) : [];
imgArr.forEach(addImgToGallery);

function uploadBase64UrlToImgBB(file) {
    loader.classList.add("await");
    const stopAnimation = Animation();
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const formData = new FormData();
        formData.set('key', '6e6c7fdbede63ac17e6e2cf92bfac563');
        formData.set('image', reader.result.replace(/^.*,/, ''));
        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formData
        }).then(response => {
            loader.classList = "";
            stopAnimation();
            return response.json();})
            .then((response) => {
                imgArr.push(response.data.display_url)
                localStorage.setItem('imgArr', JSON.stringify(imgArr))
                addImgToGallery(response.data.display_url)
            })
            .catch(console.error);
    }
}

function Animation(){
    let interval = moveOnCircle();
    let t = 0;
    function moveOnCircle(){
        return requestAnimationFrame(() => {
            t+= 0.1;
            l_obj_one.style.marginLeft = ""+(-75*Math.cos(t))+"px";
            l_obj_one.style.marginTop = ""+(-75*Math.sin(t))+"px";
            l_obj_two.style.marginLeft = ""+(75*Math.cos(t))+"px";
            l_obj_two.style.marginTop = ""+(75*Math.sin(t))+"px";
            interval = requestAnimationFrame(moveOnCircle);
        }, 20)
    }
    return () => {
        l_obj_one.style.marginLeft = "";
        l_obj_one.style.marginTop = "";
        l_obj_two.style.marginLeft = "";
        l_obj_two.style.marginTop = "";
        cancelAnimationFrame(interval);
    };
}