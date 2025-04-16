const solution = (num_list) => num_list.length > 10 ? num_list.reduce((a, c) => a + c) : num_list.reduce((a, c) => a * c);
