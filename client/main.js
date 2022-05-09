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

// const addThought = () => {
//     axios.post('http://localhost:4000/api/thought')
//     .then(res => {
//         const data = res.data
//         alert(data);
//     });
// }

const addThoughtBtn = document.querySelector('#addThoughtBtn')
const addThoughtInput = document.getElementById('addThoughtInput')

const addThought = () => {
    const newThought = addThoughtInput.value
    axios.post('http://localhost:4000/api/thought', {newThought})
    .then(res => {
        alert(res.data)
        addThoughtInput.value = ''
    })
}

addThoughtBtn.addEventListener('click', addThought)

const deleteBtn = document.getElementById('deleteThoughtBtn')
const deleteInput = document.getElementById('deleteThoughtInput')

const deleteThought =  () => {
    axios.delete(`http://localhost:4000/api/thought/${deleteInput.value}`)
    .then(res => {
        alert(res.data)
        deleteInput.value = ''
    })
}

deleteThoughtBtn.addEventListener('click', deleteThought)






// const imgBtn = document.getElementById('imgBtn')
// const img = document.querySelector('#img');

// const getImg = () => {
//     axios.put('http://localhost:4000/api/img')
// }
// imgBtn.addEventListener('click', getImg);


// const deleteImgBtn = document.getElementById('deleteImgBtn')

// const deleteImg = () => {
//     axios.delete('http://localhost:4000/api/img')
// }
// deleteImgBtn.addEventListener('click', deleteImg);





