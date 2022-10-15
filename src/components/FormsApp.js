import React from 'react'

const FormsApp = () => {
    return (

        <form action='./nextPage.html'>
            <h2>Formulare: </h2>        
            <label htmlFor="fname">First name:</label><br />
            <input type="text" id="fname" name="fname" /><br />
            <label htmlFor="lname">Last name:</label><br />
            <input type="text" id="lname" name="lname" />

            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default FormsApp
