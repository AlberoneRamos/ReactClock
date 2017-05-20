import Inferno from 'inferno';
import Component from 'inferno-component';
import expect from 'expect';
var $ = require('jQuery');
import TestUtils from 'inferno-test-utils';
import Clock from '../../components/Clock.jsx';

describe('Clock',()=>{
    it('should exist',()=>{
        expect(Clock).toExist();
    });
    describe('render',()=>{
        it('Should render clock to output',()=>{
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={102}/>);
            var actualtext = $('.clock-text').text();
            expect(actualtext).toBe('01:42');
        });
    });
});
