module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ['a pleasant suprise is wating for you', 'a smooth long journey, great expectations', 'courtesy begins in the home'];

        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune)
    },

    
    
    
    getImg: (req, res) => {
        let {img} = req.body;
        let image = {
            img: img
        }
    },

    getThought: (req, res) => {
        const thought = ['If Cinderellas shoe fit perfectly, why did it fall off?', 'If you work at a Samsung store, are you a guardian of the galaxy?', 'If youre waiting for the waiter, arent you the waiter?'];
        let randomIndex = Math.floor(Math.random() * thought.length);
        let randomThought = thought[randomIndex];

        res.status(200).send(randomThought)
    },

}