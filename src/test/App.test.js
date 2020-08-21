import React from 'react';
import {render} from '@testing-library/react';
import Login from '../Components/Login';
import Order from '../Components/Order';
import Card from '../Components/Card';

describe("Test del componente Login", () => {
    test("Esperamos una imagen", () => {
        let{getByRole} = render(<Login />);
        let role= getByRole("img");
        expect(role).toBeInTheDocument();
    });

    // test("Esperamos un input tipo email", () => {
    //     let{getByPlaceholderText} = render(<Login />);
    //     let inputEmail= getByPlaceholderText('Email');
    //     fireEvent.change(inputEmail, { target: { value: 'gabyalvarzb@gmail.com' } });
    //     expect(inputEmail.value).toBe('gabyalvarzb@gmail.com');
    // });

    // test("Esperamos un boton para Login", () => {
    //     let{getByRole} = render(<Login />);
    //     let btnLogin= getByRole("button");
    //     expect(btnLogin).toBeInTheDocument();
    // })
});

describe("Test del component Order", () => {

    // test("esperamos una tabla", () => {
    //     let{getByRole} = render(<Order />);
    //     let tableTicket=getByRole("table");
    //     expect(tableTicket).toBeInTheDocument
    // });

    test("Esperamos un boton para Order", () => {
        let{getByRole} = render(<Order />);
        let btnSend= getByRole("button");
        expect(btnSend).toBeInTheDocument();
    })
});

describe("Test del componente Card", () => {

    test("Esperamos una imagen", () => {
        let{getByRole} = render(<Card />);
        let role= getByRole("img");
        expect(role).toBeInTheDocument();
    });
});