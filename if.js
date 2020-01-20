let num = 50;

if (num < 49) {
    console.log("No");    
} else if (num > 100) {
    console.log("Много");
} else {
    console.log("Yes");
}

(num == 50) ? console.log("Yes") : console.log("No");

switch (num) {
    case num < 49:
        console.log("No");
        break;
    case num > 100:
        console.log("Много");
        break;
    case num > 80:
        console.log("Все еще много");
        break;
    case 50:
        console.log("Yes");
        break;
    default:
        console.log("Что-то пошло не так");
        break;
}

