const controller = {};

controller.test = (req,res)=>{
    const data = {
        name:'Janniel Diez',
        age:23,
        city: 'Las Palmas'
    }

    console.log("Send data from controller employee");
    res.json(data);
};

module.exports = controller;