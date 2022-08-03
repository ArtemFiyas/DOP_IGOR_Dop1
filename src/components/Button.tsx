import React from 'react';

type ButtonTypeProps = {
    title: string
    callBack:()=> void
}


export const Button = (props: ButtonTypeProps) =>{

  const onClickButtonHandler = () => {
      props.callBack()
   }

   return (
        <button onClick={onClickButtonHandler}>{props.title}</button>
    )
}