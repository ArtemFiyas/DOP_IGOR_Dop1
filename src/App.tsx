import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from './components/Button';


type GetPostType = {
    userID: number
    id: number,
    title: string,
    body: string

}

function App() {

    const [get, setGet] = useState<Array<GetPostType>>([])

    const getRequestHandler = () => {
      setGet([])
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setGet(json))
    }, [])


     return (
        <div className={'App'}>
            <Button title={'CleanPage'} callBack={getRequestHandler}/>
            <p>
                {get.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.userID}</span>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </p>


        </div>
    )
}

export default App;
