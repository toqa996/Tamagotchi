const happinessElement = document.getElementById('happiness');
    const hungerElement = document.getElementById('hunger');
    const energyElement = document.getElementById('energy');

    let happiness = 70;
    let hunger = 70;
    let energy = 70;

    function countdown() {
        if (happiness > 0)happiness -= 6;
        if (hunger > 0) hunger -= 4;
        if (energy > 0) energy -= 2;

        happiness = Math.max(0, happiness);
        hunger = Math.max(0, hunger);
        energy = Math.max(0, energy);
       

        happinessElement.textContent = happiness;
        hungerElement.textContent = hunger;
        energyElement.textContent = energy;

        if (happiness === 0 && hunger === 0 && energy === 0) {
           
            clearInterval(countdown); 
        }
        
    } setInterval(countdown, 100);

    function showText(){
        if (happiness < 70 ){
            document.write("Your pet is sad");
        }

    }
