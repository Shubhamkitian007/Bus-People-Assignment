function do_Allocation(){
    let number_of_peoples = document.getElementById("int1").value;
    let number_of_bus = document.getElementById("int2").value;
       
    let org_People = number_of_peoples;

    let result = Array(number_of_bus).fill(0);
    result[0] = 1;
    number_of_peoples -= result[0];

    if(number_of_bus == 1 && number_of_peoples <= 0){
        console.log(result);
        document.getElementById('result').innerHTML = result
        return result;
    }

    if(number_of_bus>1) {
        result[1] = Math.min(result[0], number_of_peoples);
        number_of_peoples -= result[1];
    }

    if(number_of_bus == 2 && number_of_peoples <= 0){
        console.log(result);
        document.getElementById('result').innerHTML = result;
        return result;
    }

    let bus = 2;

    while(number_of_peoples > 0 && bus < number_of_bus){
        result[bus] = Math.min(result[bus - 1] + result[bus - 2], number_of_peoples);
        number_of_peoples -= result[bus];
        bus++;
    }

    if(number_of_peoples <= 0){
        while(bus < number_of_bus){
            result[bus] = 0;
            bus++;
        }
    }
    if(number_of_peoples > 0){
        let Max_people = org_People - number_of_peoples;
        alert(`Maximum ${Max_people} People can be allocated in ${number_of_bus} Bus`)
    }
    console.log(result);
    document.getElementById('result').innerHTML = result;
    return result;
}
