const thought = ['If Cinderellas shoe fit perfectly, why did it fall off?', 'If you work at a Samsung store, are you a guardian of the galaxy?', 'If youre waiting for the waiter, arent you the waiter?'];

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

    
    getThought: (req, res) => {
        let randomIndex = Math.floor(Math.random() * thought.length);
        let randomThought = thought[randomIndex];
        
        res.status(200).send(randomThought)
    },
    
    
    // getImg: (req, res) => {
        //     let {img} = req.body;
        //     let image = {
            //         img: img
            //     }
            // },
            
            // deleteImg: (req, res) => {
                //     let {img} = req.body;
    //     let image = {
        //         img: img
        //     }
        // },
        
        addThought: (req, res) => {
        const {newThought} = req.body

        thought.push(newThought)

        res.status(200).send('Thought added!')
    },

    deleteThought: (req, res) => {
        const {id} = req.params

        thought.splice(id,1)

        res.stauts(200).send('Thought removed!')
    },



}