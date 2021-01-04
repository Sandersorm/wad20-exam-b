// Import the mount() method from the test utils
// and the component you want to test

import { mount } from '@vue/test-utils'
import Transactions from "../../src/components/Transactions";


describe('Transactions', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Transactions)

    it('should return true', function () {
        expect(1).toEqual(1)
    });

    it('as many table rows are displayed as items in the array', function () {
       const arrayLength = wrapper.findAll('.row').length
       const transactionsLength = Transactions.props.transactions.length
       expect(arrayLength).toBe(transactionsLength)
    });

    it('.income and .spending classes are properly attached to the transaction with the appropriate type', function () {
        expect(wrapper.classes('.income').toBe(true))
        expect(wrapper.classes('.spending').toBe(true))

    });

    it('final balance is correctly calculated', function () {
        const muutuja = wrapper.find('.balance').text()
        let balance = 0;
        for (let i of this.transactions) {
            if (i.type === 'income') {
                balance += i.amount
            } else {
                balance -= i.amount
            }
        }
        expect(balance).toBe(muutuja)
    });

});