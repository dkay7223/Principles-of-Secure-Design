// A Javascript File for Q#01

//Q1 
//part 1.1

function getUser(id) {
    //fetching a user object in a DB
    const user = DB.findUser(id);
    if (user)
        return {
            name: user.name,
            email: user.email
        }

    return null;
}

//part 1.2

function getUser(id) {
    //fetching a user object in a DB
    const user = DB.findUser(id);
    if (user)
        return user;

    return null;
}


//part 2.1 

function validateUserInput(input) {
    // Assume this function validates user input
    if (input == valid) {
        return "Valid";
    }
    return '';
}

//part 2.2

function validateUserInput(input) {
    // Assume this function validates user input
    if (input == valid) {
        return "Valid";
    }
    return null;
}


//part 3.1

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

//part 3.2

function calculateAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = sum / array.length;
    let roundedAverage = Math.round(average * 100) / 100;
    return roundedAverage;
}

// Part 4.1

function sensitiveOperation() {
    if (isAuthorized(user)) {
        // perform sensitive operation
    } else {
        // access denied
    }
}

function isAuthorized(user) {
    // check user's permissions and access controls
    // return true if authorized, false otherwise
}

// part 4.2
function sensitiveOperation() {
    // perform sensitive operation
}


//   part 5.1

function handleUserRequest(user) {
    if (user.isAdmin) {
        // perform admin tasks
    } else {
        // perform user tasks
    }
}

// Part 5.2

function handleUserRequest(user) {
    // perform tasks
    if (user.isAdmin) {
        // perform admin tasks
    }
}


//Part 6.1
function encryptData(data, key) {
    // use a separate encryption function
    const encryptedData = encryptWithKey(data, key);
    return encryptedData;
}

function decryptData(encryptedData, key) {
    // use a separate decryption function
    const decryptedData = decryptWithKey(encryptedData, key);
    return decryptedData;
}

//Part 6.2
function encryptAndDecryptData(data, key) {
    // use the same mechanism for encryption and decryption
    const encryptedData = encrypt(data, key);
    const decryptedData = decrypt(encryptedData, key);
    return decryptedData;
  }
  
