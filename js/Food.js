class Food {
    constructor() {
        this.foodStock = 0;
        this.lastFed;
        this.image = loadImage('Images/Milk.png');
    }


    getFoodStock() {

        var getFoodRef = database.ref('gameState');
        getFoodRef.on("value", readstock)
        getFoodRef = data.val();

    }

    

    updateFoodStock(foodStock){ 
        this.foodStock=foodStock;
     }

    


    deductFood() {
        if (this.foodStock > 0) {
            this.foodStock = this.foodStock - 1;
        }
    }




display(){

    var x=80,y=100;
    imageMode(CENTER);
    image(this.image,720,220,70,70);

    if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
            if(i%10==0){
                x=80;
                y=y+50;
            }
            image(this.image,x,y,50,50); 
            x=x+30;
        }
    }

}


bedroom(){
    background(bedroomImg,550,500);
}

garden(){
    background(GardenImg,550,500);
}
washroom(){
    background(washroomImg,550,500);
}

}