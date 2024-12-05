const test = require('./signoff.js')

//Negative test cases

const invalidInput1 = test(``)
if (invalidInput1 === true) {
    throw new Error('Signoff is not recognizing empty inputs')
}

const invalidInput2 = test('admin@mailserver1')
if (invalidInput2 === true) {
    throw new Error('Signoff is not recognizing missing domains')
}

const invalidInput3 = test('firstlastatexample.com')
if (invalidInput3 === true) {
    throw new Error('Signoff is not recognizing missing @ symbols')
}

const invalidInput4 = test('first@last@example.com')
if (invalidInput4 === true) {
    throw new Error('Signoff is not recognizing extra @ symbols')
}

const invalidInput5 = test('.firstlast@example.com')
if (invalidInput5 === true) {
    throw new Error('Signoff is not recognizing handles beginning with periods')
}

const invalidInput6 = test('firstlast.@example.com')
if (invalidInput6 === true) {
    throw new Error('Signoff is not recognizing handles ending in periods')
}

const invalidInput7 = test('first..last@example.com')
if (invalidInput7 === true) {
    throw new Error('Signoff is not recognizing handles containing consecutive periods')
}

const invalidInput8 = test('first*last@example.com')
if (invalidInput8 === true) {
    throw new Error('Signoff is not recognizing handles containing invalid characters')

}

const invalidInput9 = test('first.last@[999.999.999.999]')
if (invalidInput9 === true) {
    throw new Error('Signoff is not recognizing incorrectly formatted IP addresses')
}

const invalidInput10 = test('first.last@[example.com]')
if (invalidInput10 === true) {
    throw new Error('Signoff is not recognizing incorrectly formatted domains')
}

const invalidInput11 = test('first.last@example')
if (invalidInput11 === true) {
    throw new Error('Signoff is not recognizing missing top-level domains')
}

const invalidInput12 = test('first.last@-example.com')
if (invalidInput12 === true) {
    throw new Error('Signoff is not recognizing domains starting with hyphens')
}

const invalidInput13 = test('first.last@example-.com')
if (invalidInput13 === true) {
    throw new Error('Signoff is not recognizing domains ending in hyphens')
}

const invalidInput14 = test('first.last@example..com')
if (invalidInput14 === true) {
    throw new Error('Signoff is not recognizing domains containing consecutive periods')
}

const invalidInput15 = test('first.l©ast@example.com')
if (invalidInput15 === true) {
    throw new Error('Signoff is not recognizing handles with invalid characters')
}

const invalidInput16 = test('first.last@exa©mple.com')
if (invalidInput16 === true) {
    throw new Error('Signoff is not recognizing domains with invalid characters')
}

const invalidInput17 = test('first.last@example.c')
if (invalidInput17 === true) {
    throw new Error('Signoff is not recognizing top-level domains that are too short')
}

const invalidInput18 = test('first.last@example.commmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm')
if (invalidInput18 === true) {
    throw new Error('Signoff is not recognizing entries that are too long')
}

//Positive test cases

const validInput1 = test('nice+new@example.com')
if (validInput1 === false) {
    throw new Error('Signoff is not recognizing valid handles containing plus signs')
}

const validInput2 = test('nice=more@example.com')
if (validInput2 === false) {
    throw new Error('Signoff is not recognizing valid handles containing equals signs')
}

const validInput3 = test('nice&new@example.com')
if (validInput3 === false) {
    throw new Error('Signoff is not recognizing valid handles containing ampersands')
}

const validInput4 = test('first.last@example.com')
if (validInput4 === false) {
    throw new Error('Signoff is not recognizing valid handles containing periods')
}

const validInput5 = test('"first.last"@example.com')
if (validInput5 === false) {
    throw new Error('Signoff is not recognizing valid quoted handles')
}

const validInput6 = test('first.last@[192.168.1.1]')
if (validInput6 === false) {
    throw new Error('Signoff is not recognizing valid IPv4 addresses')
}

const validInput7 = test('"nice new"@example.com')
if (validInput7 === false) {
    throw new Error('Signoff is not recognizing valid quoted handles containing spaces')
}

const validInput8 = test('"nice@new"@example.com')
if (validInput8 === false) {
    throw new Error('Signoff is not recognizing valid quoted handles containing @ symbols')
}

const validInput9 = test('"nice\\new"@example.com')
if (validInput9 === false) {
    throw new Error('Signoff is not recognizing valid quoted handles containing backslashes')
}

const validInput10 = test('pelé@example.com')
if (validInput10 === false) {
    throw new Error('Signoff is not recognizing valid handles containing special characters')
}

const validInput11 = test('你好@example.com')
if (validInput11 === false) {
    throw new Error('Signoff is not recognizing valid handles containing non-Latin characters')
}

const validInput12 = test('first.last@[IPv6:2001:db8::1]')
if (validInput12 === false) {
    throw new Error('Signoff is not recognizing valid IPv6 addresses')
}

const validInput13 = test('"very.unusual.@.unusual.com"@example.com')
if (validInput13 === false) {
    throw new Error('Signoff is not recognizing valid quoted handles containing special characters')
}

const validInput14 = test('user@[2001:db8:85a3:8d3:1319:8a2e:370:7348]')
if (validInput14 === false) {
    throw new Error('Signoff is not recognizing valid IPv6 addresses in domains')
}

const validInput15 = test('user.name+tag+sorting@example.com')
if (validInput15 === false) {
    throw new Error('Signoff is not recognizing valid handles containing plus signs')
}

const validInput16 = test('x@example.com')
if (validInput16 === false) {
    throw new Error('Signoff is not recognizing valid single-character handles')
}

const validInput17 = test('"much.more unusual"@example.com')
if (validInput17 === false) {
    throw new Error('Signoff is not recognizing valid quoted handles containing special characters and spaces')
}

const validInput18 = test('"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com')
if (validInput18 === false) {
    throw new Error('Signoff is not recognizing valid quoted handles containing a plethora of special characters and spaces')
}