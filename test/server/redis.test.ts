import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { redis } from "../../src/server/redis";

_chai.should();

@suite class RedisConnectUnitTest {
    private db = redis

    before() {
       this.db = redis;
    }

    @test 'should do something when call a method'() {
        this.db.should.be.not.undefined;
    }
}