/* eslint-disable no-undef */
const { fireEvent} = require('@testing-library/react')

describe('Pruebas en handleAddEventListener', () => { 
    test('Debe quitar la clase visible al hacer click fuera del elemento con clase menu', () => { 
        document.body.innerHTML = `
        <div class="menu visible">`
        require('../../../src/ToDoApp/event/handleAddEventListener')

        fireEvent.click(document.body);

        expect(document.querySelector('.menu').classList.contains('visible')).toBe(false)

     })

        test('No debe quitar la clase visible al hacer click dentro del elemento con clase menu', () => { 
            document.body.innerHTML = `
            <div class="menu visible">`
            require('../../../src/ToDoApp/event/handleAddEventListener')
    
            fireEvent.click(document.querySelector('.menu'));
    
            expect(document.querySelector('.menu').classList.contains('visible')).toBe(true)
    
        })
 })