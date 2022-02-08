const { expect } = require("chai");
const { test } = require("mocha");
const String = require("./atividade1")
let mySrtring
describe('Testing String Manipulations', () => {
    beforeAll(() => {
      myString  = new String ("Southpark street");
    });

    test("if first match works", () => {
        expect(mySrtring.findFirstMatch())
    })

});