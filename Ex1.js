const num_lines = 5;
let num_spaces = num_lines - 1;

while(num_spaces >= 0){
    let num_pluses = num_lines - num_spaces;
    console.log(k_spaces_t_pluses(num_spaces, num_pluses));
    num_spaces--;
}

function k_spaces_t_pluses(k, t){
    result = "";
    for(let i = 0; i < k; i++)
    {
        result += " ";
    }
    for (let j = 0; j < t; j++)
    {
        result += "+";
    }
    return result;
}
