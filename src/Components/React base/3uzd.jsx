function ZebraiBebrai ({ number }) {

    const color = number === '1' ? 'blue' : 'red';

    return (
        <h1 style={{color: color}}>Zebrai ir Bebrai</h1>
    )
//     if (number === '1') {
        
//     return (<div>
//     <h1 style={{color: 'blue'}}>Zebrai ir Bebrai</h1>
//     </div>
//     );
// } else if (number === '2') {
//     return (<div>
//     <h1 style={{color: 'pink'}}>Zebrai ir Bebrai</h1>
//     </div>
//     );
// } else { 
//     return ( <div>
//     <h1>Zebrai ir Bebrai</h1>
//     </div>
//     );
// }
}


export default ZebraiBebrai