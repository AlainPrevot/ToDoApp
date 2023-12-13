import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../../src/ToDoApp/hooks";

/* eslint-disable no-undef */
describe('Pruebas en useForm ', () => { 

    const initialForm = {
        name: 'Juan',
        email: 'juan@gmail.com'
    }
    test('debe de regresar un formulario por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
        
    })

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange } = result.current;
        act( () => {
            onInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });
        });
        expect(result.current.name).toBe('Melissa');
        expect(result.current.formState.name).toBe('Melissa');
    });

    test('debe de re-establecer el formulario con RESET', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange, onResetForm } = result.current;
        act( () => {
            onInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });
            onResetForm();
        });
        expect(result.current.name).toEqual(initialForm.name);
    });

 })