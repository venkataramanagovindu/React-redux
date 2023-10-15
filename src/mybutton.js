


export function MyButton({count, onClick}){
    return (
        <>
        {count}

        {
          console.log(this)
        }
        <button onClick={onClick}>
          I'm a button
        </button>
        </>
        
      );
}