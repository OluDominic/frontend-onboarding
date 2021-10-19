import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NavBar from './index';

const links = [
    {text: '1', location: "/"},
    {text: '2', location: "/social"},
    {text: '3', location: "/business"},
]

test.each(links)(
    "Check if NavBar have %s links",
    (link)=> {
        render(<BrowserRouter><NavBar /></BrowserRouter>)

        const linkdom = screen.getByText(link.text);

        expect(linkdom).toHaveAttribute("href", link.location)
    }
)

// test('render about link', ()=> {

//     render(<BrowserRouter><NavBar /></BrowserRouter>);
//     expect(screen.getByText(/social/)).toBeInTheDocument();
// })