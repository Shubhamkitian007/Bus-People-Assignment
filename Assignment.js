function do_Allocation(number_of_peoples, number_of_bus){

    let org_People = number_of_peoples;

    let result = Array(number_of_bus).fill(0);
    result[0] = 1;
    number_of_peoples -= result[0];

    // When Single Bus can accomudate all peoples. 
    if(number_of_bus == 1 && number_of_peoples <= 0){
        return result;
    }

    // Manually Assigned capicity to second Bus. 
    if(number_of_bus > 1) {
        result[1] = Math.min(result[0], number_of_peoples);
        number_of_peoples -= result[1];
    }

    // When Two Bus can accomudate all peoples. 
    if(number_of_bus == 2 && number_of_peoples <= 0){
        return result;
    }

    // Below logic is for when bus is greater then Two.
    let bus = 2;

    while(number_of_peoples > 0 && bus < number_of_bus){
        result[bus] = Math.min(result[bus - 1] + result[bus - 2], number_of_peoples);
        number_of_peoples -= result[bus];
        bus++;
    }

    // if the number of people is less then the total capicity of the bus.
    if(number_of_peoples <= 0){
        while(bus < number_of_bus){
            result[bus] = 0;
            bus++;
        }
    }

    // if the number of people is greater then the total capicity of bus.
    if(number_of_peoples > 0){
        let Max_people = org_People - number_of_peoples;
        return `Maximum ${Max_people} People can be allocated in ${number_of_bus} Bus`;
    }
    return result;
}

const result = do_Allocation(5, 2);
console.log(result);
