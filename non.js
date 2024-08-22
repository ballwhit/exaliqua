let bind = {
    set: value => {
        this.property = value;
        console.log(`Value ${value} set successfully.`);
    }
};

bind.set("Hello, World!"); // Using the arrow function syntax
