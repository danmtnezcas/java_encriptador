function encrypt() { 
    // Variables para texto
    var user_phrase = input_text.value;
    var encrypted_phrase = "";
    
    for (var position = 0; position < user_phrase.length; position++) {
        switch (user_phrase[position]) {
            case 'a':
            encrypted_phrase += "ai";
            break;
            case 'e':
            encrypted_phrase += "enter";
            break;
            case 'i':
            encrypted_phrase += "imes";
            break;
            case 'o':
            encrypted_phrase += "ober";
            break;
            case 'u':
            encrypted_phrase += "ufat";
            break;
            default:
            encrypted_phrase += user_phrase[position];
            break;
        }
    }

    if(input_text.value != "") {
        document.getElementById("man_img").style.display = "none";
        document.getElementById("first_info_output_area").style.display = "none";
        document.getElementById("second_info_output_area").style.display = "none";
        input_text.value = "";
        output_text.value = encrypted_phrase;
        document.getElementById("output_text").style.display = "block";
        document.getElementById("button_copy").style.display = "block";
    } else {
        const mediumBp = matchMedia("(min-width: 953px)");
        const showImg = mql => {
            mql.matches
                ? document.getElementById("man_img").style.display = "block"
                : document.getElementById("man_img").style.display = "none";
        }
        mediumBp.addListener(showImg);
        showImg(mediumBp)
        document.getElementById("first_info_output_area").style.display = "block";
        document.getElementById("second_info_output_area").style.display = "block";
        document.getElementById("output_text").style.display = "none";
        document.getElementById("button_copy").style.display = "none";
    }
}

function decrypt() {
    // Variables para texto
    var user_phrase = input_text.value;
    var decrypted_phrase = "";

    for (var position = 0; position < user_phrase.length; position++) {
        if(user_phrase.substring(position, position + 2) == "ai") {
            decrypted_phrase += "a";
            position++;
        }
        else if(user_phrase.substring(position, position + 4) == "imes") {
            decrypted_phrase += "i";
            position += 3;
        }
        else if(user_phrase.substring(position, position + 4) == "ober") {
            decrypted_phrase += "o";
            position += 3;
        }
        else if(user_phrase.substring(position, position + 4) == "ufat") {
            decrypted_phrase += "u";
            position += 3;
        }
        else if(user_phrase.substring(position, position + 5) == "enter") {
            decrypted_phrase += "e";
            position += 4;
        }
        else {
            decrypted_phrase += user_phrase[position];
        }
    }

    if(input_text.value != "") {
        document.getElementById("man_img").style.display = "none";
        document.getElementById("first_info_output_area").style.display = "none";
        document.getElementById("second_info_output_area").style.display = "none";
        input_text.value = "";
        output_text.value = decrypted_phrase;
        document.getElementById("output_text").style.display = "block";
        document.getElementById("button_copy").style.display = "block";
    } else {
        const mediumBp = matchMedia("(min-width: 953px)");
        const showImg = mql => {
            mql.matches
                ? document.getElementById("man_img").style.display = "block"
                : document.getElementById("man_img").style.display = "none";
        }
        mediumBp.addListener(showImg);
        showImg(mediumBp)
        document.getElementById("first_info_output_area").style.display = "block";
        document.getElementById("second_info_output_area").style.display = "block";
        document.getElementById("output_text").style.display = "none";
        document.getElementById("button_copy").style.display = "none";
    }
}