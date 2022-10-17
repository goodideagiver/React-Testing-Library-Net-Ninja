import React from 'react'
import './Header.css'

export default function Header({ title }) {
	return (
		<>
			<h1 className='header'>{title}</h1>
			<h3 title='testing header' data-testid='header-2' className='header'>
				Cats
			</h3>
		</>
	)
}
