<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

    sessions are used to store information about a client so there is no need to constantly re-enter credentials everytime there is a new request to the server express sessions utilize cookies to do this.
    bcrypt is a hashing function, it allows an algorithm to hash information multiple times called rounds.
    jwts or json web tokens are cryptographically signed middleware that default to the sha-256 algorithm, difference between jwts and cookies would be state.

2.  What does bcrypt do in order to prevent attacks?

    brypt utilizes hashing which hinders attackers from vital information. the hashing process goes through multiple rounds which requires the attacker to undo the hash, know which algorithm the hash used and how many rounds the hash underwent in order to generate the hash.

3.  What are the three parts of the JSON Web Token?

    three parts of json web token are the header, the payload and the signature, the header contains the algorithm of the token type, the payload contains the claims, or info about what we would like the token to store, ie the id. the signature is like the secret of the string that contains the three parts including the header, payload and secret and creates a string.
