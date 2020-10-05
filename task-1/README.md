# Caesar Cipher ![](https://img.shields.io/badge/version-0.0.1-green)

![N|Solid](https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Retrato_de_Julio_C%C3%A9sar_%2826724093101%29_%28cropped%29.jpg/220px-Retrato_de_Julio_C%C3%A9sar_%2826724093101%29_%28cropped%29.jpg)

## Quick Start

Caesar cipher requires [Node.js](https://nodejs.org/) to run.

Clone the repo:

```sh
$ git clone git@github.com:pavel-sturov/nodejs-course-template.git
```

Install the dependencies and start the server.

```sh
$ cd task-1
$ npm install
```

Start:
```sh
$ node index -a encode -s 5 -i "./input.txt" -o "./output.txt"
or
$ node index --action decode --shift 5 --input "./input.txt" --output "./output.txt"
```

## Docs

You should know about 4 keys:

|Key|Description|
| ------ | ------ |
|-s, --shift| a shift (required)|
|-a, --action| an action encode/decode (required)|
|-i, --input| an input file|
|-o, --output| an output file|


## About
In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.
 
 ## Example
 The transformation can be represented by aligning two alphabets; the cipher alphabet is the plain alphabet rotated left or right by some number of positions. For instance, here is a Caesar cipher using a left rotation of three places, equivalent to a right shift of 23 (the shift parameter is used as the key):
 
 ```sh
Plain:    ABCDEFGHIJKLMNOPQRSTUVWXYZ
Cipher:   XYZABCDEFGHIJKLMNOPQRSTUVW
```

When encrypting, a person looks up each letter of the message in the "plain" line and writes down the corresponding letter in the "cipher" line.

 ```sh
Plaintext:  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
Ciphertext: QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD
 ```
 
 Deciphering is done in reverse, with a right shift of 3.

The encryption can also be represented using modular arithmetic by first transforming the letters into numbers, according to the scheme, A → 0, B → 1, ..., Z → 25.[2] Encryption of a letter x by a shift n can be described mathematically as,

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/77b59c7a676a99610ddee4ffc305aa7f9cda3b1a)

Decryption is performed similarly,

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/8ed607e0202ff8d35aa41559f846cac9d358a362)

(There are different definitions for the modulo operation. In the above, the result is in the range 0 to 25; i.e., if x + n or x − n are not in the range 0 to 25, we have to subtract or add 26.)

The replacement remains the same throughout the message, so the cipher is classed as a type of monoalphabetic substitution, as opposed to polyalphabetic substitution.

 ## History and usage
 
 The Caesar cipher is named after Julius Caesar, who, according to Suetonius, used it with a shift of three (A becoming D when encrypting, and D becoming A when decrypting) to protect messages of military significance. While Caesar's was the first recorded use of this scheme, other substitution ciphers are known to have been used earlier.[4][5]

>"If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the >alphabet, that not a word could be made out. If anyone wishes to decipher these, and get at their meaning, he must substitute >the fourth letter of the alphabet, namely D, for A, and so with the others."

— Suetonius, Life of Julius Caesar 56

### Libraries

Caesar cipher is currently extended with the following libraries:

| Library | README |
| ------ | ------ |
| minimist | https://github.com/substack/minimist/blob/master/readme.markdown[PlDb] |


License
----

MIT
