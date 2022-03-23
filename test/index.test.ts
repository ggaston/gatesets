import { sum } from "../src/index";
import assert from "assert";

describe('Index tests', function() {
    it('2 + 2 should return 4', function() {
        assert.equal(sum(2, 2), 4);
    });
})
