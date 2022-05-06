const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment);


const fortuneButton = document.getElementById('fortuneButton')

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune/')
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
fortuneButton.addEventListener('click', getFortune);


const thoughtBtn = document.getElementById('highThoughts')

const getThought = () => {
    axios.get('http://localhost:4000/api/thought')
    .then(res => {
        const data = res.data
        alert(data);
    });
};
thoughtBtn.addEventListener('click', getThought);



const imgBtn = document.getElementById('imgBtn')
const img = document.querySelector('#img');

const getImg = () => {
    axios.put('http://localhost:4000/api/img')
}
imgBtn.addEventListener('click', getImg);


const deleteImgBtn = document.getElementById('deleteImgBtn')

const deleteImg = () => {
    axios.delete('http://localhost:4000/api/img')
}
deleteImgBtn.addEventListener('click', deleteImg)



